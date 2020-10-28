class Golfer {
  constructor(object) {
    this.name = object.name;
    this.handicap = object.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg() {
    return `I usually shoot a ${this.handicap + 72} on average.`
  }

  playRound(course) {
    if (course.difficulty === 'hard') {
      this.frustration += 500
    } else if (course.difficulty === 'moderate') {
      this.frustration += 100
    }
  }

  hitTheRange() {
    this.confidence += 10
  }

  marvel(course) {
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
  }

  whatYaShoot(shots) {
    if (shots < 0) {
      this.frustration = 0
      return 'I AM THE GREATEST GOLFER ALIVE!'
    } else if (shots === 0) {
      this.frustration = 10
      return 'Booyah!'
    } else if (shots > 0)
    this.frustration += 20
    return 'Doh!'
  }
}




module.exports = Golfer;
