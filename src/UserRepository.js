// user repository
//

class UserRepository {
  constructor(data) {
    this.users = data;
  }

  findUserById(id) {
    return this.users.find(user => user.id === id);
  }

  calculateAvgStepGoals() {
    const stepGoals = [];
    this.users.forEach(user => stepGoals.push(user['dailyStepGoal']));
    const sum = stepGoals.reduce((accum, num) => accum + num);
    const averageStepGoal = sum / stepGoals.length;
    return averageStepGoal;
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
