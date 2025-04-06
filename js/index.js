// slider-card-project
const slider = document.querySelector(".slider");
let currentIndex = 0;

function autoSlide() {
  const slides = document.querySelectorAll(".card-project");
  currentIndex = (currentIndex + 1) % slides.length; // Loop kembali ke awal
  slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Geser slider
}

setInterval(autoSlide, 2000);

// Tambahkan fungsi Loader
window.addEventListener("load", function () {
  const loaderWrapper = document.getElementById("loader-wrapper");

  if (loaderWrapper) {
    setTimeout(() => {
      loaderWrapper.classList.add("hidden"); // Mulai transisi opacity 0.5s
    }, 1500); // Loader tetap tampil minimal 1.5 detik agar animasi terlihat

    setTimeout(() => {
      loaderWrapper.style.display = "none"; // Sembunyikan setelah transisi selesai
    }, 2000); // Sesuai dengan durasi transition CSS + jeda tampilan
  }
});

// Animasi masuk untuk card-project
const projectCards = document.querySelectorAll(".card-project");

const projectObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Tambahkan class 'show' saat card terlihat
      }
    });
  },
  {
    threshold: 0.2, // Card terlihat 20% sebelum animasi dimulai
  }
);

projectCards.forEach((card) => projectObserver.observe(card));

// Animasi masuk untuk card-internship
const internshipCards = document.querySelectorAll(".card-internshipp");

const internshipObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Tambahkan class 'show' saat card terlihat
      }
    });
  },
  {
    threshold: 0.2, // Card terlihat 20% sebelum animasi dimulai
  }
);

internshipCards.forEach((card) => internshipObserver.observe(card));

// Animasi masuk untuk card-about-me
const aboutMeCards = document.querySelectorAll(".card-about-me");

const aboutMeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Tambahkan class 'show' saat card terlihat
      }
    });
  },
  {
    threshold: 0.2, // Card terlihat 20% sebelum animasi dimulai
  }
);

aboutMeCards.forEach((card) => aboutMeObserver.observe(card));

// Animasi masuk untuk hero-section
const heroCards = document.querySelectorAll(".hero-section");

const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Tambahkan class 'show' saat card terlihat
      }
    });
  },
  {
    threshold: 0.2, // Card terlihat 20% sebelum animasi dimulai
  }
);

heroCards.forEach((card) => aboutMeObserver.observe(card));

// hamburger-menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active"); // Toggle class 'active' untuk menampilkan/menyembunyikan menu
  hamburgerMenu.classList.toggle("open"); // Tambahkan animasi untuk hamburger menu
});

// typing-animation
document.addEventListener("DOMContentLoaded", () => {
  const heroHeading = document.querySelector(".hero-left h3");
  const heroParagraph = document.querySelector(".hero-left p");

  const typeText = (element, text, delay = 100, callback) => {
    let index = 0;

    const type = () => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
        setTimeout(type, delay);
      } else if (callback) {
        callback(); // Panggil callback setelah selesai mengetik
      }
    };

    type();
  };

  // Mulai animasi typing untuk heading
  typeText(heroHeading, "Hello, My Name is Auf", 20, () => {
    // Setelah heading selesai, mulai animasi typing untuk paragraf
    typeText(
      heroParagraph,
      "I am a computer science student at University of Singaperbangsa Karawang.",
      50
    );
  });
});
