import { updateCrossReferenceIssues } from "./cross-references";

updateCrossReferenceIssues({
    labels: ["CR"],
    owner: "azu",
    repo: "missue-test",
    token: process.env.GH_TOKEN!
})
    .then((ret) => {
        console.log(ret);
    })
    .catch((error) => console.error(error));
