// JS Login
const visor = document.getElementById("visor");
const inputPassword = document.getElementById("password");
const inputEmail = document.getElementById("email");
const entrar = document.getElementById("entrar");
entrar.disabled = true;
const validator = document.getElementById("validator");

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
  alert('ENTROU')
}

function validacaoBorder() {
  if (inputEmail.value === "") {
    inputEmail.style.border = "2px solid #ec1839";
    validator.style.display = "block";
  }
  if (inputPassword.value === "") {
    inputPassword.style.border = "2px solid #ec1839";
  }
}

inputEmail.addEventListener("change", desabilitarBotaoEmail);
inputPassword.addEventListener("change", desabilitarBotaoPassword);
entrar.addEventListener("click", fraseValidar);

function desabilitarBotaoEmail() {
  if (inputPassword.value == "") {
    entrar.disabled = true;
  } else {
    entrar.disabled = false;
  }
}

function desabilitarBotaoPassword() {
  if (inputPassword.value == "") {
    entrar.disabled = true;
  } else {
    entrar.disabled = false;
  }
}

// JS Cadastro

const visorDois = document.getElementById("visorDois");
const inputPasswordDois = document.getElementById("passwordDois");
const checkbox = document.getElementById("checkbox");
const finalizar = document.getElementById("finalizar");

visorDois.addEventListener("click", function () {
  let olhoDois = document.getElementById("olhoDois");
  inputPasswordDois.type =
    inputPasswordDois.type == "text" ? "password" : "text";
  olhoDois.classList.remove("fa-eye");
  if (inputPasswordDois.type == "password") {
    olhoDois.classList.add("fa-eye");
  } else {
    olhoDois.classList.add("fa-eye-slash");
  }
});
