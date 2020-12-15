import { updateCrossReferenceIssues } from "@missue/github-client";

console.log("Inject: missue scripts");
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN is not defined");
}
const INPUT_URL = process.env.INPUT_URL;
if (!INPUT_URL) {
    throw new Error("INPUT_URL is not defined");
}
const isTodoRepo = () => {
    const pattern = /https:\/\/github\.com\/(?<owner>.*?)\/(?<repo>.*?)\//;
    const match = INPUT_URL.match(pattern);
    if (!match) {
        return;
    }
    const { owner, repo } = match.groups ?? {};
    const current = getCurrent();
    return owner === current?.owner && repo === current.repo;
};
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
    if (!isTodoRepo()) {
        return;
    }
    const current = getCurrent();
    if (!current) {
        return;
    }
    return updateCrossReferenceIssues({
        owner: current.owner,
        repo: current.repo,
        labels: ["CR"],
        token: GITHUB_TOKEN
    });
};
const onVisibilityChange = async () => {
    console.log("visible");
    if (document.hidden) {
        return;
    }
    return syncState().then((result) => {
        if (!result?.updated) {
            return;
        }
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
