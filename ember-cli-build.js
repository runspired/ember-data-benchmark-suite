/* eslint-env node */
'use strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const merge    = require('broccoli-merge-trees');
const Funnel   = require('broccoli-funnel');
const StripClassCallCheck = require('babel6-plugin-strip-class-callcheck');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // use babel6 options until we are using ember-cli@2.13
    babel6: {
      postTransformPlugins: [
        // while ember-data strips itself, ember does not currently
        [StripClassCallCheck]
      ]
    },
    'ember-cli-uglify': {
      enabled: false
    },
    sourcemaps: {
      enabled: true
    },
  });

  let heimdallTree = new Funnel('node_modules/heimdalljs', {
    destDir: 'heimdalljs'
  });

  app.trees.vendor = merge([app.trees.vendor, heimdallTree]);
  app.import('vendor/heimdalljs/dist/heimdalljs.iife.js', {prepend: true});

  return app.toTree();
};
