const scroll = document.querySelectorAll(".link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const dante = this.getAttribute("href");

    document.querySelector(dante).scrollIntoView({ behavior: "smooth" });
  });
});
const dantos = document.querySelector(".navigation");
const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".x");

closeMenu.addEventListener("click", function (e) {
  e.preventDefault;

  dantos.style.display = "none";
  dantos.classList.toggle("show");
});
openMenu.addEventListener("click", function (e) {
  e.preventDefault;

  dantos.style.display = "block";
});

const sticky = document.querySelector(".head");
const clas = document.querySelector(".sticky");

const stickyFunc = function (entries, stickyFuncion) {
  const [kim] = entries;

  if (!kim.isIntersecting) clas.style.position = "fixed";
  else clas.style.position = "relative";
};

const stickyFuncion = new IntersectionObserver(stickyFunc, {
  root: null,
  threshold: 0,
});
stickyFuncion.observe(sticky);
