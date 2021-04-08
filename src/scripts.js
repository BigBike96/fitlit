const userName = document.querySelector('#userName');
const userInfo = document.querySelector('#userData');
const userHydration = document.querySelector('#hydrationData');
const userSelection = document.querySelector('#userSelection');
const sleepInfo = document.querySelector('#sleepData');

const userRepo = new UserRepository(userData);
const currentUser = new User(userData[getRandomIndex(userData)]);;
const hydration = new HydrationRepository(hydrationData);
const sleep = new SleepRepository(sleepData);

window.addEventListener('load', loadUserData);

function loadUserData() {
  displayFirstName();
  displayUserData();
  displayHydroData();
  displaySleepData();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function displayFirstName() {
  let firstName = currentUser.returnFirstName();
  userName.innerText = firstName;
}

function displayUserData() {
  userInfo.innerHTML += `
  <p>Address: ${currentUser.address}</p>
  <p>Email: ${currentUser.email}</p>
  <p>Stried Length: ${currentUser.strideLength}</p>
  <p>Daily Step Goal: ${currentUser.dailyStepGoal}</p>
  <p>All Users Step Goal Average: ${userRepo.calculateAvgStepGoals()}</p>`
}

function displayHydroData() {
  const weeksOunces = hydration.returnWeeksOunces(currentUser.id, "2019/09/22");
  let [day1, day2, day3, day4, day5, day6, day7] = weeksOunces;
  userHydration.innerHTML += `
  <p>Ounces drank this day: ${hydration.returnDaysOunces(currentUser.id, "2019/09/22")}</p>
  <p>Ounces drank this week: <br>
  ${day1.numOunces} :  ${day1.date}<br>
  ${day2.numOunces} :  ${day2.date}<br>
  ${day3.numOunces} :  ${day3.date}<br>
  ${day4.numOunces} :  ${day4.date}<br>
  ${day5.numOunces} :  ${day5.date}<br>
  ${day6.numOunces} :  ${day6.date}<br>
  ${day7.numOunces} :  ${day7.date}<br>
  </p>`
}

function displaySleepData() {
  const weekHours = sleep.hoursForWeek(currentUser.id, "2019/09/22");
  let [day1, day2, day3, day4, day5, day6, day7] = weekHours;
  sleepInfo.innerHTML += `
  <p>Latest Day Hours: ${sleep.hoursForDay(currentUser.id, "2019/09/22")}</p>
  <p>Latest Day Quality: ${sleep.qualityForDay(currentUser.id, "2019/09/22")}</p>
  <p>Hours Slept this week: <br>
  ${day1.hoursSlept} :  ${day1.date}<br>
  ${day2.hoursSlept} :  ${day2.date}<br>
  ${day3.hoursSlept} :  ${day3.date}<br>
  ${day4.hoursSlept} :  ${day4.date}<br>
  ${day5.hoursSlept} :  ${day5.date}<br>
  ${day6.hoursSlept} :  ${day6.date}<br>
  ${day7.hoursSlept} :  ${day7.date}<br>
  </p>
  <p>Quality of sleep this week: <br>
  ${day1.sleepQuality} :  ${day1.date}<br>
  ${day2.sleepQuality} :  ${day2.date}<br>
  ${day3.sleepQuality} :  ${day3.date}<br>
  ${day4.sleepQuality} :  ${day4.date}<br>
  ${day5.sleepQuality} :  ${day5.date}<br>
  ${day6.sleepQuality} :  ${day6.date}<br>
  ${day7.sleepQuality} :  ${day7.date}<br>
  </p>
  <p>All Time Average Hours: ${sleep.averageSleepHours(currentUser.id)}</p>
  <p>All Time Average Quality: ${sleep.averageSleepQuality(currentUser.id)}</p>`
}
