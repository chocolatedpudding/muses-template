"use strict";
/*
let elements = document.getElementsByName("nameRadio");
let len = elements.length;
let checkValue = "";

for (let i = 0; i < len; i++) {
  if (elements.item(i).checked) {
    checkValue = elements.item(i).value;
  }
}
*/

function butotnClick() {
  let checkValue = "";

  for (let i = 0; i < len; i++) {
    if (careerRadio.item(i).checked) {
      checkValue = careerRadio.item(i).value;
    }
  }
  console.log("選択されているのは " + checkValue + " です");
}

let careerRadio = document.getElementsByName("careerRadio");
let len = careerRadio.length;
careerRadio[0].checked = true;

let checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", butotnClick);
