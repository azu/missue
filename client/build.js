const path = require("path");
const nativefier = require("nativefier").default;
const qoa = require("qoa");
(async () => {
    const input = {
        type: "input",
        query: "Input your issues url:",
        handle: "url"
    };
    // using the `prompt` async method
    const { url } = await qoa.prompt([input]);
    const options = {
        name: "missue", // will be inferred if not specified
        targetUrl: url, // required
        platform: "darwin", // defaults to the current system
        arch: "x64", // defaults to the current system
        version: require("./package.json").version,
        out: "dist",
        overwrite: false,
        asar: true, // see conceal
        // macOS
        // https://github.com/jiahaog/nativefier/blob/master/docs/api.md#icon
        icon: path.join(__dirname, "octoface.png"),
        counter: false,
        bounce: false,
        width: 1280,
        height: 800,
        showMenuBar: false,
        fastQuit: false,
        userAgent: "missue", // will infer a default for your current system
        inject: [path.join(__dirname, "lib/inject.js")],
        ignoreCertificate: false,
        ignoreGpuBlacklist: false,
        enableEs3Apis: false,
        blockExternalUrls: false,
        insecure: false,
        honest: false,
        zoom: 1.0,
        singleInstance: false,
        clearCache: false,
        fileDownloadOptions: {
            saveAs: true // always show "Save As" dialog
        }
        // processEnvs: {
        //     GOOGLE_API_KEY: '<your-google-api-key>',
        // },
    };
    nativefier(options, function (error, appPath) {
        if (error) {
            console.error(error);
            return;
        }
        console.log("App has been built to", appPath);
    });
})();
