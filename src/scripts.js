// Query Selectors
const userData = document.querySelector('#userData');
const personalStepGoal = document.querySelector('#personalStepGoal');
const personalStepGoal = document.querySelector('#groupAverageStepGoal');
const userSelection = document.querySelector('#userSelection');

// Global Variables
const currentUser = new User();
const userRepo = new UserRepository();
const hydateRepo = new HydrationRepository();

// Event Listeners
window.addEventListener('load', loadUserData);
// userSelection.addEventListener('', );

// DOM Functions
