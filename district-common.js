/**
 * Jan Suraaj Party - District Pages Common Script
 * Renders AC election results, Jan Suraaj candidate dossiers, caste widgets, and contact tools.
 */

document.addEventListener("DOMContentLoaded", () => {
  const currentDistrictId = document.body.dataset.district;
  if (!currentDistrictId || !window.magadhZoneData) return;

  initTheme();
  renderDistrictData(currentDistrictId);
  setupDistrictEvents(currentDistrictId);
});

function initTheme() {
  const savedTheme = localStorage.getItem("janSuraajTheme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.innerHTML = savedTheme === "dark" 
      ? '<i class="fa-solid fa-sun" style="color: #FCD34D;"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
    themeBtn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "light";
      const next = cur === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("janSuraajTheme", next);
      themeBtn.innerHTML = next === "dark" 
        ? '<i class="fa-solid fa-sun" style="color: #FCD34D;"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
    });
  }
}

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
    showToast(`${label} कॉपी हो गया!`);
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
  if (p.includes("AIMIM") || p.includes("ASP")) return "badge-party-aimim";
  return "badge-party-ind";
}

function renderDistrictData(districtId) {
  const districtMeta = window.magadhZoneData.districts[districtId];
  const allACs = window.magadhZoneData.assemblies.filter(a => a.district === districtId);

  // Set District Header Details
  const districtTitleEl = document.getElementById("district-title");
  const districtAcCountEl = document.getElementById("district-ac-count");
  const districtSummaryEl = document.getElementById("district-summary-text");
  
  if (districtTitleEl) districtTitleEl.textContent = `${districtMeta.nameHi} ज़िला (District ${districtMeta.nameEn})`;
  if (districtAcCountEl) districtAcCountEl.textContent = `${allACs.length} विधानसभा क्षेत्र (ACs)`;
  if (districtSummaryEl) districtSummaryEl.textContent = districtMeta.jspVoteShareSummary;

  // Render Whole District Caste Demographics
  renderDistrictCasteDemographics(districtMeta);

  // Render AC Cards
  renderAssemblyCards(allACs);
}

function renderDistrictCasteDemographics(districtMeta) {
  const container = document.getElementById("district-caste-container");
  if (!container) return;

  const casteData = districtMeta.casteDemographics;
  let itemsHtml = "";

  casteData.categories.forEach(c => {
    let subCastesPills = "";
    if (c.subCastes && c.subCastes.length > 0) {
      subCastesPills = c.subCastes.map(sc => `
        <span class="subcaste-chip">${sc.name}: <strong>${sc.pct}</strong></span>
      `).join("");
    }

    itemsHtml += `
      <div class="caste-group-card" style="border-left: 4px solid ${c.color || 'var(--brand-primary)'}; margin-bottom: 0.6rem;">
        <div class="cg-header">
          <span class="cg-title" style="color: ${c.color || 'var(--text-main)'}; font-weight: 800;">${c.group}</span>
          <span class="cg-pct" style="background: ${c.color || 'var(--brand-primary)'}; color: #FFFFFF;">${c.percentage}</span>
        </div>
        ${subCastesPills ? `<div class="subcastes-container">${subCastesPills}</div>` : ''}
      </div>
    `;
  });

  container.innerHTML = `
    <div class="district-caste-box">
      <div class="caste-box-header">
        <div class="caste-box-title">
          <i class="fa-solid fa-users-viewfinder"></i>
          <div>
            <h4>${districtMeta.nameHi} ज़िला : समग्र सामाजिक व जातीय समीकरण</h4>
            <p class="caste-box-desc">${casteData.description} • <span class="caste-status-tag"><i class="fa-solid fa-check-double"></i> ${casteData.status}</span></p>
          </div>
        </div>
      </div>

      <div class="caste-groups-stack">
        ${itemsHtml}
      </div>
    </div>
  `;
}

