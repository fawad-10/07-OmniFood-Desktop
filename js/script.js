console.log("salam duniya!");

// to get the Elementfrom CSS:

// const h1 = document.querySelector(".primary-heading");
// // console.log(h1);
// const namee = "shabana";

// h1.addEventListener("click", function () {
//   h1.style.backgroundColor = "red";
//   h1.textContent = namee;
// });

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;
yearEl.style.fontWeight = "700";

///////////////////////////////////////////////////////////
// Making mobile navigaiton

const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const mainNavEl = document.querySelectorAll(".main-nav-link");

function toggleMobileNav() {
  // CLasslist allows to change class of an element in html
  headerEl.classList.toggle("nav-open");
  // toggle allow add when empty  and remove when not empty (both)
}

navBtnEl.addEventListener("click", toggleMobileNav);

mainNavEl.forEach((link) => {
  link.addEventListener("click", toggleMobileNav);
});

///////////////////////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, //it means it will check from viewport
    threshold: 0,
    rootMargin: "-80px", //always in pixels, and as string in qoutes!
  }
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
