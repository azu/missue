import { createClient } from "./github-data";
import parseGitHubUrl from "parse-github-url";

(async function main() {
    const URLPATTERN = /^https:\/\/github.com\/(?<owner>[0-9a-zA-Z-_.]+)\/(?<repo>[0-9a-zA-Z-_.]+)\/(?<type>(issues|pull))\/(?<number>[0-9]+)/;
    const url = window.location.href;
    const match = url.match(URLPATTERN);
    if (!match) {
        return;
    }
    // ignore #
    const currentURL = match[0];
    const addItemToProject = async () => {
        const client = await createClient();
        const repoInfo = parseGitHubUrl(location.href);
        const prefix = repoInfo?.repository ? `[${repoInfo.repository}] ` : "";
        const issueTitle = document.querySelector(".js-issue-title")?.textContent as string;
        return client.createIssue(prefix + issueTitle, currentURL);
    };
    const insertElement = document.querySelector(".thread-subscription-status");
    const addItemButton = document.createElement("button");
    addItemButton.textContent = "Add to My missue";
    addItemButton.className = "btn btn-block btn-sm thread-subscribe-button";
    addItemButton.addEventListener("click", () => {
        addItemButton.textContent = "Progressing...";
        addItemButton.disabled = true;
        addItemToProject()
            .then(() => {
                addItemButton.textContent = "Added";
            })
            .catch((error) => {
                console.error(error);
                addItemButton.textContent = "Error: Retry";
                addItemButton.disabled = false;
            });
    });
    insertElement?.append(addItemButton);
})();
