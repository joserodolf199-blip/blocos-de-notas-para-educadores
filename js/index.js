const USUARIOS_MOCK = [
  { email: "admin@atlas.com", senha: "123456" },
  { email: "professor@atlas.com", senha: "prof123" },
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".formulario-login");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const mensagemErro = document.querySelector(".mensagem-erro");
  const botaoGoogle = document.querySelector(".botao-google");
  const botaoExcluir = document.querySelector(".botao-excluir");

  if (!form) return;

  function mostrarErro(texto) {
    if (!mensagemErro) return;
    mensagemErro.textContent = texto;
  }

  function limparErro() {
    if (!mensagemErro) return;
    mensagemErro.textContent = "";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    limparErro();

    const email = emailInput.value.trim();
    const senha = senhaInput.value;

    const valido = USUARIOS_MOCK.some(
      (u) => u.email === email && u.senha === senha,
    );

    if (valido) {
      window.location.href = "html/home.html";
      return;
    }

    mostrarErro("E-mail ou senha inválidos. Tente novamente.");
    senhaInput.value = "";
    emailInput.focus();
  });

  emailInput.addEventListener("input", limparErro);
  senhaInput.addEventListener("input", limparErro);

  botaoGoogle?.addEventListener("click", () => {
    alert("Funcionalidade em breve.");
  });
  botaoExcluir?.addEventListener("click", () => {
    alert("Funcionalidade em breve.");
  });
});
