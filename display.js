const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const about = document.getElementById("about");
const intro = document.getElementById("intro");
const work = document.getElementById("work");
const closeElements = document.getElementsByClassName("cerrar");
const container = document.getElementById("container");
const contact = document.getElementById("contact");
const portada = document.getElementById("portada");

btn3.addEventListener("click", function () {
  portada.classList.add("hide");
  container.classList.add("z-index");
  about.classList.add("display");
});

btn1.addEventListener("click", function () {
  portada.classList.add("hide");
  intro.classList.add("display");
  container.classList.add("z-index");
});

btn2.addEventListener("click", function () {
  portada.classList.add("hide");
  work.classList.add("display");
  container.classList.add("z-index");
});

btn4.addEventListener("click", function () {
  portada.classList.add("hide");
  contact.classList.add("display");
  container.classList.add("z-index");
});

Array.from(closeElements).forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    about.classList.remove("display");
    intro.classList.remove("display");
    work.classList.remove("display");
    container.classList.remove("z-index");
    portada.classList.remove("hide");
  });
});
