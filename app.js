/**
 * Jan Suraaj Party - Magadh Zone (21 ACs Master Hub Script)
 */

// Zonal Leaders Data (12 Leaders)
const officialsData = [
  { id: 1, post: "प्रभारी", category: "मुख्य", name: "श्री नंद किशोर यादव", phone: "7004535770", district: "औरंगाबाद", avatarBg: "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)", initials: "नकि", badgeClass: "badge-lead" },
  { id: 2, post: "संगठन प्रभारी", category: "मुख्य", name: "श्री जावेद ख़ान", phone: "9455254230", district: "गया", avatarBg: "linear-gradient(135deg, #1E3C72 0%, #2A5298 100%)", initials: "जाख़", badgeClass: "badge-lead" },
  { id: 3, post: "महिला प्रकोष्ठ प्रभारी", category: "प्रकोष्ठ", name: "श्रीमती शगुफ्ता यासमीन", phone: "8709795157", district: "औरंगाबाद", avatarBg: "linear-gradient(135deg, #EC008C 0%, #FC6767 100%)", initials: "शया", badgeClass: "badge-wing" },
  { id: 4, post: "युवा प्रकोष्ठ प्रभारी", category: "प्रकोष्ठ", name: "श्री अमित शर्मा", phone: "8789772651", district: "गया", avatarBg: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)", initials: "अश", badgeClass: "badge-wing" },
  { id: 5, post: "किसान प्रकोष्ठ प्रभारी", category: "प्रकोष्ठ", name: "श्री गजेन्द्र सिंह", phone: "9934423441", district: "अरवल", avatarBg: "linear-gradient(135deg, #11998E 0%, #38EF7D 100%)", initials: "गसिं", badgeClass: "badge-wing" },
  { id: 6, post: "बुद्धिजीवी प्रकोष्ठ प्रभारी", category: "प्रकोष्ठ", name: "श्री बिनोद प्रसाद सिंह", phone: "9507975348", district: "जहानाबाद", avatarBg: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)", initials: "बिसिं", badgeClass: "badge-wing" },
  { id: 7, post: "व्यवसायिक प्रकोष्ठ प्रभारी", category: "प्रकोष्ठ", name: "श्री संतोष साव", phone: "8102492562", district: "गया", avatarBg: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)", initials: "संसा", badgeClass: "badge-wing" },
  { id: 8, post: "ओबीसी प्रकोष्ठ प्रभारी", category: "प्रकोष्ठ", name: "श्री सुभाष चंद्र बोस", phone: "7488090309", district: "गया", avatarBg: "linear-gradient(135deg, #654EA3 0%, #EAAFC8 100%)", initials: "सुबो", badgeClass: "badge-wing" },
  { id: 9, post: "कर्पूरी मंच प्रभारी", category: "मंच", name: "श्री वीरेंद्र चंद्रवंशी", phone: "9934433895", district: "अरवल", avatarBg: "linear-gradient(135deg, #DA22FF 0%, #9733EE 100%)", initials: "वीचं", badgeClass: "badge-front" },
  { id: 10, post: "अम्बेडकर मंच प्रभारी", category: "मंच", name: "श्री श्यामबली पासवान", phone: "6287631605", district: "औरंगाबाद", avatarBg: "linear-gradient(135deg, #3A7BD5 0%, #3A6073 100%)", initials: "श्यपा", badgeClass: "badge-front" },
  { id: 11, post: "अल्पसंख्यक प्रकोष्ठ प्रभारी", category: "प्रकोष्ठ", name: "श्री आरिफ़ रजा", phone: "9934910224", district: "औरंगाबाद", avatarBg: "linear-gradient(135deg, #0BA360 0%, #3CBA92 100%)", initials: "आर", badgeClass: "badge-wing" },
  { id: 12, post: "मीडिया प्रभारी", category: "मीडिया", name: "श्री शशांक शेखर दूबे", phone: "8539097015", district: "औरंगाबाद", avatarBg: "linear-gradient(135deg, #2193B0 0%, #6DD5ED 100%)", initials: "शदू", badgeClass: "badge-media" }
];

const districtTagClasses = {
  "औरंगाबाद": "tag-aurangabad",
  "aurangabad": "tag-aurangabad",
  "गया": "tag-gaya",
  "gaya": "tag-gaya",
  "अरवल": "tag-arwal",
  "arwal": "tag-arwal",
  "जहानाबाद": "tag-jehanabad",
  "jehanabad": "tag-jehanabad"
};

let currentMasterDistrict = "all";
let currentMasterSearch = "";

function formatNumber(num) {
  if (!num) return "--";
  return Number(num).toLocaleString("en-IN");
}

