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
    expDate1:"2025 — Sekarang",expRole1:"Asisten Teknisi Siaran Pemula · Rokan Hilir",expDesc1:"Monitoring operasional dan perangkat transmisi, dokumentasi gangguan, koordinasi teknis, serta pelaporan berkala.",
    expDate2:"Jan — Feb 2024",expRole2:"Magang · Asisten Pengarsipan",expDesc2:"Pengarsipan dokumen BPR menggunakan Excel serta mengikuti kegiatan edukasi pasar modal.",
    expDate3:"Sep — Des 2023",expRole3:"Magang · War Room",expDesc3:"Mengembangkan website pemantauan kinerja dengan Laravel dan JavaScript serta membantu pengolahan data pelanggan.",
    educationEyebrow:"PENDIDIKAN",educationText:"Sarjana Teknologi Informasi · IPK 3,79 / 4,00",trainingEyebrow:"PELATIHAN",
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
    expDate1:"2025 — Present",expRole1:"Broadcast Transmission Technician · Rokan Hilir",expDesc1:"Monitoring transmission operations and equipment, documenting incidents, supporting technical coordination, and preparing operational reports.",
    expDate2:"Jan — Feb 2024",expRole2:"Archive Assistant Intern",expDesc2:"Organized rural bank correspondence records using Excel and participated in capital-market education activities.",
    expDate3:"Sep — Dec 2023",expRole3:"War Room Intern",expDesc3:"Developed a performance monitoring website with Laravel and JavaScript and supported customer data processing.",
    educationEyebrow:"EDUCATION",educationText:"Bachelor of Information Technology · GPA 3.79 / 4.00",trainingEyebrow:"TRAINING",
    skillsLabel:"TOOLS & SKILLS",skillsTitle:'Think systematically. <span class="muted-heading">Build with the right tools.</span>',skillsSubtitle:"Tools I have used or studied through work, training, and personal projects.",skillGroup1:"Automation & Data",skillGroup2:"Web Development",skillGroup3:"Operations & Design",basicPython:"Python (basic)",skillOperational:"Technical monitoring",skillReporting:"Documentation & reporting",
    contactLabel:"LET'S CONNECT",contactTitle:'Have a process that could be <span class="gradient-text">a little simpler?</span>',contactSubtitle:"I'm happy to discuss workflow automation, web applications, and technical collaboration opportunities.",sendEmail:"Send an email",copyEmail:"Copy email address",copied:"Email copied!",footerText:"Made with attention to detail.",backToTop:"Back to top ↑",
    caseHeading:"CASE STUDY",caseChallenge:"The challenge",caseSolution:"The solution",caseStatus:"Project status",dialogNotice:"Project information excludes internal or confidential data.",close:"Close ↗"
  }
};

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
  document.title = locale === 'en' ? 'Bobby Adithya Manik — Automation & Web Portfolio' : 'Bobby Adithya Manik — Portofolio Automation & Web';
  for (const el of document.querySelectorAll('[data-i18n]')){
    const key = el.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(translations[locale],key)){
      // Translations are authored locally, not derived from user input.
      el.innerHTML = translations[locale][key];
    }
  }
  $('#language-label').textContent = locale === 'id' ? 'EN' : 'ID';
  $('#lang-switch').setAttribute('aria-label',locale === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia');
  renderProjects();
  const dialog = $('#case-dialog');
  if (dialog.open && dialog.dataset.project) fillCaseStudy(dialog.dataset.project);
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
    if(project.image && (/^data:image\/(jpeg|png|webp);base64,/i.test(project.image) || /^https?:\/\//i.test(project.image))){
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
    content.append(meta,title,description,tags,btn);article.appendChild(content);grid.appendChild(article);
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
  let stored='id';try{stored=localStorage.getItem('portfolioLocale')||'id';}catch(_){}
  setLanguage(stored);
  $('#current-year').textContent=String(new Date().getFullYear());
  $('#lang-switch').addEventListener('click',()=>setLanguage(locale==='id'?'en':'id'));
  $('.menu-toggle').addEventListener('click',()=>{
    const opened=$('#nav-links').classList.toggle('is-open');
    $('.menu-toggle').setAttribute('aria-expanded',String(opened));
  });
  $('#nav-links').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    $('#nav-links').classList.remove('is-open');$('.menu-toggle').setAttribute('aria-expanded','false');
  }));
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>setFilter(button.dataset.filter)));
  setFilter('all');
  $('#projects-grid').addEventListener('click', e=>{
    const button=e.target.closest('[data-project]'); if(!button) return;
    const projectId=button.dataset.project;
    $('#case-dialog').dataset.project=projectId;
    fillCaseStudy(projectId);
    $('#case-dialog').showModal();
  });
  $('#dialog-close').addEventListener('click',closeDialog);
  $('#dialog-done').addEventListener('click',closeDialog);
  $('#case-dialog').addEventListener('click',event=>{if(event.target===$('#case-dialog'))closeDialog();});
  $('#copy-email').addEventListener('click',copyEmail);
});