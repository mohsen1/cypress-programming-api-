# Cypress Bug reproduction repo

This is a repo to reproduce a bug in Cypress.

## The bug
Cypress reading the config file even when it is invoked programmatically and has the config passed in

## Steps to reproduce
1. Clone this repo
2. Run `yarn install`
3. Run `node run-cypress.js`

Notice that the config file that is being passed to `cypress.run` is being read again by Cypress.
