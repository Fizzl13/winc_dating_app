'use strict';

// Task: get relevant data from the user and match the user with another person based on certain preferences.

const mockData = require('./mockData.js').data;

console.log('Welcome! You will be asked a couple of questions: \n');

// Empty profile object
const profile = {};

// Variable array with questions
const questions = [
  'What is your first name?',
  'What is your last name?',
  // "What is your age?",
  // "What is your gender?",
  // "Which genders are you interested in dating?",
  // "Where do you live?",
  // "What minimum age would you be interested in?",
  // "What maximum age would you be interested in?",
];

// set variable
const answers = [];

// set counter
let i = 0;

// while loop; stops when all questions are answered
while (answers.length < questions.length) {
  const question = questions[i];
  const answer = prompt(question);

  // // answers can't be shorter than 2 characters
  // if (answer.length < 2) {
  //   console.log('This answer is too short');
  //   continue;
  // }

  if (answers.length == 1 && answer.length < 4) {
    console.log("Anwoord is te klein");
    continue;
  }

  // Save the answer to variable 'answers'
  answers.push(answer);
  i++;
}

// save answers in object
profile.first_name = answers[0];
profile.last_name = answers[1];
profile.age = answers[2];
profile.gender = answers[3];
profile.gender_interest = answers[4];
profile.location = answers[5];
profile.min_age_interest = answers[6];
profile.max_age_interest = answers[7];

console.log(profile);
