import { Octokit } from "@octokit/rest";

declare var GM_getValue: (key: string, defaultValu?: string) => Promise<string>;
export const createClient = async () => {
    const token = await GM_getValue("token");
    if (!token) {
        throw new Error("token is not defined, please set your GitHub Token to missue userscript.");
    }
    const owner = await GM_getValue("owner");
    const repo = await GM_getValue("repo");
    const label = (await GM_getValue("label")) ?? "CR";
    if (!owner || !repo) {
        throw new Error("owner/repo is not defined, please set your GitHub Token to missue userscript.");
    }
    const octokit = new Octokit({
        auth: token
    });
    return {
        createIssue(title: string, url: string) {
            return octokit.issues.create({
                owner,
                repo,
                title,
                body: "Refs " + url,
                label
            });
        }
    };
};
