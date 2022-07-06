'use strict';

// Task: get relevant data from the user and match the user with another person based on certain preferences.

const mockData = require('./mockData.js').data;

console.log('Welcome! You will be asked a couple of questions: \n');

/*

// Empty profile object
const profile = {};

// Variable array with questions
const questions = [
  'What is your first name?',
  'What is your last name?',
  "What is your age?",
  "What is your gender? (M, F, X)",
  "Which genders are you interested in dating? (M, F, X, B)",
  "What is your location? (rural/city)",
  "What minimum age would you be interested in?",
  "What maximum age would you be interested in?",
];

// set variable
const answers = [];

// set counter
let i = 0;

// while loop; stops when all questions are answered
while (answers.length < questions.length) {
  const question = questions[i];
  const answer = prompt(question);

  if ((answers.length == 0 || answers.length == 1) && answer.length < 1) {
    console.log("Please enter your name");
    continue;
  }

  if ((answers.length == 2 || answers.length == 6 || answers.length == 7) && isNaN(answer)) {
    console.log("Please enter a number");
    continue;
  }

  if (answers.length == 3 && !["M","F","X"].includes(answer)) {
    console.log("Please fill in: M, F or X");
    continue;
  }

  if (answers.length == 4 && !["M","F","X","B"].includes(answer)) {
    console.log("Please fill in: M, F, X or B");
    continue;
  }

  if (answers.length == 5 && !["rural","city"].includes(answer)) {
    console.log("Please fill in: rural or city")
    continue;
  }

  if ((answers.length == 6 || answers.length == 7) && answer < 18) {
    console.log("All matches have to 18+ years");
    continue;
  }

  if (answers.length == 7 && answer < answers[6]) {
    console.log("The maximum age can't be lower than the minimum age");
    continue;
  }

  // Save the answer to variable 'answers'
  answers.push(answer);
  i++;
}

// save answers in object
profile.first_name = answers[0];
profile.last_name = answers[1];
profile.age = +answers[2];
profile.gender = answers[3];
profile.gender_interest = answers[4];
profile.location = answers[5];
profile.min_age_interest = +answers[6];
profile.max_age_interest = +answers[7];

console.log(profile);

*/

// Tests
const testProfile = { "first_name": "Vince", "last_name": "Lems", "age": 50, "gender": "M", "gender_interest": "B", "location": "city", "min_age_interest": 18, "max_age_interest": 90 }

// loop that iterates on the mockData array
console.log(`The amount of people using the Winc Winc app (at this moment): ${mockData.length}. Based on your profile we have matched you with:\n`)

// console.log(mockData[0])
// console.log(mockData[0].first_name)
// console.log(mockData[0].min_age_interest)
// console.log(mockData[0].max_age_interest)

// console.log(testProfile.gender)
// console.log(mockData[0].gender)

for (let i = 0; i < mockData.length; i++) {
  if (testProfile.age >= mockData[i].min_age_interest && testProfile.age <= mockData[i].max_age_interest) {
    if (mockData[i].min_age_interest <= testProfile.age && mockData[i].max_age_interest >= testProfile.age) {
      if (testProfile.location == mockData[i].location) {
        if (testProfile.gender_interest == mockData[i].gender) {
          console.log(mockData[i]);
        } else if ((testProfile.gender_interest == "B") && (["M","F"].includes(mockData[i].gender))) {
          console.log(mockData[i]);
        }
      }
    }
  }
}

// console.log(mockData[i]);
// !["rural","city"].includes(answer)
