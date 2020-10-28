class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = []
  }

  checkInGroup(group) {
    if (group.length < this.openings) {
      for (var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name)
      }
      this.openings -= group.length
    }
  }

  recommendTees(golfer) {
    var recommended = ''
    if (golfer.handicap <= 10) {
      recommended = 'Difficult'
    } else if (golfer.handicap < 15) {
      recommended = 'Middle'
    } else if (golfer.handicap >= 15) {
      recommended = 'Forward'
    }
    return `You should play from the ${recommended} Tees.`
  }
}

module.exports = GolfCourse;
