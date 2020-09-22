const package = require('../package');

module.exports = {
    name: package.name,
    version: package.version,
    description: 'basic extension experiment',
    manifest_version: 2,
    "browser_action": {
        "default_popup": "popup.html"
    },
}