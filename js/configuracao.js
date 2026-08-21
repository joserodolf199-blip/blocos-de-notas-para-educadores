// ==========================================
// ATLAS DIGITAL - CONFIGURACOES
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const chaveUsuarioLogado =
        "usuarioLogado";

    const chaveUsuarios =
        "usuarios";

    const chaveConfiguracoes =
        "configuracoesAtlas";

    const botaoTema =
        document.querySelector(
            ".botao-tema"
        );

    const iconesTema =
        botaoTema
            ? botaoTema.querySelectorAll("i")
            : [];

    const botaoNotificacoes =
        document.querySelector(
            ".botao-notificacoes"
        );

    const iconeNotificacoes =
        botaoNotificacoes
            ? botaoNotificacoes.querySelector("i")
            : null;

    const formularioEmailSeguranca =
        document.querySelector(
            ".form-email-seguranca"
        );

    const inputEmailSeguranca =
        formularioEmailSeguranca
            ? formularioEmailSeguranca.querySelector(
                'input[name="email-seguranca"]'
            )
            : null;

    const mensagemConfiguracao =
        document.querySelector(
            ".mensagem-configuracao"
        );

    const botaoExcluir =
        document.querySelector(
            ".botao-excluir"
        );

    const botaoSair =
        document.querySelector(
            ".botao-sair"
        );


    function lerJson(chave, valorPadrao) {

        try {

            const valorSalvo =
                localStorage.getItem(chave);

            if (!valorSalvo) {
                return valorPadrao;
            }

            return JSON.parse(valorSalvo);

        } catch (erro) {

            console.error(
                "Erro ao carregar dados da configuração:",
                erro
            );

            return valorPadrao;
        }
    }


    function normalizarEmail(email) {

        return email
            .trim()
            .toLowerCase();

    }


    function emailValido(email) {

        const regex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(email);

    }


    function obterUsuarioLogado() {

        const usuario =
            lerJson(
                chaveUsuarioLogado,
                null
            );

        if (
            usuario &&
            typeof usuario === "object"
        ) {
            return usuario;
        }

        return null;

    }


    function salvarUsuarioLogado(usuario) {

        localStorage.setItem(
            chaveUsuarioLogado,
            JSON.stringify(usuario)
        );

    }


    function atualizarUsuarioLogado(dados) {

        const usuario =
            obterUsuarioLogado();

        if (!usuario) {
            return;
        }

        salvarUsuarioLogado({
            ...usuario,
            ...dados
        });

    }


    function obterUsuarios() {

        const usuarios =
            lerJson(
                chaveUsuarios,
                []
            );

        return Array.isArray(usuarios)
            ? usuarios
            : [];

    }


    function salvarUsuarios(usuarios) {

        localStorage.setItem(
            chaveUsuarios,
            JSON.stringify(usuarios)
        );

    }


    function obterConfiguracoes() {

        const configuracoes =
            lerJson(
                chaveConfiguracoes,
                {}
            );

        if (
            configuracoes &&
            typeof configuracoes === "object" &&
            !Array.isArray(configuracoes)
        ) {
            return configuracoes;
        }

        return {};

    }


    function salvarConfiguracoes(configuracoes) {

        localStorage.setItem(
            chaveConfiguracoes,
            JSON.stringify(configuracoes)
        );

    }


    function obterEmailUsuarioAtual() {

        const usuario =
            obterUsuarioLogado();

        if (
            !usuario ||
            !usuario.email
        ) {
            return "";
        }

        return normalizarEmail(
            usuario.email
        );

    }


    function obterConfiguracaoAtual() {

        const emailUsuario =
            obterEmailUsuarioAtual();

        const configuracoes =
            obterConfiguracoes();

        const usuarioLogado =
            obterUsuarioLogado();

        const configuracaoPadrao = {
            notificacoesAtivas: true,
            emailSeguranca: "",
            temaEscuro: false
        };


        if (
            usuarioLogado &&
            typeof usuarioLogado.emailSeguranca === "string"
        ) {
            configuracaoPadrao.emailSeguranca =
                usuarioLogado.emailSeguranca;
        }


        if (
            usuarioLogado &&
            typeof usuarioLogado.notificacoesAtivas === "boolean"
        ) {
            configuracaoPadrao.notificacoesAtivas =
                usuarioLogado.notificacoesAtivas;
        }


        if (
            usuarioLogado &&
            typeof usuarioLogado.temaEscuro === "boolean"
        ) {
            configuracaoPadrao.temaEscuro =
                usuarioLogado.temaEscuro;
        }


        if (
            emailUsuario &&
            configuracoes[emailUsuario]
        ) {
            return {
                ...configuracaoPadrao,
                ...configuracoes[emailUsuario]
            };
        }


        return configuracaoPadrao;

    }


    function salvarConfiguracaoAtual(novosDados) {

        const emailUsuario =
            obterEmailUsuarioAtual();

        if (!emailUsuario) {
            return false;
        }

        const configuracoes =
            obterConfiguracoes();

        configuracoes[emailUsuario] = {
            ...obterConfiguracaoAtual(),
            ...novosDados
        };

        salvarConfiguracoes(configuracoes);
        atualizarUsuarioLogado(novosDados);

        return true;

    }


    function removerConfiguracaoAtual() {

        const emailUsuario =
            obterEmailUsuarioAtual();

        if (!emailUsuario) {
            return;
        }

        const configuracoes =
            obterConfiguracoes();

        delete configuracoes[emailUsuario];

        salvarConfiguracoes(configuracoes);

    }


    function mostrarMensagem(texto, tipo) {

        if (!mensagemConfiguracao) {
            return;
        }

        mensagemConfiguracao.textContent =
            texto;

        mensagemConfiguracao.classList.remove(
            "erro",
            "sucesso"
        );

        if (tipo) {
            mensagemConfiguracao.classList.add(tipo);
        }

    }


    function limparMensagem() {

        if (!mensagemConfiguracao) {
            return;
        }

        mensagemConfiguracao.textContent = "";

        mensagemConfiguracao.classList.remove(
            "erro",
            "sucesso"
        );

    }


    // ==========================================
    // TEMA
    // ==========================================

    function atualizarTema(temaEscuro) {

        document.body.classList.toggle(
            "tema-escuro",
            temaEscuro
        );

        if (!botaoTema) {
            return;
        }

        botaoTema.classList.toggle(
            "ativo",
            temaEscuro
        );

        botaoTema.setAttribute(
            "aria-pressed",
            String(temaEscuro)
        );

        botaoTema.setAttribute(
            "aria-label",
            temaEscuro
                ? "Ativar tema claro"
                : "Ativar tema escuro"
        );

        botaoTema.title =
            temaEscuro
                ? "Tema escuro ativado"
                : "Tema claro ativado";


        if (iconesTema.length >= 2) {

            iconesTema[0].style.display =
                temaEscuro
                    ? "none"
                    : "inline-block";

            iconesTema[1].style.display =
                temaEscuro
                    ? "inline-block"
                    : "none";

        }

    }


    const configuracaoAtual =
        obterConfiguracaoAtual();


    atualizarTema(
        configuracaoAtual.temaEscuro === true
    );


    if (botaoTema) {

        botaoTema.addEventListener(
            "click",
            function () {

                const temaAtual =
                    obterConfiguracaoAtual();

                const novoTema =
                    temaAtual.temaEscuro !== true;


                atualizarTema(
                    novoTema
                );


                const salvo =
                    salvarConfiguracaoAtual({
                        temaEscuro: novoTema
                    });


                if (!salvo) {

                    localStorage.setItem(
                        "temaEscuroAtlas",
                        String(novoTema)
                    );

                }

            }
        );

    }


    // ==========================================
    // NOTIFICAÇÕES
    // ==========================================

    function atualizarBotaoNotificacoes(ativas) {

        if (!botaoNotificacoes) {
            return;
        }

        botaoNotificacoes.classList.toggle(
            "ativo",
            ativas
        );

        botaoNotificacoes.setAttribute(
            "aria-pressed",
            String(ativas)
        );

        botaoNotificacoes.setAttribute(
            "aria-label",
            ativas
                ? "Desativar notificações"
                : "Ativar notificações"
        );

        botaoNotificacoes.title =
            ativas
                ? "Notificações ativadas"
                : "Notificações desativadas";


        if (!iconeNotificacoes) {
            return;
        }

        iconeNotificacoes.classList.toggle(
            "bi-bell",
            ativas
        );

        iconeNotificacoes.classList.toggle(
            "bi-bell-slash",
            !ativas
        );

    }


    atualizarBotaoNotificacoes(
        configuracaoAtual.notificacoesAtivas !== false
    );


    if (
        inputEmailSeguranca &&
        configuracaoAtual.emailSeguranca
    ) {

        inputEmailSeguranca.value =
            configuracaoAtual.emailSeguranca;

    }


    if (inputEmailSeguranca) {

        inputEmailSeguranca.addEventListener(
            "input",
            limparMensagem
        );

    }


    if (botaoNotificacoes) {

        botaoNotificacoes.addEventListener(
            "click",
            function () {

                const emailUsuario =
                    obterEmailUsuarioAtual();


                if (!emailUsuario) {

                    alert(
                        "Faça login para alterar as notificações."
                    );

                    return;
                }


                const novoEstado =
                    obterConfiguracaoAtual()
                        .notificacoesAtivas === false;


                salvarConfiguracaoAtual({
                    notificacoesAtivas: novoEstado
                });


                atualizarBotaoNotificacoes(
                    novoEstado
                );

            }
        );

    }


    // ==========================================
    // E-MAIL DE SEGURANÇA
    // ==========================================

    if (
        formularioEmailSeguranca &&
        inputEmailSeguranca
    ) {

        formularioEmailSeguranca.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                limparMensagem();


                const emailUsuario =
                    obterEmailUsuarioAtual();


                if (!emailUsuario) {

                    mostrarMensagem(
                        "Faça login para salvar um e-mail de segurança.",
                        "erro"
                    );

                    return;
                }


                const emailDigitado =
                    normalizarEmail(
                        inputEmailSeguranca.value
                    );


                if (!emailValido(emailDigitado)) {

                    mostrarMensagem(
                        "Digite um e-mail de segurança válido.",
                        "erro"
                    );

                    inputEmailSeguranca.focus();

                    return;
                }


                salvarConfiguracaoAtual({
                    emailSeguranca: emailDigitado
                });


                inputEmailSeguranca.value =
                    emailDigitado;


                mostrarMensagem(
                    "E-mail de segurança salvo com sucesso.",
                    "sucesso"
                );

            }
        );

    }


    // ==========================================
    // SAIR
    // ==========================================

    if (botaoSair) {

        botaoSair.addEventListener(
            "click",
            function () {

                localStorage.removeItem(
                    chaveUsuarioLogado
                );

                window.location.href =
                    "../index.html";

            }
        );

    }


    // ==========================================
    // EXCLUIR CONTA
    // ==========================================

    if (botaoExcluir) {

        botaoExcluir.addEventListener(
            "click",
            function () {

                const emailUsuario =
                    obterEmailUsuarioAtual();


                if (!emailUsuario) {

                    alert(
                        "Faça login para excluir a conta."
                    );

                    return;
                }


                const confirmouExclusao =
                    window.confirm(
                        "Tem certeza que deseja excluir a conta? Esta ação não pode ser desfeita."
                    );


                if (!confirmouExclusao) {
                    return;
                }


                const usuarios =
                    obterUsuarios();


                const indiceUsuario =
                    usuarios.findIndex(
                        function (usuario) {

                            return (
                                typeof usuario.email === "string" &&
                                normalizarEmail(
                                    usuario.email
                                ) === emailUsuario
                            );

                        }
                    );


                if (indiceUsuario === -1) {

                    alert(
                        "Somente contas cadastradas pelo formulário podem ser excluídas no momento."
                    );

                    return;
                }


                usuarios.splice(
                    indiceUsuario,
                    1
                );


                salvarUsuarios(
                    usuarios
                );


                removerConfiguracaoAtual();


                localStorage.removeItem(
                    chaveUsuarioLogado
                );


                alert(
                    "Conta excluída com sucesso!"
                );


                window.location.href =
                    "../index.html";

            }
        );

    }

});
