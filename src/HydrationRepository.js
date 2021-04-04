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

  returnWeeksOunces(id, identifier) {
      let week = [];
      let userData = this.hydrationData.filter(element => element.userID === id);
      userData = userData.slice(0, 7);
      userData.forEach(element => week.push(element.numOunces));
      console.log("USERDATA", userData);
      console.log("WEEK", week);
      return week;


    // userData = this.hydrationData.filter(element => {} element.userID === id);
    // console.log(userData);

    // const weeksOunces = userData.map(element => element.numOunces);
    // console.log(weeksOunces);
    // return weeksOunces;

  // For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day
    //!SPICY! date.js?
    //-"using some week identifier"
    //-create a week array of 7days
    //-return ounces drank for each day
  }
}

module.exports = HydrationRepository;
