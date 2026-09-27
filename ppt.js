/**
 * Jan Suraaj Party — Magadh Zone
 * Static A4 Landscape Document Renderer (29 pages, print-ready)
 * All slides rendered at once — no navigation, no interactivity needed.
 */

/* ── Zonal Officials ─────────────────────────────────────────────────────── */
const zonalOfficialsData = [
  { id:1,  post:"Zonal In-Charge",              name:"Shri Nand Kishore Yadav",     phone:"7004535770", district:"Aurangabad", initials:"NY", bg:"linear-gradient(135deg,#FF512F,#DD2476)" },
  { id:2,  post:"Organization In-Charge",       name:"Shri Javed Khan",             phone:"9455254230", district:"Gaya",       initials:"JK", bg:"linear-gradient(135deg,#1E3C72,#2A5298)" },
  { id:3,  post:"Women's Wing In-Charge",       name:"Smt. Shagufta Yasmin",        phone:"8709795157", district:"Aurangabad", initials:"SY", bg:"linear-gradient(135deg,#EC008C,#FC6767)" },
  { id:4,  post:"Youth Wing In-Charge",         name:"Shri Amit Sharma",            phone:"8789772651", district:"Gaya",       initials:"AS", bg:"linear-gradient(135deg,#00C6FF,#0072FF)" },
  { id:5,  post:"Farmers' Wing In-Charge",      name:"Shri Gajendra Singh",         phone:"9934423441", district:"Arwal",      initials:"GS", bg:"linear-gradient(135deg,#11998E,#38EF7D)" },
  { id:6,  post:"Intellectuals' Wing In-Charge",name:"Shri Binod Prasad Singh",     phone:"9507975348", district:"Jehanabad",  initials:"BS", bg:"linear-gradient(135deg,#8E2DE2,#4A00E0)" },
  { id:7,  post:"Business / Traders' Wing",     name:"Shri Santosh Saw",            phone:"8102492562", district:"Gaya",       initials:"SS", bg:"linear-gradient(135deg,#F7971E,#FFD200)" },
  { id:8,  post:"OBC Wing In-Charge",           name:"Shri Subhash Chandra Bose",   phone:"7488090309", district:"Gaya",       initials:"SB", bg:"linear-gradient(135deg,#654EA3,#EAAFC8)" },
  { id:9,  post:"Karpoori Manch In-Charge",     name:"Shri Birendra Chandravanshi", phone:"9934433895", district:"Arwal",      initials:"BC", bg:"linear-gradient(135deg,#DA22FF,#9733EE)" },
  { id:10, post:"Ambedkar Manch In-Charge",     name:"Shri Shyambali Paswan",       phone:"6287631605", district:"Aurangabad", initials:"SP", bg:"linear-gradient(135deg,#3A7BD5,#3A6073)" },
  { id:11, post:"Minority Wing In-Charge",      name:"Shri Arif Raza",              phone:"9934910224", district:"Aurangabad", initials:"AR", bg:"linear-gradient(135deg,#0BA360,#3CBA92)" },
  { id:12, post:"Media In-Charge",              name:"Shri Shashank Shekhar Dubey", phone:"8539097015", district:"Aurangabad", initials:"SD", bg:"linear-gradient(135deg,#2193B0,#6DD5ED)" }
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */
function fmt(n){ return n ? Number(n).toLocaleString("en-IN") : "—"; }
function ph(p){ return p && p.length===10 ? `+91 ${p.slice(0,5)} ${p.slice(5)}` : (p||"—"); }

function partyClass(p){
  if(!p) return "badge-ind";
  const u = p.toUpperCase();
  if(u.includes("BJP"))  return "badge-bjp";
  if(u.includes("RJD"))  return "badge-rjd";
  if(u.includes("JDU"))  return "badge-jdu";
  if(u.includes("LJP"))  return "badge-ljp";
  if(u.includes("INC")||u.includes("CONGRESS")) return "badge-inc";
  if(u.includes("HAM"))  return "badge-ham";
  if(u.includes("JSP"))  return "badge-jsp";
  if(u.includes("CPI")||u.includes("ML")) return "badge-cpi";
  if(u.includes("BSP"))  return "badge-bsp";
  if(u.includes("AIMIM")) return "badge-aim";
  return "badge-ind";
}

/* ── District meta ───────────────────────────────────────────────────────── */
const DIST = {
  gaya:       { color:"#059669", label:"Gaya",       acCount:10 },
  aurangabad: { color:"#D97706", label:"Aurangabad",  acCount:6  },
  jehanabad:  { color:"#7C3AED", label:"Jehanabad",   acCount:3  },
  arwal:      { color:"#0284C7", label:"Arwal",       acCount:2  }
};

/* ── Render all slides into #ppt-slides-stage ────────────────────────────── */
function buildDeck(){
  const stage = document.getElementById("ppt-slides-stage");
  if(!stage || !window.magadhZoneData) return;
  const D = window.magadhZoneData;
  const slides = [];

  /* ── SLIDE 1 : Cover ───────────────────────────────────────────────────── */
  slides.push(`
  <div class="slide slide-cover">
    <div class="cover-pill">Jan Suraaj Party &nbsp;·&nbsp; Magadh Zone, Bihar</div>
    <h1 class="cover-h1">Magadh Zone<br><span>21 Assembly Elections &amp; Candidate Dossier</span></h1>
    <p class="cover-sub">Election outcomes, Jan Suraaj candidate profiles, leadership directory, and verified caste demographics across <strong>Gaya · Aurangabad · Jehanabad · Arwal</strong>.</p>
    <div class="cover-stats">
      <div class="cs-box"><div class="cs-num">4</div><div class="cs-lbl">Districts</div></div>
      <div class="cs-box"><div class="cs-num">21</div><div class="cs-lbl">Assembly Seats</div></div>
      <div class="cs-box"><div class="cs-num">12</div><div class="cs-lbl">Zonal In-Charges</div></div>
      <div class="cs-box"><div class="cs-num">18,982</div><div class="cs-lbl">Peak JSP Votes (Sherghati)</div></div>
    </div>
    <div class="cover-note">Bihar Legislative Assembly Elections 2025 &nbsp;|&nbsp; Jan Suraaj Party — Internal Reference Document</div>
  </div>`);

  /* ── SLIDE 2 : Zone Overview ────────────────────────────────────────────── */
  slides.push(`
  <div class="slide">
    <div class="slide-hdr">
      <div>
        <div class="crumb">Zone Overview</div>
        <h2 class="slide-h2">Magadh Zone — District-Wise Assembly Structure</h2>
      </div>
      <span class="page-tag">02 / 29</span>
    </div>
    <div class="hub-grid">
      ${[
        {key:"gaya",       n:"Gaya",       ac:10, desc:"Bodh Gaya (SC), Wazirganj, Tikari, Gaya Town, Gurua, Sherghati, Atri, Barachatti (SC), Imamganj (SC), Belaganj.", highlight:"Sherghati 18,982 · Imamganj 11,912"},
        {key:"aurangabad", n:"Aurangabad", ac:6,  desc:"Rafiganj, Goh, Aurangabad Sadar, Kutumba (SC), Nabinagar, Obra.", highlight:"Goh 7,996 · Kutumba 6,065"},
        {key:"jehanabad",  n:"Jehanabad",  ac:3,  desc:"Makhdumpur (SC), Ghosi, Jehanabad Sadar.", highlight:"Jehanabad 5,760 · Makhdumpur 4,803"},
        {key:"arwal",      n:"Arwal",      ac:2,  desc:"Arwal Sadar, Kurtha.", highlight:"Kurtha 5,030 · Arwal 3,376"}
      ].map(d=>`
        <div class="hub-card" style="border-top:3px solid ${DIST[d.key].color}">
          <div class="hub-top">
            <div class="hub-dist" style="color:${DIST[d.key].color}">${d.n} District</div>
            <span class="hub-badge" style="background:${DIST[d.key].color}22;color:${DIST[d.key].color}">${d.ac} ACs</span>
          </div>
          <p class="hub-desc">${d.desc}</p>
          <div class="hub-hl"><i class="fa-solid fa-star"></i> Top JSP Votes: ${d.highlight}</div>
        </div>`).join("")}
    </div>
    <div class="slide-footer"><span>Jan Suraaj Party · Magadh Zone Executive Presentation</span><span>All 21 Candidates Verified</span></div>
  </div>`);

  /* ── SLIDE 3 : Leadership ───────────────────────────────────────────────── */
  slides.push(`
  <div class="slide">
    <div class="slide-hdr">
      <div>
        <div class="crumb">Organizational Leadership</div>
        <h2 class="slide-h2">Magadh Zone — 12 Zonal Officials &amp; Cell In-Charges</h2>
      </div>
      <span class="page-tag">03 / 29</span>
    </div>
    <div class="leaders-grid">
      ${zonalOfficialsData.map(l=>`
      <div class="leader-card">
        <div class="l-avatar" style="background:${l.bg}">${l.initials}</div>
        <div class="l-info">
          <div class="l-name">${l.name}</div>
          <div class="l-post">${l.post}</div>
          <div class="l-meta"><i class="fa-solid fa-location-dot"></i> ${l.district} &nbsp;|&nbsp; <i class="fa-solid fa-phone"></i> ${ph(l.phone)}</div>
        </div>
      </div>`).join("")}
    </div>
    <div class="slide-footer"><span>Magadh Zone Leadership Directory</span><span>12 Verified Contacts</span></div>
  </div>`);

  /* ── Per-district: Cover Slide + AC Slides ──────────────────────────────── */
  let globalAcIdx = 0;
  let slideNum = 3;

  ["gaya","aurangabad","jehanabad","arwal"].forEach(dKey=>{
    const dist = D.districts[dKey];
    const acList = D.assemblies.filter(a=>a.district===dKey);
    const dm = DIST[dKey];
    slideNum++;

    /* District Cover */
    slides.push(`
    <div class="slide">
      <div class="slide-hdr">
        <div>
          <div class="crumb" style="color:${dm.color}"><i class="fa-solid fa-landmark"></i> District Profile</div>
          <h2 class="slide-h2">${dist.nameEn} District — Constituencies &amp; Caste Demographics</h2>
        </div>
        <span class="page-tag">${String(slideNum).padStart(2,"0")} / 29</span>
      </div>
      <div class="two-col">
        <div class="panel" style="border-left:3px solid ${dm.color}">
          <div class="panel-title"><i class="fa-solid fa-list-ol"></i> Assembly Constituencies (${dist.totalACs})</div>
          <p class="panel-desc">${dist.description}</p>
          <div class="ac-list">
            ${acList.map((ac,i)=>`
            <div class="ac-row">
              <span class="ac-num">${i+1}</span>
              <span class="ac-nm">${ac.acName}${ac.isSC?' <sup class="sc-sup">SC</sup>':""}</span>
              <span class="ac-cand">${ac.jspCandidate.name}</span>
            </div>`).join("")}
          </div>
        </div>
        <div class="panel" style="border-left:3px solid ${dm.color}">
          <div class="panel-title" style="color:${dm.color}"><i class="fa-solid fa-users-rays"></i> ${dist.nameEn} District — Whole Caste Census</div>
          <div class="caste-stack">
            ${dist.casteDemographics.categories.map(c=>`
            <div class="caste-group" style="border-left:3px solid ${c.color}">
              <div class="cg-hdr">
                <span class="cg-name" style="color:${c.color}">${c.group}</span>
                <span class="cg-pct" style="background:${c.color}20;color:${c.color}">${c.percentage}</span>
              </div>
              <div class="cg-subs">
                ${c.subCastes.map(s=>`<span class="sub-chip"><b>${s.name}</b> ${s.pct}</span>`).join("")}
              </div>
            </div>`).join("")}
          </div>
        </div>
      </div>
      <div class="slide-footer"><span>District: ${dist.nameEn} · HQ: ${dist.headquarters} · Total Seats: ${dist.totalACs}</span><span>Verified Caste Data</span></div>
    </div>`);

    /* AC Slides */
    acList.forEach(ac=>{
      globalAcIdx++;
      slideNum++;
      const r = ac.results;
      const j = ac.jspCandidate;
      const margin = (r.winner.votes && r.runnerUp.votes) ? (r.winner.votes - r.runnerUp.votes) : null;

      slides.push(`
      <div class="slide">
        <div class="slide-hdr">
          <div>
            <div class="crumb" style="color:${dm.color}"><i class="fa-solid fa-map-pin"></i> ${dist.nameEn} · ${ac.lokSabha}</div>
            <h2 class="slide-h2">${ac.acName}${ac.isSC?' <sup class="sc-sup">SC</sup>':""} <span class="ac-seq">AC ${globalAcIdx} of 21</span></h2>
          </div>
          <span class="page-tag">${String(slideNum).padStart(2,"0")} / 29</span>
        </div>

        <div class="two-col">

          <!-- Left: Election Results -->
          <div class="panel">
            <div class="panel-title"><i class="fa-solid fa-square-poll-vertical"></i> 2025 Bihar Election Outcome</div>

            <div class="result-box winner-box">
              <div class="rb-header">
                <span class="rb-tag winner-tag"><i class="fa-solid fa-trophy"></i> MLA WINNER</span>
                <span class="party-badge ${partyClass(r.winner.party)}">${r.winner.party}</span>
              </div>
              <div class="rb-name">${r.winner.name}</div>
              <div class="rb-row">
                <span>Caste: <b>${r.winner.caste}</b></span>
                ${margin?`<span class="rb-margin"><i class="fa-solid fa-arrow-trend-up"></i> Margin: +${fmt(margin)}</span>`:""}
              </div>
              <div class="rb-votes">Votes: <b>${fmt(r.winner.votes)}</b></div>
            </div>

            <div class="result-box runner-box">
              <div class="rb-header">
                <span class="rb-tag runner-tag">RUNNER UP</span>
                <span class="party-badge ${partyClass(r.runnerUp.party)}">${r.runnerUp.party}</span>
              </div>
              <div class="rb-name">${r.runnerUp.name}</div>
              <div class="rb-row"><span>Caste: <b>${r.runnerUp.caste}</b></span></div>
              <div class="rb-votes">Votes: <b>${fmt(r.runnerUp.votes)}</b></div>
            </div>

            ${r.secondRunnerUp?`
            <div class="minor-result">
              <span class="mr-pos">3rd</span>
              <span class="mr-name">${r.secondRunnerUp.name}</span>
              <span class="party-badge badge-sm ${partyClass(r.secondRunnerUp.party)}">${r.secondRunnerUp.party}</span>
              <span class="mr-votes">${fmt(r.secondRunnerUp.votes)}</span>
            </div>`:""}
            ${r.thirdRunnerUp?`
            <div class="minor-result">
              <span class="mr-pos">4th</span>
              <span class="mr-name">${r.thirdRunnerUp.name}</span>
              <span class="party-badge badge-sm ${partyClass(r.thirdRunnerUp.party)}">${r.thirdRunnerUp.party}</span>
              <span class="mr-votes">${fmt(r.thirdRunnerUp.votes)}</span>
            </div>`:""}
          </div>

          <!-- Right: JSP Candidate + Caste -->
          <div class="panel jsp-panel" style="border-left:3px solid #D97706">
            <div class="jsp-badge"><i class="fa-solid fa-flag"></i> Jan Suraaj Party Candidate</div>
            <div class="jsp-name">${j.name}</div>
            <div class="jsp-meta-row">
              <span class="jsp-caste"><i class="fa-solid fa-id-badge"></i> ${j.caste}</span>
              <span class="jsp-votes-pill">${fmt(j.votes)} votes</span>
            </div>
            <div class="jsp-pos-bar"><i class="fa-solid fa-medal"></i> Position: <b>${j.position}</b></div>
            <div class="jsp-phone"><i class="fa-solid fa-phone" style="color:#10B981"></i> ${ph(j.phone)}</div>

            <div class="bio-box">
              <div class="bio-title">Candidate Background:</div>
              <ul class="bio-list">
                ${j.profile.map(p=>`<li>${p}</li>`).join("")}
              </ul>
            </div>

            <!-- AC Caste Breakdown -->
            ${ac.acCasteData.breakdown && ac.acCasteData.breakdown.length?`
            <div class="ac-caste-box">
              <div class="ac-caste-title"><i class="fa-solid fa-users-viewfinder"></i> ${ac.acName} Assembly Caste Demographics${ac.totalVoters?` &nbsp;<span class="voter-count">Voters: ${ac.totalVoters}</span>`:""}
              </div>
              <div class="ac-caste-chips">
                ${ac.acCasteData.breakdown.map(b=>`
                <div class="acc-chip" style="border-left:3px solid ${b.color}">
                  <span class="acc-grp" style="color:${b.color}">${b.group}</span>
                  <span class="acc-sub">${b.sub}</span>
                </div>`).join("")}
              </div>
            </div>`:""}
          </div>

        </div>
        <div class="slide-footer"><span>Magadh Zone · ${dist.nameEn} · ${ac.lokSabha}</span><span>AC ${globalAcIdx} / 21</span></div>
      </div>`);
    });
  });

  /* ── SLIDE 29 : Conclusion ──────────────────────────────────────────────── */
  slides.push(`
  <div class="slide slide-cover">
    <div class="cover-pill"><i class="fa-solid fa-circle-check"></i> Strategic Summary &amp; Roadmap</div>
    <h2 class="cover-h1" style="font-size:2rem">Magadh Zone — Ground Performance &amp; Key Takeaways</h2>
    <p class="cover-sub">Jan Suraaj Party candidates established strong grassroots footholds across all 21 constituencies. With precise demographic alignment and structured booth-level management, decisive victories are achievable in the next election cycle.</p>
    <div class="cover-stats">
      <div class="cs-box"><div class="cs-num" style="font-size:1.3rem">Sherghati</div><div class="cs-lbl">18,982 Votes · Runner Up</div></div>
      <div class="cs-box"><div class="cs-num" style="font-size:1.3rem">Imamganj</div><div class="cs-lbl">11,912 Votes · Runner Up</div></div>
      <div class="cs-box"><div class="cs-num" style="font-size:1.3rem">Goh</div><div class="cs-lbl">7,996 Votes · Runner Up</div></div>
      <div class="cs-box"><div class="cs-num" style="font-size:1.3rem">Kutumba</div><div class="cs-lbl">6,065 Votes · Runner Up</div></div>
    </div>
    <div class="cover-note">🚩 "Suraaj of the People, by the People, for the People of Bihar" · Jan Suraaj Party — Magadh Zone</div>
  </div>`);

  stage.innerHTML = slides.join("\n");
}

document.addEventListener("DOMContentLoaded", buildDeck);
