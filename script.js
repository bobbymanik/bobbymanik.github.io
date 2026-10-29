"use strict";

/* Semua informasi yang ditampilkan bersifat statis. Ubah teks di sini
   dan index.html untuk menyesuaikan isi portofolio Anda. */
const translations = {
  id: {
    navAbout:"Tentang",navProjects:"Proyek",navExperience:"Pengalaman",navContact:"Kontak",
    heroEyebrow:"IT · AUTOMATION · WEB DEVELOPMENT",
    heroHello:'Halo, saya Bobby Adithya Manik <span aria-hidden="true">✳</span>',
    heroTitle:'Mengubah proses yang rumit menjadi <span class="gradient-text">sistem yang lebih praktis.</span>',
    heroDescription:"Lulusan Teknologi Informasi yang membangun otomasi workflow, aplikasi web, dan solusi operasional berbasis kebutuhan nyata.",
    viewProjects:"Jelajahi proyek",talkProject:"Diskusikan proyek",heroFocus:"Fokus: Workflow & Digitalisasi",workflowLabel:"AUTOMATION CONCEPT",workflowFoot:"Alur otomatisasi tervalidasi",proofA:"Workflow Automation",proofD:"Web Development",
    aboutLabel:"TENTANG SAYA",aboutTitle:'Teknologi yang baik membuat pekerjaan <span class="muted-heading">lebih mudah.</span>',
    aboutP1:"Saya adalah lulusan Teknologi Informasi Universitas Sumatera Utara, dengan pengalaman di operasional transmisi siaran, pengembangan web, dan otomasi proses kerja.",
    aboutP2:"Di pekerjaan teknis, saya belajar pentingnya data yang rapi dan proses yang andal. Di proyek digital, saya menerjemahkan kebutuhan tersebut menjadi solusi yang bisa digunakan—mulai dari pelaporan internal hingga notifikasi otomatis.",
    downloadCv:"Hubungi saya",fact1Label:"LATAR BELAKANG",fact1Value:"Sarjana Teknologi Informasi",fact2Label:"AREA FOKUS",fact3Label:"PENGALAMAN",fact3Value:"Operasional & Pengembangan",
    projectsLabel:"PROYEK TERPILIH",projectsTitle:'Dari masalah nyata <span class="muted-heading">ke solusi yang bisa dicoba.</span>',projectsSubtitle:"Pilihan proyek teknis dan prototipe otomasi yang saya kembangkan.",filterAll:"Semua",
    project1Type:"DEMO OTOMASI",project1Desc:"Demo alur pengumpulan umpan balik pelanggan dan pengelolaan hasil analisis menggunakan Make.com dan Google Workspace.",
    project2Type:"OTOMASI TERUJI",project2Title:"Otomasi Notifikasi Pesanan",project2Desc:"Workflow notifikasi email dengan validasi input, percabangan kondisi, dan pencatatan khusus untuk pesanan yang tidak valid.",
    project3Type:"APLIKASI WEB INTERNAL",project3Title:"Sistem Pelaporan Transmisi",project3Desc:"Sistem pelaporan berbasis peran untuk logbook, downtime DVB-T2, laporan gangguan, rekap bulanan, dan audit trail.",
    viewCase:"Lihat studi kasus",projectsNote:"Gambar yang diberi label konsep adalah ilustrasi; detail proyek menjelaskan status implementasi sebenarnya.",
    experienceLabel:"PERJALANAN PROFESIONAL",experienceTitle:'Pengalaman yang membentuk <span class="muted-heading">cara saya bekerja.</span>',experienceSubtitle:"Pengalaman di bidang operasional teknis, pengembangan aplikasi, dan pengelolaan data.",
    expDate1:"Mei 2025 — Sekarang",expRole1:"Asisten Teknisi Siaran Pemula · Koordinator Satuan Transmisi Rokan Hilir",expDesc1:"Koordinasi operasional dan jadwal petugas, monitoring perangkat transmisi, penanganan gangguan, evaluasi operasional, dan penyusunan laporan berkala.",
    expDate2:"Jan — Feb 2024",expRole2:"Magang · Asisten Pengarsipan",expDesc2:"Pengarsipan dokumen BPR menggunakan Excel serta mengikuti kegiatan edukasi pasar modal.",
    expDate3:"Sep — Des 2023",expRole3:"Magang · War Room",expDesc3:"Mengembangkan website pemantauan kinerja dengan Laravel dan JavaScript serta membantu pengolahan data pelanggan.",
    educationEyebrow:"PENDIDIKAN",educationText:"Sarjana Teknologi Informasi · IPK 3,82 / 4,00 · 2020–2026",trainingEyebrow:"PELATIHAN",
    skillsLabel:"TOOLS & SKILLS",skillsTitle:'Berpikir sistematis. <span class="muted-heading">Membangun dengan alat yang tepat.</span>',skillsSubtitle:"Teknologi yang saya gunakan dan pelajari melalui pengalaman kerja, pelatihan, serta proyek pribadi.",skillGroup1:"Automation & Data",skillGroup2:"Web Development",skillGroup3:"Operations & Design",basicPython:"Python (dasar)",skillOperational:"Monitoring teknis",skillReporting:"Dokumentasi & pelaporan",
    contactLabel:"MARI TERHUBUNG",contactTitle:'Punya proses yang ingin dibuat <span class="gradient-text">lebih sederhana?</span>',contactSubtitle:"Saya senang berdiskusi tentang otomasi workflow, aplikasi web, dan peluang kolaborasi teknis.",sendEmail:"Kirim email",copyEmail:"Salin alamat email",copied:"Email tersalin!",footerText:"Dibuat dengan perhatian pada detail.",backToTop:"Kembali ke atas ↑",
    caseHeading:"STUDI KASUS",caseChallenge:"Tantangan",caseSolution:"Solusi",caseStatus:"Status proyek",dialogNotice:"Detail proyek disajikan tanpa data internal atau rahasia.",close:"Tutup ↗"
  },
  en: {
    navAbout:"About",navProjects:"Projects",navExperience:"Experience",navContact:"Contact",
    heroEyebrow:"IT · AUTOMATION · WEB DEVELOPMENT",
    heroHello:'Hi, I’m Bobby Adithya Manik <span aria-hidden="true">✳</span>',
    heroTitle:'Turning complex processes into <span class="gradient-text">simpler, smarter systems.</span>',
    heroDescription:"An Information Technology graduate building workflow automations, web applications, and practical solutions to real operational needs.",
    viewProjects:"Explore projects",talkProject:"Let's collaborate",heroFocus:"Focus: Workflows & Digitalization",workflowLabel:"AUTOMATION CONCEPT",workflowFoot:"Validated automation flow",proofA:"Workflow Automation",proofD:"Web Development",
    aboutLabel:"ABOUT ME",aboutTitle:'Great technology makes work <span class="muted-heading">feel easier.</span>',
    aboutP1:"I am an Information Technology graduate from Universitas Sumatera Utara with experience in broadcast transmission operations, web development, and workflow automation.",
    aboutP2:"Working in technical operations taught me the importance of reliable processes and organized data. I translate those lessons into digital solutions—from internal reporting systems to automated notifications.",
    downloadCv:"Contact me",fact1Label:"BACKGROUND",fact1Value:"Bachelor of Information Technology",fact2Label:"AREA OF FOCUS",fact3Label:"EXPERIENCE",fact3Value:"Operations & Development",
    projectsLabel:"SELECTED PROJECTS",projectsTitle:'From real challenges <span class="muted-heading">to practical solutions.</span>',projectsSubtitle:"Selected technical projects and automation prototypes I've developed.",filterAll:"All",
    project1Type:"AUTOMATION DEMO",project1Desc:"A demo workflow for capturing customer feedback and organizing its analysis using Make.com and Google Workspace.",
    project2Type:"TESTED AUTOMATION",project2Title:"Automated Order Notifications",project2Desc:"An email notification workflow with input validation, conditional routing, and a dedicated log for invalid orders.",
    project3Type:"INTERNAL WEB APPLICATION",project3Title:"Transmission Reporting System",project3Desc:"A role-based application for broadcast logbooks, DVB-T2 downtime, incident reports, monthly summaries, and audit trails.",
    viewCase:"View case study",projectsNote:"Images labeled as concepts are illustrations; project details explain the actual implementation status.",
    experienceLabel:"PROFESSIONAL JOURNEY",experienceTitle:'Experience that shapes <span class="muted-heading">how I work.</span>',experienceSubtitle:"Background in technical operations, application development, and data management.",
    expDate1:"May 2025 — Present",expRole1:"Broadcast Transmission Technician · Rokan Hilir Transmission Unit Coordinator",expDesc1:"Coordinating staff schedules and transmission operations, monitoring equipment, supporting troubleshooting and operational reviews, and preparing periodic reports.",
    expDate2:"Jan — Feb 2024",expRole2:"Archive Assistant Intern",expDesc2:"Organized rural bank correspondence records using Excel and participated in capital-market education activities.",
    expDate3:"Sep — Dec 2023",expRole3:"War Room Intern",expDesc3:"Developed a performance monitoring website with Laravel and JavaScript and supported customer data processing.",
    educationEyebrow:"EDUCATION",educationText:"Bachelor of Information Technology · GPA 3.82 / 4.00 · Sep 2020–Feb 2026",trainingEyebrow:"TRAINING",
    skillsLabel:"TOOLS & SKILLS",skillsTitle:'Think systematically. <span class="muted-heading">Build with the right tools.</span>',skillsSubtitle:"Tools I have used or studied through work, training, and personal projects.",skillGroup1:"Automation & Data",skillGroup2:"Web Development",skillGroup3:"Operations & Design",basicPython:"Python (basic)",skillOperational:"Technical monitoring",skillReporting:"Documentation & reporting",
    contactLabel:"LET'S CONNECT",contactTitle:'Have a process that could be <span class="gradient-text">a little simpler?</span>',contactSubtitle:"I'm happy to discuss workflow automation, web applications, and technical collaboration opportunities.",sendEmail:"Send an email",copyEmail:"Copy email address",copied:"Email copied!",footerText:"Made with attention to detail.",backToTop:"Back to top ↑",
    caseHeading:"CASE STUDY",caseChallenge:"The challenge",caseSolution:"The solution",caseStatus:"Project status",dialogNotice:"Project information excludes internal or confidential data.",close:"Close ↗"
  }
};

