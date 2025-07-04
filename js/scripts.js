/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// --- Custom JavaScript for Back to Top Button ---

document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('backToTopBtn');

    // Pastikan tombol ada sebelum menambahkan event listener atau fungsi scroll
    if (backToTopButton) {
        // Ketika pengguna menggulir ke bawah 100px dari atas, tampilkan tombol
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        // Ketika pengguna mengklik tombol, gulir ke atas halaman
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default link
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Membuat scroll menjadi halus
            });
        });
    }
});