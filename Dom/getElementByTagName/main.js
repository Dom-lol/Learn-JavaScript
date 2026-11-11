// const paragrahps = document.getElementsByTagName("p");
// console.log((paragrahps[0].textContent = "Hello dom"));
// for (let p of paragrahps) {
//   p.style.fontSize = "50px";
// }

const paragrahps = document.getElementsByTagName("p");
console.log("Total paragrahps : " + paragrahps.length);

console.log("First paragrahp: ", paragrahps[0]);
// console.log("Change text: ", (paragrahps[0].textContent = "HEllo Dom"));

const showbtn = document.getElementById("showbtn");
showbtn.addEventListener("click", function () {
  for (let p of paragrahps) {
    console.log(p.textContent);
  }
});

// btn change text
const changebtn = document.getElementById("changebtn");
changebtn.addEventListener("click", function () {
  paragrahps[0].textContent = "HTML5";
  paragrahps[1].textContent = "CSS";
  paragrahps[2].textContent = "JavaScript";
  paragrahps[3].textContent = "Reat JS";
});

// stylebtn
const stylebtn = document.getElementById("stylebtn");
stylebtn.addEventListener("click", function () {
  paragrahps[0].style.color = "red";
  paragrahps[1].style.color = "green";
  paragrahps[2].style.color = "blue";
  paragrahps[3].style.color = "brown";
});

// reset
const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  paragrahps[0].textContent = "html";
  paragrahps[1].textContent = "css";
  paragrahps[2].textContent = "javascript";
  paragrahps[3].textContent = "reatjs";

  paragrahps[0].style.color = "black";
  paragrahps[1].style.color = "black";
  paragrahps[2].style.color = "black";
  paragrahps[3].style.color = "black";
});
