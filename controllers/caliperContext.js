var cassandraFactory = require('../lib/db/cassandraFactory');
var eventsMapper = require('../mappers/caliper/events');

var decrementDate = function(date, decrement) {
  date.setDate(date.getDate() - decrement);
  return date.toISOString();
};

var incrementDate = function(date, increment) {
  date.setDate(date.getDate() + increment);
  return date.toISOString();
};

exports.getUser = function(req, res) {
  /*_sql = eventsMapper.getValue({});

  cassandraFactory.select({
    sql: _sql
  });*/

  var user = {
    id: "https://www.umich.edu/staff/arwhyte",
    dateCreated: decrementDate(new Date(), 45),
    name: "martin"
  };
  
  res.send(user);
}

exports.getCourse = function(req, res) {

}