const portfolioRecruitmentCopy = {
  id:{
    navServices:"Layanan",heroEyebrow:"AUTOMATION · WEB DEVELOPMENT · IT OPERATIONS",
    heroTitle:'Saya membangun <span class="gradient-text">workflow automation & aplikasi web</span> yang praktis.',
    heroDescription:"Lulusan Teknologi Informasi dengan pengalaman operasional teknis, pengembangan web, dan workflow Make.com. Fokus pada validasi data, pelaporan, dan proses kerja yang lebih tertata.",
    viewProjects:"Lihat studi kasus",talkProject:"Hubungi saya",viewResume:"Lihat resume (EN)",
    availabilityText:"Terbuka untuk diskusi peluang remote & proyek freelance",
    heroFocus:"Fokus: Otomasi, Web & IT Operations",
    aboutP1:"Saya lulusan Teknologi Informasi Universitas Sumatera Utara (IPK 3,82/4,00). Sejak Mei 2025, saya bekerja di TVRI Riau dan menjalankan koordinasi operasional Satuan Transmisi Rokan Hilir. Saya juga pernah magang di Telkom Indonesia dan OJK.",
    aboutP2:"Saya tertarik membangun solusi yang mengurangi pekerjaan berulang, memperbaiki pencatatan, dan mempermudah pelaporan. Proyek saya mencakup otomasi Make.com dan aplikasi internal PHP/MySQL.",
    downloadCv:"Lihat resume ringkas (EN)",
    projectsSubtitle:"Studi kasus berbasis proyek nyata, prototipe teruji, dan demo. Setiap status proyek ditampilkan secara transparan.",
    servicesLabel:"YANG BISA SAYA BANTU",servicesTitle:'Solusi kecil yang <span class="muted-heading">membuat pekerjaan lebih rapi.</span>',
    servicesSubtitle:"Ruang lingkup yang sesuai dengan proyek dan tools yang sudah saya gunakan. Kebutuhan akan dibahas dan disepakati sebelum mulai.",
    service1Title:"Otomasi Alur Kerja",service1Desc:"Menghubungkan form, spreadsheet, email, dan Make.com untuk validasi data, notifikasi, serta pencatatan otomatis.",
    service1Output:"Output: workflow, pengujian, dan panduan penggunaan.",
    service2Title:"Pelaporan & Pengolahan Data",service2Desc:"Merapikan struktur input dan menyusun rekap operasional di Google Sheets atau Excel agar mudah ditinjau.",
    service2Output:"Output: format data, rekap, dan dokumentasi.",
    service3Title:"Website & Aplikasi Internal",service3Desc:"Mengembangkan fitur berbasis PHP/MySQL seperti formulir, pencatatan, kontrol akses pengguna, dan laporan.",
    service3Output:"Output: aplikasi, pengujian fitur, dan catatan teknis.",servicesCTA:"Ceritakan kebutuhan proyek Anda",
    opportunitiesLabel:"REMOTE & FREELANCE",opportunitiesKicker:"CARA SAYA BISA BERKONTRIBUSI",
    opportunitiesTitle:'Untuk tim yang mencari <span class="muted-heading">orang yang teliti dan teknis.</span>',
    opportunitiesIntro:"Saya tertarik mengeksplorasi kesempatan remote maupun proyek freelance yang sesuai dengan keterampilan dan komitmen pekerjaan saya saat ini.",
    opportunity1Title:"Untuk rekruter & tim remote",opportunity1Copy:"Bidang relevan: Junior Web Developer, Workflow Automation, IT Operations, dan Technical Support. Saya terbiasa dengan troubleshooting, laporan, serta dokumentasi teknis.",
    opportunity1Action:"Baca resume (English) ↗",opportunity2Title:"Untuk bisnis & klien freelance",
    opportunity2Copy:"Mulai dari kebutuhan kecil yang jelas: otomasi pesanan, notifikasi email, pencatatan data, atau alat pelaporan sederhana. Lingkup dan hasil kerja dibahas sebelum mulai.",
    opportunity2Action:"Diskusikan kebutuhan ↗",
    contactSubtitle:"Untuk HR, tim remote, atau calon klien: kirim gambaran peran atau tantangan yang ingin diselesaikan. Saya akan meninjau kecocokan dan ketersediaan.",
    caseRoleLabel:"Kontribusi saya",caseEvidenceLabel:"Bukti yang tersedia"
  },
  en:{
    navServices:"Services",heroEyebrow:"AUTOMATION · WEB DEVELOPMENT · IT OPERATIONS",
    heroTitle:'Building <span class="gradient-text">workflow automations & web apps</span> for practical problems.',
    heroDescription:"Information Technology graduate with hands-on experience in technical operations, PHP/MySQL web development, and Make.com workflows. Focused on data validation, reporting, and reliable processes.",
    viewProjects:"Explore case studies",talkProject:"Get in touch",viewResume:"View resume (EN)",
    availabilityText:"Open to discussing remote opportunities & freelance projects",
    heroFocus:"Focus: Automation, Web & IT Operations",
    aboutP1:"I graduated in Information Technology from Universitas Sumatera Utara (GPA 3.82/4.00). Since May 2025, I have worked in broadcast transmission operations at TVRI Riau, including coordination of the Rokan Hilir Transmission Unit. I previously interned at Telkom Indonesia and OJK.",
    aboutP2:"I enjoy building solutions that reduce repetitive work, improve records, and simplify reporting. My portfolio includes Make.com automation prototypes and PHP/MySQL internal applications.",
    downloadCv:"View concise resume (EN)",
    projectsSubtitle:"Case studies from real projects, tested prototypes, and demos. Each project's status is presented transparently.",
    servicesLabel:"HOW I CAN HELP",servicesTitle:'Practical tools for <span class="muted-heading">clearer, smoother workflows.</span>',
    servicesSubtitle:"Areas grounded in tools and projects I've worked with. Scope and deliverables are discussed and agreed upon before starting.",
    service1Title:"Workflow Automation",service1Desc:"Connect forms, spreadsheets, email, and Make.com for input validation, notifications, and automated logging.",
    service1Output:"Deliverables: workflow, tests, and usage notes.",
    service2Title:"Reporting & Data Organization",service2Desc:"Structure inputs and build operational summaries in Google Sheets or Excel for easier review.",
    service2Output:"Deliverables: data templates, summaries, and documentation.",
    service3Title:"Internal Web Applications",service3Desc:"Develop PHP/MySQL features such as forms, record management, role-based access, and reporting.",
    service3Output:"Deliverables: working features, tests, and technical notes.",
    servicesCTA:"Tell me about your project",
    opportunitiesLabel:"REMOTE & FREELANCE",opportunitiesKicker:"WHERE I CAN CONTRIBUTE",
    opportunitiesTitle:'For teams that value <span class="muted-heading">careful, practical technical work.</span>',
    opportunitiesIntro:"I'm interested in exploring remote roles and freelance projects aligned with my skills and existing professional commitments.",
    opportunity1Title:"For recruiters & remote teams",opportunity1Copy:"Relevant roles: Junior Web Developer, Workflow Automation, IT Operations, and Technical Support. My background includes troubleshooting, structured reporting, and technical documentation.",
    opportunity1Action:"Read my English resume ↗",opportunity2Title:"For businesses & freelance clients",
    opportunity2Copy:"A clear, manageable starting scope: order automation, email alerts, organized data capture, or simple reporting tools. We agree on deliverables before starting.",
    opportunity2Action:"Discuss a project ↗",
    contactSubtitle:"Recruiter, remote team, or potential client? Send a brief description of the role or problem. I'll review fit and availability.",
    caseRoleLabel:"My contribution",caseEvidenceLabel:"Evidence available"
  }
};
Object.assign(translations.id,portfolioRecruitmentCopy.id);
Object.assign(translations.en,portfolioRecruitmentCopy.en);

