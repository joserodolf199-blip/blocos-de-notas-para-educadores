// ========================================
// ATLAS DIGITAL - RECUPERAÇÃO
// ========================================


// Formulário

const formularioRecuperacao =
    document.querySelector(".formulario-recuperacao");


// Etapas

const etapaEmail =
    document.getElementById("etapa-email");

const etapaCodigo =
    document.getElementById("etapa-codigo");

const etapaNovaSenha =
    document.getElementById("etapa-nova-senha");


// Campos

const inputEmail =
    document.getElementById("email");

const inputCodigo =
    document.getElementById("codigo");

const inputNovaSenha =
    document.getElementById("nova-senha");

const inputConfirmarNovaSenha =
    document.getElementById("confirmar-nova-senha");


// Código e e-mail usados na recuperação

let codigoRecuperacao = "";

let emailRecuperacao = "";


// Busca os usuários cadastrados

function obterUsuarios() {

    return JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

}


// Salva os usuários atualizados

function salvarUsuarios(usuarios) {

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

}


// Gera um código de 6 números

function gerarCodigo() {

    return Math.floor(
        100000 + Math.random() * 900000
    ).toString();

}


// Começa mostrando somente a etapa do e-mail

etapaEmail.hidden = false;
etapaCodigo.hidden = true;
etapaNovaSenha.hidden = true;


// Controla as etapas da recuperação

formularioRecuperacao.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // Verifica o e-mail

        if (!etapaEmail.hidden) {

            const emailDigitado =
                inputEmail.value
                    .trim()
                    .toLowerCase();


            const usuarios =
                obterUsuarios();


            const usuarioEncontrado =
                usuarios.find(function(usuario) {

                    return usuario.email === emailDigitado;

                });


            if (!usuarioEncontrado) {

                alert(
                    "Este e-mail não está cadastrado."
                );

                return;

            }


            // Guarda o e-mail para usar nas próximas etapas

            emailRecuperacao =
                emailDigitado;


            // Gera o código

            codigoRecuperacao =
                gerarCodigo();


            // Simula o envio do código

            alert(
                "Seu código de recuperação é: " +
                codigoRecuperacao
            );


            // Vai para a etapa do código

            etapaEmail.hidden = true;
            etapaCodigo.hidden = false;

            inputCodigo.focus();

            return;

        }


        // Confirma o código

        if (!etapaCodigo.hidden) {

            const codigoDigitado =
                inputCodigo.value.trim();


            if (
                codigoDigitado !==
                codigoRecuperacao
            ) {

                alert(
                    "Código incorreto. Tente novamente."
                );

                return;

            }


            alert(
                "Código confirmado com sucesso!"
            );


            // Vai para a etapa da nova senha

            etapaCodigo.hidden = true;
            etapaNovaSenha.hidden = false;

            inputNovaSenha.focus();

            return;

        }


        // Altera a senha

        if (!etapaNovaSenha.hidden) {

            const novaSenha =
                inputNovaSenha.value;

            const confirmarNovaSenha =
                inputConfirmarNovaSenha.value;


            // Verifica o tamanho da senha

            if (novaSenha.length < 8) {

                alert(
                    "A senha deve possuir no mínimo 8 caracteres."
                );

                return;

            }


            // Verifica se as senhas são iguais

            if (
                novaSenha !==
                confirmarNovaSenha
            ) {

                alert(
                    "As senhas não coincidem."
                );

                return;

            }


            const usuarios =
                obterUsuarios();


            // Procura o usuário pelo e-mail

            const usuarioEncontrado =
                usuarios.find(function(usuario) {

                    return (
                        usuario.email ===
                        emailRecuperacao
                    );

                });


            if (!usuarioEncontrado) {

                alert(
                    "Usuário não encontrado."
                );

                return;

            }


            // Atualiza a senha

            usuarioEncontrado.senha =
                novaSenha;


            // Salva a alteração

            salvarUsuarios(usuarios);


            alert(
                "Senha alterada com sucesso!"
            );


            // Volta para o login

            window.location.href =
                "../index.html";

        }

    }
);


// Permite somente números no código

inputCodigo.addEventListener(
    "input",
    function() {

        inputCodigo.value =
            inputCodigo.value.replace(/\D/g, "");

    }
);
