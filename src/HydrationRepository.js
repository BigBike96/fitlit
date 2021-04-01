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
  //
  // calculateAllTimeOunces() {
  //   //-iterate through all data
  //   //using an id to take objects with matching id and
  //   //-placing them in a new array
  //   //-iterate through new array,
  //   //- for each obj? add all fluid ounces of each day
  //   //- return divided sum by the arrays.length
  // }
  //
  // returnWeeksOunces() {
  //   //!SPICY! date.js?
  //   //-"using some week identifier"
  //   //-create a week array of 7days
  //   //-return ounces drank for each day
  // }
}

module.exports = HydrationRepository;
