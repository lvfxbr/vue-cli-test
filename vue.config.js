const GenerateJsonPlugin = require('generate-json-webpack-plugin');

module.exports = {
    indexPath: 'popup.html',
    configureWebpack: {
        plugins: [
            new GenerateJsonPlugin('manifest.json', require('./src/manifest'), null, 4),
        ]
    }
}