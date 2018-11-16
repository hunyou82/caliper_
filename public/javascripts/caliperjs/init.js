/**
 * @class CALIPER 
 * @author martinLee
 * @date 2018.11.15
 * @classdesc This is base definition for all caliper composed classes defined by the system
 */

var CALIPER = {};
//var SENSOR = appSensorService();

(function() {
    CALIPER.json;
    CALIPER.init = function() {
        console.log('INIT');
        CALIPER.startSession(); // Fire Session Event
    }

    CALIPER.startSession = function(params) {
        console.log('session start');        
        // Event identifier
        var id = "urn:uuid:d4618c23-d612-4709-8d9a-478d87808067";

        // The Actor for the Caliper Event        
        var actor = appSensorService.exports.currentUser;

        // The Action for the Caliper Event (Hint: Use SessionActions)
        var action = Caliper.Actions.loggedIn.term;          
        
        // The Object being interacted with by the Actor (edApp)
        var obj = appSensorService.exports.edApp;        

        // The edApp that is part of the Learning Context
        var edApp = obj;

        // Target
        var target = appSensorService.exports.courseHomePage;

        // The LIS Course Section for the Event (part of Learning Context)
        var group = appSensorService.exports.course;    
        
        // The actor's membership, roles and status
        var membership = appSensorService.exports.membership;    
        
        // The actor's session
        var sessionStart = new Date().toISOString();        
       
        var session = Caliper.Entities.EntityFactory().create(Caliper.Entities.Session, {
            id: "https://imsglobal.org/sampleCaliperApp//session-123456789",
            name: "session-123456789",
            user: actor,
            dateCreated: sessionStart,
            startedAtTime: sessionStart
          });        

        // Create the Session Event (Uncomment and set references to objects)
        var event = Caliper.Events.EventFactory().create(Caliper.Events.SessionEvent, {
            id: id,
            actor: actor,
            action: action,
            object: obj,
            eventTime: new Date().toISOString(),
            target: target,
            edApp: edApp,
            group: group,
            membership: membership,
            session: session
        });       
            
        console.log(actor);
        
        var opts = {sensor: appSensorService.exports.getId, data: event};
        
        //var envelope = appSensorService().createEnvelope('1');
        CALIPER.json = event;
        //return event;
    }

    CALIPER.annotationEvent = function(params) {
        // Event identifier
        var id = 'urn:uuid:'+params.id;//"urn:uuid:d4618c23-d612-4709-8d9a-478d87808067";

        // The Actor for the Caliper Event        
        var actor = appSensorService.exports.currentUser;

        // The Action for the Caliper Event (Hint: Use SessionActions)
        var action = Caliper.Actions.loggedIn.term;          

        // The Object being interacted with by the Actor (edApp)
        var obj = appSensorService.exports.edApp;  

        // Create the Session Event (Uncomment and set references to objects)
        var event = Caliper.Events.EventFactory().create(Caliper.Events.SessionEvent, {
            id: id,
            actor: actor,
            action: action,
            object: obj,      
            eventTime: new Date().toISOString(),                  
        });      

        var opts = {sensor: appSensorService.exports.getId, data: event};
        
        console.log(event);
        CALIPER.json = event;
    }

})()

