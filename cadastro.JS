// ==============================
// ATLAS DIGITAL - CADASTRO
// ==============================

// Formulário
const formCadastro = document.getElementById("formCadastro");

// Campos
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");

// Mensagens de erro
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");
const erroConfirmarSenha = document.getElementById("erroConfirmarSenha");

// ==============================
// LIMPAR MENSAGENS
// ==============================

function limparErros() {
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    erroConfirmarSenha.textContent = "";
}

// ==============================
// VALIDAR EMAIL
// ==============================

function emailValido(emailDigitado) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    return regex.test(emailDigitado);
}

// ==============================
// PEGAR USUÁRIOS
// ==============================

function obterUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

// ==============================
// SALVAR USUÁRIOS
// ==============================

function salvarUsuarios(listaUsuarios) {
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}

// ==============================
// CADASTRO
// ==============================

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    limparErros();

    const emailDigitado = email.value.trim().toLowerCase();
    const senhaDigitada = senha.value;
    const confirmarDigitada = confirmarSenha.value;

    let valido = true;

    // EMAIL
    if (!emailValido(emailDigitado)) {
        erroEmail.textContent = "Digite um e-mail válido.";
        valido = false;
    }

    // SENHA
    if (senhaDigitada.length < 8) {
        erroSenha.textContent = "A senha deve possuir no mínimo 8 caracteres.";
        valido = false;
    }

    // CONFIRMAR SENHA
    if (senhaDigitada !== confirmarDigitada) {
        erroConfirmarSenha.textContent = "As senhas não coincidem.";
        valido = false;
    }

    if (!valido) {
        return;
    }

    const usuarios = obterUsuarios();

    const usuarioExiste = usuarios.find(function(usuario) {
        return usuario.email === emailDigitado;
    });

    if (usuarioExiste) {
        erroEmail.textContent = "Este e-mail já está cadastrado.";
        return;
    }

    usuarios.push({
        email: emailDigitado,
        senha: senhaDigitada
    });

    salvarUsuarios(usuarios);

    alert("Cadastro realizado com sucesso!");

    formCadastro.reset();

    window.location.href = "index.html";
});

// ==============================
// BOTÃO GOOGLE
// ==============================

const btnGoogle = document.getElementById("btnGoogle");

if (btnGoogle) {
    btnGoogle.addEventListener("click", function() {
        alert("Login com Google será implementado em breve.");
    });
}
