async function getCompanyInfo() {
  const companyName = document
    .getElementById("companyName")
    .value.toLowerCase();
  const companyCommonName = document
    .getElementById("companyCommonName")
    .value.toLowerCase();

  // 入力が両方とも空の場合はアラートを表示
  if (!companyName && !companyCommonName) {
    alert("検索条件が入力されていません。検索条件を入力してください。");
    return;
  }

  const response = await fetch("company.json");
  const data = await response.json();

  const matchingCompanies = data.filter((company) => {
    const nameMatch = company.name.toLowerCase().includes(companyName);
    const commonMatch = company.common.toLowerCase() === companyCommonName;
    if (companyName && companyCommonName) {
      return nameMatch && commonMatch;
    } else if (companyName) {
      return nameMatch;
    } else if (companyCommonName) {
      return commonMatch;
    }
    return false;
  });

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
