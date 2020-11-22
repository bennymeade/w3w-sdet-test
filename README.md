# w3w-sdet-test

## Prerequisite
$ git clone https://github.com/bennymeade/w3w-sdet-test.git

$ npm install

## Launch dashboard using CLI scripts
$ npm run test.open

This will launch the Cypress Test Runner and individual specs can be run from here.

## Cypress CI Run via headless browser
$ npm run test.ci

This will run all of the UI tests in Chrome headless mode.

## Notes on framework design

I've used a JS chaining design to allow an easier way to read the test journey. This framework is also using the page object model (POM).
As Cypress uses Mocha and Chai natively, these tools are also utilised in this framework.

base.page.js is used for common methods and all other page class extend from base. This allows you to use a base method on any item in the test, example: .setCookies()

This framework is designed to ensure future test extensions and maintainance is done with ease.