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
    const week = userData.slice(dateIndex - 6, dateIndex + 1);
    const ouncesPerDay = week.map(element => ({[element.numOunces]: element.date}));
    return ouncesPerDay;
  }
}

// module.exports = HydrationRepository;

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
};
