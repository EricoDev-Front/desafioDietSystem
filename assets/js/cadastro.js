// JS Cadastro
const inputNovasenha = document.getElementById("inputNovasenha");

function clickDois() {
  let olhoDois = document.getElementById("olhoDois");
  let inputSenha = document.getElementById("inputSenha");
  inputSenha.type = inputSenha.type == "text" ? "password" : "text";
  olhoDois.classList.remove("fa-eye");
  if (inputSenha.type == "password") {
    olhoDois.classList.add("fa-eye");
  } else {
    olhoDois.classList.add("fa-eye-slash");
  }
}

function clickTres() {
  let olhoTres = document.getElementById("olhoTres");
  let inputNovasenha = document.getElementById("inputNovasenha");
  inputNovasenha.type = inputNovasenha.type == "text" ? "password" : "text";
  olhoTres.classList.remove("fa-eye");
  if (inputNovasenha.type == "password") {
    olhoTres.classList.add("fa-eye");
  } else {
    olhoTres.classList.add("fa-eye-slash");
  }
}

function validacaoBorderinputSenha() {
  let inputSenha = document.getElementById("inputSenha");
  if (inputSenha.value === "") {
    inputSenha.style.border = "2px solid #ec1839";
  }
}

function validacaoBorderinputNome() {
    if (nome.value === "") {
      nome.style.border = "2px solid #ec1839";
    }
}

function validacaoBorderinputEmail() {
    if (email.value === "") {
      email.style.border = "2px solid #ec1839";
    }
}

function validacaoBorderinputCelular() {
    if (celular.value === "") {
      celular.style.border = "2px solid #ec1839";
    }
}

function validacaoBorderinputNovasenha() {
  let inputNovasenha = document.getElementById("inputNovasenha");
  if (inputNovasenha.value === "") {
    inputNovasenha.style.border = "2px solid #ec1839";
  }
}
const inputNovasenhaValidator = document.getElementById("inputNovasenha");
const inputSenhaValidator = document.getElementById("inputSenha");
const senhaErrada = document.getElementById("senhaErrada");

inputNovasenhaValidator.addEventListener("input", function () {
  if (inputNovasenhaValidator.value !== inputSenhaValidator.value) {
    valorSenhas = false;
    senhaErrada.style.display = "block";
    inputNovasenhaValidator.style.border = "2px solid #ec1839";
    return false;
  } else {
    valorSenhas = true;
    senhaErrada.style.display = "none";
    inputNovasenhaValidator.style.border = "2px solid #4ad395";
    return true;
  }
});

const nome = document.getElementById("nome");
const celular = document.getElementById("celular");
const email = document.getElementById("email");
const checkbox = document.getElementById("checkbox");
const finalizar = document.getElementById("finalizar");
finalizar.disabled = true;

function validaFormButton() {
  if (
    nome.value !== "" &&
    celular.value !== "" &&
    email.value !== "" &&
    inputNovasenha.value !== "" &&
    inputSenhaValidator.value !== "" &&
    checkbox.checked &&
    inputNovasenhaValidator.value == inputSenhaValidator.value
  ) {
    finalizar.disabled = false;
  }
}

function finalizarHabilitado() {
  alert("CADASTRO FINALIZADO COM SUCESSO");
  window.location.href = "index.html";
}
