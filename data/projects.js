/* Source-of-truth: projects featured on the public portfolio. Update evidence and URLs only after verification. */
window.PORTFOLIO_PROJECTS = [
  {
    "id": "feedback",
    "year": "2026",
    "category": "automation",
    "status": {
      "id": "DEMO OTOMASI",
      "en": "AUTOMATION DEMO"
    },
    "title": {
      "id": "AI Customer Feedback Analyzer",
      "en": "AI Customer Feedback Analyzer"
    },
    "description": {
      "id": "Demo pengumpulan umpan balik pelanggan melalui Google Forms, Make.com, dan Google Sheets, disiapkan sebagai studi kasus untuk calon klien.",
      "en": "Customer feedback collection demo using Google Forms, Make.com, and Google Sheets, prepared as a prospective-client case study."
    },
    "challenge": {
      "id": "Masukan pelanggan tersebar dan sulit disusun menjadi laporan yang konsisten.",
      "en": "Customer feedback is scattered and difficult to compile consistently."
    },
    "solution": {
      "id": "Membuat alur formulir, workflow Make.com, dan rekap Google Sheets; menyiapkan simulasi demo dan hasil uji.",
      "en": "Built a form-to-Make.com-to-Sheets workflow; prepared a demo walkthrough and test evidence."
    },
    "outcome": {
      "id": "Demo disimulasikan dan diuji. Belum digunakan pada sistem produksi atau klien berbayar.",
      "en": "Demo walkthrough and testing completed. Not presented as a client production system or paid engagement."
    },
    "technologies": [
      "Make.com",
      "Google Forms",
      "Google Sheets"
    ],
    "image": "",
    "demoUrl": "",
    "githubUrl": "",
    "featured": true,
    "role": {
      "id": "Merancang form pengumpulan masukan, alur Make.com, struktur rekap Sheets, dan simulasi demo.",
      "en": "Designed the feedback form, Make.com workflow, Sheets summary structure, and demo walkthrough."
    },
    "evidence": {
      "id": "Tersedia tampilan Google Forms, workflow Make.com, rekap Google Sheets, dan riwayat pengujian sukses. Materi belum dibagikan sebagai tautan publik.",
      "en": "Google Forms screens, Make.com workflow, Google Sheets output, and successful test history. Evidence is not yet linked publicly."
    },
    "caseUrl": "case-feedback.html"
  },
  {
    "id": "orders",
    "year": "2026",
    "category": "automation",
    "status": {
      "id": "PROTOTIPE TERUJI",
      "en": "TESTED PROTOTYPE"
    },
    "title": {
      "id": "Otomasi Notifikasi Pesanan",
      "en": "Automated Order Notifications"
    },
    "description": {
      "id": "Mengirim email otomatis untuk pesanan valid, sekaligus mencatat input tidak valid melalui logika routing di Make.com.",
      "en": "Automated email notifications for valid orders and separate logging for invalid inputs with Make.com routing."
    },
    "challenge": {
      "id": "Jumlah pesanan bisa berisi angka negatif, desimal, nol, atau teks yang tidak boleh memicu notifikasi.",
      "en": "Order quantities may contain negative numbers, decimals, zero, or text that should not trigger notifications."
    },
    "solution": {
      "id": "Menghubungkan Google Forms → Google Sheets → Make.com → Gmail dengan filter validasi dan fallback pencatatan data tidak valid.",
      "en": "Connected Google Forms → Google Sheets → Make.com → Gmail with validation filters and a fallback invalid-data log."
    },
    "outcome": {
      "id": "Prototipe berfungsi sesuai skenario pengujian lokal Make.com; belum diklaim sebagai implementasi produksi pelanggan.",
      "en": "Prototype behaved as expected in Make.com tests; not claimed as a client production deployment."
    },
    "technologies": [
      "Make.com",
      "Google Sheets",
      "Gmail"
    ],
    "image": "",
    "demoUrl": "",
    "githubUrl": "",
    "featured": true,
    "role": {
      "id": "Mengonfigurasi trigger Sheets, validasi input, filter/router, Gmail, dan log fallback.",
      "en": "Configured Sheets trigger, input checks, filters/router, Gmail delivery, and fallback logging."
    },
    "evidence": {
      "id": "Skenario diuji menggunakan jumlah valid serta contoh 0, negatif, desimal, dan teks. Rute email dan pencatatan input tidak valid berhasil dijalankan.",
      "en": "Tested with valid quantities and zero, negative, decimal, and text inputs. Email notifications and invalid-order logging executed as intended."
    },
    "caseUrl": "case-orders.html"
  },
  {
    "id": "transmission",
    "year": "2025",
    "category": "web",
    "status": {
      "id": "APLIKASI WEB INTERNAL",
      "en": "INTERNAL WEB APP"
    },
    "title": {
      "id": "Sistem Pelaporan Transmisi Terintegrasi",
      "en": "Integrated Transmission Reporting System"
    },
    "description": {
      "id": "Aplikasi internal dengan logbook, downtime DVB-T2, problem report, rekap bulanan, serta hak akses berbasis peran.",
      "en": "Internal reporting app featuring broadcast logbooks, DVB-T2 downtime, incident reports, monthly recaps, and role-based access."
    },
    "challenge": {
      "id": "Format pelaporan operasional tidak seragam sehingga rekap dan penelusuran informasi menjadi lambat.",
      "en": "Inconsistent operational reporting made summaries and information retrieval time-consuming."
    },
    "solution": {
      "id": "Membangun sistem PHP/MySQL dengan modul laporan, role admin/leader/teknisi, dan audit trail.",
      "en": "Developed a PHP/MySQL system with reports, admin/leader/technician roles, and an audit trail."
    },
    "outcome": {
      "id": "Studi kasus aplikasi internal. Tidak ada klaim angka efisiensi atau akses publik ke data produksi.",
      "en": "Internal application case study; no unverified efficiency metrics or public access to production data are claimed."
    },
    "technologies": [
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript"
    ],
    "image": "",
    "demoUrl": "",
    "githubUrl": "",
    "featured": true,
    "role": {
      "id": "Menganalisis kebutuhan pelaporan, merancang database dan hak akses, serta mengembangkan modul PHP/MySQL.",
      "en": "Analyzed reporting needs, designed the database and access roles, and developed PHP/MySQL modules."
    },
    "evidence": {
      "id": "Fitur: logbook, downtime DVB-T2, laporan gangguan, rekap, kontrol peran, dan audit trail. Screenshot serta data operasional internal tidak dipublikasikan.",
      "en": "Features: logbooks, DVB-T2 downtime, incident reports, summaries, role controls, and audit trails. Internal screenshots and operational data are not published."
    },
    "caseUrl": "case-transmission.html"
  }
];
