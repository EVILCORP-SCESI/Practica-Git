const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const about = document.getElementById("about");
const intro = document.getElementById("intro");
const work = document.getElementById("work");
const closeElements = document.getElementsByClassName("cerrar");

btn1.addEventListener("click", function () {
  about.classList.add("display");
});

btn2.addEventListener("click", function () {
  intro.classList.add("display");
});

btn3.addEventListener("click", function () {
  work.classList.add("display");
});

Array.from(closeElements).forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    about.classList.remove("display");
    intro.classList.remove("display");
    work.classList.remove("display");
  });
});
