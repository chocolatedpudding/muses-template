"use strict";

const storage = localStorage; // ストレージをlocalStorageに設定

//
let typeText = document.getElementById("type");
let nameText = document.getElementById("person");
let contentText = document.getElementById("content");

document.addEventListener("DOMContentLoaded", () => {
  const typeStoragedData = storage.types; // ストレージデータの取得
  typeText.textContent = typeStoragedData; // id=typeに出力

  const nameStoragedData = storage.names; // ストレージデータの取得
  nameText.textContent = nameStoragedData; // id=typeに出力

  const contentStoragedData = storage.getItem("contents");
  //const contentStoragedData = storage.contents; // ストレージデータの取得
  contentText.textContent = contentStoragedData; // id=typeに出力
});

/*
document.addEventListener("DOMContentLoaded", () => {
  const nameStoragedData = storage.names; // ストレージデータの取得
  nameText.textContent = nameStoragedData; // id=typeに出力
});

document.addEventListener("DOMContentLoaded", () => {
  const contentStoragedData = storage.contents; // ストレージデータの取得
  contentText.textContent = contentStoragedData; // id=typeに出力
});
*/
