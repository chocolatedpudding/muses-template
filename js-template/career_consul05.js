"use strict";

const storage = localStorage; // ストレージをlocalStorageに設定

//
let typeText = document.getElementById("type");
let nameText = document.getElementById("person");
let timeText = document.getElementById("time");
let contentText = document.getElementById("content");

document.addEventListener("DOMContentLoaded", () => {
  const typeStoragedData = storage.types; // ストレージデータの取得
  typeText.textContent = typeStoragedData; // id=typeに出力

  const nameStoragedData = storage.names; // ストレージデータの取得
  nameText.textContent = nameStoragedData; // id=typeに出力

  const timesStoragedData = storage.getItem("times");
  const datesStoragedData = storage.getItem("dates");
  timeText.textContent = datesStoragedData + "　　" + timesStoragedData; // id=typeに出力

  const contentStoragedData = storage.getItem("contents");
  contentText.textContent = contentStoragedData; // id=typeに出力
});
