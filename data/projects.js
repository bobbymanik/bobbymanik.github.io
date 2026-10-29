/* Data proyek portofolio. Diperbarui melalui editor-project.html. */
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
      "id": "Demo telah disiapkan dan diuji. Belum menjadi implementasi produksi pelanggan.",
      "en": "Demo prepared and tested. Not deployed as a client production system."
    },
    "technologies": [
      "Make.com",
      "Google Forms",
      "Google Sheets"
    ],
    "image": "",
    "demoUrl": "",
    "githubUrl": "",
    "featured": true
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
      "id": "Pengujian input valid dan tidak valid berhasil melewati rute yang sesuai.",
      "en": "Valid and invalid test inputs were routed successfully."
    },
    "technologies": [
      "Make.com",
      "Google Sheets",
      "Gmail"
    ],
    "image": "",
    "demoUrl": "",
    "githubUrl": "",
    "featured": true
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
      "id": "Studi kasus aplikasi internal; akses sistem dan informasi operasional tidak ditampilkan secara publik.",
      "en": "Internal application case study; access and operational data remain private."
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
    "featured": true
  }
];