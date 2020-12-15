import { updateCrossReferenceIssues } from "../../src/github-client/cross-references";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
    throw new Error("require GITHUB_TOKEN");
}
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
if (!GITHUB_REPOSITORY) {
    throw new Error("require GITHUB_REPOSITORY");
}
const [GITHUB_OWNER, GITHUB_REPO] = GITHUB_REPOSITORY.split("/");
if (require.main) {
    updateCrossReferenceIssues({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        labels: ["CR"],
        token: GITHUB_TOKEN
    })
        .then((res) => {
            console.log("Finish Sync: ", res.message);
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
}
