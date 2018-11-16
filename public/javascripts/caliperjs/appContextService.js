var appContextService = {};

(function() {
    const BASE_IRI = "http://caliper.esls.io";
    const COURSE_IRI = BASE_IRI + "/deptOfPhysics/2018/physics101";

    /**
     * Decrement date by n days in order to create faux historical dates for entities.
     * @param date
     * @param decrement
     */
    var decrementDate = function(date, decrement) {
        date.setDate(date.getDate() - decrement);
        return date.toISOString();
      };
  
    /**
     * Increment date by n days in order to create faux future dates for entities
     * @param date
     * @param increment
     */
    var incrementDate = function(date, increment) {
    date.setDate(date.getDate() + increment);
    return date.toISOString();
    };

    // Get the current user as a Caliper Actor
    appContextService.getUser = function() {
        return Caliper.Entities.EntityFactory().create(Caliper.Entities.Person, {
            id: "http://purl.imsglobal.org/caliper/Person",
            type: "Person",
            dateCreated: decrementDate(new Date(), 45),
            name: "martin"
        });
    };
    
    appContextService.getEdApp = function() {
        return Caliper.Entities.EntityFactory().create(Caliper.Entities.SoftwareApplication, {
            id: "https://imsglobal.org/sampleCaliperApp", // need to login
            type: "SoftwareApplication",
            name: "Sample Caliper App",
            dateCreated: decrementDate(new Date(), 30)
        });
    }

    appContextService.getCourse = function() {        
        return Caliper.Entities.EntityFactory().create(Caliper.Entities.CourseSection, {
          id: COURSE_IRI,
          type: 'CourseSection',
          courseNumber: "courseNunber",
          academicSession: "Fall 2018",
          name: "CPS 435 Learning Analytics, Section 01",
          description: "This is a Physics course for beginners.",
          dateCreated: decrementDate(new Date(), 30),
          dateModified: decrementDate(new Date(), 28)
        });
    };

    appContextService.getCourseHomePage = function() {
        var course = appContextService.getCourse();
        return Caliper.Entities.EntityFactory().create(Caliper.Entities.WebPage, {
            id: BASE_IRI + "/Physics101-Course-Homepage",
            type: 'WebPage',
            name: "CPS 435-01 Landing Page",
            isPartOf: course,
            dateCreated: decrementDate(new Date(), 28),
            dateModfied: decrementDate(new Date(), 25)
        });
    }

    appContextService.getMembership = function() {
        var member = appContextService.getUser();
        var organization = appContextService.getCourse();
  
        return Caliper.Entities.EntityFactory().create(Caliper.Entities.Membership, {
            id: COURSE_IRI + "/roster/554433",
            type: "Membership",
            description: "Roster entry",
            member: member,
            organization: organization,
            roles: [Caliper.Entities.Role.learner.term],
            status: Caliper.Entities.Status.active.term,
            dateCreated: decrementDate(new Date(), 21)
        });
    }

    // Export the functions that will be used by other controllers and services
    appContextService.exports = {
      getUser: appContextService.getUser(),
      //getSyllabus: getSyllabus,
      //getReading: getReading,
      //getReadingFrame: getReadingFrame,
      getEdApp: appContextService.getEdApp(),
      getCourse: appContextService.getCourse(),
      getMembership: appContextService.getMembership(),
      getCourseHomePage: appContextService.getCourseHomePage(),
      //getQuizPage: getQuizPage,
      //getQuiz: getQuiz,
      //getQuizItem: getQuizItem
    };
})();