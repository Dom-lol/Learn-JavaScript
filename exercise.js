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
