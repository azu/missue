import { graphql } from "@octokit/graphql";
import { Repository } from "@octokit/graphql-schema";
import debug_ from "debug";

const debug = debug_("missue");
export type fetchIssueOrPullRequestParam = {
    type: "issues" | "pulls";
    owner: string;
    repo: string;
    number: string;
};

type QueryResponse = {
    state: "OPEN" | "CLOSED" | "MERGED";
};

const fetchIssueStatus = (
    queryParams: fetchIssueOrPullRequestParam[],
    options: updateCrossReferenceIssuesOptions
): Promise<QueryResponse[]> => {
    const queries = queryParams.map((param, index) => {
        return `
  ${param.type + param.number + "_" + index}:  repository(owner: "${param.owner}", name: "${param.repo}") {
    ${param.type === "issues" ? "issue" : "pullRequest"}(number: ${param.number}) {
      state
    }
  }
`;
    });

    const fetchQuery = `{ ${queries.join("\n")} }`;
    debug("fetch query", fetchQuery);
    return graphql<{
        [index: string]: Repository;
    }>(fetchQuery, {
        headers: {
            authorization: `token ${options.token}`
        }
    }).then((data) => {
        return Object.keys(data).map((key) => {
            const dataType = /^issues/.test(key) ? "issue" : "pullRequest";
            return (data as any)[key][dataType] as QueryResponse;
        });
    });
};

type syncIssuesParam = {
    issueId: string; // GraphQL id!
    state: "OPENED" | "CLOSED";
};
const syncIssues = async (
    queryParams: syncIssuesParam[],
    options: updateCrossReferenceIssuesOptions
): Promise<void> => {
    if (queryParams.length === 0) {
        return;
    }
    const queries = queryParams.map((param, index) => {
        if (param.state === "OPENED") {
            return `
  reopen${index}: reopenIssue(input: {issueId: "${param.issueId}" }) {
    issue {
      url
    }
  }
`;
        } else if (param.state === "CLOSED") {
            return `
  close${index}: closeIssue(input: {issueId: "${param.issueId}" }) {
    issue {
      url
    }
  }
`;
        }
        throw new Error("Unknown state:" + JSON.stringify(param));
    });

    const syncQuery = `mutation { ${queries.join("\n")} }`;
    debug("sync query", syncQuery);
    return graphql<{
        [index: string]: any;
    }>(syncQuery, {
        headers: {
            authorization: `token ${options.token}`
        }
    }).then((data) => {
        if (Object.keys(data).length !== queryParams.length) {
            throw new Error("Something wrong response:" + JSON.stringify(data));
        }
    });
};

export type updateCrossReferenceIssuesOptions = {
    token: string;
    owner: string;
    name: string;
    labels: string[];
};

/**
 * Get issues that used "CR" Labels,
 * Get Reference issues and pull request states
 * If the state is difference, sync the issue
 * @param options
 */
export async function updateCrossReferenceIssues(options: updateCrossReferenceIssuesOptions) {
    const issueQuery = `
        query($owner: String!, $name: String!, $labels: [String!]) {
            repository(owner: $owner, name: $name) {
                issues(first: 20, labels: $labels, orderBy: { field: UPDATED_AT, direction: DESC }) {
                    nodes {
                        id
                        body
                        state
                    }
                }
            }
        }
    `;
    debug("Issue query", issueQuery);
    const { repository } = await graphql<{ repository: Repository }>(issueQuery, {
        headers: {
            authorization: `token ${options.token}`
        },
        owner: options.owner,
        name: options.name,
        labels: options.labels
    });
    const issueNodes = repository.issues?.nodes ?? [];
    const queryParams = issueNodes
        ?.map((issue) => {
            const match = issue?.body?.match(
                /https:\/\/github\.com\/(?<owner>.*?)\/(?<repo>.*?)\/(?<type>(issues|pulls))\/(?<number>\d+)/
            );
            if (!match) {
                return null;
            }
            const { owner, repo, type, number } = match.groups || {};
            return { owner, repo, type, number: String(number) };
        })
        .filter((param) => param != null) as fetchIssueOrPullRequestParam[];
    const crossRefs = await fetchIssueStatus(queryParams, options);
    debug("crossRefs %o", crossRefs);
    const syncIssuesParam: syncIssuesParam[] = [];
    issueNodes.forEach((issueNode, index) => {
        const ref = crossRefs[index];
        if (!issueNode) {
            console.log("Not found issueNode", issueNode);
            return;
        }
        if (!ref) {
            console.log("Not found ref", issueNode, index);
            return false;
        }
        const originalState = issueNode.state;
        const refState = (() => {
            if (ref.state === "CLOSED" || ref.state === "MERGED") {
                return "CLOSED";
            }
            return "OPENED";
        })();
        if (originalState === refState) {
            return;
        }
        syncIssuesParam.push({
            state: refState,
            issueId: issueNode.id
        });
    });
    return syncIssues(syncIssuesParam, options);
}