function formatPhone(phone) {
  if (!phone || phone.length !== 10) return phone || "--";
  return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === "success" ? "fa-circle-check" : "fa-circle-info"}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function copyToClipboard(text, label = "डेटा") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} कॉपी हो गया: ${text}`);
  }).catch(() => {
    showToast(`कॉपी करने में त्रुटि`, "error");
  });
}

function getPartyBadgeClass(party) {
  if (!party) return "badge-party-default";
  const p = party.toUpperCase().trim();
  if (p.includes("BJP")) return "badge-party-bjp";
  if (p.includes("RJD")) return "badge-party-rjd";
  if (p.includes("JDU")) return "badge-party-jdu";
  if (p.includes("LJP")) return "badge-party-ljp";
  if (p.includes("INC") || p.includes("CONGRESS")) return "badge-party-inc";
  if (p.includes("HAM")) return "badge-party-ham";
  if (p.includes("JSP")) return "badge-party-jsp";
  if (p.includes("CPI")) return "badge-party-cpiml";
  if (p.includes("BSP")) return "badge-party-bsp";
  return "badge-party-ind";
}

/**
 * Render Master 21 ACs Table
 */
function renderMasterAcTable() {
  const tableBody = document.getElementById("master-ac-table-body");
  if (!tableBody || !window.magadhZoneData) return;

  const q = currentMasterSearch.toLowerCase().trim();
  const allACs = window.magadhZoneData.assemblies.filter(ac => {
    if (currentMasterDistrict !== "all" && ac.district !== currentMasterDistrict) {
      return false;
    }
    if (q) {
      const matchName = ac.acName.toLowerCase().includes(q) || ac.acNameHi.toLowerCase().includes(q);
      const matchDist = ac.districtHi.toLowerCase().includes(q) || ac.districtEn.toLowerCase().includes(q);
      const matchMLA = ac.results.winner.name.toLowerCase().includes(q) || ac.results.winner.party.toLowerCase().includes(q);
      const matchJSP = ac.jspCandidate.name.toLowerCase().includes(q) || ac.jspCandidate.caste.toLowerCase().includes(q);
      return matchName || matchDist || matchMLA || matchJSP;
    }
    return true;
  });

  tableBody.innerHTML = "";

  allACs.forEach((ac, idx) => {
    const tr = document.createElement("tr");
    const distClass = districtTagClasses[ac.district] || "tag-aurangabad";
    const res = ac.results;
    const jsp = ac.jspCandidate;

    tr.innerHTML = `
      <td class="table-num">${idx + 1}</td>
      <td>
        <a href="${ac.district}.html#ac-${ac.id}" style="font-weight: 700; color: var(--text-main); text-decoration: none;" title="विस्तृत पेज देखें">
          ${ac.acNameHi} <span style="font-size: 0.8rem; color: var(--text-muted);">(${ac.acName})</span>
          ${ac.isSC ? '<span class="badge-sc-reserve" style="font-size: 0.65rem; padding: 0.1rem 0.4rem;">SC</span>' : ''}
        </a>
      </td>
      <td>
        <span class="district-tag ${distClass}">${ac.districtHi}</span>
      </td>
      <td style="font-size: 0.8rem; color: var(--text-muted);">${ac.lokSabha}</td>
      <td>
        <strong style="color: var(--text-main);">${res.winner.name}</strong>
        <div style="margin-top: 2px;">
          <span class="party-badge ${getPartyBadgeClass(res.winner.party)}">${res.winner.party}</span>
          <span class="caste-tag">${res.winner.caste}</span>
        </div>
      </td>
      <td class="table-phone" style="font-weight: 700;">${formatNumber(res.winner.votes)}</td>
      <td style="font-size: 0.825rem;">
        <strong>${res.runnerUp.name}</strong> (${res.runnerUp.party})
        <div style="color: var(--text-muted); font-size: 0.75rem;">${formatNumber(res.runnerUp.votes)} वोट</div>
      </td>
      <td>
        <strong style="color: var(--brand-primary-dark);">${jsp.nameHi}</strong>
        <div style="font-size: 0.75rem; color: var(--text-muted);">जाति: ${jsp.caste}</div>
      </td>
      <td>
        <strong class="table-phone" style="color: var(--brand-primary-dark);">${formatNumber(jsp.votes)}</strong>
        <div style="font-size: 0.725rem; color: var(--text-muted);">${jsp.position}</div>
      </td>
      <td>
        <div class="table-actions">
          <a href="tel:+91${jsp.phone}" class="table-action-btn tab-btn-call" title="${jsp.name} को कॉल करें">
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="https://wa.me/91${jsp.phone}?text=नमस्ते%20${encodeURIComponent(jsp.name)}%20जी%2C%20जन%20सुराज" target="_blank" rel="noopener" class="table-action-btn tab-btn-wa" title="WhatsApp">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <button class="table-action-btn tab-btn-copy copy-cand-btn" data-phone="${jsp.phone}" data-name="${jsp.name}" title="नंबर कॉपी करें">
            <i class="fa-regular fa-copy"></i>
          </button>
          <a href="${ac.district}.html#ac-${ac.id}" class="table-action-btn" style="background: var(--bg-surface); color: var(--text-main);" title="पूर्ण प्रोफाइल व जातीय रिपोर्ट">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </td>
    `;

    tableBody.appendChild(tr);
  });
}

/**
 * Render Zonal Officials Grid
 */
function renderZonalOfficials() {
  const container = document.getElementById("zonal-officials-grid");
  if (!container) return;

  container.innerHTML = "";
  officialsData.forEach(item => {
    const card = document.createElement("article");
    card.className = "official-card";
    const districtClass = districtTagClasses[item.district] || "tag-aurangabad";

    card.innerHTML = `
      <div>
        <div class="card-header-row">
          <div class="official-avatar" style="background: ${item.avatarBg};">
            ${item.initials}
          </div>
          <div class="card-title-group">
            <span class="designation-badge ${item.badgeClass}">${item.post}</span>
            <h3 class="official-name">${item.name}</h3>
          </div>
        </div>

        <div class="card-details">
          <div class="detail-item">
            <span class="detail-label"><i class="fa-solid fa-location-dot"></i> ज़िला</span>
            <span class="district-tag ${districtClass}">
              ${item.district}
            </span>
          </div>
          <div class="detail-item">
            <span class="detail-label"><i class="fa-solid fa-phone"></i> दूरभाष</span>
            <span class="phone-number-display">${formatPhone(item.phone)}</span>
          </div>
        </div>
      </div>

      <div class="card-actions-grid">
        <a href="tel:+91${item.phone}" class="btn btn-action-call btn-sm" title="कॉल करें">
          <i class="fa-solid fa-phone"></i> कॉल
        </a>
        <a href="https://wa.me/91${item.phone}?text=जय%20बिहार%2C%20जन%20सुराज" target="_blank" rel="noopener" class="btn btn-action-wa btn-sm" title="व्हाट्सएप">
          <i class="fa-brands fa-whatsapp"></i> व्हाट्सएप
        </a>
        <button class="btn btn-action-copy btn-sm copy-single-btn" data-phone="${item.phone}" data-name="${item.name}" title="नंबर कॉपी करें">
          <i class="fa-regular fa-copy"></i>
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Setup Hub Event Listeners
 */
