import { updateCrossReferenceIssues } from "./cross-references";

updateCrossReferenceIssues({
    labels: ["CR"],
    owner: "azu",
    name: "missue-test",
    token: process.env.GH_TOKEN!
}).catch((error) => console.error(error));
