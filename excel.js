/**
 * Excel Spreadsheet Controller & Renderer
 * Jan Suraaj Party - Magadh Zone Master Database
 */

let currentSheet = "master"; // 'master', 'gaya', 'aurangabad', 'jehanabad', 'arwal', 'officials', 'caste'
let searchQuery = "";
let districtFilter = "all";

// Utility function to format Indian currency/numbers
function formatNumber(num) {
  if (!num) return "--";
  return Number(num).toLocaleString("en-IN");
}

function showToast(msg) {
  const existing = document.querySelector(".excel-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "excel-toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${msg}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function copyText(text, label = "डेटा") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} कॉपी हो गया: ${text}`);
    updateFormulaBar(`COPIED: ${text}`);
  });
}

function updateFormulaBar(text, cellRef = "fx") {
  const formulaInput = document.getElementById("formula-input");
  const nameBox = document.getElementById("name-box");
  if (formulaInput) formulaInput.textContent = text;
  if (nameBox) nameBox.textContent = cellRef;
}

function getPartyTag(party) {
  if (!party) return "";
  const p = party.toUpperCase().trim();
  let cls = "tag-ind";
  if (p.includes("BJP")) cls = "tag-bjp";
  else if (p.includes("RJD")) cls = "tag-rjd";
  else if (p.includes("JDU")) cls = "tag-jdu";
  else if (p.includes("HAM")) cls = "tag-ham";
  else if (p.includes("JSP")) cls = "tag-jsp";
  else if (p.includes("INC")) cls = "tag-inc";
  else if (p.includes("LJP")) cls = "tag-ljp";
  else if (p.includes("BSP")) cls = "tag-bsp";
  return `<span class="party-tag ${cls}">${party}</span>`;
}

/**
 * Render Master AC Spreadsheet Table
 */
function renderAcSheet(filterDistrict = null) {
  const container = document.getElementById("excel-table-container");
  if (!container || !window.magadhZoneData) return;

  let list = window.magadhZoneData.assemblies;
  if (filterDistrict && filterDistrict !== "all") {
    list = list.filter(a => a.district === filterDistrict);
  }

  if (districtFilter !== "all" && !filterDistrict) {
    list = list.filter(a => a.district === districtFilter);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(a => {
      const casteBreakdownText = a.acCasteData && a.acCasteData.breakdown 
        ? a.acCasteData.breakdown.map(b => b.group + " " + b.sub).join(" ") 
        : "";
      const searchPool = [
        a.acName,
        a.acNameHi,
        a.districtHi,
        a.districtEn,
        a.lokSabha,
        a.totalVoters,
        a.results.winner.name,
        a.results.winner.party,
        a.results.winner.caste,
        a.results.runnerUp.name,
        a.results.runnerUp.party,
        a.jspCandidate.name,
        a.jspCandidate.nameHi,
        a.jspCandidate.caste,
        a.jspCandidate.phone,
        a.jspCandidate.position,
        casteBreakdownText
      ].join(" ").toLowerCase();

      return searchPool.includes(q);
    });
  }

  let html = `
    <table class="excel-table" id="main-spreadsheet">
      <thead>
        <tr>
          <th class="col-row-header">#</th>
          <th>क्र.सं. (A)</th>
          <th>ज़िला (B)</th>
          <th>विधानसभा क्षेत्र (AC) (C)</th>
          <th>आरक्षण (D)</th>
          <th>लोकसभा (E)</th>
          <th>कुल मतदाता (F)</th>
          <th>विजेता विधायक (G)</th>
          <th>विजेता दल (H)</th>
          <th>विजेता जाति (I)</th>
          <th>विजेता मत (J)</th>
          <th>निकटतम प्रतिद्वंद्वी (K)</th>
          <th>2nd दल (L)</th>
          <th>2nd मत (M)</th>
          <th>जीत का अंतर (Margin) (N)</th>
          <th class="jsp-highlight">जन सुराज प्रत्याशी (O)</th>
          <th class="jsp-highlight">JSP जाति (P)</th>
          <th class="jsp-highlight">JSP मोबाइल (Q)</th>
          <th class="jsp-highlight">JSP मत (R)</th>
          <th class="jsp-highlight">JSP स्थान (S)</th>
          <th>प्रत्याशी पृष्ठभूमि (Bio) (T)</th>
          <th>विधानसभा जातीय समीकरण (AC Caste Demographics) (U)</th>
        </tr>
      </thead>
      <tbody>
  `;

  list.forEach((ac, idx) => {
    const res = ac.results;
    const jsp = ac.jspCandidate;
    const margin = (res.winner.votes && res.runnerUp.votes) ? (res.winner.votes - res.runnerUp.votes) : "--";

    // Format caste breakdown string
    let casteStr = "--";
    if (ac.acCasteData && ac.acCasteData.breakdown) {
      casteStr = ac.acCasteData.breakdown.map(b => `<strong>${b.group}:</strong> ${b.sub}`).join(" | ");
    }

    // Format profile string
    const bioStr = jsp.profile ? jsp.profile.join(" • ") : "--";

    html += `
      <tr data-ac-id="${ac.id}">
        <td class="row-num">${idx + 1}</td>
        <td class="cell-num">${idx + 1}</td>
        <td class="cell-bold">${ac.districtHi}</td>
        <td class="cell-bold">${ac.acNameHi} <span style="color:#6B7280; font-weight:normal;">(${ac.acName})</span></td>
        <td>${ac.isSC ? '<span style="color:#7C3AED; font-weight:bold;">SC</span>' : 'GEN'}</td>
        <td>${ac.lokSabha}</td>
        <td class="cell-num cell-bold">${ac.totalVoters || '--'}</td>
        <td class="cell-bold">${res.winner.name}</td>
        <td>${getPartyTag(res.winner.party)}</td>
        <td>${res.winner.caste || '--'}</td>
        <td class="cell-num cell-bold">${formatNumber(res.winner.votes)}</td>
        <td>${res.runnerUp.name}</td>
        <td>${getPartyTag(res.runnerUp.party)}</td>
        <td class="cell-num">${formatNumber(res.runnerUp.votes)}</td>
        <td class="cell-num" style="color: #DC2626; font-weight: 600;">+${formatNumber(margin)}</td>
        <td class="cell-bold jsp-highlight">${jsp.nameHi} <span style="font-weight:normal; font-size:11px;">(${jsp.name})</span></td>
        <td><span class="caste-chip">${jsp.caste}</span></td>
        <td><a href="tel:+91${jsp.phone}" class="phone-clickable" onclick="copyText('${jsp.phone}', '${jsp.name}'); return false;">${jsp.phone}</a></td>
        <td class="cell-num cell-bold jsp-highlight">${formatNumber(jsp.votes)}</td>
        <td class="cell-bold" style="color: #B45309;">${jsp.position}</td>
        <td style="font-size: 11px; max-width: 260px; color: #4B5563;">${bioStr}</td>
        <td class="caste-breakdown-cell">${casteStr}</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  container.innerHTML = html;
  attachCellClickEvents();
}

