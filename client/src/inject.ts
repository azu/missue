import { updateCrossReferenceIssues } from "../../src/github-client/cross-references";

console.log("Inject: missue scripts");
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN is not defined");
}
const isIssueListPage = (url: string = location.href) => {
    const pattern = /https:\/\/github\.com\/(?<owner>.*?)\/(?<repo>.*?)\/issues$/;
    return pattern.test(url);
};
const getCurrent = (url: string = location.href): { owner: string; repo: string } | undefined => {
    const pattern = /https:\/\/github\.com\/(?<owner>.*?)\/(?<repo>.*?)\//;
    const match = url.match(pattern);
    if (!match) {
        return;
    }
    const { owner, repo } = match.groups ?? {};
    return { owner, repo };
};
const syncState = async () => {
    const current = getCurrent();
    if (!current) {
        return;
    }
    return updateCrossReferenceIssues({
        owner: current.owner,
        name: current.repo,
        labels: ["CR"],
        token: GITHUB_TOKEN
    });
};
const onVisibilityChange = async () => {
    console.log("visible");
    if (document.hidden) {
        return;
    }
    return syncState().then(() => {
        if (isIssueListPage()) {
            location.reload();
        }
    });
};
// on focus
document.addEventListener("visibilitychange", onVisibilityChange);
setInterval(() => {
    syncState().catch((error) => console.error(error));
}, 1000 * 60 * 5);
