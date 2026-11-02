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

// Ternary
let Age = 18;
let myAge = Age >= 18 ? "You are Adult" : "You are young";
console.log(myAge);

// Switch Control Flow
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tueday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thurday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;

  default:
    day = "Invalid Day";
    break;
}

console.log(day);

// Logical Operators
// &&:AND, ||:OR, !:NOT

// &&
let name = "Oudom";
let password = "123";

if (name === "Oudom" && password === "123") {
  console.log("Success Login!!");
} else {
  console.log("Login Failed");
}

// ||
let role = "Staff";
if (role === "Admin" || role === "Staff") {
  console.log("Login Success!!");
} else {
  console.log("Failed Login");
}

// !
let teacher = "Oudom";
if (teacher != "Oudom") {
  console.log("You are not Teacher");
} else {
  console.log("You are Teacher");
}

// Loop
// for loop
// i = 0;
// for (i; i <= 10; i++) {
//   console.log(i + " Hello");
// }
// //while loop
// let l = 0;
// while (l <= 20) {
//   console.log(l);
//   l++;
// }
// Do While loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
//   if (i === 5) {
//     continue;
//   }
// } while (i <= 10);

for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  } else if (i === 8) {
    break;
  }
  console.log(i);
}

// js string method
let namez = "chea oudom";
console.log(namez.includes("ch"));

// Function
function myFunction() {
  console.log("HEllo");
}
myFunction();

function calculateTotal(price, qty) {
  let total = price * qty;

  console.log(total);
}
calculateTotal(40, 2);

// Expression Function
const Functionmy = function (name) {
  return name;
};
console.log("Oudommm");

// // js timers
// setTimeout()(function () {
//   console.log("Hello");
// }, 3000);

// // // setInterval()
// // let count = 1;
// // setInterval(function () {
// //   console.log(count);
// //   count++;
// // }, 1000);
// setTimeout;
// // clearTimeout()
// let timer = setTimeout(function () {
//   console.log("Endd");
// }, 5000);

// clearTimeout(timer);
// clearInterval;

// Object
// let student = {
//   id: 1,
//   name: "Chea Oudom",
//   age: 22,
//   address: "PP",
// };

// console.log(student);

// obj method
let userInfo = {
  id: 1,
  name: "Yong",
  address: "PP",

  userDetail: function () {
    console.log(
      `User ID: ${this.id}, name: ${this.name}, address: ${this.address}`,
    );
  },
};

userInfo.userDetail();

// obj constructor
function student(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

student1 = new student("Dom", 22, "pp");
console.log(student1);
student2 = new student("Srun", 22, "pp");
console.log(student2);

// Date
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getTime());

// Array
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// Array Methods
let fruit = ["Apple", "Banana", "Orange"];
console.log(fruit.toString());
console.log(fruit.length);
console.log(fruit.pop());
console.log(fruit.push("Egg"));
console.log(fruit);

// sort and reverse
let car = ["Toyota", "Luxus", "tesla"];
console.log(car);
console.log(car.sort());
console.log(car.reverse());

// array loop
for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
}
