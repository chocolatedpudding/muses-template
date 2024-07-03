"use strict";

const storage = localStorage; // ストレージをlocalStorageに設定

//
let typeText = document.getElementById("type");

document.addEventListener("DOMContentLoaded", () => {
  const storagedData = storage.store; // ストレージデータの取得
  type.textContent = storagedData; // id=typeに出力
});