/**
 * Render Zonal Leaders Spreadsheet
 */
function renderOfficialsSheet() {
  const container = document.getElementById("excel-table-container");
  if (!container || !window.magadhZoneData) return;

  const leaders = [
    { post: "प्रभारी", name: "श्री नंद किशोर यादव", phone: "7004535770", district: "औरंगाबाद", cat: "नेतृत्व" },
    { post: "संगठन प्रभारी", name: "श्री जावेद ख़ान", phone: "9455254230", district: "गया", cat: "संगठन" },
    { post: "महिला प्रकोष्ठ प्रभारी", name: "श्रीमती शगुफ्ता यासमीन", phone: "8709795157", district: "औरंगाबाद", cat: "प्रकोष्ठ" },
    { post: "युवा प्रकोष्ठ प्रभारी", name: "श्री अमित शर्मा", phone: "8789772651", district: "गया", cat: "प्रकोष्ठ" },
    { post: "किसान प्रकोष्ठ प्रभारी", name: "श्री गजेन्द्र सिंह", phone: "9934423441", district: "अरवल", cat: "प्रकोष्ठ" },
    { post: "बुद्धिजीवी प्रकोष्ठ प्रभारी", name: "श्री बिनोद प्रसाद सिंह", phone: "9507975348", district: "जहानाबाद", cat: "प्रकोष्ठ" },
    { post: "व्यवसायिक प्रकोष्ठ प्रभारी", name: "श्री संतोष साव", phone: "8102492562", district: "गया", cat: "प्रकोष्ठ" },
    { post: "ओबीसी प्रकोष्ठ प्रभारी", name: "श्री सुभाष चन्द्र बोस", phone: "7488090309", district: "गया", cat: "प्रकोष्ठ" },
    { post: "कर्पूरी मंच प्रभारी", name: "श्री बिरेन्द्र चन्द्रवंशी", phone: "9934433895", district: "अरवल", cat: "मंच" },
    { post: "अम्बेडकर मंच प्रभारी", name: "श्री श्यामबली पासवान", phone: "6287631605", district: "औरंगाबाद", cat: "मंच" },
    { post: "अल्पसंख्यक प्रकोष्ठ प्रभारी", name: "श्री आरिफ रज़ा", phone: "9934910224", district: "औरंगाबाद", cat: "प्रकोष्ठ" },
    { post: "मीडिया प्रभारी", name: "श्री शशांक शेखर दूबे", phone: "8539097015", district: "औरंगाबाद", cat: "मीडिया" }
  ];

  let html = `
    <table class="excel-table">
      <thead>
        <tr>
          <th class="col-row-header">#</th>
          <th>क्र.सं. (A)</th>
          <th>दायित्व / पद (Designation) (B)</th>
          <th>पदाधिकारी का नाम (Official Name) (C)</th>
          <th>गृह ज़िला (District) (D)</th>
          <th>मोबाइल नंबर (Phone) (E)</th>
          <th>प्रकोष्ठ वर्ग (Category) (F)</th>
          <th>प्रमंडल (Zone) (G)</th>
        </tr>
      </thead>
      <tbody>
  `;

  leaders.forEach((l, idx) => {
    html += `
      <tr>
        <td class="row-num">${idx + 1}</td>
        <td class="cell-num">${idx + 1}</td>
        <td class="cell-bold" style="color: #0369A1;">${l.post}</td>
        <td class="cell-bold">${l.name}</td>
        <td>${l.district}</td>
        <td><a href="tel:+91${l.phone}" class="phone-clickable" onclick="copyText('${l.phone}', '${l.name}'); return false;">${l.phone}</a></td>
        <td><span class="caste-chip">${l.cat}</span></td>
        <td>मगध प्रमंडल</td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
  attachCellClickEvents();
}

/**
 * Render District Whole Caste Census Spreadsheet
 */
function renderDistrictCasteSheet() {
  const container = document.getElementById("excel-table-container");
  if (!container || !window.magadhZoneData) return;

  const districts = ["gaya", "aurangabad", "jehanabad", "arwal"];

  let html = `
    <table class="excel-table">
      <thead>
        <tr>
          <th class="col-row-header">#</th>
          <th>क्र.सं. (A)</th>
          <th>ज़िला (District) (B)</th>
          <th>कुल सीटें (C)</th>
          <th>प्रमुख वर्ग (Category) (D)</th>
          <th>प्रतिशत (%) (E)</th>
          <th>प्रमुख उप-जातियां व प्रतिशत (Sub-Castes Breakdown) (F)</th>
          <th>डेटा स्रोत / स्थिति (G)</th>
        </tr>
      </thead>
      <tbody>
  `;

  let rowCounter = 1;
  districts.forEach(distKey => {
    const dist = window.magadhZoneData.districts[distKey];
    dist.casteDemographics.categories.forEach((cat, idx) => {
      const subStr = cat.subCastes ? cat.subCastes.map(s => `${s.name}: ${s.pct}`).join(", ") : "--";
      html += `
        <tr>
          <td class="row-num">${rowCounter}</td>
          <td class="cell-num">${rowCounter++}</td>
          <td class="cell-bold">${idx === 0 ? `<strong>${dist.nameHi} (${dist.nameEn})</strong>` : ''}</td>
          <td class="cell-num">${idx === 0 ? `${dist.totalACs} ACs` : ''}</td>
          <td class="cell-bold" style="color: ${cat.color};">${cat.group}</td>
          <td class="cell-num cell-bold" style="background: #FEF3C7;">${cat.percentage}</td>
          <td style="font-size: 11px;">${subStr}</td>
          <td>${dist.casteDemographics.status}</td>
        </tr>
      `;
    });
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
  attachCellClickEvents();
}

/**
 * Cell Click to Show in Formula Bar
 */
function attachCellClickEvents() {
  document.querySelectorAll(".excel-table td").forEach((td) => {
    td.addEventListener("click", () => {
      document.querySelectorAll(".excel-table td").forEach(c => c.style.outline = "none");
      td.style.outline = "2px solid #107C41";
      const colIndex = td.cellIndex;
      const colLetter = String.fromCharCode(65 + Math.max(0, colIndex - 1));
      const rowNum = td.closest("tr").rowIndex;
      updateFormulaBar(td.textContent.trim(), `${colLetter}${rowNum}`);
    });
  });
}

/**
 * Export Master CSV
 */
function exportCsv() {
  if (!window.magadhZoneData) return;

  const headers = [
    "क्र.सं.",
    "ज़िला",
    "विधानसभा",
    "आरक्षण",
    "लोकसभा",
    "कुल मतदाता",
    "विजेता विधायक",
    "विजेता दल",
    "विजेता जाति",
    "विजेता मत",
    "निकटतम प्रतिद्वंद्वी",
    "2nd दल",
    "2nd मत",
    "जीत का अंतर",
    "जन सुराज प्रत्याशी",
    "JSP जाति",
    "JSP फ़ोन",
    "JSP मत",
    "JSP स्थान",
    "प्रत्याशी पृष्ठभूमि",
    "विधानसभा जातीय समीकरण"
  ];

  const rows = window.magadhZoneData.assemblies.map((ac, i) => {
    const res = ac.results;
    const jsp = ac.jspCandidate;
    const margin = (res.winner.votes && res.runnerUp.votes) ? (res.winner.votes - res.runnerUp.votes) : "";
    const bio = jsp.profile ? jsp.profile.join(" | ") : "";
    const caste = ac.acCasteData && ac.acCasteData.breakdown ? ac.acCasteData.breakdown.map(b => `${b.group}: ${b.sub}`).join(" ; ") : "";

    return [
      i + 1,
      `"${ac.districtHi}"`,
      `"${ac.acNameHi} (${ac.acName})"`,
      `"${ac.isSC ? 'SC' : 'GEN'}"`,
      `"${ac.lokSabha}"`,
      `"${ac.totalVoters || ''}"`,
      `"${res.winner.name}"`,
      `"${res.winner.party}"`,
      `"${res.winner.caste || ''}"`,
      `"${res.winner.votes}"`,
      `"${res.runnerUp.name}"`,
      `"${res.runnerUp.party}"`,
      `"${res.runnerUp.votes}"`,
      `"${margin}"`,
      `"${jsp.nameHi} (${jsp.name})"`,
      `"${jsp.caste}"`,
      `"${jsp.phone}"`,
      `"${jsp.votes}"`,
      `"${jsp.position}"`,
      `"${bio.replace(/"/g, '""')}"`,
      `"${caste.replace(/"/g, '""')}"`
    ];
  });

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "Jan_Suraaj_Magadh_Zone_21_ACs_Master_Excel.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Excel CSV फ़ाइल सफलतापूर्वक डाउनलोड हुई!");
}

