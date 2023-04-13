const cypress = require('cypress');

function runTest() {
    const cypressConfig = require('./cypress.config.js');
    return cypress.run({
        config: cypressConfig,
    });
}

runTest().then((results) => {
    console.log(results);
    process.exit(results.totalFailed);
});