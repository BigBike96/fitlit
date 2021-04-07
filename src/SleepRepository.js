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

  averageSleepQuality() {
    // 2. For a user, their average sleep quality per day over all time
  }

  hoursForDay() {
    // 3. For a user, how many hours they slept for a specific day (identified by a date)
  }

  qualityForDay() {
    // 4. For a user, their sleep quality for a specific day (identified by a date)
  }

  hoursForWeek() {
    // 5. For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  }

  qualityForWeek() {
    // 6. For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

  }

  averageHoursOfAll() {
    // 7. For all users, the average sleep quality
  }

  findGreaterThanThree(){
    // 8. Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  }

  findWhoSleptMost() {
    // 9. For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)

  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
};
