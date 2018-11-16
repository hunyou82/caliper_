var config = require('../../config');
var cassandra = require('cassandra-driver');
var assert = require('assert');

var db = {};

var authProvider = new cassandra.auth.PlainTextAuthProvider(config.cassandra.user, config.cassandra.pass);

var client = new cassandra.Client({
    contactPoints:[config.cassandra.host+':'+config.cassandra.port],
    authProvider: authProvider,
    keyspace: config.cassandra.keyspace
  });

  client.connect(function(e) {
    /*var query;
    query = "CREATE KEYSPACE IF NOT EXISTS examples WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3' }";
    return client.execute(query, function(e, res) {
      return console.log(e,res);
    });*/
    const query = 'SELECT id, value FROM events';
    client.execute(query, function(err, result) {
      assert.ifError(err);
      console.log('====> %s', result.rows[0].value);
    });
  });

module.exports = db;