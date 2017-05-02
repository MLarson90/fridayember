# fridayember

This Program lets a user ask questions and other users to answer it, it also has an admin page to edit questions and answers.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/MLarson90/fridayember.git` this repository
* `cd fridayember`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Planning

1. Configuration/dependencies
  * "bootstrap": "3.3.7"
  * "broccoli-asset-rev": "^2.4.5"
  * "ember-ajax": "^2.4.1"
  * "ember-bootstrap": "1.0.0-alpha.12"
  * "ember-cli": "2.10.0"
  * "ember-cli-app-version": "^2.0.0"
  * "ember-cli-babel": "^5.1.7"
  * "ember-cli-dependency-checker": "^1.3.0"
  * "ember-cli-htmlbars": "^1.0.10"
  * "ember-cli-htmlbars-inline-precompile": "^0.3.3"
  * "ember-cli-inject-live-reload": "^1.4.1"
  * "ember-cli-jshint": "^2.0.1"
  * "ember-cli-qunit": "^3.0.1"
  * "ember-cli-release": "^0.2.9"
  * "ember-cli-sri": "^2.1.0"
  * "ember-cli-test-loader": "^1.1.0"
  * "ember-cli-uglify": "^1.2.0"
  * "ember-data": "^2.10.0"
  * "ember-export-application-global": "^1.0.5"
  * "ember-load-initializers": "^0.5.1"
  * "ember-resolver": "^2.0.3"
  * "ember-welcome-page": "^1.0.3"
  * "emberfire": "2.0.7"
  * "loader.js": "^4.0.10
  * "ember": "~2.10.0"
  * "ember-cli-shims": "0.1.3"

2. Specs
  * This app will allow a user to ask a question
    input: How do you do this?
    output: How do you do this?
  * This app will let a user answer a question
    input: try harder
    output: try harder
  * This app will allow a user to edit a question
  * This app will allow a user to edit an answer
  * This app will allow a user to delete a question
  * This app will allow a user to delete an answer

4. UX/UI
  * Include bootstrap

5. Polish
  * Refactor functions
  * Delete unused functions
  * Make README awesome

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
