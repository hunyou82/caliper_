var caliperM = require('../../models/caliper');

module.exports = {
    create: function(params) {
        console.log("create");
    },
    select: function(params) {

        console.log(params.sql);
    }    
}