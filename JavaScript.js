// js Operators
// Arithmetic, Assigment, Comparisions, Conditional, Operators

// Arithmetic + - * / %
let a = 10;
let b = 2;

// Addition
const Addition = a + b;

// Subtraction
const Subtraction = a - b;

// Multiplication
const Multiplication = a * b;

// Division
const Division = a / b;

//  Modulus
const Modulus = a % b;

console.log(Addition);
console.log(Subtraction);
console.log(Multiplication);
console.log(Division);
console.log(Modulus);

// exercise
let math = 90;
let khmer = 88;
let cs = 89;

let total = math + khmer + cs;
let avg = total / 3;
console.log("Total Marks : " + total);
console.log(avg);

// Asignment Operator =, +=, -=, *=, /=, %=
let x = 10;

x *= 5;
console.log(x);

// Compareison Operator
let score = 100;
console.log(score !== 100);
// Exercise Student Information
let Studentname = "Oudom";
let scores = 90;
let passmark = 50;

console.log(Studentname != "Oudom");
console.log(Studentname === "Oudom");
console.log(score >= passmark);

// Conditions
// if, else, else if, switch, ternary
let username = "Chea Oudom";
let analysis = 21;
let mis = 44;
let code = 11;
let web = 22;

const totalScore = analysis + mis + code + web;
const average = totalScore / 4;

if (average >= 90) {
  console.log("You are Pass grade : A");
} else if (average >= 80) {
  console.log("You are Pass grade : b");
} else if (average >= 70) {
  console.log("You are Pass grade : c");
} else if (average >= 60) {
  console.log("You are Pass grade : d");
} else if (average >= 50) {
  console.log("You are Pass grade : e");
} else if (average < 50) {
  console.log("Fail");
}

console.log(average);