/**
 * Switch Sheet Tab
 */
function switchSheet(sheetKey) {
  currentSheet = sheetKey;
  document.querySelectorAll(".sheet-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.sheet === sheetKey);
  });

  if (sheetKey === "master") {
    renderAcSheet();
  } else if (sheetKey === "gaya") {
    renderAcSheet("gaya");
  } else if (sheetKey === "aurangabad") {
    renderAcSheet("aurangabad");
  } else if (sheetKey === "jehanabad") {
    renderAcSheet("jehanabad");
  } else if (sheetKey === "arwal") {
    renderAcSheet("arwal");
  } else if (sheetKey === "officials") {
    renderOfficialsSheet();
  } else if (sheetKey === "caste") {
    renderDistrictCasteSheet();
  }
}

/**
 * Generate Master HTML for Printing All Pages at Once (District-by-District & Tables)
 */
function printAllPages() {
  const printContainer = document.getElementById("excel-print-all-container");
  if (!printContainer || !window.magadhZoneData) return;

  const data = window.magadhZoneData;

  const leaders = [
    { post: "प्रभारी", name: "श्री नंद किशोर यादव", phone: "7004535770", district: "औरंगाबाद", cat: "नेतृत्व" },
    { post: "संगठन प्रभारी", name: "श्री जावेद ख़ान", phone: "9455254230", district: "गया", cat: "संगठन" },
    { post: "महिला प्रकोष्ठ प्रभारी", name: "श्रीमती शगुफ्ता यासमीन", phone: "8709795157", district: "औरंगाबाद", cat: "प्रकोष्ठ" },
    { post: "युवा प्रकोष्ठ प्रभारी", name: "श्री अमित शर्मा", phone: "8789772651", district: "गया", cat: "प्रकोष्ठ" },
    { post: "किसान प्रकोष्ठ प्रभारी", name: "श्री गजेन्द्र सिंह", phone: "9934423441", district: "अरवल", cat: "प्रकोष्ठ" },
    { post: "बुद्धिजीवी प्रकोष्ठ प्रभारी", name: "श्री बिनोद प्रसाद सिंह", phone: "9507975348", district: "जहानाबाद", cat: "प्रकोष्ठ" },
    { post: "व्यवसायिक प्रकोष्ठ प्रभारी", name: "श्री संतोष साव", phone: "8102492562", district: "गया", cat: "प्रकोष्ठ" },
    { post: "ओबीसी प्रकोष्ठ प्रभारी", name: "श्री सुभाष चन्द्र बोस", phone: "7488090309", district: "गया", cat: "प्रकोष्ठ" },
    { post: "कर्पूरी मंच प्रभारी", name: "श्री बिरेन्द्र चन्द्रवंशी", phone: "9934433895", district: "अरवल", cat: "मंच" },
    { post: "अम्बेडकर मंच प्रभारी", name: "श्री श्यामबली पासवान", phone: "6287631605", district: "औरंगाबाद", cat: "मंच" },
    { post: "अल्पसंख्यक प्रकोष्ठ प्रभारी", name: "श्री आरिफ रज़ा", phone: "9934910224", district: "औरंगाबाद", cat: "प्रकोष्ठ" },
    { post: "मीडिया प्रभारी", name: "श्री शशांक शेखर दूबे", phone: "8539097015", district: "औरंगाबाद", cat: "मीडिया" }
  ];

  let fullHtml = "";

  // PAGE 1: 12 Zonal Officials Directory
  fullHtml += `
    <div class="print-page-section">
      <div class="print-sheet-header">
        <div>
          <span class="print-sheet-title">जन सुराज पार्टी • मगध प्रमंडल : संगठनात्मक नेतृत्व एवं 12 ज़ोनल प्रभारी डायरेक्टरी</span>
        </div>
        <div class="print-sheet-meta">पृष्ठ 1 / 6 • संपर्क डायरेक्टरी</div>
      </div>
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:30px;">#</th>
            <th>दायित्व / पद (Designation)</th>
            <th>पदाधिकारी का नाम</th>
            <th>गृह ज़िला</th>
            <th>मोबाइल नंबर</th>
            <th>प्रकोष्ठ वर्ग</th>
            <th>प्रमंडल</th>
          </tr>
        </thead>
        <tbody>
          ${leaders.map((l, i) => `
            <tr>
              <td class="cell-num">${i + 1}</td>
              <td class="cell-bold" style="color: #0369A1;">${l.post}</td>
              <td class="cell-bold">${l.name}</td>
              <td>${l.district}</td>
              <td class="cell-bold">${l.phone}</td>
              <td><span class="caste-chip">${l.cat}</span></td>
              <td>मगध प्रमंडल</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  // PAGE 2: 4 Districts Whole Caste Equations
  fullHtml += `
    <div class="print-page-section">
      <div class="print-sheet-header">
        <div>
          <span class="print-sheet-title">जन सुराज पार्टी • मगध प्रमंडल : 4 ज़िले समग्र सामाजिक एवं जातीय समीकरण (Caste Census Master)</span>
        </div>
        <div class="print-sheet-meta">पृष्ठ 2 / 6 • ज़िलावार जातीय अनुपात</div>
      </div>
      <table class="excel-table">
        <thead>
          <tr>
            <th style="width:30px;">#</th>
            <th>ज़िला (District)</th>
            <th>कुल सीटें</th>
            <th>प्रमुख वर्ग (Category)</th>
            <th>प्रतिशत (%)</th>
            <th>प्रमुख उप-जातियां व प्रतिशत (Sub-Castes Breakdown)</th>
            <th>स्थिति</th>
          </tr>
        </thead>
        <tbody>
  `;
  let rCount = 1;
  ["gaya", "aurangabad", "jehanabad", "arwal"].forEach(dKey => {
    const dist = data.districts[dKey];
    dist.casteDemographics.categories.forEach((cat, cIdx) => {
      const sub = cat.subCastes ? cat.subCastes.map(s => `${s.name}: ${s.pct}`).join(", ") : "--";
      fullHtml += `
        <tr>
          <td class="cell-num">${rCount++}</td>
          <td class="cell-bold">${cIdx === 0 ? `<strong>${dist.nameHi} (${dist.nameEn})</strong>` : ''}</td>
          <td class="cell-num">${cIdx === 0 ? `${dist.totalACs} ACs` : ''}</td>
          <td class="cell-bold" style="color: ${cat.color};">${cat.group}</td>
          <td class="cell-num cell-bold" style="background: #FEF3C7;">${cat.percentage}</td>
          <td style="font-size: 10px;">${sub}</td>
          <td>${dist.casteDemographics.status}</td>
        </tr>
      `;
    });
  });
  fullHtml += `</tbody></table></div>`;

  // HELPER FOR DISTRICT AC TABLE
  function generateDistrictAcTable(distKey, distHi, pageNum, totalPages) {
    const list = data.assemblies.filter(a => a.district === distKey);
    let secHtml = `
      <div class="print-page-section">
        <div class="print-sheet-header">
          <div>
            <span class="print-sheet-title">जन सुराज पार्टी • ${distHi} ज़िला : ${list.length} विधानसभा चुनाव परिणाम, प्रत्याशी एवं जातीय समीकरण</span>
          </div>
          <div class="print-sheet-meta">पृष्ठ ${pageNum} / ${totalPages} • ${distHi} (${list.length} ACs)</div>
        </div>
        <table class="excel-table">
          <thead>
            <tr>
              <th style="width:25px;">#</th>
              <th>विधानसभा (AC)</th>
              <th>कुल मतदाता</th>
              <th>विजेता विधायक</th>
              <th>दल</th>
              <th>जाति</th>
              <th>मत</th>
              <th>निकटतम प्रतिद्वंद्वी</th>
              <th>2nd दल</th>
              <th>2nd मत</th>
              <th>अंतर</th>
              <th class="jsp-highlight">जन सुराज प्रत्याशी</th>
              <th class="jsp-highlight">JSP जाति</th>
              <th class="jsp-highlight">JSP मोबाइल</th>
              <th class="jsp-highlight">JSP मत</th>
              <th class="jsp-highlight">स्थान</th>
              <th>विधानसभा जातीय समीकरण</th>
            </tr>
          </thead>
          <tbody>
    `;

    list.forEach((ac, idx) => {
      const res = ac.results;
      const jsp = ac.jspCandidate;
      const margin = (res.winner.votes && res.runnerUp.votes) ? (res.winner.votes - res.runnerUp.votes) : "--";
      let casteStr = "--";
      if (ac.acCasteData && ac.acCasteData.breakdown) {
        casteStr = ac.acCasteData.breakdown.map(b => `<strong>${b.group}:</strong> ${b.sub}`).join(" | ");
      }

      secHtml += `
        <tr>
          <td class="cell-num">${idx + 1}</td>
          <td class="cell-bold">${ac.acNameHi} <span style="font-size:10px; color:#6B7280;">(${ac.acName})</span></td>
          <td class="cell-num cell-bold">${ac.totalVoters || '--'}</td>
          <td class="cell-bold">${res.winner.name}</td>
          <td>${getPartyTag(res.winner.party)}</td>
          <td>${res.winner.caste || '--'}</td>
          <td class="cell-num cell-bold">${formatNumber(res.winner.votes)}</td>
          <td>${res.runnerUp.name}</td>
          <td>${getPartyTag(res.runnerUp.party)}</td>
          <td class="cell-num">${formatNumber(res.runnerUp.votes)}</td>
          <td class="cell-num" style="color: #DC2626; font-weight: 600;">+${formatNumber(margin)}</td>
          <td class="cell-bold jsp-highlight">${jsp.nameHi}</td>
          <td><span class="caste-chip">${jsp.caste}</span></td>
          <td class="cell-bold">${jsp.phone}</td>
          <td class="cell-num cell-bold jsp-highlight">${formatNumber(jsp.votes)}</td>
          <td class="cell-bold" style="color: #B45309;">${jsp.position}</td>
          <td class="caste-breakdown-cell">${casteStr}</td>
        </tr>
      `;
    });

    secHtml += `</tbody></table></div>`;
    return secHtml;
  }

  // PAGES 3, 4, 5, 6: 4 DISTRICT TABLES
  fullHtml += generateDistrictAcTable("gaya", "गया", 3, 6);
  fullHtml += generateDistrictAcTable("aurangabad", "औरंगाबाद", 4, 6);
  fullHtml += generateDistrictAcTable("jehanabad", "जहानाबाद", 5, 6);
  fullHtml += generateDistrictAcTable("arwal", "अरवल", 6, 6);

  printContainer.innerHTML = fullHtml;

  // Trigger Print with All-Pages Class
  document.body.classList.add("printing-all");
  window.print();
  setTimeout(() => {
    document.body.classList.remove("printing-all");
  }, 1000);
}

