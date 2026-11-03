// getElementById
// select element
const textheader = document.getElementById("textheader");
const text = document.getElementById("text");
const changetext = document.getElementById("changetext");
const changeColor = document.getElementById("changeColor");
const reset = document.getElementById("reset");

// Change text
changetext.addEventListener("click", function () {
  textheader.textContent = "JavaScript DOM";
  text.textContent = "Change by textContent";
});

// Change Color
changeColor.addEventListener("click", function () {
  textheader.style.color = "red";
  text.style.color = "blue";
});

// Reset
reset.addEventListener("click", function () {
  textheader.textContent = "Hello DOM";
  text.textContent = "This is getElementById";

  textheader.style.color = "black";
  text.style.color = "black";
});
