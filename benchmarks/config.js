module.exports = {
  runs: 35,
  domain: 'http://localhost:4200/',
  slugs: [
    // simple returns a 1 simple record with no relationships per count in limit

    // "query?modelName=simple&limit=1",  // 1 total
    // "query?modelName=simple&limit=2",  // 2 total
    // "query?modelName=simple&limit=34",  // 34 total
    // "query?modelName=simple&limit=119",  // 119 total
    // "query?modelName=simple&limit=238",  // 238 total


    // complex returns 7 total records of 3 model types per count in limit
    // a primary record with 5 hasMany 1 belongsTo

    // "query?modelName=complex&limit=1&included=foo,baz", // 7 total
    // "query?modelName=complex&limit=2&included=foo,baz", // 14 total
    // "query?modelName=complex&limit=5&included=foo,baz", // 35 total
    // "query?modelName=complex&limit=17&included=foo,baz", // 119 total
    // "query?modelName=complex&limit=34&included=foo,baz", // 238 total


    // heavy returns 17 total records of 5 model types per count in limit
    // a primary record with
    // - 5 hasMany with 1 belongsTo each
    // - 1 belongsTo with 5 hasMany

    // "query?modelName=heavy&limit=1&included=foo,baz,heavy-foo,heavy-baz", // 17 total
    // "query?modelName=heavy&limit=2&included=foo,baz,heavy-foo,heavy-baz", // 34 total
    // "query?modelName=heavy&limit=7&included=foo,baz,heavy-foo,heavy-baz",  // 119 total
    // "query?modelName=heavy&limit=14&included=foo,baz,heavy-foo,heavy-baz" // 238 total
    "query?modelName=heavy&limit=50&included=foo,baz,heavy-foo,heavy-baz" // 238 total

  ],
  ignoreBranches: [
    // 'adapter._makeRequest',
    // 'InternalModel._materializeRecord'
  ],
  buckets: {

  },
  stats: [
    {
      key: "stats.self.selfTime",
      name: 'Count',
      rollup: false,
      transform: function(t, c) { return c;}
    },
    {
      key: "stats.self.duration",
      name: 'Duration',
      rollup: false,
      transform: function(t) {
        return `${(t / 1e6).toFixed(2)}ms`;
      }
    },
    {
      key: "stats.self.selfTime",
      name: 'Self Time',
      rollup: false
    },
    {
      key: "stats.self.selfTime",
      name: 'Total Time',
      rollup: true
    },
  ],
  "browser": "chrome",
  "name": "Performance Analysis",
  "compressAfter": 10,
  "maxDepth": 25,
  "collapseByName": true,
  "finderPath": "ember-data"
};
