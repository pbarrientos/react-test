const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        contentBase: DIST_DIR,
        open: true,
        clientLogLevel: 'silent',
        port: 9000
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            include: SRC_DIR,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            "targets": "defaults"
                        }],
                        '@babel/preset-react'
                    ]
                }
            }]
        }]
    }
}

module.exports = config;