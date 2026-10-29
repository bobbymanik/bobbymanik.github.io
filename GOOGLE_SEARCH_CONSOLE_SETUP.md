# Google Search Console — Website Portofolio
Website: https://bobbymanik.github.io/
Sitemap: https://bobbymanik.github.io/sitemap.xml
Maintained: 2026-10-30

## 1. Status yang sudah disiapkan
- Website GitHub Pages publik, mendukung HTTPS.
- `robots.txt` mengizinkan Googlebot mengakses halaman umum dan mencantumkan sitemap.
- Sitemap memiliki 11 URL portofolio dan studi kasus.
- Setiap halaman memiliki canonical URL, deskripsi SEO dan metadata berbagi link.
- Tes otomatis di GitHub Actions memeriksa situs publik setelah deployment.

## 2. Tindakan pemilik akun Google (belum dilakukan)
1. Buka https://search.google.com/search-console
2. Login menggunakan akun Google yang Anda ingin gunakan sebagai pemilik.
3. Pilih **Add property** → **URL prefix**.
4. Ketik persis: `https://bobbymanik.github.io/`
5. Pilih salah satu metode verifikasi yang ditawarkan Google:
   - **HTML tag**: salin meta tag `google-site-verification` secara utuh dari Google. Tempatkan dalam `<head>` file `index.html`, commit ke `main`, dan tunggu deploy sukses; setelah itu klik **Verify** di Search Console.
   - **HTML file**: unduh berkas verifikasi unik dari Google. Tambahkan berkas persis ke root repository (jangan ubah nama/isi), tunggu deploy, buka URL verifikasinya, kemudian klik **Verify**.
6. Jika menggunakan ChatGPT untuk memasang token, kirim hanya meta tag **verifikasi situs** atau file HTML verifikasi yang disediakan Google (jangan pernah mengirim password atau kode login).
7. Jangan hapus kode/berkas verifikasi setelah berhasil karena Google dapat memeriksa ulang kepemilikan.

## 3. Submit sitemap
1. Setelah properti menunjukkan **Ownership verified**, pilih menu **Sitemaps**.
2. Isi sitemap URL `https://bobbymanik.github.io/sitemap.xml` (atau `sitemap.xml` jika form meminta path).
3. Klik **Submit**.
4. Pantau status pemrosesan, halaman yang ditemukan dan error indeks secara berkala.

## 4. Periksa pengindeksan
- Pada **URL inspection**, periksa URL utama dan tiga studi kasus.
- Gunakan **Request indexing** bila halaman belum ditemukan dan Search Console mengizinkan.
- Periksa laporan **Pages** dan **Performance** untuk melihat cakupan, impresi dan klik setelah Google memproses.
- Sitemap dan verifikasi tidak menjamin peringkat, jumlah pengunjung, atau waktu pengindeksan.

## 5. Halaman utama untuk diperiksa
- https://bobbymanik.github.io/
- https://bobbymanik.github.io/projects.html
- https://bobbymanik.github.io/case-feedback.html
- https://bobbymanik.github.io/case-orders.html
- https://bobbymanik.github.io/case-transmission.html
- https://bobbymanik.github.io/resume.html

Official references:
- https://support.google.com/webmasters/answer/9008080
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
