// exercise obj
let student = {
  name: "Chea Oudom",
  age: 22,
  study: {
    major: "CS",
    time: "Evening",
    room: "G101",
  },
};

console.log("Student :" + student.name);
console.log(
  "Study : " +
    student.study.major +
    ", " +
    student.study.time +
    ", " +
    student.study.room,
);

// exercise if else
let studentName = "Chea Oudom";
let attendance = 100;

// score
let khmer = 90;
let math = 88;
let mis = 0;
let coe = 65;

let totalScore = khmer + math + mis + coe;
let avg = totalScore / 4;

if (avg >= 60 && attendance >= 60) {
  console.log(
    `${studentName} has passed the exam with an average ${avg}% and attendance of ${attendance}`,
  );
} else {
  console.log(
    `${studentName} has failed the exam with an average ${avg}% and attendance of ${attendance} `,
  );
}

// discound amount
let totalPrice = 100;
let discound = 0;

if (totalPrice >= 100) {
  discound = 20;
} else if (totalPrice > 50) {
  discound = 10;
} else if (totalPrice > 5) {
  discound = 5;
} else {
  discound = 0;
}

let discoundAmount = (totalPrice * discound) / 100;
let finalPrice = totalPrice - discoundAmount;

console.log(`Price ${totalPrice}$`);
console.log(`discound ${discoundAmount}%`);
console.log(`finalPrice ${finalPrice}$`);
