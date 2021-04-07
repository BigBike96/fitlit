// Query Selectors
const userName = document.querySelector('#userName');
const userInfo = document.querySelector('#userData');
const userHydration = document.querySelector('#hydrationData');
const personalStepGoal = document.querySelector('#personalStepGoal');
const averageStepGoal = document.querySelector('#groupAverageStepGoal');
const userSelection = document.querySelector('#userSelection');
const sleepInfo = document.querySelector('#sleepData');

// Global Variables
const userRepo = new UserRepository(userData);
const currentUser = new User(userData[getRandomIndex(userData)]);;
const hydration = new HydrationRepository(hydrationData);
const sleep = new SleepRepository(sleepData);

// const hydateRepo = new HydrationRepository();

// Event Listeners
window.addEventListener('load', loadUserData);
// userSelection.addEventListener('', );

//DOM Functions
function loadUserData() {
  // helper function to invoke other functions
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
  console.log(firstName);
}


function displayUserData() {
  userInfo.innerHTML += `
  <p>Address: ${currentUser.address}</p>
  <p>Email: ${currentUser.email}</p>
  <p>Stried Length: ${currentUser.strideLength}</p>
  <p>Daily Step Goal: ${currentUser.dailyStepGoal}</p>
  <p>All Users Step Goal Average: ${userRepo.calculateAvgStepGoals()}</p>`
  //<p>Friends: ${currentUser.friends}</p>

}

function displayHydroData() {
  const weeksOunces = hydration.returnWeeksOunces(currentUser.id, "2019/09/22");
  let [ day1, day2, day3, day4, day5, day6, day7 ] = weeksOunces;
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
  sleepInfo.innerHTML += `
  <p>Latest Day Hours: </p>
  <p>Latest Day Quality: </p>
  <p>This Weeks Hours: </p>
  <p>This Weeks Quality: </p>
  <p>All Time Average Hours: </p>
  <p>All Time Average Quality: </p>
  `
}
