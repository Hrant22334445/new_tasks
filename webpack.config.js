const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'esim.[contenthash].js',
        path: path.resolve(__dirname, 'build')
    }
}