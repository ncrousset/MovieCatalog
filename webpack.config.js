const path = require('path');

const config = {
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        entry:  './app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devServer: {
            host: '127.0.0.1',
            inline: true
        },
        module: {
            loaders: [
                {
                    test: /(\.js|.jsx)$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                }
            ]
        }
};

module.exports = config;