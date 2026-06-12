const dataPengurus = [
  {
    id: 'p1',
    nama: 'Muhammad Ghazi Rakhmadi',
    jabatan: 'Ketua Umum',
    divisi: 'Inti',
    kontak: '0878-4210-2176',
    foto: 'ghazi.png',
  },
  {
    id: 'p2',
    nama: "Muhammad Rakha' Attallah",
    jabatan: 'Wakil Ketua',
    divisi: 'Inti',
    kontak: '0822-9054-6065',
    foto: 'rakha.png',
  },
  {
    id: 'p3',
    nama: "Putri Fatima Az'hara",
    jabatan: 'Sekretaris Umum',
    divisi: 'Inti',
    kontak: '0858-4964-0636',
    foto: 'tima.png',
  },
  {
    id: 'p4',
    nama: 'Amanda Arva Safaraya',
    jabatan: 'Bendahara Umum',
    divisi: 'Inti',
    kontak: '0852-5106-0155',
    foto: 'manda.png',
  }
]; 
const dataDivisi = [
  {
    nama: 'Divisi Kerohanian',
    icon: 'fas fa-mosque',
    prokerList: ['Ramadhan Bersama TI', 'Webinar Desain Aplikasi Islami'],
    nonProkerList: ['Adzan Rutin', 'Kreativitas & Seni Islami'],
    koordinator: {
      id: 'k1',
      nama: 'Muhammad Dzul Fathi Ahyan',
      jabatan: 'Koordinator',
      divisi: 'Kerohanian',
      kontak: '0811-5117-447',
      foto: 'dzul.png',
      prokerPribadi: 'Koordinator Kerohanian'
    },
    anggota: [
      { id: 'a1',  nama: 'Ashma Salimah',               divisi: 'Kerohanian', jabatan: 'Anggota', kontak: '0895-6355-24316', foto: 'ashma.png', prokerPribadi: 'PJ Peringatan Hari-Hari Besar Keagamaan' },
      { id: 'a2',  nama: 'Efriben Prima Ardana',         divisi: 'Kerohanian', jabatan: 'Anggota', kontak: '0877-62541492', foto: 'iben.png', prokerPribadi: 'PJ Ramadhan Bersama TI' },
      { id: 'a3',  nama: 'Muhammad Hafi',                divisi: 'Kerohanian', jabatan: 'Anggota', kontak: '0857-1030-1284', foto: 'hapi.png', prokerPribadi: 'PJ KREASI (Kreatifitas Seni Islami)' },
      { id: 'a4',  nama: 'Muhammad Rasyha Irsach Warafah', divisi: 'Kerohanian', jabatan: 'Anggota', kontak: '0858-4956-0138', foto: 'irsak.png', prokerPribadi: 'PJ Forum Keagamaan' },
      { id: 'a5',  nama: 'Muhammad Kurniawan Pasya',     divisi: 'Kerohanian', jabatan: 'Anggota', kontak: '0831-4219-0472', foto: 'pasya.png', prokerPribadi: 'PJ Adzan Rutin' },
      { id: 'a6',  nama: 'Rizki Adhitiya Maulana',       divisi: 'Kerohanian', jabatan: 'Anggota', kontak: '0895-3059-9368', foto: 'adit.png', prokerPribadi: 'PJ Qurban Berkah' }
    ]
  },
  {
    nama: 'Divisi Riset dan Teknologi',
    icon: 'fas fa-laptop-code',
    prokerList: ['Workshop KTI', 'Workshop Game Developer', 'Workshop IoT'],
    nonProkerList: ['Study Club', 'Info Lomba', 'ItXplore', 'Sosialisasi Lomba'],
    koordinator: {
      id: 'k2',
      nama: 'Muhammad Azriel Akbar',
      jabatan: 'Koordinator',
      divisi: 'Riset dan Teknologi',
      kontak: '0858-2813-3808',
      foto: 'azriel.png',
      prokerPribadi: 'Koordinator RISTEK'
    },
    anggota: [
      { id: 'b1', nama: 'A. Malik Fajar Putra Syamsi',       divisi: 'Riset dan Teknologi', jabatan: 'Anggota', kontak: '0813-5114-2419', foto: 'malik.png', prokerPribadi: 'PJ Workshop Game-Dev' },
      { id: 'b2', nama: 'Noor Khalisa',                       divisi: 'Riset dan Teknologi', jabatan: 'Anggota', kontak: '0823-5163-9450', foto: 'lisa.png', prokerPribadi: 'PJ Info Lomba' },
      { id: 'b3', nama: 'Arya Arrozza Ridho Syaputra',        divisi: 'Riset dan Teknologi', jabatan: 'Anggota', kontak: '0812-6664-4462', foto: 'ozza.png', prokerPribadi: 'PJ ItXplore' },
      { id: 'b4', nama: 'Fadhil Syahdama Mahatma Putra',      divisi: 'Riset dan Teknologi', jabatan: 'Anggota', kontak: '0813-4739-9899', foto: 'fadil.png', prokerPribadi: 'PJ Sosialisasi Lomba' },
      { id: 'b5', nama: 'Aisha Zwarintyanda',                 divisi: 'Riset dan Teknologi', jabatan: 'Anggota', kontak: '0823-7200-2007', foto: 'ais.png', prokerPribadi: 'PJ Workshop IoT' },
      { id: 'b6', nama: 'Muhammad Ramadhon',                  divisi: 'Riset dan Teknologi', jabatan: 'Anggota', kontak: '0812-5621-3775', foto: 'adhan.png', prokerPribadi: 'PJ Workshop KTI' },
      { id: 'b7', nama: "Daffa Dziiba'an Khoiri",             divisi: 'Riset dan Teknologi', jabatan: 'Anggota', kontak: '0831-5201-2329', foto: 'dafa.png', prokerPribadi: 'PJ Study Club' }
    ]
  },
  {
    nama: 'Divisi Pengembangan Sumber Daya Mahasiswa',
    icon: 'fas fa-user-graduate',
    prokerList: ['Musyawarah Kerja', 'Upgrading Pengurus', 'Temu Wicara', 'PKKMB Prodi TI FT ULM', 'LKMM-PD PSTI ULM '],
    nonProkerList: ['ASPIRATI (ASPIRAsi warga TI)', 'CODATI (COllecting DAta warga TI)'],
    koordinator: {
      id: 'k3',
      nama: 'Andre Cristian Nathanael',
      jabatan: 'Koordinator',
      divisi: 'PSDM',
      kontak: '0821-5531-3165',
      foto: 'andre.png',
      prokerPribadi: 'Kordinator PSDM'
    },
    anggota: [
      { id: 'c1', nama: 'Muhammad Raffa Azisha',    divisi: 'PSDM', jabatan: 'Anggota', kontak: '0816-4909-3905', foto: 'raffa.png', prokerPribadi: 'PJ PKKMB Prodi TI FT ULM 2026 dan EFTEGRADUATION' },
      { id: 'c2', nama: 'Zainil Musthofa Radam',    divisi: 'PSDM', jabatan: 'Anggota', kontak: '0813-4828-2257', foto: 'zenil.png', prokerPribadi: 'PJ LKMM-PD PSTI FT ULM 2026' },
      { id: 'c3', nama: 'Noufal Raditya Wardana',   divisi: 'PSDM', jabatan: 'Anggota', kontak: '0851-5889-0436', foto: 'radit.png', prokerPribadi: 'PJ Musyawarah Kerja HMTI FT ULM 2026' },
      { id: 'c4', nama: 'Tysa Luthfia',             divisi: 'PSDM', jabatan: 'Anggota', kontak: '0811-5540-110', foto: 'tysa.png', prokerPribadi: 'PJ Upgrading Pengurus HMTI FT ULM 2026' },
      { id: 'c5', nama: 'Namira Humaira',           divisi: 'PSDM', jabatan: 'Anggota', kontak: '0831-5173-9451', foto: 'nami.png', prokerPribadi: 'PJ CODATI (COllecting DAta Warga TI)' },
      { id: 'c6', nama: 'Aurora Shafa Salsabila',   divisi: 'PSDM', jabatan: 'Anggota', kontak: '0812-5670-2899', foto: 'rora.png', prokerPribadi: 'PJ ASPIRATI (ASPIRAsi warga TI)' },
      { id: 'c7', nama: 'Naila Atresia Rahma',      divisi: 'PSDM', jabatan: 'Anggota', kontak: '0831-5052-2725', foto: 'atres.png', prokerPribadi: 'PJ TEMU WICARA' }
    ]
  },
  {
    nama: 'Divisi Minat dan Bakat',
    icon: 'fas fa-palette',
    prokerList: ['VENT IT', 'IT CUP', 'IT FEST'],
    nonProkerList: ['Manajemen Sport & E-Sport', 'Manajemen Art'],
    koordinator: {
      id: 'k4',
      nama: 'Muhammad Alfi Gunawan',
      jabatan: 'Koordinator',
      divisi: 'Minat dan Bakat',
      kontak: '0812-5108-0786',
      foto: 'alfi.png',
      prokerPribadi: 'Koordinator Minat dan Bakat'
    },
    anggota: [
      { id: 'd1',  nama: 'Tristan Nathan Naurell Prasetyo',    divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0853-9223-3660', foto: 'natan.png', prokerPribadi: 'PJ IT FEST' },
      { id: 'd2',  nama: 'Ahmad Muzakki Khaira',               divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0821-5519-8331', foto: 'zeki.png', prokerPribadi: 'PJ Olahraga Badminton' },
      { id: 'd3',  nama: 'Abdurrazak',                         divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0857-5315-6814', foto: 'ozak.png', prokerPribadi: 'PJ VEND IT' },
      { id: 'd4',  nama: 'Favian Triyanda Naufal',             divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0857-5420-0320', foto: 'papian.png', prokerPribadi: 'PJ IT CUP' },
      { id: 'd5',  nama: 'Denny Mauladinoor',                  divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0896-9324-0140', foto: 'denny.png', prokerPribadi: 'PJ Olahraga Voli' },
      { id: 'd6',  nama: 'Radina Yasmin',                      divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0896-9324-0140', foto: 'dina.png', prokerPribadi: 'Sekretaris Divisi' },
      { id: 'd7',  nama: 'Putri Maiza Azzura',                 divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0857-5316-3682', foto: 'putri.png', prokerPribadi: 'PJ Seni Tari' },
      { id: 'd8',  nama: 'Ahmad Ulyani',                       divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0853-4936-2225', foto: 'ulyani.png', prokerPribadi: 'PJ E-Sport Mobile Legend' },
      { id: 'd9',  nama: 'Adhiem Nabil Maulana',               divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0896-9085-5939', foto: 'adim.png', prokerPribadi: 'PJ Game PES' },
      { id: 'd10', nama: 'Muhammad Fauzan Fakhriy Hartono',    divisi: 'Minat dan Bakat', jabatan: 'Anggota', kontak: '0813-4552-6848', foto: 'fauzan.png', prokerPribadi: 'PJ Olahraga Futsal' }
    ]
  },
  {
    nama: 'Divisi Hubungan Masyarakat',
    icon: 'fas fa-bullhorn',
    prokerList: ['BENCHMARKING', 'BAKTI (Berbagi Aksi Teknologi Informasi)', 'TEKNISI (Teknologi Informasi Beraksi)', 'Workshop Personal Branding'],
    nonProkerList: ['KOKI (Konten Kreatif & Inovatif Sosial Media)', 'Relasi'],
    koordinator: {
      id: 'k5',
      nama: 'Ahmad Luthfi Maulana',
      jabatan: 'Koordinator',
      divisi: 'Hubungan Masyarakat',
      kontak: '0895-4145-44075',
      foto: 'luthfi.png',
      prokerPribadi: 'Koordinator Hubungan Masyarakat'
    },
    anggota: [
      { id: 'e1', nama: 'Nazwa Amanda',              divisi: 'Hubungan Masyarakat', jabatan: 'Anggota', kontak: '0859-1964-13565', foto: 'awa.png', prokerPribadi: 'PJ RELASI' },
      { id: 'e2', nama: 'Nabilla Putri Nugraha',    divisi: 'Hubungan Masyarakat', jabatan: 'Anggota', kontak: '0817-5555-0002', foto: 'nabila.png', prokerPribadi: 'PJ BENCHMARKING' },
      { id: 'e3', nama: 'Maula Muhammad Farrel Rabbani', divisi: 'Hubungan Masyarakat', jabatan: 'Anggota', kontak: '0822-5276-0909', foto: 'farel.png', prokerPribadi: 'Anggota Konten Kreatif Sosial Media (KOKI)' },
      { id: 'e4', nama: 'Muhammad Naufal Khalish',  divisi: 'Hubungan Masyarakat', jabatan: 'Anggota', kontak: '0857-5432-9824', foto: 'khalis.png', prokerPribadi: 'PJ Konten Kreatif Sosial Media (KOKI)' },
      { id: 'e5', nama: 'Muhammad Zaini Hafidz',    divisi: 'Hubungan Masyarakat', jabatan: 'Anggota', kontak: '0831-4069-1765', foto: 'izai.png', prokerPribadi: 'PJ Teknologi Informasi Beraksi (TEKNISI)' },
      { id: 'e6', nama: 'Salma Nur Lathifah',       divisi: 'Hubungan Masyarakat', jabatan: 'Anggota', kontak: '0853-4827-8053', foto: 'salma.png', prokerPribadi: 'Anggota Konten Kreatif Sosial Media (KOKI)' },
      { id: 'e7', nama: 'Amalia Soraya',            divisi: 'Hubungan Masyarakat', jabatan: 'Anggota', kontak: '0812-5115-4795', foto: 'sora.png', prokerPribadi: 'PJ Berbagi Aksi Teknologi Informasi (BAKTI)' },
      { id: 'e8', nama: 'Nasywa Ardelia Putri',     divisi: 'Hubungan Masyarakat', jabatan: 'Anggota', kontak: '0812-4764-5741', foto: 'nawa.png', prokerPribadi: 'Anggota Konten Kreatif Sosial Media (KOKI)' }
    ]
  },
  {
    nama: 'Divisi Kesektariatan',
    icon: 'fas fa-folder-open',
    prokerList: ['Workshop Kewirausahaan'],
    nonProkerList: ['Pengembangan Dana', 'KEBAS (Kerja Bakti Sekretariat)', 'Inventarisasi & Administrasi'],
    koordinator: {
      id: 'k6',
      nama: 'Clarissa Dhea Allisya',
      jabatan: 'Koordinator',
      divisi: 'Kesektariatan',
      kontak: '0821-5022-4636',
      foto: 'dea.png',
      prokerPribadi: 'Koordinator Kesektariatan'
    },
    anggota: [
      { id: 'f1', nama: 'Jesica Olivia Putri',      divisi: 'Kesektariatan', jabatan: 'Anggota', kontak: '0852-4610-5227', foto: 'jesi.png', prokerPribadi: 'PJ Sistem Administrasi Dasar' },
      { id: 'f2', nama: 'Fatih Alfayruz',           divisi: 'Kesektariatan', jabatan: 'Anggota', kontak: '0852-4957-8187', foto: 'aa patih.png', prokerPribadi: 'PJ Seminar Kewirausahaan dan Pembuatan Struktur Kepanitiaan' },
      { id: 'f3', nama: 'Adinda Lestari',           divisi: 'Kesektariatan', jabatan: 'Anggota', kontak: '0821-7286-4662', foto: 'dinda.png', prokerPribadi: 'PJ Kebas (Kebersihan Sekretariat)' },
      { id: 'f4', nama: 'Rabiah Riska Amaliah',     divisi: 'Kesektariatan', jabatan: 'Anggota', kontak: '0813-4509-0289', foto: 'amel.png', prokerPribadi: 'PJ Pengembangan Dana' },
      { id: 'f5', nama: 'Muhammad Rizky Ramadhani', divisi: 'Kesektariatan', jabatan: 'Anggota', kontak: '0856-5443-2994', foto: 'dhani.png', prokerPribadi: 'PJ Inventarisasi Barang' },
      { id: 'f6', nama: 'Nashry Akbar',             divisi: 'Kesektariatan', jabatan: 'Anggota', kontak: '0897-6495-576', foto: 'nasry.png', prokerPribadi: 'PJ Pembuatan PDL, PDH, dan Lanyard Pengurus HMTI' },
      { id: 'f7', nama: 'Nadya Nadhir Soraya',      divisi: 'Kesektariatan', jabatan: 'Anggota', kontak: '0853-4861-7818', foto: 'nadya.png', prokerPribadi: 'PJ Pengembangan Dana' }
    ]
  }
]; 
let dataInstagram = [
  { image: 'patner.png', link: 'https://www.instagram.com/p/DYEvc3LkhYc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'muker 2.jpeg', link: 'https://www.instagram.com/p/DVlsiBeEu2e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'rbti.jpeg', link: 'https://www.instagram.com/p/DV08UoJkjOE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'rbti 2.jpeg', link: 'https://www.instagram.com/p/DV08UoJkjOE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'rbti 3.jpeg', link: 'https://www.instagram.com/p/DV08UoJkjOE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'up 1.jpeg', link: 'https://www.instagram.com/p/DXYEhEEkjcT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'up 2.jpeg', link: 'https://www.instagram.com/p/DXYEhEEkjcT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'up 3.jpeg', link: 'https://www.instagram.com/p/DXYEhEEkjcT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'it apres.jpeg', link: 'https://www.instagram.com/p/DXf-6jskuzI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'bench.jpeg', link: 'https://www.instagram.com/p/DX7FpTcEkFs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'pkm.jpeg', link: 'https://www.instagram.com/p/DYw7d32SHCQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  { image: 'wgd.jpeg', link: 'https://www.instagram.com/p/DZSU-hAksJG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' }

]; 
async function renderInstagramFeed() {
  const container = $('#ig-feed-container');
  container.empty();
  dataInstagram.forEach(post => { 
    container.append(`
      <div class="col-6 col-md-4 col-lg-2">
        <a href="${post.link}" target="_blank" class="ig-post-card d-block animate-item">
          <img src="${post.image}" alt="Kegiatan HMTI" loading="lazy">
          <div class="ig-overlay"><i class="fab fa-instagram"></i></div>
        </a>
      </div>
    `);
  });
}
function getInitials(nama) {
  const words = nama.trim().split(/\s+/);
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
function renderFoto(anggota, size = '72px') {
  if (anggota.foto) {
    return `<img src="${anggota.foto}" alt="${anggota.nama}" style="width:100%;height:100%;object-fit:cover;">`;
  }
  return `<div class="avatar-initials">${getInitials(anggota.nama)}</div>`;
}
function buatKartuAnggota(anggota, isKoordinator = false) {
  const fotoHtml = anggota.foto
    ? `<img src="${anggota.foto}" alt="${anggota.nama}" style="width:100%;height:100%;object-fit:cover;">`
    : `<div class="avatar-initials">${getInitials(anggota.nama)}</div>`;
  const badgeHtml = isKoordinator
    ? `<div class="card-role-badge">Koordinator</div>`
    : '';
  const prokerHtml = anggota.prokerPribadi 
    ? `<div class="card-proker-pribadi"><i class="fas fa-thumbtack me-1"></i>${anggota.prokerPribadi}</div>`
    : '';
  return `
    <div class="col-6 col-md-4 col-lg-3 mb-4 member-card-wrap animate-item">
      <div class="member-card h-100" data-id="${anggota.id}" data-nama="${anggota.nama}"
           data-jabatan="${isKoordinator ? 'Koordinator' : 'Anggota'}"
           data-divisi="${anggota.divisi}" data-kontak="${anggota.kontak}">
        <div class="card-photo">
          ${badgeHtml}
          ${fotoHtml}
        </div>
        <div class="card-body-custom">
          <div class="card-name">${anggota.nama}</div>
          <div class="card-divisi">${anggota.divisi}</div>
          ${prokerHtml}
          <button class="btn-lihat-kontak btn-show-contact"
                  data-id="${anggota.id}"
                  data-nama="${anggota.nama}"
                  data-jabatan="${isKoordinator ? 'Koordinator' : 'Anggota'}"
                  data-divisi="${anggota.divisi}"
                  data-kontak="${anggota.kontak}"
                  data-foto="${anggota.foto || ''}">
            <i class="fas fa-phone-alt me-1"></i> Lihat Kontak
          </button>
        </div>
      </div>
    </div>
  `;
}
function renderPengurusInti() {
  const container = $('#pengurus-inti-container');
  container.empty();
  dataPengurus.forEach(p => {
    const fotoHtml = p.foto
      ? `<img src="${p.foto}" alt="${p.nama}" style="width:100%;height:100%;object-fit:cover;">`
      : `<div class="avatar-initials">${getInitials(p.nama)}</div>`;
    const prokerHtml = p.prokerPribadi 
      ? `<div class="card-proker-pribadi small mb-2"><i class="fas fa-thumbtack me-1"></i>${p.prokerPribadi}</div>`
      : '';
    const card = `
      <div class="col-6 col-md-3 mb-4 animate-item">
        <div class="pengurus-card h-100">
          <div class="card-photo">${fotoHtml}</div>
          <div class="card-body-custom">
            <div class="card-name">${p.nama}</div>
            <div class="card-role">${p.jabatan}</div>
            ${prokerHtml}
            <button class="btn-lihat-kontak btn-show-contact"
                    data-id="${p.id}"
                    data-nama="${p.nama}"
                    data-jabatan="${p.jabatan}"
                    data-divisi="Pengurus Inti"
                    data-kontak="${p.kontak}"
                    data-foto="${p.foto || ''}">
              <i class="fas fa-phone-alt me-1"></i> Lihat Kontak
            </button>
          </div>
        </div>
      </div>
    `;
    container.append(card);
  });
}
function renderProkerPage() {
  const container = $('#proker-container');
  container.empty();
  dataDivisi.forEach(div => {
    const prokers = div.prokerList.map(item => `<li><i class="fas fa-arrow-right proker-bullet"></i>${item}</li>`).join('');
    const nonProkers = div.nonProkerList.map(item => `<li><i class="fas fa-circle-dot non-proker-bullet"></i>${item}</li>`).join('');
    const html = `
      <div class="col-lg-6 col-xl-4 mb-4 animate-item">
        <div class="proker-card">
          <div class="proker-header">
            <div class="proker-icon-box"><i class="${div.icon}"></i></div>
            <h5>${div.nama}</h5>
          </div>
          <div class="proker-body">
            <div class="proker-sub-section">
              <span class="badge-proker">Program Kerja Utama</span>
              <ul>${prokers}</ul>
            </div>
            <div class="proker-sub-section mt-3">
              <span class="badge-nonproker">non-proker</span>
              <ul>${nonProkers}</ul>
            </div>
          </div>
        </div>
      </div>
    `;
    container.append(html);
  });
}
function renderSemuaAnggota(filterDivisi = '', searchQuery = '') {
  const container = $('#anggota-container');
  container.empty();
  let totalTampil = 0;
  const query = searchQuery.toLowerCase().trim();
  if (!filterDivisi || filterDivisi === 'Pengurus Inti') {
    const filteredInti = query 
      ? dataPengurus.filter(p => p.nama.toLowerCase().includes(query))
      : dataPengurus;
    if (filteredInti.length > 0) {
      totalTampil += filteredInti.length;
      const kartuHtml = filteredInti.map(p => buatKartuAnggota(p, false)).join('');
      container.append(`
        <div class="divisi-group">
          <div class="divisi-header"><h3>Pengurus Inti</h3></div>
          <div class="row">${kartuHtml}</div>
        </div>
      `);
    }
  }
  dataDivisi.forEach(divisi => {
    if (filterDivisi && filterDivisi !== 'Pengurus Inti' && divisi.nama !== filterDivisi) return;
    const semuaAnggota = [
      { ...divisi.koordinator, isKoord: true },
      ...divisi.anggota.map(a => ({ ...a, isKoord: false }))
    ];
    const filtered = query
      ? semuaAnggota.filter(a => a.nama.toLowerCase().includes(query))
      : semuaAnggota;
    if (filtered.length === 0) return;
    totalTampil += filtered.length;
    const kartuHtml = filtered.map(a => buatKartuAnggota(a, a.isKoord)).join('');
    const divisiBlock = `
      <div class="divisi-group">
        <div class="divisi-header">
          <div>
            <h3>${divisi.nama}</h3>
            <p class="divisi-koordinator mb-0">
              <i class="fas fa-user-tie me-1"></i>Koordinator: ${divisi.koordinator.nama}
            </p>
          </div>
        </div>
        <div class="row">${kartuHtml}</div>
      </div>
    `;
    container.append(divisiBlock);
  });
  if (totalTampil === 0) {
    container.html(`
      <div class="no-result-msg">
        <i class="fas fa-search"></i>
        <h5>Tidak ada anggota yang ditemukan</h5>
        <p>Coba kata kunci lain atau reset filter.</p>
      </div>
    `);
  }
}
function triggerStaggeredAnimation(parentSelector) {
  const items = $(parentSelector).find('.animate-item');
  items.removeClass('show');
  items.each(function(i) {
    setTimeout(() => {
      $(this).addClass('show');
    }, i * 40); 
  });
}
let typingTimer;
function runTypingEffect(selector, text, speed = 50) {
  const $el = $(selector);
  clearTimeout(typingTimer);
  $el.text('').addClass('typing'); 
  let i = 0;
  function type() {
    if (i < text.length) {
      $el.text(text.substring(0, i + 1));
      i++;
      typingTimer = setTimeout(type, speed);
    }
  }
  type();
}
function populateFilterDivisi() {
  const sel = $('#filter-divisi');
  sel.find('option:not(:first)').remove();
  sel.append('<option value="Pengurus Inti">Pengurus Inti</option>');
  dataDivisi.forEach(d => {
    sel.append(`<option value="${d.nama}">${d.nama}</option>`);
  });
}
function navigateTo(page) {
  $('.page-section').removeClass('active');
  $(`#page-${page}`).addClass('active');
  $('.navbar-hmti .nav-link').removeClass('active');
  $(`.navbar-hmti .nav-link[data-page="${page}"]`).addClass('active');
  $('html, body').animate({ scrollTop: 0 }, 300);
  if (page === 'beranda') {
    renderPengurusInti();
    renderInstagramFeed();
    triggerStaggeredAnimation('#page-beranda');
    runTypingEffect('.hero-title', "Himpunan Mahasiswa Teknologi Informasi", 60);
  } else if (page === 'anggota') {
    renderSemuaAnggota();
    populateFilterDivisi();
    triggerStaggeredAnimation('#page-anggota');
  } else if (page === 'proker') {
    renderProkerPage();
    triggerStaggeredAnimation('#page-proker');
  }
}
function tampilkanModal(data) {
  const waLink = `https://wa.me/62${data.kontak.replace(/[^0-9]/g, '').slice(1)}`;
  $('#modal-nama').text(data.nama);
  $('#modal-jabatan').text(data.jabatan + ' — ' + data.divisi);
  $('#modal-nomor').html(`<i class="fas fa-phone-alt me-2"></i> ${data.kontak}`);
  $('#modal-wa-btn').attr('href', waLink);
  const modal = new bootstrap.Modal(document.getElementById('modalKontak'));
  modal.show();
}
function initFormKontak() {
  $('#form-kontak').on('submit', function(e) {
    e.preventDefault(); 
    const nama = $('#input-nama').val().trim();
    const email = $('#input-email').val().trim();
    const topik = $('#input-topik').val();
    const pesan = $('#input-pesan').val().trim();
    let valid = true;
    if (!nama) { $('#input-nama').addClass('is-invalid'); valid = false; }
    else { $('#input-nama').removeClass('is-invalid').addClass('is-valid'); }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $('#input-email').addClass('is-invalid'); valid = false;
    } else { $('#input-email').removeClass('is-invalid').addClass('is-valid'); }
    if (!topik) { $('#input-topik').addClass('is-invalid'); valid = false; }
    else { $('#input-topik').removeClass('is-invalid').addClass('is-valid'); }
    if (!pesan) { $('#input-pesan').addClass('is-invalid'); valid = false; }
    else { $('#input-pesan').removeClass('is-invalid').addClass('is-valid'); }
    if (!valid) return;
    const btn = $('#btn-kirim');
    btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-2"></i>Mengirim...');
    setTimeout(function() {
      btn.prop('disabled', false).html('<i class="fas fa-paper-plane me-2"></i>Kirim Pesan');
      $('#form-kontak')[0].reset();
      $('.form-control, .form-select').removeClass('is-valid is-invalid');
      $('#toast-success').fadeIn(300).delay(3500).fadeOut(400);
    }, 1800);
  });
  $('.form-control, .form-select').on('input change', function() {
    $(this).removeClass('is-invalid');
  });
}
function animateCounters() {
  $('.counter-num').each(function() {
    const target = parseInt($(this).data('target'));
    const el = $(this);
    let current = 0;
    const increment = Math.ceil(target / 50);
    const timer = setInterval(function() {
      current = Math.min(current + increment, target);
      el.text(current + (el.data('suffix') || ''));
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}
$(document).ready(function() {
  $(document).on('click', '.nav-link[data-page]', function(e) {
    e.preventDefault();
    const page = $(this).data('page');
    navigateTo(page);
    $('.navbar-collapse').collapse('hide');
  });
  $(document).on('click', '[data-goto]', function(e) {
    e.preventDefault();
    const page = $(this).data('goto');
    navigateTo(page);
  }); 
  $(document).on('click', '.btn-show-contact', function() {
    const data = {
      id: $(this).data('id'),
      nama: $(this).data('nama'),
      jabatan: $(this).data('jabatan'),
      divisi: $(this).data('divisi'),
      kontak: $(this).data('kontak'),
      foto: $(this).data('foto') || null
    };
    tampilkanModal(data);
  });
  $('#filter-divisi').on('change', function() {
    const filterVal = $(this).val();
    const searchVal = $('#search-anggota').val();
    renderSemuaAnggota(filterVal, searchVal);
    triggerStaggeredAnimation('#page-anggota');
  });
  let searchTimeout;
  $('#search-anggota').on('input', function() {
    clearTimeout(searchTimeout);
    const self = $(this);
    searchTimeout = setTimeout(function() {
      const searchVal = self.val();
      const filterVal = $('#filter-divisi').val();
      renderSemuaAnggota(filterVal, searchVal);
      triggerStaggeredAnimation('#page-anggota');
    }, 300);
  });
  $('#btn-reset-filter').on('click', function() {
    $('#filter-divisi').val('');
    $('#search-anggota').val('');
    renderSemuaAnggota();
  });
  initFormKontak();
  navigateTo('beranda');
  setTimeout(animateCounters, 500);
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar-hmti').css('box-shadow', '0 4px 30px rgba(0,100,150,0.4)');
    } else {
      $('.navbar-hmti').css('box-shadow', '0 2px 20px rgba(0,100,150,0.3)');
    }
  });
  const tooltipEls = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipEls.forEach(el => new bootstrap.Tooltip(el));
});