// Query Selectors
const userName = document.querySelector('#userName');
const userInfo = document.querySelector('#userData');
const userHydration = document.querySelector('#hydrationData');
const personalStepGoal = document.querySelector('#personalStepGoal');
const averageStepGoal = document.querySelector('#groupAverageStepGoal');
const userSelection = document.querySelector('#userSelection');

// Global Variables
const userRepo = new UserRepository(userData);
const currentUser = new User(userData[getRandomIndex(userData)]);;
const hydration = new HydrationRepository(hydrationData);

// const hydateRepo = new HydrationRepository();

// Event Listeners
window.addEventListener('load', loadUserData);
// userSelection.addEventListener('', );

//DOM Functions
function loadUserData() {
  // helper function to invoke other functions
  displayFirstName();
  displayUserData();
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
  userHydration.innerHTML += `
  <p>Ounces drank this day: ${hydration.returnDaysOunces(currentUser.id, "2019/06/15")}</p>
  <p>Ounces drank this week: ${hydration.calculateAllTimeOunces(2)}</p>`
}
