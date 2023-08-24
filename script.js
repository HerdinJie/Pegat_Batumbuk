// Dapatkan elemen yang diperlukan
const statisticsSection = document.getElementById('statistics');
const reportsSection = document.getElementById('reports');

// Contoh fungsi untuk memuat data statistik
function loadStatistics() {
    // Simulasikan pemanggilan data dari server
    // Dan tampilkan data di dalam elemen statistik
    statisticsSection.innerHTML = '<h2>Statistik</h2><p>Data statistik akan ditampilkan di sini.</p>';
}

// Contoh fungsi untuk memuat laporan
function loadReports() {
    // Simulasikan pemanggilan data dari server
    // Dan tampilkan laporan di dalam elemen laporan
    reportsSection.innerHTML = '<h2>Laporan</h2><p>Laporan dan informasi lainnya akan ditampilkan di sini.</p>';
}

// Panggil fungsi untuk memuat data saat halaman dimuat
loadStatistics();
loadReports();

// Ambil semua elemen yang memiliki kelas submenu
const submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
  const ul = submenu.querySelector('ul');

  submenu.addEventListener('mouseenter', () => {
    ul.style.visibility = 'visible';
  });

  submenu.addEventListener('mouseleave', () => {
    setTimeout(() => {
      ul.style.visibility = 'hidden';
    }, 300); // Sesuaikan waktu jika perlu
  });
});


// script font jam digital
document.getElementById('current-time').style.fontFamily = 'digital-7', sans-serif;