const certificateCopy = {
  "id": {
    "certificateViewPublic": "Lihat salinan sertifikat ↗",
    "certificateViewDocument": "Lihat sertifikat ↗",
    "certificateVerify": "Verifikasi sertifikat ↗",
    "navCertifications": "Sertifikasi",
    "certLabel": "SERTIFIKASI & PELATIHAN",
    "certTitle": "Pembelajaran berkelanjutan, <span class=\"muted-heading\">didukung bukti.</span>",
    "certIntro": "Pelatihan terpilih dengan dokumen yang sudah ditinjau. Dokumen sertifikat asli tidak dipublikasikan karena dapat memuat informasi pribadi.",
    "certCourses": "Pelatihan teknis pilihan",
    "certFootnote": "Klik tombol pada kartu untuk melihat sertifikat atau halaman verifikasi resmi. Salinan TVRI/LAN telah disamarkan pada bagian identitas sensitif. Kursus Google/Coursera mewakili penyelesaian kursus individual, bukan keseluruhan program spesialisasi.",
    "certDescription0": "Lulus dengan predikat Memuaskan · 40 JP · 2–13 Maret 2026. Peralatan transmisi, aliran sinyal, operasional dan troubleshooting.",
    "certName0": "Diklat Dasar Transmisi Digital",
    "certStatus0": "LULUS · MEMUASKAN",
    "certDescription1": "Lulus dengan predikat Memuaskan · 647 JP · 11 Agustus–6 November 2025. Dasar ASN, Smart Governance dan aktualisasi sistem pelaporan.",
    "certName1": "Pelatihan Dasar CPNS",
    "certStatus1": "LULUS · MEMUASKAN",
    "certDescription2": "Investigasi masalah dan debugging sistem.",
    "certDescription3": "Fondasi pemrograman Python.",
    "certDescription4": "Kontrol versi dan kolaborasi kode.",
    "certDescription5": "Analisis data untuk pengambilan keputusan.",
    "certDescription6": "Pengantar supervised learning dan klasifikasi.",
    "certDescription7": "Dasar statistik dan analisis dengan Python."
  },
  "en": {
    "certificateViewPublic": "View redacted certificate ↗",
    "certificateViewDocument": "View certificate ↗",
    "certificateVerify": "Verify certificate ↗",
    "navCertifications": "Certifications",
    "certLabel": "CERTIFICATES & TRAINING",
    "certTitle": "Continuous learning, <span class=\"muted-heading\">backed by evidence.</span>",
    "certIntro": "Selected completed training with documents reviewed. Original certificates are not published because they can include personal information.",
    "certCourses": "Selected technical courses",
    "certFootnote": "Use the links on each card to view a certificate or official verification page. TVRI/LAN public copies have sensitive identity details redacted. Google/Coursera certificates refer to individual completed courses, not entire specializations.",
    "certDescription0": "Passed (Satisfactory) · 40 training hours · March 2–13, 2026. Transmission equipment, signal flow, operations and troubleshooting.",
    "certName0": "Digital Transmission Fundamentals",
    "certStatus0": "PASSED · SATISFACTORY",
    "certDescription1": "Passed (Satisfactory) · 647 training hours · August 11–November 6, 2025. Civil service fundamentals, Smart Governance and a reporting application project.",
    "certName1": "Civil Servant Basic Training",
    "certStatus1": "PASSED · SATISFACTORY",
    "certDescription2": "System troubleshooting and debugging.",
    "certDescription3": "Python programming fundamentals.",
    "certDescription4": "Version control and code collaboration.",
    "certDescription5": "Data analysis for decision making.",
    "certDescription6": "Introduction to supervised learning and classification.",
    "certDescription7": "Foundations of statistics and analysis with Python."
  }
};
Object.assign(translations.id,certificateCopy.id);
Object.assign(translations.en,certificateCopy.en);

