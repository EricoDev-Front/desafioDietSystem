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

const finalizar = document.getElementById("finalizar");
finalizar.disabled = true;

function validaFormButton() {
  if (
    inputNovasenha.value !== "" &&
    inputSenhaValidator.value !== "" &&
    inputNovasenhaValidator.value == inputSenhaValidator.value
  ) {
    finalizar.disabled = false;
  }
}

function finalizarHabilitado() {
  alert("SENHA ATUALIZADA COM SUCESSO!");
  window.location.href = "index.html";
}
