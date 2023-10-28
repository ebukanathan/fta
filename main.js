const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "none",
    prevEl: "none",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  autoplay: {
    Delay: 200000,
  },
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* ====validate if constant exist=======*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*======close menu on mobile========*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

if (!navMenu) {
  navMenu.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// /*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-item");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ======= REMOVE MOBILE MENU WHEN OUTSIDE IS CLICKED===

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () => {
  const header = document.getElementById("header");
  //when the scroll is greater than 50vh add the class 'blur-header'

  this.scrollY >= 50
    ? header.classList.add("blur__header")
    : header.classList.remove("blur__header");
};

window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/

const scrollup = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 1000
    ? scrollUp.classList.add("show__scrollup")
    : scrollUp.classList.remove("show__scrollup");
};

window.addEventListener("scroll", scrollup);

const showWhatsapp = () => {
  const whatsapp = document.getElementById("whatsapp");

  this.scrollY >= 1800
    ? whatsapp.classList.add("whatsapp")
    : whatsapp.classList.remove("whatsapp");
};

window.addEventListener("scroll", showWhatsapp);

// -------animation-----

const secondhero = document.querySelector(".secondhero__container");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px",
};

const appearOptions = {
  root: null,
  threshold: 0.4,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("inverse");
  });
}, options);

//observer.observe(secondhero)

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
