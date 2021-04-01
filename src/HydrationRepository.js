// hydration repository
class HydrationRepository {
  constructor(data) {
    this.hydrationData = data;
  }

  findUsersHydrationData(id) {
    const usersData = this.hydrationData.filter(element => element.userID === id);
    return usersData;
  }

  returnDaysOunces(id, date) {
    const userData = this.hydrationData.filter(element => element.userID === id);
    const daysOunces = userData.filter(element => element.date === date);
    return daysOunces[0].numOunces;
  }

  calculateAllTimeOunces(id) {
    const userData = this.hydrationData.filter(element => element.userID === id);
    let sum = 0;
    userData.forEach(element => sum += element.numOunces);
    return sum / userData.length;
  }

  // returnWeeksOunces() {
  //   //!SPICY! date.js?
  //   //-"using some week identifier"
  //   //-create a week array of 7days
  //   //-return ounces drank for each day
  // }
}

module.exports = HydrationRepository;
