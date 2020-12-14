const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/inject.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "inject.js",
        path: path.resolve(__dirname, "lib")
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.GITHUB_TOKEN": JSON.stringify(process.env.GITHUB_TOKEN)
        })
    ]
};
