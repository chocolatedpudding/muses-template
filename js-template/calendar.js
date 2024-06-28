"use strict";

const weeks = ["日", "月", "火", "水", "木", "金", "土"];

const date = new Date();
//任意の日付を設定する方法は、引数の中に数字をいれます ex:new Data(2020.11.11)
//date = new Date();のnewはオブジェクトを初期化するキーワードです。

const year = date.getFullYear();
//dateオブジェクトが持つ値から、年の値を取得します。

const month = date.getMonth() + 1;
//0 が年の最初の月を示すので、+1を記載します。+1を記載しないと今日が11月だった場合、10月と表示されてしまいます。

const today = date.getDate();
//今日の日付を取得します。
//ちなみに、getDateとgetDayの違いは、getDate：日を取得する getDay：曜日を０〜６の値で取得するです。曜日か日付かってことかな。

const startDate = new Date(year, month - 1, 1);
//月の最初の日を取得します。

const endDate = new Date(year, month, 0);
//月の最後の日を取得します。
//何をやっているのかというと、日付に0を設定し、該当月のの0日（つまり、前月末）にしてます。

const endDayCount = endDate.getDate();
//月の末日

const startDay = startDate.getDay();
//月の最初の日の曜日を取得

let dayCount = 1;
//日にちのカウント 何日から始めるかを決めます。0にすると、カレンダーに0から始まります。

let calendarHtml = ""; // HTMLを組み立てる変数

calendarHtml += "<p>前　　" + year + "年" + month + "月" + "　　次</p>";
calendarHtml += "<table>";

//曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
  calendarHtml += "<td>" + "" + weeks[i] + "　" + "</td>";
  //これで、横の配列（行）ができます。
}

for (let w = 0; w < 6; w++) {
  calendarHtml += "<tr>";
  //これで、縦の配列（列）ができます。

  //それぞれの枠<td>をどうするか決めます。
  for (let d = 0; d < 7; d++) {
    if (w == 0 && d < startDay) {
      //1行目で1日の曜日の前
      calendarHtml += "<td></td>";
    } else if (dayCount > endDayCount) {
      //末尾の日数を超えた
      calendarHtml += "<td></td>";
    } else if (dayCount === today) {
      //今日だったら、色を変える指定をします（class="today:cssにて色指定）。
      calendarHtml +=
        "<td class='today'><a href='./career_consul03.html'>" +
        dayCount +
        "</a></td>";
      dayCount++;
    } else if (dayCount < today) {
      calendarHtml += "<td>" + dayCount + "</td>";
      dayCount++;
    } else {
      calendarHtml +=
        "<td><a href='./career_consul03.html'>" + dayCount + "</a></td>";
      dayCount++;
    }
  }
  calendarHtml += "</tr>";
}
calendarHtml += "</table>";

document.querySelector("#calendar").innerHTML = calendarHtml;
//ここの'#calendar'が、HTMLの< div id="calendar">< /div>にあたります。
