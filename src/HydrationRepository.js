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

  returnWeeksOunces(id, date) {
    const userData = this.hydrationData.filter(element => element.userID === id);
    const hydroDate = userData.find(element => element.date === date);
    const dateIndex = userData.indexOf(hydroDate);
    const week = userData.slice(dateIndex -6, dateIndex + 1);
    const ouncesPerDay = week.map(element => ({[element.numOunces] : element.date}));
    console.log(ouncesPerDay);
    return ouncesPerDay;
  }

  TEMPLATE(id, date) {
    const userInfo = this.data.filter(data => data.userID === id);
    const locateDate = userInfo.find(user => user.date === date)
    const indexOfDate = userInfo.indexOf(locateDate);
    const weekData = userInfo.slice(indexOfDate - 6, indexOfDate + 1)
    const weekOz = weekData.map(data => ({[data.date]: data.numOunces}))
    return weekOz
  }






  // ***** Jims Exercise *****
  // let week = [];
  // let userData = this.hydrationData.filter(element => element.userID === id);
  // userData = userData.slice(0, 7);
  // userData.forEach(element => week.push(element.numOunces));
  // console.log("USERDATA", userData);
  // console.log("WEEK", week);
  // return week;


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

// module.exports = HydrationRepository;

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
};