function setupHubEvents() {
  const searchInput = document.getElementById("master-ac-search");
  const clearBtn = document.getElementById("clear-master-search");
  const exportMasterCsvBtn = document.getElementById("export-master-csv-btn");
  const printBtn = document.getElementById("print-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentMasterSearch = e.target.value;
      if (clearBtn) clearBtn.style.display = currentMasterSearch ? "block" : "none";
      renderMasterAcTable();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentMasterSearch = "";
      clearBtn.style.display = "none";
      renderMasterAcTable();
      searchInput.focus();
    });
  }

  // District Filter Pills on Home Page
  document.querySelectorAll("#master-district-pills .pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#master-district-pills .pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMasterDistrict = btn.dataset.district;
      renderMasterAcTable();
    });
  });

  // Delegate Copy Candidate Phone
  document.addEventListener("click", (e) => {
    const copyCand = e.target.closest(".copy-cand-btn");
    if (copyCand) {
      copyToClipboard(copyCand.dataset.phone, `${copyCand.dataset.name} का फ़ोन नंबर`);
    }
    const copyOfficial = e.target.closest(".copy-single-btn");
    if (copyOfficial) {
      copyToClipboard(copyOfficial.dataset.phone, `${copyOfficial.dataset.name} का फ़ोन नंबर`);
    }
  });

  // Export 21 ACs CSV
  if (exportMasterCsvBtn) {
    exportMasterCsvBtn.addEventListener("click", () => {
      const headers = ["क्र.सं.", "ज़िला", "विधानसभा (AC)", "लोकसभा", "विजेता MLA", "पार्टी", "जाति", "विजेता मत", "निकटतम प्रतिद्वंद्वी", "2nd पार्टी", "2nd मत", "जन सुराज प्रत्याशी", "JSP जाति", "JSP फ़ोन", "JSP मत", "JSP स्थान"];
      
      const rows = window.magadhZoneData.assemblies.map((ac, i) => [
        i + 1,
        `"${ac.districtHi}"`,
        `"${ac.acNameHi} (${ac.acName})"`,
        `"${ac.lokSabha}"`,
        `"${ac.results.winner.name}"`,
        `"${ac.results.winner.party}"`,
        `"${ac.results.winner.caste}"`,
        `"${ac.results.winner.votes}"`,
        `"${ac.results.runnerUp.name}"`,
        `"${ac.results.runnerUp.party}"`,
        `"${ac.results.runnerUp.votes}"`,
        `"${ac.jspCandidate.name}"`,
        `"${ac.jspCandidate.caste}"`,
        `"${ac.jspCandidate.phone}"`,
        `"${ac.jspCandidate.votes}"`,
        `"${ac.jspCandidate.position}"`
      ]);

      const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "Jan_Suraaj_Magadh_Zone_21_ACs_Master_Report.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("मगध प्रमंडल की सभी 21 विधानसभाओं की CSV डाउनलोड हो गई!");
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Theme Toggle
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("janSuraajTheme", next);
      themeToggleBtn.innerHTML = next === "dark" 
        ? '<i class="fa-solid fa-sun" style="color: #FCD34D;"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
    });
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("janSuraajTheme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = savedTheme === "dark" 
      ? '<i class="fa-solid fa-sun" style="color: #FCD34D;"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderMasterAcTable();
  renderZonalOfficials();
  setupHubEvents();
});
