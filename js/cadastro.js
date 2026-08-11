// ==============================
// ATLAS DIGITAL - CADASTRO
// ==============================


// ==============================
// FORMULÁRIO
// ==============================

const formCadastro = document.getElementById("formCadastro");


// ==============================
// CAMPOS DO FORMULÁRIO
// ==============================

const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");
const inputConfirmarSenha = document.getElementById("confirmar-senha");


// ==============================
// MENSAGENS DE ERRO
// ==============================

const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");
const erroConfirmarSenha = document.getElementById("erroConfirmarSenha");


// ==============================
// BOTÃO GOOGLE
// ==============================

const botaoGoogle = document.getElementById("btnGoogle");


// ==============================
// LIMPAR MENSAGENS
// ==============================

function limparErros() {

    erroEmail.textContent = "";
    erroSenha.textContent = "";
    erroConfirmarSenha.textContent = "";

}


// ==============================
// VALIDAR E-MAIL
// ==============================

function emailValido(emailDigitado) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(emailDigitado);

}


// ==============================
// PEGAR USUÁRIOS
// ==============================

function obterUsuarios() {

    return JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];

}


// ==============================
// SALVAR USUÁRIOS
// ==============================

function salvarUsuarios(listaUsuarios) {

    localStorage.setItem(
        "usuarios",
        JSON.stringify(listaUsuarios)
    );

}


// ==============================
// CADASTRO
// ==============================

formCadastro.addEventListener("submit", function(event) {

    event.preventDefault();


    // Limpa as mensagens anteriores
    limparErros();


    // Pega os valores digitados
    const emailDigitado = inputEmail.value
        .trim()
        .toLowerCase();

    const senhaDigitada = inputSenha.value;

    const senhaConfirmada = inputConfirmarSenha.value;


    // Controla se o formulário está válido
    let formularioValido = true;


    // ==============================
    // VALIDAR E-MAIL
    // ==============================

    if (!emailValido(emailDigitado)) {

        erroEmail.textContent =
            "Digite um e-mail válido.";

        formularioValido = false;

    }


    // ==============================
    // VALIDAR SENHA
    // ==============================

    if (senhaDigitada.length < 8) {

        erroSenha.textContent =
            "A senha deve possuir no mínimo 8 caracteres.";

        formularioValido = false;

    }


    // ==============================
    // CONFIRMAR SENHA
    // ==============================

    if (senhaDigitada !== senhaConfirmada) {

        erroConfirmarSenha.textContent =
            "As senhas não coincidem.";

        formularioValido = false;

    }


    // Para o cadastro caso exista algum erro
    if (!formularioValido) {

        return;

    }


    // ==============================
    // VERIFICAR USUÁRIOS
    // ==============================

    const usuarios = obterUsuarios();


    const usuarioEncontrado = usuarios.find(
        function(usuario) {

            return usuario.email === emailDigitado;

        }
    );


    // ==============================
    // E-MAIL JÁ CADASTRADO
    // ==============================

    if (usuarioEncontrado) {

        erroEmail.textContent =
            "Este e-mail já está cadastrado.";

        return;

    }


    // ==============================
    // ADICIONAR NOVO USUÁRIO
    // ==============================

    usuarios.push({

        email: emailDigitado,

        senha: senhaDigitada

    });


    // ==============================
    // SALVAR NO LOCALSTORAGE
    // ==============================

    salvarUsuarios(usuarios);


    // ==============================
    // FINALIZAR CADASTRO
    // ==============================

    alert("Cadastro realizado com sucesso!");


    formCadastro.reset();


    // Vai para a tela de login
    window.location.href = "index.html";

});


// ==============================
// LOGIN COM GOOGLE
// ==============================

if (botaoGoogle) {

    botaoGoogle.addEventListener("click", function() {

        alert(
            "Login com Google será implementado em breve."
        );

    });

}
