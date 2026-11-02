// // exercise obj
// let student = {
//   name: "Chea Oudom",
//   age: 22,
//   study: {
//     major: "CS",
//     time: "Evening",
//     room: "G101",
//   },
// };

// console.log("Student :" + student.name);
// console.log(
//   "Study : " +
//     student.study.major +
//     ", " +
//     student.study.time +
//     ", " +
//     student.study.room,
// );

// // exercise if else
// let studentName = "Chea Oudom";
// let attendance = 100;

// // score
// let khmer = 90;
// let math = 88;
// let mis = 0;
// let coe = 65;

// let totalScore = khmer + math + mis + coe;
// let avg = totalScore / 4;

// if (avg >= 60 && attendance >= 60) {
//   console.log(
//     `${studentName} has passed the exam with an average ${avg}% and attendance of ${attendance}`,
//   );
// } else {
//   console.log(
//     `${studentName} has failed the exam with an average ${avg}% and attendance of ${attendance} `,
//   );
// }

// // discound amount
// let totalPrice = 100;
// let discound = 0;

// if (totalPrice >= 100) {
//   discound = 20;
// } else if (totalPrice > 50) {
//   discound = 10;
// } else if (totalPrice > 5) {
//   discound = 5;
// } else {
//   discound = 0;
// }

// let discoundAmount = (totalPrice * discound) / 100;
// let finalPrice = totalPrice - discoundAmount;

// console.log(`Price ${totalPrice}$`);
// console.log(`discound ${discoundAmount}%`);
// console.log(`finalPrice ${finalPrice}$`);

// // Login System
// let userRole = "staff";
// let passwd = "1234";
// let isBlocked = false;

// if (
//   (userRole === "admin" || userRole === "staff") &&
//   passwd == "1234" &&
//   !isBlocked
// ) {
//   console.log("Login Successful");
// } else {
//   console.log("Login failed");
// }

// // for loop
// for (j = 1; j <= 10; j++) {
//   console.log("មេគុណ " + j);
//   for (i = 1; i <= 10; i++) {
//     console.log(j + " * " + i + " = " + i * j);
//   }
//   console.log("___________");
// }
// // while loop
// let task = 1;
// let score = 0;

// while (score <= 100) {
//   score += 15;
//   console.log("Task : " + task);
//   console.log("Score : 15");
//   console.log("Total score " + score);
//   console.log("___________");
//   task++;
// }

// // login do while loop
// let correctPassword = "123";
// let password = "";
// let attempts = 0;

// do {
//   attempts++;
//   if (attempts === 1) {
//     password = "123";
//   } else if (attempts === 2) {
//     password = "1123";
//   } else {
//     password = "1232";
//   }
//   console.log("attempts : " + attempts);
//   if (password === correctPassword) {
//     console.log("Login Success");
//   } else {
//     console.log("Login Failed");
//   }
// } while (attempts < 3);

// if (password !== correctPassword) {
//   console.log("Ban Account");
// }

// // Check student result
// function checkStudentResult(name, score, attendance) {
//   let result;

//   if (score >= 60 && attendance >= 60) {
//     result = "passed";
//   } else {
//     result = "Failed";
//   }

//   console.log("Status:");
//   console.log(`Name : ${name}`);
//   console.log(`score : ${score}`);
//   console.log(`attendance : ${attendance}`);
//   console.log(`Result : ${result}`);
// }

// checkStudentResult("Chea Oudom", 100, 40);

// expression function
const calculateDiscount = function (name, price, qty) {
  let total = price * qty;
  let discound = 0;

  if (total >= 200) {
    discound = 20;
  } else if (total >= 100) {
    discound = 10;
  } else if (total >= 50) {
    discound = 5;
  } else {
    discound = 0;
  }

  let discoundamont = (total * discound) / 100;
  let finalPay = total - discoundamont;
  console.log("==============================");
  console.log(`Orders : `);
  console.log(`Product Name : ${name}`);
  console.log(`price : ${price}R`);
  console.log(`qty : ${qty}`);
  console.log(`discound : ${discound}% = ${discoundamont}`);
  console.log(`Total payment : ${total}`);
  console.log(`Finaly Payment : ${finalPay}`);
};

