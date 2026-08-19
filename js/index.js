// ==========================================
// ATLAS DIGITAL - LOGIN
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Pega os elementos que serão usados no login
    const formularioLogin =
        document.getElementById("formulario-login");

    const emailInput =
        document.getElementById("email");

    const senhaInput =
        document.getElementById("senha");

    const mensagemErro =
        document.getElementById("mensagem-erro");

    const botaoCadastro =
        document.querySelector(".botao-cadastro");


    // Confere se os elementos principais estão disponíveis
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


    // Mostra uma mensagem de erro na tela
    function mostrarErro(mensagem) {

        if (!mensagemErro) {
            return;
        }

        mensagemErro.textContent = mensagem;
    }


    // Limpa a mensagem de erro
    function limparErro() {

        if (!mensagemErro) {
            return;
        }

        mensagemErro.textContent = "";
    }


    // Busca os usuários cadastrados no LocalStorage
    function obterUsuarios() {

        try {

            return JSON.parse(
                localStorage.getItem("usuarios")
            ) || [];

        } catch (erro) {

            console.error(
                "Erro ao carregar os usuários:",
                erro
            );

            return [];
        }
    }


    // Procura um usuário cadastrado com o e-mail e a senha informados
    function verificarLogin(email, senha) {

        const usuarios = obterUsuarios();

        return usuarios.find(
            function(usuario) {

                return (
                    usuario.email === email &&
                    usuario.senha === senha
                );

            }
        );
    }


    // Verifica os dados quando o formulário é enviado
    formularioLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        limparErro();


        // Pega os dados digitados no formulário
        const emailDigitado = emailInput.value
            .trim()
            .toLowerCase();

        const senhaDigitada = senhaInput.value;


        // Confere se os campos foram preenchidos
        if (!emailDigitado || !senhaDigitada) {

            mostrarErro(
                "Preencha o e-mail e a senha."
            );

            return;
        }


        // Login de teste para a apresentação
        const emailTeste = "teste@atlasdigital.com";
        const senhaTeste = "123456";


        // Verifica primeiro o usuário de teste
        if (
            emailDigitado === emailTeste &&
            senhaDigitada === senhaTeste
        ) {

            const usuarioTeste = {
                nome: "Professor",
                email: emailTeste,
                tipo: "Administrador"
            };

            localStorage.setItem(
                "usuarioLogado",
                JSON.stringify(usuarioTeste)
            );

            window.location.href = "html/home.html";

            return;
        }


        // Procura o usuário cadastrado
        const usuarioEncontrado =
            verificarLogin(
                emailDigitado,
                senhaDigitada
            );


        // Se encontrou, salva o usuário logado
        if (usuarioEncontrado) {

            localStorage.setItem(
                "usuarioLogado",
                JSON.stringify(usuarioEncontrado)
            );

            window.location.href = "html/home.html";

            return;
        }


        // Caso não encontre o usuário
        mostrarErro(
            "E-mail ou senha inválidos. Tente novamente."
        );

        senhaInput.value = "";

        senhaInput.focus();

    });


    // Limpa o erro quando o usuário começa a digitar
    emailInput.addEventListener(
        "input",
        limparErro
    );

    senhaInput.addEventListener(
        "input",
        limparErro
    );

    if (botaoCadastro) {

        botaoCadastro.addEventListener(
            "click",
            function() {

                window.location.href =
                    "html/cadastro.html";

            }
        );

    }

});
