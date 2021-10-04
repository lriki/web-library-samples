const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/mylib.js',
    output: {
        filename: 'mylib.js',
        path: path.join(__dirname, 'dist'),
        library: 'mylib',
        libraryTarget: 'window'
    },
    optimization: {
        minimize: false
    }
};
