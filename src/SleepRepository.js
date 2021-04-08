class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  averageSleepHours(id) {
    const userSleepData = this.sleepData.filter(element => element.userID === id);
    let sum = 0;
    userSleepData.forEach(element => sum += element.hoursSlept);
    return Number((sum / userSleepData.length).toFixed(2));
  }

  averageSleepQuality(id) {
    const sleepQualityData = this.sleepData.filter(element => element.userID === id);
    let sum = 0;
    sleepQualityData.forEach(element => sum += element.sleepQuality);
    return Number((sum / sleepQualityData.length).toFixed(2));
  }

  hoursForDay(id, date) {
    const userData = this.sleepData.filter(element => element.userID === id);
    const daysHours = userData.filter(element => element.date === date);
    return daysHours[0].hoursSlept;
  }

  qualityForDay(id, date) {
    const userData = this.sleepData.filter(element => element.userID === id);
    const daysQuality = userData.filter(element => element.date === date);
    return daysQuality[0].sleepQuality;
  }

  hoursForWeek(id, date) {
    const userData = this.sleepData.filter(element => element.userID === id);
    const sleepDate = userData.find(element => element.date === date);
    const dateIndex = userData.indexOf(sleepDate);
    const week = userData.slice(dateIndex - 6, dateIndex + 1);
    return week;
    console.log(week);
  }

  qualityForWeek(id, date) {
    const userData = this.sleepData.filter(element => element.userID === id);
    const qualityDate = userData.find(element => element.date === date);
    const dateIndex = userData.indexOf(qualityDate);
    const week = userData.slice(dateIndex - 6, dateIndex + 1);
    return week;
  }

  averageSleepQualityForAll() {
    const avgQuality = [];
    this.sleepData.forEach(element => avgQuality.push(element.sleepQuality));
    const sum = avgQuality.reduce((accum, num) => accum + num);
    const averageSleepQuality = Number((sum / avgQuality.length).toFixed(2));
    return averageSleepQuality;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
};
