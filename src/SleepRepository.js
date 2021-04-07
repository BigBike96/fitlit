// Sleep repository
class SleepRepository {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  averageSleepHours(id){
    // 1. For a user (identified by their userID), the average number of hours slept per day
    const userSleepData = this.sleepData.filter(element => element.userID === id);
    let sum = 0;
    userSleepData.forEach(element => sum += element.hoursSlept);
    return Number((sum / userSleepData.length).toFixed(2));
  }

  averageSleepQuality(id) {
    // 2. For a user, their average sleep quality per day over all time
    const sleepQualityData = this.sleepData.filter(element => element.userID === id);
    let sum = 0;
    sleepQualityData.forEach(element => sum += element.sleepQuality);
    return Number((sum / sleepQualityData.length).toFixed(2));
  }

  hoursForDay(id, date) {
    // 3. For a user, how many hours they slept for a specific day (identified by a date)
    const userData = this.sleepData.filter(element => element.userID === id);
    const daysHours = userData.filter(element => element.date === date);
    return daysHours[0].hoursSlept;
  }

  qualityForDay(id, date) {
    // 4. For a user, their sleep quality for a specific day (identified by a date)
    const userData = this.sleepData.filter(element => element.userID === id);
    const daysQuality = userData.filter(element => element.date === date);
    return daysQuality[0].sleepQuality;
  }

  hoursForWeek(id, date) {
    // 5. For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
    const userData = this.sleepData.filter(element => element.userID === id);
    const sleepDate = userData.find(element => element.date === date);
    const dateIndex = userData.indexOf(sleepDate);
    const week = userData.slice(dateIndex - 6, dateIndex + 1);
    return week;
    console.log(week);
  }

  qualityForWeek(id, date) {
    // 6. For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
    const userData = this.sleepData.filter(element => element.userID === id);
    const qualityDate = userData.find(element => element.date === date);
    const dateIndex = userData.indexOf(qualityDate);
    const week = userData.slice(dateIndex - 6, dateIndex + 1);
    return week;
  }

  averageSleepQualityForAll() {
    // 7. For all users, the average sleep quality
    const avgQuality = [];
    this.sleepData.forEach(element => avgQuality.push(element.sleepQuality));
    const sum = avgQuality.reduce((accum, num) => accum + num);
    const averageSleepQuality = Number((sum / avgQuality.length).toFixed(2));
    return averageSleepQuality;
  }

  findGreaterThanThree(date){
    // 8. Find all users who average a sleep quality greater than 3 for a given week (7 days)
     // - you should be able to calculate this for any week, not just the latest week
     // input: all user objects for a given 7 day span
     // output: user names of users whos sleep quality is > 3 average for week
     const sleeperData = this.sleepData.filter(element => element.date === date);
     const sleepWeek = sleeperData.slice(dateIndex - 6, dateIndex + 1);
     
     const dateIndex = sleeperData.indexOf(sleepQuality);

  }

  findWhoSleptMost() {
    // 9. For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)

  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
};
