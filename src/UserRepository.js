// user repository
//

class UserRepository {
  constructor(data) {
    this.users = data;
  }

  findUserById(id) {
    //finds user data by Id
    return this.users.find(user => user.id === id);
    //const targetUser = this.users.findIndex((user) => user.id === userID);
    //return this.users[targetUser];
    //return this.users.findIndex((user) => user.id === userID);
  }

  calculateAvgStepGoals() {
    //iterate through array and get value by key
    //add dailyStepGoal to totalSteps const
    //returns average step goal of all users
    const stepGoals = [];
    this.users.forEach(user => stepGoals.push(user['dailyStepGoal']));
    const sum = stepGoals.reduce((accum, num) => accum + num);
    const averageStepGoal = sum / stepGoals.length;
    return averageStepGoal;
  }
}

 module.exports = UserRepository;

// if (typeof module !== 'undefined') {
//   module.exports = UserRepository;
// }
