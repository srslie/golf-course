var assert = require('chai').assert;
var GolfCourse = require('./golf-course.js');
var Golfer = require('./golfer.js')

describe('Golf Course', function () {
  it.skip('should have a name and difficulty', function () {
    var golfCourse = new GolfCourse('Overland GC', 'moderate');
    assert.equal(golfCourse.name, 'Overland GC');
    assert.equal(golfCourse.difficulty, 'moderate');
  });

  it.skip('should have a total number of openings for the day', function () {
    var golfCourse = new GolfCourse('Harvard Gulch', 'moderate', 25);
    assert.equal(golfCourse.openings, 25)
  });

  it.skip('should have some unique features', function () {
    var golfCourse1 = new GolfCourse('Arrowhead', 'hard', 42, ['great views', 'wildlife'])
    var golfCourse2 = new GolfCourse('Bay Hill', 'hard', 11, ['water', 'Arnies Place'])
    assert.deepEqual(golfCourse1.features, ['great views', 'wildlife'])
    assert.deepEqual(golfCourse2.features, ['water', 'Arnies Place'])
  });

  // PASS GOLFER TESTS BELOW BEFORE FINISHING REMAINING GOLF COURSE TESTS

  it.skip('should accept golfers if there is room available', function () {
    var golfCourse = new GolfCourse('Bear Dance', 'hard', 8, ['bear shaped green, views']);
    var golfer1 = new Golfer('Pat', 11);
    var golfer2 = new Golfer('Ted', 13);
    var golfer3 = new Golfer('Kevin', 15);
    var golfer4 = new Golfer('Joanna', 7);
    var golfer5 = new Golfer('Bridget', 25);
    var golfer6 = new Golfer('Brad', 12);
    var golfer7 = new Golfer('Pritchard', 24);
    var golfer8 = new Golfer('Colin', 30);
    var golfer9 = new Golfer('Nancy', 11);

    var group1 = [golfer1, golfer2, golfer3];
    var group2 = [golfer4, golfer5];
    var group3 = [golfer6, golfer7, golfer8, golfer9]

    assert.equal(golfCourse.openings, 8);
    assert.deepEqual(golfCourse.currentlyPlaying, [])
    golfCourse.checkInGroup(group1);
    assert.equal(golfCourse.openings, 5);
    assert.deepEqual(golfCourse.currentlyPlaying, ['Kevin', 'Ted', 'Pat']);

    golfCourse.checkInGroup(group2);
    assert.equal(golfCourse.openings, 3);
    assert.deepEqual(golfCourse.currentlyPlaying, ['Bridget', 'Joanna', 'Kevin', 'Ted', 'Pat']);

    golfCourse.checkInGroup(group3);
    assert.equal(golfCourse.openings, 3);
    assert.deepEqual(golfCourse.currentlyPlaying, ['Bridget', 'Joanna', 'Kevin', 'Ted', 'Pat']);
  });

  it.skip('should recommend which tees to play from based on handicap', function () {
    var golfCourse = new GolfCourse('Fossil Trace', 'hard', 5, ['artifacts on course', 'layout']);
    var golfer1 = new Golfer('Ruth', 10);
    var golfer2 = new Golfer('Irwin', 11);
    var golfer3 = new Golfer('Terry', 15);

    assert.equal(golfCourse.recommendTees(golfer1), 'You should play from the Difficult Tees.');
    assert.equal(golfCourse.recommendTees(golfer2), 'You should play from the Middle Tees.');
    assert.equal(golfCourse.recommendTees(golfer3), 'You should play from the Forward Tees.');
  });
});

describe('Golfer', function () {
  it.skip('should have a name and handicap', function () {
    var golfer = new Golfer('Will', 21);
    assert.equal(golfer.name, 'Will');
    assert.equal(golfer.handicap, 21);
  });

  it.skip('should start out minimally frustrated', function () {
    var golfer = new Golfer('Ryan', 19);
    assert.equal(golfer.name, 'Ryan');
    assert.equal(golfer.frustration, 0);
  });

  it.skip('should be able to calculate their average score based on par 72', function () {
    var golfer1 = new Golfer('Kyle', 4);
    var golfer2 = new Golfer('Michelle', 10);
    assert.equal(golfer1.calculateAvg(), 'I usually shoot a 76 on average.');
    assert.equal(golfer2.calculateAvg(), 'I usually shoot a 82 on average.');
  });

  it.skip('should become frustrated based on the course difficulty (HARD or MODERATE - golf is never easy)', function () {
    var golfer1 = new Golfer('Thomas', 15);
    var golfer2 = new Golfer('Margit', 4);
    var golfCourse1 = new GolfCourse('Bear Dance', 'hard', 44, ['elevation', 'views']);
    var golfCourse2 = new GolfCourse('Willis Case', 'moderate', 31, ['proximity to Denver', 'layout']);

    golfer1.playRound(golfCourse1);
    assert.equal(golfer1.frustration, 500);

    golfer2.playRound(golfCourse2);
    assert.equal(golfer2.frustration, 100)
  });

  function simulatePractice(num, golfer) {
    for (var i = 0; i < num; i++) {
      golfer.hitTheRange()
    }
  }

  it.skip('should be able to improve after a LOT of practice', function () {
    var golfer1 = new Golfer('Eric', 20);
    var golfer2 = new Golfer('Kyle', 19);

    simulatePractice(20, golfer1);
    assert.equal(golfer1.handicap, 19);
    simulatePractice(19, golfer2);
    assert.equal(golfer2.handicap, 19);
  });
});
