/**
 * Jan Suraaj Party - Magadh Zone (21 Assembly Constituencies Master Dataset)
 * Detailed Election Results, Candidate Dossiers, Caste Breakdown, and Zonal Leaders.
 */

const magadhZoneData = {
  zoneName: "Magadh Division (Magadh Pramandal)",
  totalACs: 21,
  totalDistricts: 4,
  
  // District Metadata
  districts: {
    gaya: {
      id: "gaya",
      nameHi: "गया",
      nameEn: "Gaya",
      hq: "Gaya",
      totalACs: 10,
      lokSabhaCovered: ["38. Gaya (SC)", "37. Aurangabad", "36. Jehanabad"],
      topJspCandidate: "Pawan Kishor (18,982 votes)",
      jspVoteShareSummary: "10 ACs में जन सुराज प्रत्याशियों ने मजबूत जनसंपर्क बनाया। शेरघाटी में 18,982 वोट और इमामगंज में 11,912 वोट प्राप्त हुए।",
      headquarters: "Gaya",
      description: "Gaya district has 10 Assembly Constituencies spread across Gaya (SC), Aurangabad, and Jehanabad Lok Sabha segments. Dominated by SC, EBC, and OBC communities.",
      // Gaya Whole District Caste Demographics
      casteDemographics: {
        status: "Official District Caste Census Data (Verified)",
        description: "Overall social and caste equation of Gaya district",
        categories: [
          {
            group: "Scheduled Castes (SC)",
            percentage: "37%",
            color: "#7C3AED",
            subCastes: [
              { name: "Musahar", pct: "17%" },
              { name: "Dusadh / Paswan", pct: "7%" },
              { name: "Chamar / Ravidas", pct: "7%" },
              { name: "Pasi", pct: "6%" }
            ]
          },
          {
            group: "Extremely Backward Classes (EBC)",
            percentage: "24%",
            color: "#059669",
            subCastes: [
              { name: "Dangi", pct: "8%" },
              { name: "Kahar / Chandravanshi", pct: "7%" },
              { name: "Vaishya (Kanu/Teli/Halwai)", pct: "6%" },
              { name: "Others (EBC)", pct: "3%" }
            ]
          },
          {
            group: "Other Backward Classes (OBC)",
            percentage: "18%",
            color: "#D97706",
            subCastes: [
              { name: "Yadav", pct: "14%" },
              { name: "Kushwaha / Koeri", pct: "3%" },
              { name: "Others (OBC)", pct: "1%" }
            ]
          },
          {
            group: "Minority (Muslim)",
            percentage: "15%",
            color: "#0284C7",
            subCastes: [
              { name: "Muslim", pct: "15%" }
            ]
          },
          {
            group: "General (Upper Castes)",
            percentage: "7%",
            color: "#DC2626",
            subCastes: [
              { name: "Rajput", pct: "4%" },
              { name: "Brahmin", pct: "2%" },
              { name: "Bhumihar", pct: "1%" }
            ]
          }
        ]
      }
    },
    aurangabad: {
      id: "aurangabad",
      nameHi: "औरंगाबाद",
      nameEn: "Aurangabad",
      hq: "Aurangabad",
      totalACs: 6,
      lokSabhaCovered: ["37. Aurangabad", "35. Karakat"],
      topJspCandidate: "Sita Ram Dukhari (7,996 votes)",
      jspVoteShareSummary: "Strong JSP presence across 6 ACs. Goh: 7,996 votes, Kutumba (SC): 6,065 votes.",
      headquarters: "Aurangabad",
      description: "Aurangabad district has 6 Assembly Constituencies spread across Aurangabad and Karakat Lok Sabha segments. Dominated by EBC, SC, General (Rajput/Bhumihar), and OBC communities.",
      // Aurangabad Whole District Caste Demographics
      casteDemographics: {
        status: "Official District Caste Census Data (Verified)",
        description: "Overall social and caste equation of Aurangabad district",
        categories: [
          {
            group: "Extremely Backward Classes (EBC)",
            percentage: "30%",
            color: "#059669",
            subCastes: [
              { name: "Chandravanshi", pct: "10%" },
              { name: "Teli", pct: "5%" },
              { name: "Halwai", pct: "4%" },
              { name: "Nai", pct: "3%" },
              { name: "Mallah", pct: "2%" },
              { name: "Lohar", pct: "2%" },
              { name: "Bind", pct: "2%" },
              { name: "Kanu", pct: "1%" },
              { name: "Noniya", pct: "1%" }
            ]
          },
          {
            group: "Scheduled Castes (SC)",
            percentage: "25%",
            color: "#7C3AED",
            subCastes: [
              { name: "Paswan", pct: "8%" },
              { name: "Ravidas / Chamar", pct: "7%" },
              { name: "Bhuiyan / Manjhi", pct: "5%" },
              { name: "Pasi", pct: "4%" },
              { name: "Others (SC)", pct: "1%" }
            ]
          },
          {
            group: "Other Backward Classes (OBC)",
            percentage: "19%",
            color: "#D97706",
            subCastes: [
              { name: "Yadav", pct: "9%" },
              { name: "Kushwaha + Koeri", pct: "8%" },
              { name: "Kurmi", pct: "1%" },
              { name: "Baniya", pct: "1%" }
            ]
          },
          {
            group: "General (Upper Castes)",
            percentage: "18%",
            color: "#DC2626",
            subCastes: [
              { name: "Rajput", pct: "8%" },
              { name: "Bhumihar", pct: "4%" },
              { name: "Kayastha", pct: "3%" },
              { name: "Brahmin", pct: "3%" }
            ]
          },
          {
            group: "Minority (Muslim)",
            percentage: "8%",
            color: "#0284C7",
            subCastes: [
              { name: "Muslim", pct: "8%" }
            ]
          }
        ]
      }
    },
    jehanabad: {
      id: "jehanabad",
      nameHi: "जहानाबाद",
      nameEn: "Jehanabad",
      hq: "Jehanabad",
      totalACs: 3,
      lokSabhaCovered: ["36. Jehanabad"],
      topJspCandidate: "Abhiram Singh (5,760 votes)",
      jspVoteShareSummary: "JSP candidates put up a strong fight in 3 ACs of Jehanabad. Jehanabad AC: 5,760 votes, Makhdumpur: 4,803 votes.",
      headquarters: "Jehanabad",
      description: "Jehanabad district has 3 Assembly Constituencies under Jehanabad Lok Sabha. Dominated by General (Bhumihar), OBC (Yadav), and SC communities.",
      // Jehanabad Whole District Caste Demographics
      casteDemographics: {
        status: "Official District Caste Census Data (Verified)",
        description: "Overall social and caste equation of Jehanabad district",
        categories: [
          {
            group: "Other Backward Classes (OBC)",
            percentage: "27%",
            color: "#D97706",
            subCastes: [
              { name: "Yadav", pct: "18%" },
              { name: "Vaishya", pct: "4%" },
              { name: "Kushwaha", pct: "3%" },
              { name: "Kurmi", pct: "2%" }
            ]
          },
          {
            group: "Extremely Backward Classes (EBC)",
            percentage: "24%",
            color: "#059669",
            subCastes: [
              { name: "Dangi", pct: "13%" },
              { name: "Kahar", pct: "7%" },
              { name: "Teli", pct: "2%" },
              { name: "Others (EBC)", pct: "2%" }
            ]
          },
          {
            group: "Scheduled Castes (SC)",
            percentage: "22%",
            color: "#7C3AED",
            subCastes: [
              { name: "Chamar / Ravidas", pct: "14%" },
              { name: "Dusadh / Paswan", pct: "6%" },
              { name: "Manjhi", pct: "1%" },
              { name: "Pasi", pct: "1%" }
            ]
          },
          {
            group: "General (Upper Castes)",
            percentage: "18%",
            color: "#DC2626",
            subCastes: [
              { name: "Brahmin", pct: "15%" },
              { name: "Bhumihar", pct: "2%" },
              { name: "Rajput", pct: "1%" }
            ]
          },
          {
            group: "Minority (Muslim)",
            percentage: "9%",
            color: "#0284C7",
            subCastes: [
              { name: "Muslim", pct: "9%" }
            ]
          }
        ]
      }
    },
    arwal: {
      id: "arwal",
      nameHi: "अरवल",
      nameEn: "Arwal",
      hq: "Arwal",
      totalACs: 2,
      lokSabhaCovered: ["36. Jehanabad"],
      topJspCandidate: "Rambali Chandravanshi (5,030 votes)",
      jspVoteShareSummary: "In 2 ACs of Arwal, JSP secured 5,030 votes in Kurtha and 3,376 votes in Arwal Sadar.",
      headquarters: "Arwal",
      description: "Arwal district has 2 Assembly Constituencies under Jehanabad Lok Sabha. Dominated by OBC (Kushwaha), EBC, SC, and General (Bhumihar) communities.",
      // Arwal Whole District Caste Demographics
      casteDemographics: {
        status: "Official District Caste Census Data (Verified)",
        description: "Overall social and caste equation of Arwal district",
        categories: [
          {
            group: "Other Backward Classes (OBC)",
            percentage: "28%",
            color: "#D97706",
            subCastes: [
              { name: "Kushwaha", pct: "19%" },
              { name: "Yadav", pct: "4%" },
              { name: "Vaishya", pct: "3%" },
              { name: "Kurmi", pct: "2%" }
            ]
          },
          {
            group: "Extremely Backward Classes (EBC)",
            percentage: "23%",
            color: "#059669",
            subCastes: [
              { name: "Chandravanshi", pct: "7%" },
              { name: "Teli", pct: "4%" },
              { name: "Badhai (Carpenter)", pct: "3%" },
              { name: "Kanu", pct: "2.5%" },
              { name: "Kumhar", pct: "2%" },
              { name: "Nai", pct: "2%" },
              { name: "Mallah", pct: "1.5%" },
              { name: "Bind", pct: "0.5%" },
              { name: "Dhanuk", pct: "0.5%" }
            ]
          },
          {
            group: "Scheduled Castes (SC)",
            percentage: "22.4%",
            color: "#7C3AED",
            subCastes: [
              { name: "Dusadh / Paswan", pct: "6.4%" },
              { name: "Chamar / Ravidas", pct: "5%" },
              { name: "Pasi", pct: "3%" },
              { name: "Rajwar", pct: "2%" },
              { name: "Dhobi", pct: "2%" },
              { name: "Pan, Tantwa, Bhuiyan", pct: "2%" },
              { name: "Musahar", pct: "1%" },
              { name: "Dom, Nat", pct: "1%" }
            ]
          },
          {
            group: "General (Upper Castes)",
            percentage: "15.5%",
            color: "#DC2626",
            subCastes: [
              { name: "Bhumihar", pct: "10%" },
              { name: "Brahmin", pct: "2.5%" },
              { name: "Rajput", pct: "2%" },
              { name: "Kayastha", pct: "1%" }
            ]
          },
          {
            group: "Minority (Muslim)",
            percentage: "11%",
            color: "#0284C7",
            subCastes: [
              { name: "Muslim", pct: "11%" }
            ]
          },
          {
            group: "Scheduled Tribes (ST)",
            percentage: "0.1%",
            color: "#475569",
            subCastes: [
              { name: "Tribal Community (ST)", pct: "0.1%" }
            ]
          }
        ]
      }
    }
  },


  // 21 Assembly Constituencies Detailed Dataset
  assemblies: [
    // ==========================================
    // GAYA DISTRICT (10 ACs)
    // ==========================================
    {
      id: "bodh-gaya-sc",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Bodh Gaya (SC)",
      acNameHi: "बोधगया (SC)",
      isSC: true,
      lokSabha: "38. Gaya (SC)",
      totalVoters: "3,20,000",
      results: {
        winner: { name: "KUMAR SARVJEET", party: "RJD", caste: "Dusadh", votes: 100236 },
        runnerUp: { name: "SHYAMDEO PASWAN", party: "LJP", caste: "Dusadh", votes: 99355 },
        secondRunnerUp: { name: "NANDLAL KUMAR", party: "IND", caste: "--", votes: 10181 },
        thirdRunnerUp: { name: "LAKSHMAN MANJHI", party: "JSP", caste: "Manjhi", votes: 4024 }
      },
      jspCandidate: {
        name: "Lakshman Manjhi",
        nameHi: "लक्ष्मण मांझी",
        caste: "SC (Manjhi)",
        phone: "9852146218",
        votes: 4024,
        position: "3rd Runner Up",
        profile: [
          "Former Pradesh Mahasachiv (HUM) 2022 - 2025",
          "Former Zila Pradhan Mahasachiv (HUM)",
          "Prominent Social Activist in Bodh Gaya Region"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "3,20,000",
        demographicsNote: "बोधगया (SC) विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "SC (36%)", color: "#7C3AED", sub: "मुसहर 18%, दुसाध 5%, चमार 5%, पासी 4%, राजभर 2%, अन्य 2%" },
          { group: "OBC (28%)", color: "#D97706", sub: "यादव 20%, कुशवाहा+कुर्मी 5%, अन्य 3%" },
          { group: "EBC (22%)", color: "#059669", sub: "दांगी 8%, वैश्य (कानू, तेली, हलवाई) 7%, कहार+नाई+बढ़ई+लोहार 4%, अन्य 3%" },
          { group: "Minority (7%)", color: "#0284C7", sub: "मुस्लिम 7%" },
          { group: "General (7%)", color: "#DC2626", sub: "राजपूत 3%, भूमिहार 2%, अन्य 2%" }
        ]
      }
    },
    {
      id: "wazirganj",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Wazirganj",
      acNameHi: "वज़ीरगंज",
      isSC: false,
      lokSabha: "38. Gaya (SC)",
      totalVoters: "3,25,000",
      results: {
        winner: { name: "Birendra Singh", party: "BJP", caste: "Bhumihar", votes: 94574 },
        runnerUp: { name: "Awadhesh Kumar Singh", party: "INC", caste: "Rajput", votes: 81841 },
        secondRunnerUp: { name: "Chitranjan Kumar", party: "BSP", caste: "--", votes: 14303 },
        thirdRunnerUp: { name: "Santosh Kumar", party: "JSP", caste: "Teli", votes: 5017 }
      },
      jspCandidate: {
        name: "Santosh Kumar",
        nameHi: "संतोष कुमार",
        caste: "Teli (OBC)",
        phone: "8102492562",
        votes: 5017,
        position: "3rd Runner Up",
        meta: "Male | 40 | OBC | Teli | Incumbent Mukhiya",
        profile: [
          "Incumbent 2 Consecutive Terms Mukhiya (2016 to Till Date)",
          "Businessman (Brick Kiln Business, Construction Material Shop)",
          "Jan Suraaj Anumandal Adhyaksh"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "3,25,000",
        demographicsNote: "वज़ीरगंज विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "SC (37%)", color: "#7C3AED", sub: "मुसहर 22%, रविदास 5%, पासी 4%, दुसाध 4%, अन्य 2%" },
          { group: "General (25%)", color: "#DC2626", sub: "राजपूत 19%, भूमिहार 5%, ब्राह्मण 1%" },
          { group: "EBC (17%)", color: "#059669", sub: "कहार, कुम्हार, नाई, लोहार 7%, कानू, तेली, हलवाई 6%, दांगी 3%, अन्य 1%" },
          { group: "OBC (15%)", color: "#D97706", sub: "यादव 11%, कुशवाहा 4%" },
          { group: "Minority (6%)", color: "#0284C7", sub: "मुस्लिम 6%" }
        ]
      }
    },
    {
      id: "tikari",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Tikari",
      acNameHi: "टिकारी",
      isSC: false,
      lokSabha: "38. Gaya (SC)",
      totalVoters: "3,30,000",
      results: {
        winner: { name: "AJAY KUMAR", party: "RJD", caste: "Koiri", votes: 97550 },
        runnerUp: { name: "ANIL KUMAR", party: "HAM", caste: "Bhumihar", votes: 95492 },
        secondRunnerUp: { name: "SUBODH KUMAR SINGH", party: "IND", caste: "--", votes: 3730 },
        thirdRunnerUp: { name: "UDAY PASWAN", party: "BSP", caste: "Dusadh", votes: 2807 },
        fourthRunnerUp: { name: "SHASHI YADAV", party: "JSP", caste: "Yadav", votes: 2552 }
      },
      jspCandidate: {
        name: "Dr. Shashi Yadav",
        nameHi: "डॉ. शशि यादव",
        caste: "Yadav",
        phone: "9334110908",
        votes: 2552,
        position: "4th Runner Up",
        profile: [
          "Former Rashtriya Mahasachiv HAM Party",
          "Doctor at a Government Hospital",
          "Director of a Private Hospital",
          "Prominent Social Worker & Health Activist"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "3,30,000",
        demographicsNote: "टिकारी विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "OBC (26%)", color: "#D97706", sub: "यादव 18%, कुशवाहा 4%, अन्य 4%" },
          { group: "EBC (25%)", color: "#059669", sub: "दांगी 8%, तेली+कानू 5%, निषाद 5%, अन्य 7%" },
          { group: "SC (24%)", color: "#7C3AED", sub: "पासवान 8%, मुसहर 7%, रविदास 5%, अन्य 4%" },
          { group: "General (20%)", color: "#DC2626", sub: "भूमिहार 10%, राजपूत 7%, ब्राह्मण 2%, अन्य 1%" },
          { group: "Minority (5%)", color: "#0284C7", sub: "मुस्लिम 5%" }
        ]
      }
    },
    {
      id: "gaya-town",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Gaya Town",
      acNameHi: "गया टाउन (शहर)",
      isSC: false,
      lokSabha: "38. Gaya (SC)",
      totalVoters: "2,69,781",
      results: {
        winner: { name: "Prem Kumar", party: "BJP", caste: "Kahar", votes: 90878 },
        runnerUp: { name: "Akhaury Onkar Nath", party: "INC", caste: "Kayasth", votes: 64455 },
        secondRunnerUp: { name: "Dhirendra Agrawal", party: "JSP", caste: "Bania", votes: 4479 }
      },
      jspCandidate: {
        name: "Dhirendra Agarwal",
        nameHi: "धीरेंद्र अग्रवाल",
        caste: "Bania (Agarwal)",
        phone: "8920658190",
        votes: 4479,
        position: "2nd Runner Up",
        profile: [
          "3 times Member of Parliament (MP) in Chatra Constituency",
          "Prominent Industrialist & Businessman",
          "Wife is an Executive Member of Chamber of Commerce",
          "Big Landlord & Philanthropist in Magadh Region"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "2,69,781",
        demographicsNote: "गया टाउन विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "EBC (29%)", color: "#059669", sub: "कहार, कुम्हार, नाई, बढ़ई, लोहार 15%, कानू, तेली 8%, दांगी 3%, अन्य 3%" },
          { group: "OBC (21%)", color: "#D97706", sub: "वैश्य 10%, यादव 6%, कुशवाहा 3%, अन्य 2%" },
          { group: "General (20%)", color: "#DC2626", sub: "कायस्थ 8%, भूमिहार 5%, राजपूत 4%, ब्राह्मण 3%" },
          { group: "Minority (20%)", color: "#0284C7", sub: "मुस्लिम 20%" },
          { group: "SC (10%)", color: "#7C3AED", sub: "रविदास 4%, पासवान 2%, पासी 1%, अन्य 3%" }
        ]
      }
    },
    {
      id: "gurua",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Gurua",
      acNameHi: "गुरुआ",
      isSC: false,
      lokSabha: "37. Aurangabad",
      totalVoters: "2,85,000",
      results: {
        winner: { name: "AWADHESH KUMAR SINGH", party: "RJD", caste: "Rajput", votes: 81522 },
        runnerUp: { name: "JITENDRA KUMAR SINGH", party: "JDU", caste: "Rajput", votes: 74318 },
        secondRunnerUp: { name: "PRABHU NATH PRASAD", party: "JSP", caste: "EBC", votes: 3861 },
        thirdRunnerUp: null
      },
      jspCandidate: {
        name: "Prabhu Nath Prasad",
        nameHi: "प्रभु नाथ प्रसाद",
        caste: "EBC (Dangi)",
        phone: "9386826696",
        votes: 3861,
        position: "2nd Runner Up",
        profile: [
          "Jan Suraaj Ground-Level Organiser in Gurua block",
          "Active farmer and community leader",
          "Mobilised EBC + SC bloc across Gurua region"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "2,85,000",
        demographicsNote: "Gurua Assembly Caste Demographics",
        breakdown: [
          { group: "SC (35%)", color: "#7C3AED", sub: "Musahar 20%, Dusadh 7%, Chamar 5%, Others 3%" },
          { group: "General (25%)", color: "#DC2626", sub: "Rajput 20%, Brahmin 3%, Bhumihar 2%" },
          { group: "OBC (18%)", color: "#D97706", sub: "Yadav 15%, Kushwaha 3%" },
          { group: "EBC (15%)", color: "#059669", sub: "Dangi 8%, Kahar 4%, Teli/Kanu 3%" },
          { group: "Minority (7%)", color: "#0284C7", sub: "Muslim 7%" }
        ]
      }
    },

    {
      id: "sherghati",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Sherghati",
      acNameHi: "शेरघाटी",
      isSC: false,
      lokSabha: "37. Aurangabad",
      totalVoters: "2,90,000",
      results: {
        winner: { name: "UDAY KUMAR SINGH", party: "LJP", caste: "Bhumiar", votes: 77270 },
        runnerUp: { name: "Pramod Kumar Verma", party: "RJD", caste: "Dangi", votes: 63746 },
        secondRunnerUp: { name: "Pawan Kishore", party: "JSP", caste: "Kushwaha", votes: 18982 },
        thirdRunnerUp: { name: "Vinod Prasad Yadav", party: "BSP", caste: "Yadav", votes: 6393 }
      },
      jspCandidate: {
        name: "Pawan Kishore",
        nameHi: "पवन किशोर",
        caste: "OBC (Kushwaha)",
        phone: "7667352222",
        votes: 18982,
        position: "2nd Runner Up (18,982 Votes)",
        meta: "Male | 48 | OBC | Kushwaha | Incumbent Zila Parishad Sadasya",
        profile: [
          "Incumbent Zila Parishad Sadasya (Sherghati Bhag 2, 2021 to Till Date)",
          "Former Incumbent 2 Terms Mukhiya (2011 to 2021)",
          "Record 18,982 Votes - Highest JSP vote in Magadh Zone"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "2,90,000",
        demographicsNote: "Sherghati Assembly Demographics",
        breakdown: [
          { group: "SC (34%)", color: "#7C3AED", sub: "Musahar 15%, Dusadh 7%, Chamar 6%, Pasi 4%, Others 2%" },
          { group: "OBC (24%)", color: "#D97706", sub: "Yadav 15%, Kushwaha 6%, Kurmi 2%, Others 1%" },
          { group: "EBC (17%)", color: "#059669", sub: "Dangi 6%, Kahar 4%, Vaishya (Kanu/Teli) 4%, Nai/Badhai 3%" },
          { group: "Minority (15%)", color: "#0284C7", sub: "Muslim 15%" },
          { group: "General (10%)", color: "#DC2626", sub: "Bhumihar 4%, Rajput 3%, Brahmin 2%, Kayastha 1%" }
        ]
      }
    },
    {
      id: "atri",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Atri",
      acNameHi: "अतरी",
      isSC: false,
      lokSabha: "36. Jehanabad",
      totalVoters: "3,00,000",
      results: {
        winner: { name: "Romit Kumar", party: "HAM", caste: "Yadav", votes: 102102 },
        runnerUp: { name: "Vaijayanti Devi", party: "RJD", caste: "Yadav", votes: 76325 },
        secondRunnerUp: { name: "Shailendra Kumar", party: "JSP", caste: "Yadav", votes: 3177 },
        thirdRunnerUp: { name: "Sita Ram", party: "BSP", caste: "--", votes: 2795 }
      },
      jspCandidate: {
        name: "Shailendra Kumar",
        nameHi: "शैलेंद्र कुमार",
        caste: "OBC (Yadav)",
        phone: "7654767936",
        votes: 3177,
        position: "2nd Runner Up",
        profile: [
          "Experienced Grassroots Organizer in Atri & Nimchak Bathani",
          "Leader in Local Rural Cooperatives & Farmer Outreach"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "3,00,000",
        demographicsNote: "Atri Assembly Demographics",
        breakdown: [
          { group: "SC (28%)", color: "#7C3AED", sub: "Manjhi 13%, Pasi 6%, Chamar 4%, Dusadh 4%, Others 1%" },
          { group: "OBC (24%)", color: "#D97706", sub: "Yadav 19%, Kushwaha+Kurmi 4%, Others 1%" },
          { group: "EBC (22%)", color: "#059669", sub: "Vaishya (Kanu/Teli/Halwai) 8%, Dangi 6%, Badhai+Lohar+Nai 5%, Others 3%" },
          { group: "General (20%)", color: "#DC2626", sub: "Bhumihar 11%, Rajput 5%, Brahmin 3%, Others 1%" },
          { group: "Minority (6%)", color: "#0284C7", sub: "Muslim 6%" }
        ]
      }
    },
    {
      id: "barachatti-sc",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Barachatti (SC)",
      acNameHi: "बाराचट्टी (SC)",
      isSC: true,
      lokSabha: "38. Gaya (SC)",
      totalVoters: "3,10,000",
      results: {
        winner: { name: "Jyoti Devi", party: "HAM", caste: "Manjhi", votes: 108271 },
        runnerUp: { name: "Tanushree Kumari", party: "RJD", caste: "Paswan", votes: 99378 },
        secondRunnerUp: { name: "Er. Hemant Paswan", party: "JSP", caste: "Dusadh (Paswan)", votes: 3967 },
        thirdRunnerUp: { name: "Kareena Kumari", party: "BSP", caste: "--", votes: 3379 }
      },
      jspCandidate: {
        name: "Er. Hemant Paswan",
        nameHi: "इंजी. हेमंत पासवान",
        caste: "Paswan (Dusadh)",
        phone: "9430765198",
        votes: 3967,
        position: "2nd Runner Up",
        profile: [
          "Retd. Chief Engineer Govt of Jharkhand",
          "State President & Convener, Association of Dusadh Samaj",
          "Eminent Dalit Intellectual & Technocrat"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "3,10,000",
        demographicsNote: "बाराचट्टी (SC) विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "SC (35%)", color: "#7C3AED", sub: "मुसहर 18%, चमार 6%, दुसाध 5%, भोक्ता 4%, अन्य 2%" },
          { group: "OBC (29%)", color: "#D97706", sub: "यादव 23%, कुशवाहा+कुर्मी 3%, वैश्य 2%, अन्य 1%" },
          { group: "EBC (20%)", color: "#059669", sub: "कहार 6%, नाई+लोहार+बढ़ई 4%, वैश्य (कानू+तेली+बरई) 4%, दांगी 4%, अन्य 2%" },
          { group: "Minority (11%)", color: "#0284C7", sub: "मुस्लिम 11%" },
          { group: "General (5%)", color: "#DC2626", sub: "राजपूत 3%, भूमिहार 1%, ब्राह्मण+कायस्थ 1%" }
        ]
      }
    },
    {
      id: "imamganj-sc",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Imamganj (SC)",
      acNameHi: "इमामगंज (SC)",
      isSC: true,
      lokSabha: "37. Aurangabad",
      totalVoters: "3,26,000",
      results: {
        winner: { name: "Deepa Kumari", party: "HAM", caste: "Mushar", votes: 104861 },
        runnerUp: { name: "Ritu Priya Chaudhary", party: "RJD", caste: "Pasi", votes: 79005 },
        secondRunnerUp: { name: "Dr Ajeet Kumar", party: "JSP", caste: "Chamar", votes: 11912 },
        thirdRunnerUp: { name: "Tengar Paswan", party: "IND", caste: "Dusadh", votes: 2313 }
      },
      jspCandidate: {
        name: "Dr Ajeet Kumar",
        nameHi: "डॉ. अजीत कुमार",
        caste: "Chamar (SC)",
        phone: "7050695169",
        votes: 11912,
        position: "2nd Runner Up (11,912 Votes)",
        meta: "Male | 32 | SC | Chamar | Doctor",
        profile: [
          "Doctor at a Government Hospital",
          "Director of a Private Hospital & Healthcare Center",
          "Dedicated Social Worker & Grassroots Activist"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "3,26,000",
        demographicsNote: "इमामगंज (SC) विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "SC (35%)", color: "#7C3AED", sub: "मुसहर 17%, दुसाध 7%, चमार 5%, पासी 4%, धोबी 1%, अन्य 1%" },
          { group: "EBC (25%)", color: "#059669", sub: "दांगी 8%, बढ़ई+लोहार+कहार+पनेरी+कुम्हार+नाई 7%, वैश्य (कानू, तेली, हलवाई) 7%, अन्य 3%" },
          { group: "OBC (18%)", color: "#D97706", sub: "यादव 14%, कुशवाहा 3%, अन्य 1%" },
          { group: "Minority (15%)", color: "#0284C7", sub: "मुस्लिम 15%" },
          { group: "General (7%)", color: "#DC2626", sub: "राजपूत 3%, भूमिहार 2%, ब्राह्मण 2%" }
        ]
      }
    },
    {
      id: "belaganj",
      district: "gaya",
      districtHi: "गया",
      districtEn: "Gaya",
      acName: "Belaganj",
      acNameHi: "बेलागंज",
      isSC: false,
      lokSabha: "38. Gaya (SC)",
      totalVoters: "2,85,000",
      results: {
        winner: { name: "MANORAMA DEVI", party: "JDU", caste: "Yadav", votes: 95685 },
        runnerUp: { name: "VISHWANATH KUMAR SINGH", party: "RJD", caste: "Yadav", votes: 92803 },
        secondRunnerUp: { name: "LALU YADAV", party: "IND", caste: "Yadav", votes: 2769 },
        thirdRunnerUp: { name: "VIBHUTI NARAYAN SINGH", party: "IND", caste: "--", votes: 2562 },
        fourthRunnerUp: { name: "MADHUBALA KUMARI", party: "AAP", caste: "--", votes: 2204 },
        fifthRunnerUp: { name: "MD SAHABUDDIN", party: "JSP", caste: "Minority", votes: 1621 }
      },
      jspCandidate: {
        name: "Prof. Shabuddin",
        nameHi: "प्रो. शहाबुद्दीन",
        caste: "Minority (Muslim)",
        phone: "9934480654",
        votes: 1621,
        position: "5th Runner Up",
        meta: "Male | 63 | Minority | Muslim | Educationist",
        profile: [
          "Retd. Professor, Mirza Ghalib College Gaya",
          "Member, Jan Suraaj Party State Working Committee",
          "Eminent Educationist & Community Leader"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "2,85,000",
        demographicsNote: "Belaganj Assembly Demographics",
        breakdown: [
          { group: "OBC (35%)", color: "#D97706", sub: "Yadav 20%, Kushwaha 10%, Kurmi 3%, Vaishya 2%" },
          { group: "EBC (23%)", color: "#059669", sub: "Chandravanshi 8%, Teli 5%, Nishad 3%, Vishwakarma 2%, Bind/Mistry 4%, Halwai 1%" },
          { group: "General (21%)", color: "#DC2626", sub: "Bhumihar 15%, Rajput 4%, Brahmin 2%" },
          { group: "SC (13%)", color: "#7C3AED", sub: "Ravidas 6%, Paswan 5%, Pasi 2%" },
          { group: "Minority (8%)", color: "#0284C7", sub: "Muslim 8%" }
        ]
      }
    },

    // ==========================================
    // AURANGABAD DISTRICT (6 ACs)
    // ==========================================
    {
      id: "rafiganj",
      district: "aurangabad",
      districtHi: "औरंगाबाद",
      districtEn: "Aurangabad",
      acName: "Rafiganj",
      acNameHi: "रफ़ीगंज",
      isSC: false,
      lokSabha: "37. Aurangabad",
      totalVoters: "3,32,000",
      results: {
        winner: { name: "PRAMOD KUMAR SINGH", party: "JDU", caste: "Rajput", votes: 107515 },
        runnerUp: { name: "DR. GHULAM SHAHID", party: "RJD", caste: "Minority", votes: 95559 },
        secondRunnerUp: { name: "MD. NEHALUDDIN", party: "AIMIM", caste: "Minority", votes: 16752 },
        fourthRunnerUp: { name: "VIKASH KUMAR (BABLU SINGH)", party: "JSP", caste: "Rajput", votes: 3029 }
      },
      jspCandidate: {
        name: "Vikash Kumar (Bablu Singh)",
        nameHi: "विकास कुमार (बबलू सिंह)",
        caste: "Rajput (General)",
        phone: "9122391030",
        votes: 3029,
        position: "4th Runner Up",
        meta: "Male | 42 | General | Rajput | Incumbent Mukhiya",
        profile: [
          "Incumbent Mukhiya (2021 To Till Date) & Former Mukhiya (2006 To 2011)",
          "Former RJD Active Member (2014 To 2023)"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "3,32,000",
        demographicsNote: "Rafiganj Assembly Demographics",
        breakdown: [
          { group: "EBC (25%)", color: "#059669", sub: "Chandravanshi (Kahar) 8%, Teli 5%, Nai 4%, Vishwakarma 3%, Kumhar 2%, Kanu/Mallah 3%" },
          { group: "OBC (24%)", color: "#D97706", sub: "Yadav 14%, Kushwaha/Koeri 6%, Kurmi 2%, Vaishya 2%" },
          { group: "SC (22%)", color: "#7C3AED", sub: "Dusadh/Paswan 10%, Ravidas 7%, Bhuiyan 3%, Pasi 2%" },
          { group: "General (14%)", color: "#DC2626", sub: "Rajput 10%, Bhumihar 2%, Brahmin 1%, Kayastha 1%" },
          { group: "Minority (14%)", color: "#0284C7", sub: "Muslim 14%" },
          { group: "Others (1%)", color: "#475569", sub: "Others 1%" }
        ]
      }
    },
    {
      id: "goh",
      district: "aurangabad",
      districtHi: "औरंगाबाद",
      districtEn: "Aurangabad",
      acName: "Goh",
      acNameHi: "गोह",
      isSC: false,
      lokSabha: "35. Karakat",
      totalVoters: "3,05,000",
      results: {
        winner: { name: "AMRENDRA KUMAR", party: "RJD", caste: "Kushwaha", votes: 93624 },
        runnerUp: { name: "DR. RANVIJAY KUMAR", party: "BJP", caste: "Bhumihar", votes: 89583 },
        secondRunnerUp: { name: "SITARAM DUKHARI", party: "JSP", caste: "Kahar", votes: 7996 },
        thirdRunnerUp: { name: "MD EKLAKHA", party: "ASP", caste: "Minority", votes: 6631 },
        fourthRunnerUp: { name: "ER. SANJAY PRASAD KUSHWAHA", party: "BSP", caste: "Kushwaha", votes: 1946 }
      },
      jspCandidate: {
        name: "Sita Ram Dukhari",
        nameHi: "सीताराम दुखारी",
        caste: "Kahar (EBC)",
        phone: "9973914680",
        votes: 7996,
        position: "2nd Runner Up (7,996 Votes)",
        meta: "Male | 74 | EBC | Kahar | Former JDU EBC Cell Adhyaksh",
        profile: [
          "Former JDU, EBC Cell, State President (2013 To 2016)",
          "Former JDU, Pradesh Mahasachiv (2015 To 2017)",
          "Former JDU, State Working Committee Member (2017 To 2020)",
          "Former JDU State Advisory Committee Member (2020 To 2025)",
          "Senior EBC Leader & Social Worker"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "3,05,000",
        demographicsNote: "Goh Assembly Demographics",
        breakdown: [
          { group: "OBC (35%)", color: "#D97706", sub: "Yadav 20%, Kushwaha 10%, Kurmi 3%, Vaishya 2%" },
          { group: "EBC (23%)", color: "#059669", sub: "Chandravanshi 8%, Teli 5%, Nishad 3%, Vishwakarma 2%, Bind/Mistry 4%, Halwai 1%" },
          { group: "General (21%)", color: "#DC2626", sub: "Bhumihar 15%, Rajput 4%, Brahmin 2%" },
          { group: "SC (13%)", color: "#7C3AED", sub: "Ravidas 6%, Paswan 5%, Pasi 2%" },
          { group: "Minority (8%)", color: "#0284C7", sub: "Muslim 8%" }
        ]
      }
    },
    {
      id: "aurangabad-ac",
      district: "aurangabad",
      districtHi: "औरंगाबाद",
      districtEn: "Aurangabad",
      acName: "Aurangabad",
      acNameHi: "औरंगाबाद",
      isSC: false,
      lokSabha: "37. Aurangabad",
      totalVoters: "3,47,000",
      results: {
        winner: { name: "TRIVIKRAM NARAYAN SINGH", party: "BJP", caste: "Rajput", votes: 87200 },
        runnerUp: { name: "ANAND SHANKAR SINGH", party: "RJD", caste: "Rajput", votes: 80406 },
        secondRunnerUp: { name: "SHAKTI KUMAR MISHRA", party: "BSP", caste: "Brahmin", votes: 19776 },
        fourthRunnerUp: { name: "NAND KISHOR YADAV", party: "JSP", caste: "Yadav", votes: 2755 }
      },
      jspCandidate: {
        name: "Nand Kishor Yadav",
        nameHi: "नंद किशोर यादव",
        caste: "Yadav (OBC)",
        phone: "9006342107",
        votes: 2755,
        position: "4th Runner Up",
        meta: "Male | 57 | OBC | Yadav | Lok Sabha Contestant",
        profile: [
          "Former Lok Sabha Contestant (2019), Swaraj Party Karakat (3,500 Votes)",
          "Former Swaraj Party Loktantrik Vice President (2015 To 2023)",
          "Jan Suraaj State Core Committee Member & District Incharge",
          "Director of a Private Educational Institution"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "3,47,000",
        demographicsNote: "Aurangabad Assembly Demographics",
        breakdown: [
          { group: "EBC (26%)", color: "#059669", sub: "Chandravanshi (Kahar) 6%, Teli 5%, Badhai 4%, Dhanuk 3%, Kumhar 2%, Mallah 2%, Dangi/Noniya 4%" },
          { group: "OBC (23%)", color: "#D97706", sub: "Yadav 14%, Kushwaha/Koeri 5%, Kurmi 2%, Jaiswal 1%, Others 1%" },
          { group: "General (21%)", color: "#DC2626", sub: "Rajput 15%, Brahmin 2%, Bhumihar 2%, Kayastha 2%" },
          { group: "SC (19%)", color: "#7C3AED", sub: "Dusadh/Paswan 7%, Ravidas 5%, Rajak 3%, Pasi 2%, Musahar 2%" },
          { group: "Minority (10%)", color: "#0284C7", sub: "Muslim 10%" },
          { group: "ST (1%)", color: "#475569", sub: "Tribal (ST) 1%" }
        ]
      }
    },
    {
      id: "kutumba-sc",
      district: "aurangabad",
      districtHi: "औरंगाबाद",
      districtEn: "Aurangabad",
      acName: "Kutumba (SC)",
      acNameHi: "कुटुम्बा (SC)",
      isSC: true,
      lokSabha: "37. Aurangabad",
      totalVoters: "2,93,000",
      results: {
        winner: { name: "LALAN RAM", party: "HAM", caste: "Chamar", votes: 84727 },
        runnerUp: { name: "RAJESH KUMAR", party: "INC", caste: "Chamar", votes: 63202 },
        secondRunnerUp: { name: "SHYAMBALI RAM", party: "JSP", caste: "Paswan", votes: 6065 }
      },
      jspCandidate: {
        name: "Shyam Bali Ram (Mahabali Paswan)",
        nameHi: "श्यामबली राम (महाबली पासवान)",
        caste: "Paswan (SC)",
        phone: "6287631605",
        votes: 6065,
        position: "2nd Runner Up (6,065 Votes)",
        meta: "Male | 54 | SC | Paswan | Former Ward Councilor",
        profile: [
          "Former 2 Consecutive Terms Ward Councilor (2012 To 2022)",
          "Former Congress Vidhan Sabha Prabhari (2012 To 2022)",
          "Former Congress Pradesh Sachiv (2016 To 2020)",
          "Former Congress Zila Upadhyaksh (2012 To 2016)",
          "Former Congress Zila Mahasachiv (2009 To 2012)"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "2,93,000",
        demographicsNote: "Kutumba (SC) Assembly Demographics",
        breakdown: [
          { group: "SC (32%)", color: "#7C3AED", sub: "Paswan 12%, Ravidas 11%, Bhuiyan 7%, Pasi 1%, Dom 1%" },
          { group: "OBC (28%)", color: "#D97706", sub: "Kushwaha 15%, Yadav 9%, Kurmi 4%" },
          { group: "EBC (18%)", color: "#059669", sub: "Chandravanshi 5%, Teli 4%, Halwai 3%, Badhai 3%, Paneri 2%, Prajapati 1%" },
          { group: "General (17%)", color: "#DC2626", sub: "Rajput 13%, Brahmin 2%, Bhumihar 2%" },
          { group: "Minority (5%)", color: "#0284C7", sub: "Muslim 5%" }
        ]
      }
    },
    {
      id: "nabinagar",
      district: "aurangabad",
      districtHi: "औरंगाबाद",
      districtEn: "Aurangabad",
      acName: "Nabinagar",
      acNameHi: "नवीनगर",
      isSC: false,
      lokSabha: "35. Karakat",
      totalVoters: "2,80,000",
      results: {
        winner: { name: "Chetan Anand", party: "JDU", caste: "Rajput", votes: 80380 },
        runnerUp: { name: "Amod Kumar Singh", party: "RJD", caste: "Kahar", votes: 80268 },
        secondRunnerUp: { name: "Lav Kumar Singh", party: "IND", caste: "Yadav", votes: 7075 },
        thirdRunnerUp: { name: "Vinod Kumar", party: "BSP", caste: "--", votes: 6595 },
        fourthRunnerUp: { name: "Archana Chandra", party: "JSP", caste: "Yadav", votes: 4085 }
      },
      jspCandidate: {
        name: "Archana Chandra",
        nameHi: "अर्चना चन्द्रा",
        caste: "Yadav (OBC)",
        phone: "7488591788",
        votes: 4085,
        position: "4th Runner Up",
        meta: "Female | 50 | OBC | Yadav | MP Contestant",
        profile: [
          "Ex 2nd Term Block Pramukh (2006-2016); Husband was Block Pramukh (2001-2006)",
          "Contested BSP MP (2009) got 45,217 Votes & BSP MLA (11,848 Votes)",
          "Father-in-law Ram Nandan Singh was Block Pramukh (1978-82) & MLA Runner Up 1980",
          "Jan Suraaj Founder Member & Former BJP Executive Member (2013-2024)"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "2,80,000",
        demographicsNote: "Nabinagar Assembly Demographics",
        breakdown: [
          { group: "EBC (32%)", color: "#059669", sub: "Chandravanshi (Kahar) 10%, Sah 6%, Mistry 5%, Nai 4%, Vishwakarma 2%, Others (Kanu/Mallah/Dhanuk) 5%" },
          { group: "SC (25%)", color: "#7C3AED", sub: "Ravidas 12%, Paswan (Dusadh) 8%, Pasi 4%, Others 1%" },
          { group: "OBC (20%)", color: "#D97706", sub: "Yadav 12%, Kushwaha/Koeri 5%, Baniya 2%, Others 1%" },
          { group: "General (17%)", color: "#DC2626", sub: "Rajput 11%, Kayastha 3%, Bhumihar 2%, Brahmin 1%" },
          { group: "Minority (6%)", color: "#0284C7", sub: "Muslim 6%" }
        ]
      }
    },
    {
      id: "obra",
      district: "aurangabad",
      districtHi: "औरंगाबाद",
      districtEn: "Aurangabad",
      acName: "Obra",
      acNameHi: "ओबरा",
      isSC: false,
      lokSabha: "35. Karakat",
      totalVoters: "3,20,000",
      results: {
        winner: { name: "PRAKASH CHANDRA", party: "LJP", caste: "Bhumihar", votes: 91638 },
        runnerUp: { name: "RISHI KUMAR", party: "RJD", caste: "Yadav", votes: 79625 },
        secondRunnerUp: { name: "SUSHIL KUMAR TIWARY", party: "BSP", caste: "Brahmin", votes: 12040 },
        fifthRunnerUp: { name: "SUDHIR SHARMA", party: "JSP", caste: "Bhumihar", votes: 3779 }
      },
      jspCandidate: {
        name: "Sudhir Sharma",
        nameHi: "सुधीर शर्मा",
        caste: "Bhumihar (General)",
        phone: "9835848281",
        votes: 3779,
        position: "5th Runner Up",
        meta: "Male | 48 | General | Bhumihar | Incumbent Mukhiya",
        profile: [
          "Incumbent 2 Consecutive Terms Mukhiya (2016 To Till Date)",
          "Prominent Social Activist & Jan Suraaj Ground Campaigner in Obra"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "3,20,000",
        demographicsNote: "Obra Assembly Demographics",
        breakdown: [
          { group: "OBC (32%)", color: "#D97706", sub: "Yadav 19%, Kushwaha 8%, Kurmi 3%, Baniya 2%" },
          { group: "SC (23%)", color: "#7C3AED", sub: "Ravidas 11%, Paswan 8%, Pasi 3%, Dom/Nat 1%" },
          { group: "EBC (20%)", color: "#059669", sub: "Chandravanshi 7%, Teli 4%, Nai 3%, Kumhar 2%, Vishwakarma 2%, Kanu/Mallah 2%" },
          { group: "General (15%)", color: "#DC2626", sub: "Rajput 8%, Bhumihar 4%, Brahmin 2%, Kayastha 1%" },
          { group: "Minority (10%)", color: "#0284C7", sub: "Muslim 10%" }
        ]
      }
    },

    // ==========================================
    // JEHANABAD DISTRICT (3 ACs)
    // ==========================================
    {
      id: "makhdumpur-sc",
      district: "jehanabad",
      districtHi: "जहानाबाद",
      districtEn: "Jehanabad",
      acName: "Makhdumpur (SC)",
      acNameHi: "मखदुमपुर (SC)",
      isSC: true,
      lokSabha: "36. Jehanabad",
      totalVoters: "2,53,000",
      results: {
        winner: { name: "Subedar Das", party: "RJD", caste: "Chamar", votes: 74769 },
        runnerUp: { name: "Rani Kumari", party: "LJP", caste: "Paswan", votes: 72939 },
        secondRunnerUp: { name: "Shankar Swaroop", party: "JSP", caste: "Paswan", votes: 4803 },
        thirdRunnerUp: { name: "Virendra Kumar", party: "BSP", caste: "--", votes: 2950 }
      },
      jspCandidate: {
        name: "Shankar Swaroop",
        nameHi: "शंकर स्वरूप",
        caste: "Paswan (SC)",
        phone: "9835266155",
        votes: 4803,
        position: "2nd Runner Up (4,803 Votes)",
        profile: [
          "Former Indian Air Force (IAF) Veteran",
          "Distinguished Social Reformer & Jan Suraaj Leader in Makhdumpur"
        ]
      },
      acCasteData: {
        status: "Verified",
        totalVoters: "2,53,000",
        demographicsNote: "Makhdumpur (SC) Assembly Demographics",
        breakdown: [
          { group: "General (29%)", color: "#DC2626", sub: "Bhumihar 24%, Rajput 3%, Brahmin 2%" },
          { group: "OBC (27%)", color: "#D97706", sub: "Yadav 18%, Bania 4%, Kushwaha+Kurmi 3%, Others 2%" },
          { group: "SC (25%)", color: "#7C3AED", sub: "Ravidas 8%, Dusadh 7%, Manjhi 4%, Musahar 3%, Pasi 3%" },
          { group: "EBC (14%)", color: "#059669", sub: "Dangi 6%, Kahar 5%, Badhai+Nai 3%" },
          { group: "Minority (5%)", color: "#0284C7", sub: "Muslim 5%" }
        ]
      }
    },
    {
      id: "ghosi",
      district: "jehanabad",
      districtHi: "जहानाबाद",
      districtEn: "Jehanabad",
      acName: "Ghosi",
      acNameHi: "घोसी",
      isSC: false,
      lokSabha: "36. Jehanabad",
      totalVoters: "2,61,130",
      results: {
        winner: { name: "RITURAJ KUMAR", party: "JDU", caste: "Bhumihar", votes: 80740 },
        runnerUp: { name: "RAMBALI SINGH YADAV", party: "CPI-ML", caste: "Yadav", votes: 68811 },
        secondRunnerUp: { name: "ANURADHA SINHA", party: "BSP", caste: "--", votes: 3715 },
        fourthRunnerUp: { name: "PRABHAT KUMAR", party: "JSP", caste: "Kurmi", votes: 3070 }
      },
      jspCandidate: {
        name: "Prabhat Kumar",
        nameHi: "प्रभात कुमार",
        caste: "Kurmi (OBC)",
        phone: "8809544944",
        votes: 3070,
        position: "4th/5th Runner Up",
        meta: "Male | 61 | OBC | Kurmi | RJD Zila Sachiv",
        profile: [
          "Former RJD Kisan Cell Pradesh Mahasachiv (2020 To 2024)",
          "Former JDU Kisan Cell Zila Adhyaksh (2013 To 2018)",
          "Real Estate Business & Senior Agrarian Leader",
          "Social Worker"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "2,61,130",
        demographicsNote: "घोसी विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "OBC (33%)", color: "#D97706", sub: "यादव 25%, कुशवाहा 5%, कुर्मी 3%" },
          { group: "EBC (23%)", color: "#059669", sub: "बेलदार 7%, कहार 5%, बनिया 3%, बढ़ई 3%, कुम्हार 2%, मल्लाह 2%, ठाकुर 1%" },
          { group: "General (22%)", color: "#DC2626", sub: "भूमिहार 20%, ब्राह्मण 1%, राजपूत 1%" },
          { group: "SC (17%)", color: "#7C3AED", sub: "चमार 6%, दुसाध 4%, मुसहर 4%, पासी 3%" },
          { group: "Minority (5%)", color: "#0284C7", sub: "मुस्लिम 5%" }
        ]
      }
    },
    {
      id: "jehanabad-ac",
      district: "jehanabad",
      districtHi: "जहानाबाद",
      districtEn: "Jehanabad",
      acName: "Jehanabad",
      acNameHi: "जहानाबाद",
      isSC: false,
      lokSabha: "36. Jehanabad",
      totalVoters: "3,11,000",
      results: {
        winner: { name: "Rahul Kumar", party: "RJD", caste: "Bhumihar", votes: 86402 },
        runnerUp: { name: "Chandeshwar Prasad", party: "JDU", caste: "Kahar", votes: 85609 },
        secondRunnerUp: { name: "Abhiram Singh", party: "JSP", caste: "Bhumihar", votes: 5760 },
        thirdRunnerUp: { name: "Ritesh Kumar", party: "IND", caste: "--", votes: 4330 }
      },
      jspCandidate: {
        name: "Abhiram Singh",
        nameHi: "अभिराम सिंह",
        caste: "Bhumihar / Rajput",
        phone: "9931427507",
        votes: 5760,
        position: "2nd Runner Up (5,760 Votes)",
        profile: [
          "Prominent Youth Leader & Social Activist",
          "Senior Jan Suraaj Organizer in Jehanabad Sadar"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "3,11,000",
        demographicsNote: "जहानाबाद विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "OBC (33%)", color: "#D97706", sub: "यादव 21%, बनिया 5%, कुर्मी 4%, कुशवाहा 3%" },
          { group: "General (31%)", color: "#DC2626", sub: "भूमिहार 22%, राजपूत 4%, ब्राह्मण 3%, कायस्थ 2%" },
          { group: "SC (19%)", color: "#7C3AED", sub: "मांझी 6%, दुसाध 4%, रविदास 4%, चौधरी 2%, डोम 2%, धोबी 1%" },
          { group: "EBC (11%)", color: "#059669", sub: "कहार 3%, बिंद 2%, नाई 2%, मल्लाह 2%, माली/भगत 1%, कुम्हार 1%" },
          { group: "Minority (6%)", color: "#0284C7", sub: "मुस्लिम 6%" }
        ]
      }
    },

    // ==========================================
    // ARWAL DISTRICT (2 ACs)
    // ==========================================
    {
      id: "arwal-ac",
      district: "arwal",
      districtHi: "अरवल",
      districtEn: "Arwal",
      acName: "Arwal",
      acNameHi: "अरवल",
      isSC: false,
      lokSabha: "36. Jehanabad",
      totalVoters: "2,51,657",
      results: {
        winner: { name: "MANOJ KUMAR", party: "BJP", caste: "Bhumihar", votes: 79854 },
        runnerUp: { name: "MAHANAND SINGH", party: "CPI-ML", caste: "Kushwaha", votes: 65761 },
        secondRunnerUp: { name: "VEERENDRA PRASAD", party: "IND", caste: "--", votes: 3879 },
        thirdRunnerUp: { name: "SHEKHAR RAM", party: "BSP", caste: "--", votes: 3719 },
        fourthRunnerUp: { name: "KUNTI DEVI", party: "JSP", caste: "Yadav", votes: 3376 }
      },
      jspCandidate: {
        name: "Kunti Devi",
        nameHi: "कुंती देवी",
        caste: "Yadav (OBC)",
        phone: "8809489727",
        votes: 3376,
        position: "4th Runner Up",
        meta: "Female | 49 | OBC | Yadav | Incumbent Panchayat Samiti Sadasya",
        profile: [
          "Incumbent 3 Consecutive Terms Panchayat Samiti Sadasya (2011 to Till Date)",
          "Incumbent Pramukh (2011 to Till Date)",
          "Former RJD Member (2011 to 2023)",
          "Jan Suraaj State Core Committee Member"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "2,51,657",
        demographicsNote: "अरवल विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "EBC (27%)", color: "#059669", sub: "चंद्रवंशी 5%, बढ़ई+विश्वकर्मा 4%, मल्लाह 4%, कुम्हार 4%, तेली 4%, कानू 2%, हलवाई 2%, अन्य 2%" },
          { group: "OBC (25%)", color: "#D97706", sub: "यादव 13%, कुशवाहा 7%, कुर्मी 2%, बनिया 2%, अन्य 1%" },
          { group: "SC (20%)", color: "#7C3AED", sub: "पासवान 7%, रविदास 6%, धोबी 2%, मुसहर 2%, पासी 2%, अन्य 1%" },
          { group: "General (15%)", color: "#DC2626", sub: "भूमिहार 11%, ब्राह्मण 2%, राजपूत 1%, अन्य 1%" },
          { group: "Minority (13%)", color: "#0284C7", sub: "मुस्लिम 13%" }
        ]
      }
    },
    {
      id: "kurtha",
      district: "arwal",
      districtHi: "अरवल",
      districtEn: "Arwal",
      acName: "Kurtha",
      acNameHi: "कुर्था",
      isSC: false,
      lokSabha: "36. Jehanabad",
      totalVoters: "2,39,502",
      results: {
        winner: { name: "Pappu Kumar Verma", party: "JDU", caste: "Kushwaha", votes: 74466 },
        runnerUp: { name: "Kumar Krishan Mohan", party: "RJD", caste: "Yadav", votes: 68985 },
        secondRunnerUp: { name: "Rambali Chandravanshi", party: "JSP", caste: "Chandravanshi (Kahar)", votes: 5030 },
        thirdRunnerUp: { name: "Ashok Kumar", party: "BSP", caste: "--", votes: 3338 }
      },
      jspCandidate: {
        name: "Rambali Chandravanshi",
        nameHi: "रामबली चंद्रवंशी",
        caste: "Chandravanshi (Kahar)",
        phone: "9431420981",
        votes: 5030,
        position: "2nd Runner Up (5,030 Votes)",
        profile: [
          "Former Member of Legislative Council (MLC)",
          "Professor at Patna University",
          "Renowned EBC Thinker & Jan Suraaj Leader"
        ]
      },
      acCasteData: {
        status: "उपलब्ध एवं सत्यापित (Verified)",
        totalVoters: "2,39,502",
        demographicsNote: "कुर्था विधानसभा का विस्तृत जातीय समीकरण",
        breakdown: [
          { group: "EBC (30%)", color: "#059669", sub: "चंद्रवंशी 6%, तेली 4%, बढ़ई+विश्वकर्मा 4%, नाई 3%, कुम्हार 3%, कानू 2%, हलवाई 2%, सोनार 2%, मल्लाह 1%, दांगी 1%, अन्य 2%" },
          { group: "OBC (25%)", color: "#D97706", sub: "यादव 13%, कुशवाहा 7%, कुर्मी 2%, वैश्य 2%, अन्य 1%" },
          { group: "SC (21%)", color: "#7C3AED", sub: "पासवान 6%, रविदास 5%, धोबी 3%, मुसहर 2%, पासी 2%, राजवार 2%, अन्य 1%" },
          { group: "General (15%)", color: "#DC2626", sub: "भूमिहार 10%, ब्राह्मण 2%, राजपूत 2%, अन्य 1%" },
          { group: "Minority (9%)", color: "#0284C7", sub: "मुस्लिम 9%" }
        ]
      }
    }
  ]
};

// Export to window object
if (typeof window !== "undefined") {
  window.magadhZoneData = magadhZoneData;
}