translations.id.browseAllCertificates="Lihat semua 42 sertifikat";
translations.en.browseAllCertificates="Browse all 42 certificates";

Object.assign(translations.id,{navIndex:"Beranda",navCertifications:"Sertifikasi"});Object.assign(translations.en,{navIndex:"Home",navCertifications:"Certificates"});
Object.assign(translations.id,{caseLibraryTitle:"Studi kasus lengkap tersedia",caseLibraryDesc:"Buka setiap halaman proyek untuk melihat alur kerja, pengujian, dan contoh interaktif. Diagram ditandai sebagai ilustrasi konsep."});
Object.assign(translations.en,{caseLibraryTitle:"Full case studies are available",caseLibraryDesc:"Explore workflow diagrams, test notes and interactive explanations on individual project pages. Diagrams are explicitly conceptual."});
const caseStudies = {
  feedback: {
    id:{kicker:"AUTOMATION / 2026 / DEMO",title:"AI Customer Feedback Analyzer",summary:"Demo yang memperlihatkan bagaimana masukan pelanggan bisa dikumpulkan secara terstruktur lalu diteruskan ke alur pengelolaan hasil analisis.",challenge:"Umpan balik pelanggan sering tersebar dan memerlukan rekap manual sebelum dapat ditindaklanjuti.",solution:"Merancang alur dari Google Forms ke Make.com dan Google Sheets; menyiapkan tampilan, pengujian, dan demonstrasi workflow untuk calon klien.",outcome:"Tahap demo: alur dan hasil uji telah disiapkan. Belum diklaim sebagai sistem produksi klien."},
    en:{kicker:"AUTOMATION / 2026 / DEMO",title:"AI Customer Feedback Analyzer",summary:"A demonstration of how customer feedback can be collected in a structured way and routed into an analysis-management workflow.",challenge:"Customer feedback is often scattered and must be compiled manually before anyone can act on it.",solution:"Designed a flow across Google Forms, Make.com, and Google Sheets; prepared its UI, testing evidence, and a prospect-facing walkthrough.",outcome:"Demo stage: workflow and tests prepared. Not presented as a client production deployment."}
  },
  orders: {
    id:{kicker:"AUTOMATION / 2026 / TESTED PROTOTYPE",title:"Otomasi Notifikasi Pesanan",summary:"Alur otomatis yang menerima data pesanan dari formulir, memvalidasi jumlah barang, lalu mengirim pemberitahuan email jika input memenuhi syarat.",challenge:"Input jumlah pesanan dapat berisi nol, angka negatif, desimal, atau teks yang tidak seharusnya masuk ke proses notifikasi.",solution:"Membangun Google Forms → Google Sheets → Make.com; menerapkan validasi dan filter, router untuk data valid, serta worksheet khusus untuk pesanan yang tidak valid.",outcome:"Prototipe telah diuji dengan data valid dan tidak valid; rute email dan pencatatan fallback berhasil dijalankan."},
    en:{kicker:"AUTOMATION / 2026 / TESTED PROTOTYPE",title:"Automated Order Notifications",summary:"An automated flow that receives form responses, validates order quantities, and sends email notifications for qualifying entries.",challenge:"Order quantity fields can contain zero, negative numbers, decimals, or text that should not trigger notifications.",solution:"Connected Google Forms → Google Sheets → Make.com, using validation, filters, condition-based routing, and a separate invalid-order worksheet.",outcome:"Prototype tested with valid and invalid inputs; both notification and fallback logging routes executed successfully."}
  },
  transmission: {
    id:{kicker:"WEB APP / 2025 / INTERNAL",title:"Sistem Pelaporan Transmisi Terintegrasi",summary:"Aplikasi web internal untuk membantu pencatatan dan rekap operasional transmisi siaran dalam satu sistem.",challenge:"Pelaporan logbook, downtime, dan gangguan dengan format yang tidak konsisten mempersulit pengumpulan data dan penelusuran perubahan.",solution:"Mengembangkan sistem PHP/MySQL dengan peran admin, leader, dan teknisi; modul logbook siaran, downtime DVB-T2, problem report, rekap, dan audit trail.",outcome:"Proyek aplikasi internal. Data dan akses produksi tidak dipublikasikan pada website ini."},
    en:{kicker:"WEB APP / 2025 / INTERNAL",title:"Integrated Transmission Reporting System",summary:"An internal web application that consolidates broadcast transmission operations reporting and monthly summaries.",challenge:"Inconsistent logbook, downtime, and incident reporting formats make aggregation and tracking changes difficult.",solution:"Developed a PHP/MySQL application with admin, leader, and technician roles; broadcast logbooks, DVB-T2 downtime, incident reporting, summaries, and audit trails.",outcome:"Internal application project. Production access and confidential operational data are not publicly shared."}
  }
};

