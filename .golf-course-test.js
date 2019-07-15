var assert = require('chai').assert;
var GolfCourse = require('./golf-course.js');

describe('Golf Course', function() {
  it('should have a name', function() {
    var golfCourse = new GolfCourse('Overland GC');
    assert.equal(golfCourse.name, 'Overland GC');
  });


  it('should have a total number of reservations for the day', function() {
    var golfCourse = new GolfCourse('Harvard Gulch', 25);
    assert.equal(golfCourse.openings, 25)
  });

  it('should have some unique features', function() {
    var golfCourse = new GolfCourse('Arrowhead', 42, ['great views, wildlife'])
    assert.deepEqual(golfCourse.features, ['great views', 'wildlife'])
  })

  it('should be public by default', function() {
    var golfCourse = new GolfCourse('Fossil Trace', 32, ['unique layout', 'cliffs'])
    assert.equal(golfCourse.name, 'Fossil Trace');
    assert.equal(golfCourse.isPublic, true);
  })

  it('should be able to be a private course', function() {
    var golfCourse = new GolfCourse('Augusta', 21, ['home of The Masters', 'perfection'], false)
    assert.equal(golfCourse.isPublic, false)
  })

  it('should accept walkups if there is room available', function() {
    var golfCourse = new GolfCourse('Bear Dance', 3, ['bear shaped green, views']);
    assert.equal(golfCourse.openings, 3);
    golfCourse.acceptWalkup();
    assert.equal(golfCourse.openings, 2);
    golfCourse.acceptWalkup();
    golfCourse.acceptWalkup();
    assert.equal(golfCourse.openings, 0);
    golfCourse.acceptWalkup();
    assert.equal(golfCourse.openings, 0);
  });

  it('should take reservations if there is room available', function() {
    var golfCourse = new GolfCourse('Riverdale Dunes', 10, ['scenic']);
    golfCourse.takeReservation(4)
    assert.equal(golfCourse.openings, 6);
    golfCourse.takeReservation(2);
    assert.equal(golfCourse.openings, 4);
    golfCourse.takeReservation(3);
    assert.equal(golfCourse.openings, 1);
    var response = golfCourse.takeReservation(4)
    assert.equal(response, 'Sorry, try again tomorrow')
  });



  // it('should be either public or private', function() {
  //   var golfCourse1 = new GolfCourse('Bear Creek GC', 51, ['unique layout', 'elevation'], 'private');
  //   var golfCourse2 = new GolfCourse('Park Hill', 33, ['affordable'], 'public')
  //   assert.equal(golfCourse1.isPublic, false);
  //   assert.equal(golfCourse1.isPrivate, true);
  //   assert.equal(golfCourse2.isPublic, true);
  //   assert.equal(golfCourse2.isPrivate, false);
  // });

});



//have a style
//features in an array?
//cartsAvailable?
//decrement the number of slots available based on the 