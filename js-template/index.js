"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  // HTMLドキュメントの読み込みが完了したときに発生する DOMContentLoaded イベントを待ち受け、その後に非同期で実行する関数を定義。
  const username = sessionStorage.username; // Webブラウザのセッションストレージから`username`というキーで保存されている値を取得して、`username`という変数に格納。
  if (!username) {
    // usernameに入力がなかったら
    window.alert("ログインしてください"); // アラートを上に出す
    location.href = "login.html"; // login.htmlに移動する
  }

  document.querySelector("#user_name span").textContent = username; //index.htmlのid="user_name"を持つ要素（div）の中にあるspan要素を取得し、usernameを格納する

  const res = await fetch("data.json"); // fetch 関数を使用して、サーバーから"data.json"のファイルを非同期で取得
  const obj = await res.json(); // res.json() を使用してレスポンスをJSON形式に解析

  document
    .querySelectorAll("span.unread")
    .forEach((el) => (el.textContent = obj.list.length)); // class="unread"をもつspan要素を取得し、objオブジェトのlistプロパティ（data.json）の長さをspanのテキストとして表示する
});

/*
"DOMContentLoaded"について
HTMLドキュメントの読み込みが完了したときに発生するDOMContentLoaded イベントを待ち受け、その後に非同期で実行する関数を定義。このイベントはHTMLドキュメントの解析が完了し、すべてのDOMツリーが構築された後に発生する。つまり、すべてのHTML要素が利用可能になり、JavaScriptコードがそれらを操作する準備ができているときにこのイベントが発火する。

fetch 関数について
fetch 関数は、指定されたURLからリソースを取得するためのブラウザのAPI。この関数はPromiseを返し、HTTPリクエストのレスポンスを表すResponseオブジェクトを解決することができる。
fetch で取得したレスポンスオブジェクト res の json() メソッドを呼び出すことで、HTTPレスポンスの本文を JSON 形式に解析。そして、その結果を obj 変数に格納している。
*/
