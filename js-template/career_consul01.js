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

  storage.store = checkValue; // 'store'キーに入力値を記録
});

/*
let typeText = document.getElementById("type");

document.addEventListener("DOMContentLoaded", () => {
  const storagedData = storage.store; // ストレージデータの取得
  type.textContent = storagedData; // id=typeに出力
});
*/
