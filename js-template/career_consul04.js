"use strict";

const storage = localStorage; // ストレージをlocalStorageに設定

let typeText = document.getElementById("type");
let nameText = document.getElementById("person");
let timeText = document.getElementById("time");

document.addEventListener("DOMContentLoaded", () => {
  const typeStoragedData = storage.types; // ストレージデータの取得
  typeText.textContent = typeStoragedData; // id=typeに出力

  const nameStoragedData = storage.names; // ストレージデータの取得
  nameText.textContent = nameStoragedData; // id=typeに出力

  const timesStoragedData = storage.getItem("times");
  const datesStoragedData = storage.getItem("dates");
  timeText.textContent = datesStoragedData + "　　" + timesStoragedData; // id=typeに出力
});

//career_consul03のラジオボタン情報取得、数も取得
const consulContent = document.getElementById("contentDrop");
let checkButton = document.getElementById("nextButton04");

//次へボタンを押したら選択したドロップダウンの値を取得して、ローカルストレージに追加
checkButton.addEventListener("click", () => {
  let checkValue = consulContent.value;
  storage.setItem("contents", checkValue);

  storage.contents = checkValue; // 'contents'キーに入力値を記録
});

/*
fetch('careerData.json')
    .then(response => response.json())
    .then(jsonObject => {

        // JSONオブジェクトに追加
        jsonObject.type = typeStoragedData;
        jsonObject.name = nameStoragedData;
        jsonObject.data = dateStoragedData;
        jsonObject.time = timeStoragedData;
        jsonObject.content = contentStoragedData;

        // 更新したJSONオブジェクトをコンソールに表示
        console.log(jsonObject);
    })
    .catch(error => console.error('Error:', error));
    */
