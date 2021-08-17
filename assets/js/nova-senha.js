const email = document.getElementById("email");
const finalizar = document.getElementById("finalizar");
finalizar.disabled = true;

function validacaoBorderinputEmail() {
    if (email.value === "") {
      email.style.border = "2px solid #ec1839";
    }
}

function validaFormButton() {
    if (email.value !== "") {
      finalizar.disabled = false;
    }
}

function finalizarHabilitado() {
    alert("EMAIL ENVIADO COM SUCESSO");
    window.location.href = "altera-senha.html";
  }