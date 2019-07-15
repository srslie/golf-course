class Golfer {
  constructor(name, handicap) {
    this.name = name;
    this.handicap = handicap;
    this.frustration = 0;
    this.practiceCounter = 0;
  }

  calculateAvg() {
    return `I usually shoot a ${this.handicap + 72} on average.`
  }

  playRound(course) {
    if (course.difficulty === 'hard') {
      this.frustration += 500
    } else {
      this.frustration += 100
    }
  }

  hitTheRange() {
    this.practiceCounter++
    if (this.practiceCounter >= 20) {
      this.handicap--;
    }
  }
}


module.exports = Golfer;