const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// DROPDOWN
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  dropdown.classList.toggle("active");
});

const desaRows = document.querySelectorAll(".desa-row");

window.addEventListener("scroll", () => {
  desaRows.forEach((row, index) => {
    const posisi = row.getBoundingClientRect().top;
    const tinggiLayar = window.innerHeight;

    if (posisi < tinggiLayar - 50) {
      setTimeout(() => {
        row.classList.add("show");
      }, index * 80);
    }
  });
});

/* =====================================================
   ANIMASI GALERI SAAT SCROLL
===================================================== */
const galeriItems = document.querySelectorAll(".galeri-item");

if (galeriItems.length > 0) {
  const galeriObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          galeriObserver.unobserve(entry.target); // animasi sekali
        }
      });
    },
    { threshold: 0.2 }
  );

  galeriItems.forEach((item) => galeriObserver.observe(item));
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const kecamatanSection = document.querySelector(".kecamatan-inner");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(kecamatanSection);
});

// Animasi Hero
document.addEventListener("DOMContentLoaded", () => {
  const heroInner = document.querySelector(".hero-inner");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  if (heroInner) observer.observe(heroInner);
});

// Animasi batas desa saat scroll
document.addEventListener("DOMContentLoaded", () => {
  const desaItems = document.querySelectorAll(".desa-item");

  if (desaItems.length > 0) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animasi sekali
          }
        });
      },
      { threshold: 0.2 }
    );

    desaItems.forEach((item) => observer.observe(item));
  }
});
/* =====================================================
   ANIMASI RW SAAT SCROLL
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const rwItems = document.querySelectorAll(".rw-item");

  if (rwItems.length > 0) {
    const rwObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animasi sekali
          }
        });
      },
      { threshold: 0.2 }
    );

    rwItems.forEach((item) => rwObserver.observe(item));
  }
});

// RW toggle collapse
document.querySelectorAll(".rw-toggle").forEach((rw) => {
  rw.addEventListener("click", () => {
    const rtList = rw.nextElementSibling;
    rtList.classList.toggle("collapsed");
    rw.classList.toggle("active");
  });
});

// ====== MANGLI ======
const btnMangli = document.getElementById("btnMangli");
const chartMangli = document.getElementById("chartMangli");
let sudahMangli = false;

btnMangli.addEventListener("click", () => {
  if (!sudahMangli) {
    chartMangli.style.display = "block";

    new Chart(chartMangli, {
      type: "pie",
      data: {
        labels: ["RW 01 (7 RT)", "RW 02 (9 RT)"],
        datasets: [
          {
            data: [7, 9],
            backgroundColor: ["#4CAF50", "#FFC107"],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Diagram RT per RW - Desa Mangli",
          },
        },
      },
    });

    sudahMangli = true;
  }

  chartMangli.scrollIntoView({ behavior: "smooth", block: "center" });
});

// ====== KALITORONG ======
const btnKalitorong = document.getElementById("btnKalitorong");
const chartKalitorong = document.getElementById("chartKalitorong");
let sudahKalitorong = false;

btnKalitorong.addEventListener("click", () => {
  if (!sudahKalitorong) {
    chartKalitorong.style.display = "block";

    new Chart(chartKalitorong, {
      type: "pie",
      data: {
        labels: ["RW 01 (6 RT)", "RW 02 (4 RT)"],
        datasets: [
          {
            data: [6, 4],
            backgroundColor: ["#03A9F4", "#8BC34A"],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Diagram RT per RW - Desa Kalitorong",
          },
        },
      },
    });

    sudahKalitorong = true;
  }

  chartKalitorong.scrollIntoView({ behavior: "smooth", block: "center" });
});