const email = 'bobbymanik18@gmail.com';
let locale = 'id';
let closeTimer;
const $ = (selector) => document.querySelector(selector);

function setLanguage(nextLanguage){
  locale = nextLanguage === 'en' ? 'en' : 'id';
  document.documentElement.lang = locale;
  document.title = locale === 'en' ? (document.body.dataset.titleEn || document.title) : (document.body.dataset.titleId || document.title);
  for (const el of document.querySelectorAll('[data-i18n]')){
    const key = el.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(translations[locale],key)){
      // Translations are authored locally, not derived from user input.
      el.innerHTML = translations[locale][key];
    }
  }
  if ($('#language-label')) $('#language-label').textContent = locale === 'id' ? 'EN' : 'ID';
  if ($('#lang-switch')) $('#lang-switch').setAttribute('aria-label',locale === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia');
  renderProjects();
  const dialog = $('#case-dialog');
  if (dialog && dialog.open && dialog.dataset.project) fillCaseStudy(dialog.dataset.project);
  try { localStorage.setItem('portfolioLocale',locale); } catch (_) {}
}
function fillCaseStudy(projectId){
  const item = (window.PORTFOLIO_PROJECTS || []).find(p => p.id === projectId);
  if (!item) return;
  $('#case-kicker').textContent = `${item.category === 'web' ? 'WEB APP' : 'AUTOMATION'} / ${item.year} / ${localized(item.status)}`;
  $('#case-title').textContent = localized(item.title);
  $('#case-summary').textContent = localized(item.description);
  $('#case-challenge').textContent = localized(item.challenge);
  $('#case-solution').textContent = localized(item.solution);
  $('#case-outcome').textContent = localized(item.outcome);
  $('#case-role').textContent = localized(item.role) || (locale === 'en' ? 'Design and implementation' : 'Perancangan dan implementasi');
  $('#case-evidence').textContent = localized(item.evidence) || (locale === 'en' ? 'Case study documentation' : 'Dokumentasi studi kasus');
  const links = $('#case-links'); links.replaceChildren();
  [{value:item.demoUrl, label:locale==='en'?'Open demo ↗':'Buka demo ↗'}, {value:item.githubUrl,label:'GitHub ↗'}].forEach(link=>{
    const url = safeUrl(link.value);
    if (!url) return;
    const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=link.label;links.appendChild(a);
  });
}
function localized(value){return value?.[locale] || value?.id || value?.en || '';}
function safeUrl(raw){try{const u=new URL(raw);return ['https:','http:'].includes(u.protocol)?u.href:'';}catch(_){return '';}}
function renderProjects(){
  const grid=$('#projects-grid'); if(!grid) return;
  const currentFilter=document.querySelector('[data-filter].is-active')?.dataset.filter || 'all';
  const oldArts = window.portfolioTemplateArts || (window.portfolioTemplateArts = Object.fromEntries(
    [...grid.querySelectorAll('.project-card')].map((card,i)=>[["feedback","orders","transmission"][i],card.querySelector('.project-art')?.outerHTML || ''])
  ));
  grid.replaceChildren();
  const items=window.PORTFOLIO_PROJECTS || [];
  if(!items.length){const msg=document.createElement('p');msg.className='project-empty';msg.textContent=locale==='en'?'No projects yet.':'Belum ada proyek.';grid.appendChild(msg);return;}
  items.forEach((project,index)=>{
    const article=document.createElement('article');article.className='project-card';article.dataset.category=project.category === 'web'?'web':'automation';
    article.hidden=currentFilter!=='all' && article.dataset.category!==currentFilter;
    const art=document.createElement('div');art.className='project-art art-custom';
    if(project.image && (/^data:image\/(jpeg|png|webp);base64,/i.test(project.image) || /^https?:\/\//i.test(project.image) || /^assets\/evidence\/[a-z0-9_-]+\.webp$/i.test(project.image))){
      art.className='project-art art-upload';const img=document.createElement('img');img.loading='lazy';img.alt='Gambar proyek: '+localized(project.title);img.src=project.image;art.appendChild(img);
      const mark=document.createElement('span');mark.className='art-image-label';mark.textContent='PROJECT / '+String(index+1).padStart(2,'0');art.appendChild(mark);
    } else if(oldArts[project.id]){
      art.innerHTML=oldArts[project.id].replace(/^<div[^>]*>/,'').replace(/<\/div>$/,'');
      art.className = 'project-art '+ (project.id==='feedback'?'art-feedback':project.id==='orders'?'art-orders':'art-transmission');
    }else{
      const top=document.createElement('span');top.className='custom-art-index';top.textContent=`PROJECT / ${String(index+1).padStart(2,'0')}    ${project.year || ''}`;
      const icon=document.createElement('div');icon.className='custom-art-symbol';icon.textContent=project.category==='web'?'</>':'✳';
      const topic=document.createElement('div');topic.className='custom-art-topic';topic.textContent=project.technologies?.slice(0,2).join('  ·  ') || 'PROJECT';
      art.append(top,icon,topic);
    }
    article.appendChild(art);
    const content=document.createElement('div');content.className='project-content';
    const meta=document.createElement('div');meta.className='project-topline';const kind=document.createElement('span');kind.className='project-type';kind.textContent=localized(project.status);
    const year=document.createElement('span');year.className='project-year';year.textContent=project.year;meta.append(kind,year);
    const title=document.createElement('h3');title.textContent=localized(project.title);
    const description=document.createElement('p');description.textContent=localized(project.description);
    const tags=document.createElement('div');tags.className='tag-row';(project.technologies||[]).slice(0,5).forEach(t=>{const s=document.createElement('span');s.textContent=t;tags.appendChild(s);});
    const btn=document.createElement('button');btn.type='button';btn.className='project-more';btn.dataset.project=project.id;
    const label=document.createElement('span');label.textContent=translations[locale].viewCase;
    const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';btn.append(label,arrow);
    content.append(meta,title,description,tags,btn);
    if(project.caseUrl && /^case-(feedback|orders|transmission)\.html$/.test(project.caseUrl)){
      const link=document.createElement('a');link.href=project.caseUrl;link.className='case-extra-link';
      link.textContent=locale==='en'?'Read full case study ↗':'Buka studi kasus lengkap ↗';
      content.append(link);
    }
    article.appendChild(content);grid.appendChild(article);
  });
}

function closeDialog(){ $('#case-dialog').close(); }
function setFilter(filter){
  document.querySelectorAll('[data-filter]').forEach((button)=>{
    const active = button.dataset.filter === filter;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  document.querySelectorAll('.project-card').forEach((card)=>{
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
}
async function copyEmail(){
  let success=false;
  try{ await navigator.clipboard.writeText(email); success=true; }catch(_){
    const field=document.createElement('textarea');field.value=email;field.style.position='fixed';field.style.opacity='0';document.body.appendChild(field);field.select();
    try{success=document.execCommand('copy');}catch(__){}field.remove();
  }
  if(success){
    const btn=$('#copy-email');
    const span=btn.querySelector('[data-i18n]');
    if(closeTimer) clearTimeout(closeTimer);
    span.textContent=translations[locale].copied;
    closeTimer=setTimeout(()=>{span.textContent=translations[locale].copyEmail;},2200);
  }else{window.location.href='mailto:'+email;}
}

document.addEventListener('DOMContentLoaded',()=>{
let stored=/^en\b/i.test(navigator.language||'')?'en':'id';try{stored=localStorage.getItem('portfolioLocale')||stored;}catch(_){}
setLanguage(stored);
$('#lang-switch')?.addEventListener('click',()=>setLanguage(locale==='id'?'en':'id'));
if($('#current-year'))$('#current-year').textContent=String(new Date().getFullYear());
const grid=$('#projects-grid');if(grid){document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));setFilter('all');
grid.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(!b)return;const d=$('#case-dialog');if(!d)return;d.dataset.project=b.dataset.project;fillCaseStudy(b.dataset.project);d.showModal();});}
const d=$('#case-dialog');if(d){$('#dialog-close')?.addEventListener('click',closeDialog);$('#dialog-done')?.addEventListener('click',closeDialog);d.addEventListener('click',e=>{if(e.target===d)closeDialog();});}
$('#copy-email')?.addEventListener('click',copyEmail);
});