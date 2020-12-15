import { updateCrossReferenceIssues } from "./cross-references";

updateCrossReferenceIssues({
    labels: ["CR"],
    owner: "azu",
    repo: "missue-test",
    token: process.env.GH_TOKEN!
}).catch((error) => console.error(error));
