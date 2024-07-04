"use strict";

const storage = localStorage; // ストレージをlocalStorageに設定

//career_consul03のラジオボタン情報取得、数も取得
const consulContent = document.getElementById("contentDrop");
let checkButton = document.getElementById("nextButton04");

//次へボタンを押したら選択したドロップダウンの値を取得して、ローカルストレージに追加
checkButton.addEventListener("click", () => {
  let checkValue = consulContent.value;
  storage.setItem("contents", checkValue);

  storage.contents = checkValue; // 'contents'キーに入力値を記録
});
