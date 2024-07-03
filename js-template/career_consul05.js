"use strict";

const storage = localStorage; // ストレージをlocalStorageに設定

//
let typeText = document.getElementById("type");

document.addEventListener("DOMContentLoaded", () => {
  const typeStoragedData = storage.types; // ストレージデータの取得
  typeText.textContent = typeStoragedData; // id=typeに出力
});

let nameText = document.getElementById("person");

document.addEventListener("DOMContentLoaded", () => {
  const nameStoragedData = storage.names; // ストレージデータの取得
  nameText.textContent = nameStoragedData; // id=typeに出力
});
