// JS Login
const visor = document.getElementById("visor");
const inputPassword = document.getElementById("password");
const inputEmail = document.getElementById("email");
const entrar = document.getElementById("entrar");
entrar.disabled = true;

visor.addEventListener("click", function () {
  let olho = document.getElementById("olho");
  inputPassword.type = inputPassword.type == "text" ? "password" : "text";
  olho.classList.remove("fa-eye");
  if (inputPassword.type == "password") {
    olho.classList.add("fa-eye");
  } else {
    olho.classList.add("fa-eye-slash");
  }
});

function entrarHabilitado() {
  alert("ENTROU");
}

function valida() {
  if (inputEmail.value !== "" && inputPassword.value !== "") {
    entrar.disabled = false;
  }
}

function validacaoBorderEmail() {
  if (inputEmail.value === "") {
    inputEmail.style.border = "2px solid #ec1839";
  }
}

function validacaoBorderPassword() {
  if (inputPassword.value === "") {
    inputPassword.style.border = "2px solid #ec1839";
  }
}