function renderAssemblyCards(acList) {
  const container = document.getElementById("ac-cards-container");
  if (!container) return;

  container.innerHTML = "";

  acList.forEach((ac, idx) => {
    const card = document.createElement("article");
    card.className = "ac-dossier-card";
    card.id = `ac-${ac.id}`;

    // Winner & Runner Up details
    const res = ac.results;
    const jsp = ac.jspCandidate;

    card.innerHTML = `
      <!-- AC Card Header -->
      <div class="ac-card-header">
        <div class="ac-title-wrap">
          <span class="ac-index-badge">AC #${idx + 1}</span>
          <h3 class="ac-heading">${ac.acNameHi} <span class="ac-name-en">(${ac.acName})</span></h3>
          ${ac.isSC ? '<span class="badge-sc-reserve"><i class="fa-solid fa-shield-halved"></i> सुरक्षित सीट (SC)</span>' : ''}
        </div>
        <div class="ac-loksabha-tag">
          <i class="fa-solid fa-landmark-dome"></i> लोकसभा: <strong>${ac.lokSabha}</strong>
        </div>
      </div>

      <!-- Main 2-Column Split: Election Results & Jan Suraaj Candidate -->
      <div class="ac-content-grid">
        
        <!-- Left Column: Election Results Breakdown -->
        <div class="ac-results-panel">
          <h4 class="panel-section-title"><i class="fa-solid fa-square-poll-vertical"></i> चुनाव परिणाम विवरण (Election Results)</h4>
          
          <!-- Winner Box -->
          <div class="candidate-result-box winner-box">
            <div class="cr-rank"><i class="fa-solid fa-trophy"></i> MLA (विजेता)</div>
            <div class="cr-info">
              <div class="cr-name">${res.winner.name}</div>
              <div class="cr-tags">
                <span class="party-badge ${getPartyBadgeClass(res.winner.party)}">${res.winner.party}</span>
                <span class="caste-tag"><i class="fa-solid fa-fingerprint"></i> ${res.winner.caste}</span>
              </div>
            </div>
            <div class="cr-votes">
              <strong>${formatNumber(res.winner.votes)}</strong>
              <span>मत (Votes)</span>
            </div>
          </div>

          <!-- Runner Up Box -->
          <div class="candidate-result-box runner-box">
            <div class="cr-rank">निकटतम प्रतिद्वंद्वी</div>
            <div class="cr-info">
              <div class="cr-name">${res.runnerUp.name}</div>
              <div class="cr-tags">
                <span class="party-badge ${getPartyBadgeClass(res.runnerUp.party)}">${res.runnerUp.party}</span>
                <span class="caste-tag"><i class="fa-solid fa-fingerprint"></i> ${res.runnerUp.caste}</span>
              </div>
            </div>
            <div class="cr-votes">
              <strong>${formatNumber(res.runnerUp.votes)}</strong>
              <span>मत (Votes)</span>
            </div>
          </div>

          <!-- Other Runners Up Compact List -->
          <div class="other-runners-list">
            ${res.secondRunnerUp ? `
              <div class="other-runner-item ${res.secondRunnerUp.party === 'JSP' ? 'highlight-jsp' : ''}">
                <span class="or-rank">2nd Runner Up:</span>
                <span class="or-name"><strong>${res.secondRunnerUp.name}</strong> (${res.secondRunnerUp.party}${res.secondRunnerUp.caste && res.secondRunnerUp.caste !== '--' ? ' - ' + res.secondRunnerUp.caste : ''})</span>
                <span class="or-votes">${formatNumber(res.secondRunnerUp.votes)} वोट</span>
              </div>` : ''}

            ${res.thirdRunnerUp ? `
              <div class="other-runner-item ${res.thirdRunnerUp.party === 'JSP' ? 'highlight-jsp' : ''}">
                <span class="or-rank">3rd Runner Up:</span>
                <span class="or-name"><strong>${res.thirdRunnerUp.name}</strong> (${res.thirdRunnerUp.party}${res.thirdRunnerUp.caste && res.thirdRunnerUp.caste !== '--' ? ' - ' + res.thirdRunnerUp.caste : ''})</span>
                <span class="or-votes">${formatNumber(res.thirdRunnerUp.votes)} वोट</span>
              </div>` : ''}

            ${res.fourthRunnerUp ? `
              <div class="other-runner-item ${res.fourthRunnerUp.party === 'JSP' ? 'highlight-jsp' : ''}">
                <span class="or-rank">4th Runner Up:</span>
                <span class="or-name"><strong>${res.fourthRunnerUp.name}</strong> (${res.fourthRunnerUp.party}${res.fourthRunnerUp.caste && res.fourthRunnerUp.caste !== '--' ? ' - ' + res.fourthRunnerUp.caste : ''})</span>
                <span class="or-votes">${formatNumber(res.fourthRunnerUp.votes)} वोट</span>
              </div>` : ''}

            ${res.fifthRunnerUp ? `
              <div class="other-runner-item ${res.fifthRunnerUp.party === 'JSP' ? 'highlight-jsp' : ''}">
                <span class="or-rank">5th Runner Up:</span>
                <span class="or-name"><strong>${res.fifthRunnerUp.name}</strong> (${res.fifthRunnerUp.party}${res.fifthRunnerUp.caste && res.fifthRunnerUp.caste !== '--' ? ' - ' + res.fifthRunnerUp.caste : ''})</span>
                <span class="or-votes">${formatNumber(res.fifthRunnerUp.votes)} वोट</span>
              </div>` : ''}
          </div>
        </div>

        <!-- Right Column: Jan Suraaj Candidate Profile Dossier -->
        <div class="ac-jsp-panel">
          <div class="jsp-panel-header">
            <span class="jsp-brand-chip">🚩 जन सुराज प्रत्याशी</span>
            <span class="jsp-vote-chip"><i class="fa-solid fa-check-to-slot"></i> ${formatNumber(jsp.votes)} वोट • ${jsp.position}</span>
          </div>

          <div class="jsp-candidate-main">
            <div class="jsp-candidate-avatar">
              ${jsp.name.split(' ').map(n=>n[0]).slice(0, 2).join('')}
            </div>
            <div class="jsp-candidate-info">
              <h4 class="jsp-name">${jsp.nameHi} <span class="en-name">(${jsp.name})</span></h4>
              <div class="jsp-tags-row">
                <span class="jsp-caste-badge"><i class="fa-solid fa-users"></i> जाति: <strong>${jsp.caste}</strong></span>
                <span class="jsp-phone-badge"><i class="fa-solid fa-phone"></i> ${formatPhone(jsp.phone)}</span>
              </div>
              ${jsp.meta ? `<div class="jsp-meta-text">${jsp.meta}</div>` : ''}
            </div>
          </div>

          <!-- Profile / Background Highlights -->
          <div class="jsp-bio-card">
            <div class="bio-title"><i class="fa-solid fa-id-card-clip"></i> राजनैतिक एवं सामाजिक पृष्ठभूमि:</div>
            <ul class="bio-list">
              ${jsp.profile.map(p => `<li><i class="fa-solid fa-angle-right"></i> ${p}</li>`).join('')}
            </ul>
          </div>

          <!-- Quick Action Contact Buttons -->
          <div class="jsp-actions-row">
            <a href="tel:+91${jsp.phone}" class="btn btn-action-call btn-sm" title="सीधे कॉल करें">
              <i class="fa-solid fa-phone"></i> कॉल करें
            </a>
            <a href="https://wa.me/91${jsp.phone}?text=नमस्ते%20${encodeURIComponent(jsp.name)}%20जी%2C%20जन%20सुराज%20${encodeURIComponent(ac.acNameHi)}%20विधानसभा%20के%20संदर्भ%20में" target="_blank" rel="noopener" class="btn btn-action-wa btn-sm" title="व्हाट्सएप पर संदेश भेजें">
              <i class="fa-brands fa-whatsapp"></i> व्हाट्सएप
            </a>
            <button class="btn btn-action-copy btn-sm copy-cand-btn" data-phone="${jsp.phone}" data-name="${jsp.name}" title="नंबर कॉपी करें">
              <i class="fa-regular fa-copy"></i> नंबर कॉपी
            </button>
          </div>
        </div>

      </div>

      <!-- AC Caste Demographics Section -->
      <div class="slide-ac-caste-panel" style="margin-top: 1rem;">
        <div class="ac-caste-panel-header">
          <span class="acc-title">
            <i class="fa-solid fa-users-viewfinder" style="color: var(--brand-primary);"></i>
            <strong>${ac.acNameHi} विधानसभा जातीय समीकरण</strong>
            ${ac.totalVoters ? `<span class="voter-badge"><i class="fa-solid fa-person-booth"></i> कुल मतदाता: ${ac.totalVoters}</span>` : ''}
          </span>
          <span class="acc-status">${ac.acCasteData.status}</span>
        </div>

        ${ac.acCasteData.breakdown && ac.acCasteData.breakdown.length > 0 ? `
          <div class="acc-chips-grid">
            ${ac.acCasteData.breakdown.map(b => `
              <div class="acc-group-chip" style="border-left: 3px solid ${b.color};">
                <span class="acc-group-name" style="color: ${b.color}; font-weight: 800;">${b.group}</span>
                <span class="acc-group-sub">${b.sub}</span>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="slide-caste-ready-box">
            <i class="fa-solid fa-layer-group" style="color: var(--brand-primary);"></i>
            <span>${ac.acNameHi} विधानसभा के जातीय सर्वेक्षण डेटा के लिए स्लॉट तैयार।</span>
          </div>
        `}
      </div>

    </article>
    `;

    container.appendChild(card);
  });
}

function setupDistrictEvents(districtId) {
  const searchInput = document.getElementById("ac-search-input");
  const clearBtn = document.getElementById("clear-ac-search");
  const exportBtn = document.getElementById("export-district-csv");
  const printBtn = document.getElementById("print-district-btn");

  // Search
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (clearBtn) clearBtn.style.display = q ? "block" : "none";
      
      const cards = document.querySelectorAll(".ac-dossier-card");
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? "block" : "none";
      });
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      document.querySelectorAll(".ac-dossier-card").forEach(c => c.style.display = "block");
      searchInput.focus();
    });
  }

  // Delegate Copy Candidate Phone
  document.addEventListener("click", (e) => {
    const copyBtn = e.target.closest(".copy-cand-btn");
    if (copyBtn) {
      const phone = copyBtn.dataset.phone;
      const name = copyBtn.dataset.name;
      copyToClipboard(phone, `${name} का फ़ोन नंबर`);
    }
  });

  // Export District CSV
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const allACs = window.magadhZoneData.assemblies.filter(a => a.district === districtId);
      const headers = ["क्र.सं.", "विधानसभा (AC)", "लोकसभा", "विजेता MLA", "पार्टी", "जाति", "विजेता मत", "जन सुराज प्रत्याशी", "JSP जाति", "JSP फ़ोन", "JSP मत", "JSP स्थान"];
      
      const rows = allACs.map((ac, i) => [
        i + 1,
        `"${ac.acNameHi} (${ac.acName})"`,
        `"${ac.lokSabha}"`,
        `"${ac.results.winner.name}"`,
        `"${ac.results.winner.party}"`,
        `"${ac.results.winner.caste}"`,
        `"${ac.results.winner.votes}"`,
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
      link.setAttribute("download", `Jan_Suraaj_${districtId.toUpperCase()}_District_ACs.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("ज़िले की रिपोर्ट CSV में डाउनलोड हो गई!");
    });
  }

  // Print
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}
