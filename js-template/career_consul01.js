document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton");

  nextButton.addEventListener("click", function (event) {
    const radioButtons = document.querySelectorAll('input[name="careerRadio"]');
    let isChecked = false;

    radioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        isChecked = true;
      }
    });

    if (!isChecked) {
      event.preventDefault();
      alert("次のページに進むには、いずれかのラジオボタンを選択してください。");
    }
  });
});
