// ============================================================
// SEMUA ISI WEBSITE ADA DI FILE INI.
// Mau ubah teks / tambah pengalaman? Cukup edit di sini.
// ============================================================

export const profile = {
  name: 'Muhamad Elmansya Darryl Fatha',
  shortName: 'Darryl Fatha',
  role: 'Managed Services & Operations Engineer',
  location: 'Jakarta, Indonesia',
  email: 'darrylfatha@gmail.com',
  phone: '087785636413',
  showPhone: false, // ganti true kalau mau nomor HP tampil di website publik
  linkedin: '', // isi, contoh: 'https://linkedin.com/in/username'
  github: '', // isi, contoh: 'https://github.com/username'
  tagline:
    'Saya menjaga sistem core banking tetap berjalan: dari query database, backup & recovery, sampai simulasi DRC/BCP.',
  summary:
    'Managed Services and Operations Engineer dengan pengalaman langsung mendukung sistem core banking Finastra TIPlus di salah satu bank besar Indonesia. Terampil dalam Oracle Database dan SQL Server, housekeeping IBM DB2, backup & recovery, drill DRC/BCP, manajemen insiden berbasis SLA, serta dokumentasi audit. Berlatar belakang Ilmu Komputer dengan dasar data cleansing, analisis data, dan machine learning.',
}

export const stats = [
  { value: '2+', label: 'Tahun di core banking' },
  { value: '3', label: 'Database dikuasai' },
  { value: '3.57', label: 'IPK / 4.00' },
  { value: 'Tier 1–2', label: 'Penanganan insiden' },
]

export const skills = [
  {
    title: 'Database & Operasional',
    items: ['Oracle Database', 'Microsoft SQL Server', 'IBM DB2'],
  },
  {
    title: 'Dasar Database',
    items: ['Select, Join, Subquery', 'Stored Procedure', 'Function', 'Trigger', 'View', 'Exception Handling', 'Constraint', 'Backup & Restore'],
  },
  {
    title: 'Core Banking & Dukungan Sistem',
    items: ['TIPlus Core Banking', 'TIPlus Operations', 'Monitoring DRC', 'Database Housekeeping'],
  },
  {
    title: 'Audit & Kepatuhan',
    items: ['Third-Party Risk Assessment', 'Bukti pendukung ISO 27001', 'Dokumen BCP/DRC', 'Principal Endorsement Letter'],
  },
  {
    title: 'Dashboard & Integrasi Data',
    items: ['Grafana', 'Jenkins', 'Talend Open Studio (ETL)'],
  },
  {
    title: 'Teknis Lainnya',
    items: ['Python', 'HTML5', 'CSS', 'Data Cleansing', 'Data Analysis', 'TensorFlow', 'SVM'],
  },
  {
    title: 'Soft Skills',
    items: ['Incident Management', 'Kepatuhan SLA', 'Troubleshooting', 'Kerja Sama Tim', 'Dokumentasi Teknis'],
  },
]

export const experience = [
  {
    role: 'Managed Services and Operations Engineer',
    company: 'PT NTT Indonesia Technology',
    period: 'September 2024 – Sekarang',
    project: 'Operasi & Pemeliharaan Core Banking (Finastra TIPlus) untuk bank besar di Indonesia',
    points: [
      'Menulis dan menjalankan query SQL, stored procedure, dan trigger di Oracle Database dan SQL Server untuk menganalisis log sistem, menyelesaikan exception transaksi, dan rekonsiliasi data.',
      'Melakukan pemeliharaan rutin IBM DB2: arsip journal receiver serta pembersihan spool file, output queue, dan log.',
      'Menjalankan backup harian dan uji backup-restore bulanan untuk memastikan konsistensi database.',
      'Memantau kesiapan server DRC dan ikut serta dalam prosedur switch-over / switch-back saat drill BCP.',
      'Menangani insiden Tier 1 dan Tier 2 sesuai SLA Severity 1, 2, dan 3.',
      'Berkoordinasi dengan Finastra L3 Support untuk laporan bug, serta memverifikasi patch dan hotfix di UAT/staging sebelum rilis ke Production.',
      'Membangun dashboard monitoring operasional di Grafana (status & durasi batch End-of-Day) dengan Talend Open Studio untuk ETL dan Jenkins untuk penjadwalan otomatis.',
      'Menyusun dokumentasi pendukung asesmen risiko pihak ketiga dan audit: bukti ISO 27001, dokumen BCP, principal endorsement letter, hasil uji backup-restore, catatan insiden/SLA, dan bukti drill DRC/BCP.',
    ],
  },
]

export const projects = [
  {
    title: 'Deteksi Kerusakan Kendaraan dengan Machine Learning',
    tag: 'Machine Learning',
    tech: ['Python', 'TensorFlow', 'Computer Vision'],
    desc: 'Aplikasi berbasis machine learning untuk mengenali dan mengategorikan kerusakan kendaraan dari gambar, bertujuan mengotomatiskan estimasi kerusakan.',
  },
  {
    title: 'NBA News Portal',
    tag: 'Web Development',
    tech: ['HTML5', 'CSS', 'MySQL'],
    desc: 'Website berita responsif untuk mengelola dan menampilkan konten olahraga yang dinamis.',
  },
  {
    title: 'Dashboard Monitoring EOD TIPlus',
    tag: 'Operations',
    tech: ['Grafana', 'Talend', 'Jenkins', 'SQL'],
    desc: 'Dashboard operasional untuk memantau status dan durasi batch End-of-Day pada core banking, dengan data disiapkan lewat ETL dan dijadwalkan otomatis.',
  },
]

export const education = {
  school: 'Universitas Gunadarma',
  degree: 'Informatika (S.Kom.)',
  period: 'September 2019 – Agustus 2023',
  gpa: '3.57 / 4.00',
}

export const certifications = [
  { name: 'SQL Server Project & Administration', date: 'Agustus 2022', desc: 'Administrasi database, stored procedure/function, role & permission, jadwal backup otomatis, restore.' },
  { name: 'SQL Server for Intermediate', date: 'Februari 2022', desc: 'Query kompleks, manajemen index dasar, stored procedure, otomatisasi tugas administrasi.' },
  { name: 'Oracle SQL & PL/SQL for Intermediate', date: 'Agustus 2021', desc: 'Constraint, view, subquery, explicit cursor, exception handling di PL/SQL.' },
  { name: 'Fundamental DBMS & Beginner Courses', date: '2019 – 2021', desc: 'Konsep database relasional, DDL/DML MySQL/SQL Server, instalasi Oracle, variabel PL/SQL.' },
  { name: 'Intro to Data Analytics — RevoU', date: 'Juli 2024', desc: 'Data cleansing, preprocessing, dan reporting dengan SQL dan Excel.' },
  { name: 'Data Science & Machine Learning — Universitas Gunadarma & Dicoding', date: '', desc: 'Data cleansing, validasi, modeling, dan evaluasi.' },
]
