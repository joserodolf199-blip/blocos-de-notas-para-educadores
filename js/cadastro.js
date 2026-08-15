// ==========================================
// ATLAS DIGITAL - CADASTRO
// ==========================================


// Formulario
const formCadastro =
    document.getElementById("formCadastro");

const inputEmail =
    document.getElementById("email");

const inputSenha =
    document.getElementById("senha");

const inputConfirmarSenha =
    document.getElementById("confirmar-senha");

const erroEmail =
    document.getElementById("erroEmail");

const erroSenha =
    document.getElementById("erroSenha");

const erroConfirmarSenha =
    document.getElementById("erroConfirmarSenha");

const botaoGoogle =
    document.getElementById("btnGoogle");


// Limpa as mensagens de erro antes de fazer uma nova validação
function limparErros() {

    if (erroEmail) {
        erroEmail.textContent = "";
    }

    if (erroSenha) {
        erroSenha.textContent = "";
    }

    if (erroConfirmarSenha) {
        erroConfirmarSenha.textContent = "";
    }

}


// Verifica se o e-mail foi digitado em um formato válido
function emailValido(emailDigitado) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(emailDigitado);

}


// Busca no LocalStorage os usuários que já foram cadastrados
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


// Salva novamente a lista atualizada de usuários
function salvarUsuarios(listaUsuarios) {

    localStorage.setItem(
        "usuarios",
        JSON.stringify(listaUsuarios)
    );

}


// Só continua se o formulário realmente existir na página
if (formCadastro) {

    formCadastro.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            limparErros();


            // Pega os dados que o usuário digitou
            const emailDigitado =
                inputEmail.value
                    .trim()
                    .toLowerCase();

            const senhaDigitada =
                inputSenha.value;

            const senhaConfirmada =
                inputConfirmarSenha.value;


            let formularioValido = true;


            // Verifica se o e-mail está correto
            if (!emailValido(emailDigitado)) {

                erroEmail.textContent =
                    "Digite um e-mail válido.";

                formularioValido = false;

            }


            // A senha precisa ter pelo menos 8 caracteres
            if (senhaDigitada.length < 8) {

                erroSenha.textContent =
                    "A senha deve possuir no mínimo 8 caracteres.";

                formularioValido = false;

            }


            // Confere se as duas senhas são iguais
            if (senhaDigitada !== senhaConfirmada) {

                erroConfirmarSenha.textContent =
                    "As senhas não coincidem.";

                formularioValido = false;

            }


            // Se houver algum erro, não continua com o cadastro
            if (!formularioValido) {
                return;
            }


            // Busca os usuários que já estão salvos
            const usuarios =
                obterUsuarios();


            // Verifica se esse e-mail já foi utilizado
            const usuarioEncontrado =
                usuarios.find(
                    function(usuario) {

                        return (
                            usuario.email ===
                            emailDigitado
                        );

                    }
                );


            if (usuarioEncontrado) {

                erroEmail.textContent =
                    "Este e-mail já está cadastrado.";

                return;
            }


            // Adiciona o novo usuário à lista
            usuarios.push({

                email: emailDigitado,

                senha: senhaDigitada

            });


            // Atualiza os usuários salvos no LocalStorage
            salvarUsuarios(usuarios);


            alert(
                "Cadastro realizado com sucesso!"
            );


            formCadastro.reset();


            // Como o cadastro está dentro da pasta html,
            // precisamos voltar uma pasta para chegar ao index
            window.location.href =
                "../index.html";

        }
    );

}


// O login com Google ainda será implementado
if (botaoGoogle) {

    botaoGoogle.addEventListener(
        "click",
        function() {

            alert(
                "Login com Google será implementado em breve."
            );

        }
    );

}
