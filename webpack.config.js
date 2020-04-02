const { resolve } = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

const config = {
    entry: {
        main: resolve("./src/index.ts"),
    },
    devtool: "inline-source-map",
    output: {
        filename: "app.js",
        path: __dirname + "/out",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ["ts-loader"],
                exclude: [/node_modules/],
            },
            {
                test: /\.js$/,
                loader: "source-map-loader",
                enforce: "pre",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
};

module.exports = config;
