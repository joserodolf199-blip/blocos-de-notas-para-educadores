// ==========================================
// ATLAS DIGITAL - LOGIN
// ==========================================

const USUARIOS_MOCK = [
  {
    email: "admin@atlas.com",
    senha: "123456"
  },
  {
    email: "professor@atlas.com",
    senha: "prof123"
  }
];

document.addEventListener("DOMContentLoaded", () => {

  // Pega os elementos que vamos usar na tela de login
  const formularioLogin =
    document.getElementById("formulario-login");

  const emailInput =
    document.getElementById("email");

  const senhaInput =
    document.getElementById("senha");

  const mensagemErro =
    document.getElementById("mensagem-erro");

  const botaoGoogle =
    document.getElementById("botao-google");

  const botaoExcluir =
    document.getElementById("botao-excluir");


  // Se algum elemento principal não existir, evita que o código continue
  if (
    !formularioLogin ||
    !emailInput ||
    !senhaInput
  ) {
    console.error(
      "Erro: elementos do formulário de login não foram encontrados."
    );

    return;
  }


  // Mostra uma mensagem quando acontece algum erro no login
  function mostrarErro(mensagem) {

    if (!mensagemErro) {
      return;
    }

    mensagemErro.textContent = mensagem;
  }


  // Remove a mensagem de erro quando o usuário começa a digitar novamente
  function limparErro() {

    if (!mensagemErro) {
      return;
    }

    mensagemErro.textContent = "";
  }


  // Confere se o e-mail e a senha correspondem a algum usuário cadastrado
  function verificarLogin(email, senha) {

    return USUARIOS_MOCK.some((usuario) => {

      return (
        usuario.email === email &&
        usuario.senha === senha
      );

    });
  }


  // Faz a validação quando o formulário é enviado
  formularioLogin.addEventListener("submit", (evento) => {

    evento.preventDefault();

    limparErro();


    // Pega os valores digitados pelo usuário
    const email =
      emailInput.value.trim().toLowerCase();

    const senha =
      senhaInput.value;


    // Verifica se os dois campos foram preenchidos
    if (!email || !senha) {

      mostrarErro(
        "Preencha o e-mail e a senha."
      );

      return;
    }


    // Verifica se os dados estão corretos
    const loginValido =
      verificarLogin(email, senha);


    // Se estiver tudo certo, salva o usuário e abre a página inicial
    if (loginValido) {

      localStorage.setItem(
        "usuarioLogado",
        email
      );

      window.location.href = "html/home.html";

      return;
    }


    // Caso os dados estejam errados, mostra a mensagem e limpa a senha
    mostrarErro(
      "E-mail ou senha inválidos. Tente novamente."
    );

    senhaInput.value = "";

    senhaInput.focus();

  });


  // Limpa a mensagem de erro enquanto o usuário digita
  emailInput.addEventListener(
    "input",
    limparErro
  );

  senhaInput.addEventListener(
    "input",
    limparErro
  );


  // Ainda será implementado o login através do Google
  if (botaoGoogle) {

    botaoGoogle.addEventListener("click", () => {

      alert(
        "A funcionalidade de login com Google estará disponível em breve."
      );

    });

  }


  // Ainda será implementada a exclusão da conta
  if (botaoExcluir) {

    botaoExcluir.addEventListener("click", () => {

      alert(
        "A funcionalidade de exclusão de conta estará disponível em breve."
      );

    });

  }

});
