"use strict";

const storage = localStorage; // ストレージをlocalStorageに設定

//career_consul01のラジオボタン情報取得、数も取得
const consulType = document.getElementsByName("careerRadio");
let len = consulType.length;

let checkButton = document.getElementById("nextButton");

//次へボタンを押したら選択したラジオボタンの値を取得して、ローカルストレージに追加
checkButton.addEventListener("click", () => {
  let checkValue = "";
  for (let i = 0; i < len; i++) {
    if (consulType.item(i).checked) {
      checkValue = consulType.item(i).value;
    }
  }

  storage.types = checkValue; // 'store'キーに入力値を記録
});

//career_consul03のに関して
let checkButton03 = document.getElementById("nextButton03");
const consulType03 = document.getElementsByName("nameRadio");
let len03 = consulType03.length;

checkButton03.addEventListener("click", () => {
  let checkValue03 = "";
  for (let i = 0; i < len03; i++) {
    if (consulType03.item(i).checked) {
      checkValue03 = consulType03.item(i).value;
    }
  }

  storage.names = checkValue03; // 'store'キーに入力値を記録
});
