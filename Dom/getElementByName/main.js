// let btn = document.getElementsByName("btnsubmit")[0];
// let output = document.getElementsByName("output")[0];
// let languages = document.getElementsByName("language");

// console.log(btn);

// // btn click
// btn.addEventListener("click", () => {
//   let select = false;

//   languages.forEach((language) => {
//     if (language.checked) {
//       select = true;
//       output.innerText = `You selected: ${language.value}`;
//     }
//   });
//   if (select === false) {
//     output.innerText = "please select a programming language";
//   }
// });

// ex
let btn = document.getElementsByName("btnsubmit")[0];
let output = document.getElementsByName("output")[0];
let answers = document.getElementsByName("answer");
let answer2 = document.getElementsByName("answer2");

btn.addEventListener("click", () => {
  let select = false;
  let correcValue1 = "212";
  let correcValue2 = "198";

  answers.forEach((answer, answer2) => {
    if (answer.checked && answer2.checked) {
      select = true;

      if (answer.value === correcValue1) {
        output.innerText = "True! Correct answer";
      } else {
        output.innerText = "False you choose: " + answer.value;
      }
    }
  });

  answers.forEach((answer) => {
    if (answer.checked === 212) {
      output.innerText = "True";
    }
  });
  if (select === false) {
    output.innerText = "Please choose answer....";
  }
});
