//
// const course = document.getElementsByClassName("course");
// console.log("Total Course: " + course.length);

// console.log("First Course: ", course[0]);
// console.log("Second Course: ", course[1]);
// console.log("Third Course: ", course[2]);
// console.log("Fourth Course: ", course[3]);

// console.log("First Course: ", course[0].textContent);
// console.log("Second Course: ", course[1].textContent);
// console.log("Third Course: ", course[2].textContent);
// console.log("Fourth Course: ", course[3].textContent);

// Exercise
// select element
const course = document.getElementsByClassName("course");

const changebtn = document.getElementById("changebtn");
const stylebtn = document.getElementById("stylebtn");
const reset = document.getElementById("reset");

// changebtn
changebtn.addEventListener("click", function () {
  course[0].textContent = "HTML5";
  course[1].textContent = "CSS";
  course[2].textContent = "JavaScript";
  course[3].textContent = "React JS";
});

// stylechange
stylebtn.addEventListener("click", function () {
  for (let c of course) {
    c.style.background = "red";
    c.style.color = "white";
  }
});

// reset
reset.addEventListener("click", function () {
  course[0].textContent = "html";
  course[1].textContent = "css";
  course[2].textContent = "javascript";
  course[3].textContent = "reatjs";

  for (let c of course) {
    c.style.backgroundColor = "";
    c.style.color = "black";
  }
});
