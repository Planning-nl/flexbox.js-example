const { resolve } = require('path');

const config = {
    entry: {
        main: resolve('./src/index.ts')
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/out'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['ts-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.js$/,
                enforce: 'pre'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';
        config.module.rules[1].loader = 'source-map-loader';
    }

    return config;
};
