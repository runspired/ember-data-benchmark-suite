# ember-data-benchmark-suite

A small demo app for stress-testing ember-data and ember-data addons.

Currently Requires at least `ember-data 3.1.0 Canary`

## Benchmarking

1. Install the versions of ember-data and any desired ember-data addons
     you wish to include in the test.

2. Serve the app with instrumentation enabled in production mode.
     
     ```cli
     ember s -e production --instrument
     ```
     
     Uglification is disabled by default to make the app more explorable.

3. Configure the benchmarks you wish to run.
     In `benchmarks/config.js`, configure the slug(s)
     you wish to benchmark, and the number of runs to
     complete.
     
4. Run the desired benchmarks

     ```cli
     node ./benchmarks
     ```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-data-benchmark-suite`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

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

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
