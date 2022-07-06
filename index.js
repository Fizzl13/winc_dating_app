'use strict';

// task: get relevant data from the user and match the user with another person based on certain preferences.

const mockData = require('./mockData.js').data;

console.log('Welcome! You will be asked a couple of questions in order to create your profile: \n');

// empty profile object
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

  // correct input (no empty strings)
  if ((answers.length == 0 || answers.length == 1) && answer.length < 1) {
    console.log("Please enter your name");
    continue;
  }

  // correct input (numbers)
  if ((answers.length == 2 || answers.length == 6 || answers.length == 7) && isNaN(answer)) {
    console.log("Please enter a number");
    continue;
  }

  // correct input (only M, F or X)
  if (answers.length == 3 && !["M", "F", "X"].includes(answer)) {
    console.log("Please fill in: M, F or X");
    continue;
  }

  // correct input (only M, F, X or B)
  if (answers.length == 4 && !["M", "F", "X", "B"].includes(answer)) {
    console.log("Please fill in: M, F, X or B");
    continue;
  }

  // correct input (only rural or city)
  if (answers.length == 5 && !["rural", "city"].includes(answer)) {
    console.log("Please fill in: rural or city")
    continue;
  }

  // correct input (only 18+)
  if ((answers.length == 6 || answers.length == 7) && answer < 18) {
    console.log("All matches have to 18+ years");
    continue;
  }

  // correct input (max can't be lower than min)
  if (answers.length == 7 && answer < answers[6]) {
    console.log("The maximum age can't be lower than the minimum age");
    continue;
  }

  // save the answer to variable 'answers'
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

// log your own profile
console.log(`\nYour profile: \nI am ${profile.first_name} ${profile.last_name} and I am ${profile.age} years old. I identify myself as a ${profile.gender} and am interested in ${profile.gender_interest}. My current location is: ${profile.location}. And I am looking for a parter who is between ${profile.min_age_interest} and ${profile.max_age_interest} years old.\n`);

console.log(`The amount of people using the Winc Winc app (at this moment): ${mockData.length}. Based on your profile we have matched you with the following people:\n`);

// set counter for matches
let counter = 0;

// loop that iterates on the mockData array
for (let i = 0; i < mockData.length; i++) {
  if (profile.age >= mockData[i].min_age_interest && profile.age <= mockData[i].max_age_interest) {
    if (mockData[i].min_age_interest <= profile.age && mockData[i].max_age_interest >= profile.age) {
      if (profile.location == mockData[i].location) {
        if ((profile.gender_interest == mockData[i].gender) || (profile.gender_interest == "B") && (["M", "F"].includes(mockData[i].gender))) {
          if ((mockData[i].gender_interest == profile.gender) || (mockData[i].gender_interest == "B") && (["M", "F"].includes(profile.gender))) {
            console.log(`Match number ${counter+1}:`)
            console.log(`Hi! I am ${mockData[i].first_name} ${mockData[i].last_name} and I am ${mockData[i].age} years old. I identify myself as a ${mockData[i].gender} and am interested in ${mockData[i].gender_interest}. My current location is: ${mockData[i].location}. And I am looking for a parter who is between ${mockData[i].min_age_interest} and ${mockData[i].max_age_interest} years old.\n`);
            counter++;
          }
        }
      }
    }
  }
}

console.log(`In total you have ${counter} matches!`);
