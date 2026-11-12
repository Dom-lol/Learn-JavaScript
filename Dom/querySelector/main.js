// select element
const studentName = document.querySelector("#studentName");
const desc = document.querySelector(".desc");
const nameinp = document.querySelector("#nameinp");
const changename = document.querySelector("#changename");
const changecolor = document.querySelector("#changecolor");
const hideText = document.querySelector("#hideText");
const reset = document.querySelector("#reset");

// btn change Name
changename.addEventListener("click", function () {
  if (!nameinp.value.trim()) {
    alert("Can't be empty");

    nameinp.value = "";
  }

  if (nameinp.value.trim() !== "") {
    studentName.textContent = nameinp.value.trim();
  } else {
  }
});

// btn change color
changecolor.addEventListener("click", function () {
  studentName.style.color = "green";
});

// btn hide and show
hideText.addEventListener("click", function () {
  if (studentName.style.display === "none") {
    studentName.style.display = "";
  } else {
    studentName.style.display = "none";
  }
});

// btn reset
reset.addEventListener("click", function () {
  studentName.textContent = "Student Name";
  studentName.style.color = "black";
  studentName.style.display = "block";
  nameinp.value = "";
});
