const {defineConfig} = require('cypress');

console.trace('cypress.config.js is read'); 

module.exports = defineConfig({
    e2e: {
        supportFile: false,
        baseUrl: 'https://azimi.me',
        video: false,
        screenshotsFolder: 'cypress/screenshots',
    },
});