/**
 * Setup Event Listeners
 */
function setupEvents() {
  // Sheet Tabs
  document.querySelectorAll(".sheet-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      switchSheet(tab.dataset.sheet);
    });
  });

  // Search Input
  const searchInput = document.getElementById("sheet-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (currentSheet === "officials") renderOfficialsSheet();
      else if (currentSheet === "caste") renderDistrictCasteSheet();
      else renderAcSheet(currentSheet === "master" ? null : currentSheet);
    });
  }

  // District Filter
  const filterSelect = document.getElementById("sheet-district-filter");
  if (filterSelect) {
    filterSelect.addEventListener("change", (e) => {
      districtFilter = e.target.value;
      renderAcSheet();
    });
  }

  // Download CSV
  const downloadBtn = document.getElementById("download-csv-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", exportCsv);
  }

  // Print Current Sheet Button
  const printCurrBtn = document.getElementById("print-current-btn");
  if (printCurrBtn) {
    printCurrBtn.addEventListener("click", () => {
      document.body.classList.remove("printing-all");
      window.print();
    });
  }

  // Print All Pages at Once Button
  const printAllBtn = document.getElementById("print-all-btn");
  if (printAllBtn) {
    printAllBtn.addEventListener("click", () => {
      printAllPages();
    });
  }

  // Keyboard shortcut Ctrl + P handler
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
      e.preventDefault();
      printAllPages();
    }
  });
}

// Global exposure
window.printAllPages = printAllPages;
window.renderAcSheet = renderAcSheet;
window.switchSheet = switchSheet;

document.addEventListener("DOMContentLoaded", () => {
  renderAcSheet();
  setupEvents();
  updateFormulaBar("Jan Suraaj Party - Magadh Zone 21 ACs Master Dataset Ready", "A1");
});
