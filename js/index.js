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

    const botaoGoogle =
        document.getElementById("botao-google");

    const botaoExcluir =
        document.getElementById("botao-excluir");


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


    // Procura um usuário com o e-mail e a senha informados
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


            // Abre a página inicial
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


    // Login com Google ainda será implementado
    if (botaoGoogle) {

        botaoGoogle.addEventListener("click", function() {

            alert(
                "Login com Google será implementado em breve."
            );

        });

    }


    // Exclusão de conta será implementada depois
    if (botaoExcluir) {

        botaoExcluir.addEventListener("click", function() {

            alert(
                "A funcionalidade de exclusão de conta será implementada em breve."
            );

        });

    }

});
