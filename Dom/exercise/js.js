// Select Element
// name
const nameinp = document.querySelector("#nameinp");
const fullName = document.querySelector("#fullName");

// math
const mathinp = document.querySelector("#mathinp");
const math = document.querySelector("#math");

// khmer
const khmerinp = document.querySelector("#khmerinp");
const khmer = document.querySelector("#khmer");

// code
const codeinp = document.querySelector("#codeinp");
const code = document.querySelector("#code");

// database
const datainp = document.querySelector("#datainp");
const database = document.querySelector("#database");

// submit btn, totalScore, result
const submit = document.querySelector("#submit");
const totalScore = document.querySelector("#totalScore");
const result = document.querySelector("#result");

// addEvent click on submit Name
submit.addEventListener("click", () => {
  const khmerVal = khmerinp.value;
  const mathVal = mathinp.value;
  const codeVal = codeinp.value;
  const dataVal = datainp.value;

  khmer.textContent = khmerVal;
  math.textContent = mathVal;
  code.textContent = codeVal;
  database.textContent = dataVal;

  const sum =
    Number(khmerVal) + Number(mathVal) + Number(codeVal) + Number(dataVal);

  const totalScoreElement = document.querySelector("#totalScore");

  if (nameinp.value.trim() !== "" || totalScoreElement) {
    fullName.textContent = nameinp.value.trim();
    totalScoreElement.textContent = sum;
  } else if (!nameinp.value.trim() !== "") {
    alert("Please enter");
  } else {
    console.log("Error");
  }
});
