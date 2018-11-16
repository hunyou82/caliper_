var common = require('../lib/common');

module.exports = {
    setEvent: function(req, res, next) {
        var _profile = common.util.makeEvents({
            req:req,res:res
        }).profile;
        //console.log('/.'+JSON.stringify(profile));
        res.render('index', {
            title: 'Express',
            profile: _profile
        });
    }
}