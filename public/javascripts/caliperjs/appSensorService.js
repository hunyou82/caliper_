var appSensorService = {};

(function() {
    // Initialize Caliper sensor
    var sensor = Caliper.Sensor;
    sensor.initialize("http://caliper.esls.io");
    
    // Wrapper around Caliper Sensor getId()
    appSensorService.getId = function() { // initialize        
        return sensor.getId();
    };

    // Wrapper around Caliper Sensor createEnvelope()
    appSensorService.createEnvelope = function(opts) {        
        return this.sensor.createEnvelope(opts);
    };    
   
    // Export the functions that will be used by controller
    appSensorService.exports = {
      getId: appSensorService.getId(),
      createEnvelope: 'createEnvelope',
      sendEnvelope: 'sendEnvelope',
      currentUser:appContextService.getUser(),
      edApp: appContextService.getEdApp(),
      course: appContextService.getCourse(),
      membership: appContextService.getMembership(),
      courseHomePage: appContextService.getCourseHomePage()
    };
})();