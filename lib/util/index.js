/**
 * @description util middleware
 * @author martinLee
 * @date 2018.11.16
 */
var uuid = require("uuid");

module.exports = {

    makeUuid: function(params) {
        console.log(params.var);
        switch (params.ver) {
            case 'time-based':
              return uuid.v1();
            case 'random':
              return uuid.v4();
            default:
              return uuid.v1();
          }
    },
    makeEvents: function(params) { // profile
        var _req = params.req;
        var _res = params.res;

        var _profile = {
            id: this.makeUuid({var:'time-based'}),
            actor: '',
            action: '',
            obj: '',
            generated: ''
        }
        console.log(_profile);
        return {
            profile: _profile,
            req: _req,
            res: _res
        }
    },
    makeEventSubtypes: function(parama) { //

    }
}