let eye = document.querySelector("#eye");
let eye2 = document.querySelector("#eye2");
let password = document.querySelector("#password");

eye.addEventListener("click", function () {
  if ((password.value.length < 1, password.type == "password")) {
    password.setAttribute("type", "text");
    eye.classList.add("d-none");
    eye2.classList.add("d-block");
    eye.classList.remove("d-block");
    eye2.classList.remove("d-none");
  } else if ((password.value.length > 1, password.type == "text")) {
    password.setAttribute("type", "password");
    eye.classList.add("d-block");
    eye2.classList.add("d-none");
    eye.classList.remove("d-none");
    eye2.classList.remove("d-block");
  }
});
eye2.addEventListener("click", function () {
  if ((password.value.length < 1, password.type == "password")) {
    password.setAttribute("type", "text");
    eye.classList.add("d-none");
    eye2.classList.add("d-block");
    eye.classList.remove("d-block");
    eye2.classList.remove("d-none");
  } else if ((password.value.length > 1, password.type == "text")) {
    password.setAttribute("type", "password");
    eye.classList.add("d-block");
    eye2.classList.add("d-none");
    eye.classList.remove("d-none");
    eye2.classList.remove("d-block");
  }
});

const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloader").classList.add("d_none")
    document.body.classList.remove("flow-hidden")

}, 2000);