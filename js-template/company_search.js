async function getCompanyInfo() {
  const companyName = document
    .getElementById("companyName")
    .value.toLowerCase();

  // 入力が空の場合はアラートを表示
  if (!companyName) {
    alert("検索条件が入力されていません。検索条件を入力してください。");
    return;
  }

  const response = await fetch("company.json");
  const data = await response.json();

  const matchingCompanies = data.filter((company) =>
    company.name.toLowerCase().includes(companyName)
  );

  if (matchingCompanies.length > 0) {
    displayCompanyInfo(matchingCompanies);
  } else {
    document.getElementById("companyInfo").innerText =
      "企業情報が見つかりませんでした。";
  }
}

function displayCompanyInfo(companies) {
  const companyInfoDiv = document.getElementById("companyInfo");
  companyInfoDiv.innerHTML = companies
    .map(
      (company) => `
      <div class="company">
          <h2>${company.name}</h2>
          <p>業種: ${company.industry}</p>
          <p>所在地: ${company.location}</p>
          <p>従業員数: ${company.employees}</p>
      </div>
  `
    )
    .join("");
}