calculateDiscount("Vita  l", 2000, 10);

// arrow function
const calculateSalary = (name, salary, overtimeHoures) => {
  let overtimePay = overtimeHoures * 5;
  let bonus = 0;

  if (overtimeHoures >= 20) {
    bonus = 30;
  } else if (overtimeHoures >= 10) {
    bonus = 15;
  } else {
    bonus = 0;
  }

  let finalSalaryPay = salary + overtimePay + bonus;

  console.log(" ====== Status ====== ");
  console.log(`Name : ${name}`);
  console.log(`salary : ${salary}`);
  console.log(`overtimeHoures : ${overtimeHoures}h`);
  console.log(`Over Time Houres : ${overtimePay}$`);
  console.log(`Bonus : ${bonus}$`);
  console.log(`Final Salary : ${finalSalaryPay}$`);
};

calculateSalary("Chea Oudom", 2000, 10);

// obj
let Product = {
  name: "Vital",
  price: 2000,
  quntity: 5,
};

let total = Product.price * Product.quntity;
console.log(" ================ ");
console.log(`Product Name: ${Product.name}`);
console.log(`Price: ${Product.price}`);
console.log(`Quantity: ${Product.quntity}`);
console.log(`Total price: ${total}`);

// Student result system
let student = {
  name: "Bunyong",
  mis: 59,
  code: 49,
  math: 88,

  resultCal: function () {
    let totalScore = this.mis + this.code + this.math;
    let avg = totalScore / 3;
    let result;

    if (avg >= 80) {
      result = "Excellent";
    } else if (avg >= 60) {
      result = "Good";
    } else {
      result = "Failed";
    }
    console.log(" ================ ");
    console.log(`Student Name: ${this.name}`);
    console.log(`totalScore: ${totalScore}`);
    console.log(`average: ${avg}`);
    console.log(`Result: ${result}`);
  },
};
student.resultCal();

// Constructor
function product(name, price, qty) {
  this.name = name;
  this.price = price;
  this.qty = qty;

  this.showProduct = function () {
    let total = this.price * this.qty;

    console.log(" ================ ");
    console.log(`Product name: ${this.name}`);
    console.log(`Price: ${this.price}`);
    console.log(`qty: ${qty}`);
    console.log(`Total: ${total}`);
    console.log(`_______________________________________`);
  };
}

product1 = new product("T-Shirt", 20, 2);
product2 = new product("Skirt", 15, 10);
product1.showProduct();
product2.showProduct();

// Date
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

console.log(day + "/" + month + "/" + year);

// Student result system array with loop
let Students = [
  {
    name: "Chea Oudom",
    mis: 98,
    code: 90,
    data: 99,
  },
  {
    name: "Srun",
    mis: 78,
    code: 90,
    data: 89,
  },
  {
    name: "Thida",
    mis: 98,
    code: 100,
    data: 9,
  },
];

for (let i = 0; i < Students.length; i++) {
  let totalScore = Students[i].mis + Students[i].code + Students[i].data;
  let avg = totalScore / 3;
  let rel;
  let grade;

  if (avg >= 50) {
    rel = "passed";
  } else {
    rel = "Failed";
  }

  if (avg >= 90) {
    grade = "Grade A";
  } else if (avg >= 80) {
    grade = "Grade B";
  } else if (avg >= 70) {
    grade = "Grade C";
  } else if (avg >= 60) {
    grade = "Grade D";
  } else if (avg >= 50) {
    grade = "Grade E";
  } else {
    grade = " Grade F";
  }

  console.log("-----------------------------------------");
  console.log("Student No: " + (i + 1));
  console.log("Student Name: " + Students[i].name);
  console.log("MIS: " + Students[i].mis);
  console.log("Code: " + Students[i].code);
  console.log("Data: " + Students[i].data);
  console.log("total Score :" + totalScore);
  console.log("average: " + avg);
  console.log("Grade: " + grade);
  console.log("Result: " + rel);
  console.log("-----------------------------------------");
}
