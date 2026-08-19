// ==========================================
// ATLAS DIGITAL - FREQUENCIA
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const campoPesquisa = document.querySelector(
        ".pesquisa-aluno input"
    );

    const botaoPesquisa = document.querySelector(
        ".pesquisa-aluno button"
    );

    const botaoFiltrar = document.querySelector(
        ".botao-filtrar"
    );

    const linhasAlunos = document.querySelectorAll(
        ".aluno-frequencia"
    );

    const chaveFrequencias =
        "frequenciasAtlas";

    const filtrosStatus = [
        "todos",
        "presente",
        "falta",
        "confirmar"
    ];

    const textosStatus = {
        presente: "PRESENTE",
        falta: "FALTA",
        confirmar: "A CONFIRMAR"
    };

    const textosFiltro = {
        todos: "FILTRAR: TODOS",
        presente: "FILTRAR: PRESENTES",
        falta: "FILTRAR: FALTAS",
        confirmar: "FILTRAR: A CONFIRMAR"
    };

    let indiceFiltroAtual = 0;

    let frequenciasSalvas = {};


    if (
        !campoPesquisa ||
        !botaoPesquisa ||
        !botaoFiltrar ||
        linhasAlunos.length === 0
    ) {
        console.error(
            "Erro: elementos da página de frequência não foram encontrados."
        );

        return;
    }


    function normalizarTexto(texto) {

        return texto
            .toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

    }


    function carregarFrequencias() {

        try {

            const frequencias = JSON.parse(
                localStorage.getItem(
                    chaveFrequencias
                )
            );


            if (
                frequencias &&
                typeof frequencias === "object"
            ) {
                return frequencias;
            }


            return {};

        } catch (erro) {

            console.error(
                "Erro ao carregar as frequências:",
                erro
            );

            return {};
        }

    }


    function salvarFrequencias() {

        localStorage.setItem(
            chaveFrequencias,
            JSON.stringify(frequenciasSalvas)
        );

    }


    function obterStatusAtual(linha) {

        const seletorStatus = linha.querySelector(
            ".seletor-presenca"
        );


        if (
            seletorStatus &&
            textosStatus[seletorStatus.value]
        ) {
            return seletorStatus.value;
        }

        const statusElemento = linha.querySelector(
            ".status-presenca"
        );


        if (!statusElemento) {
            return "confirmar";
        }


        if (statusElemento.classList.contains("presente")) {
            return "presente";
        }


        if (statusElemento.classList.contains("falta")) {
            return "falta";
        }


        return "confirmar";

    }


    function obterDadosAluno(linha) {

        const nomeAluno = linha
            .querySelector(".nome-aluno span")
            .textContent
            .trim();

        const turmaAluno = linha
            .querySelector(".turma-aluno")
            .textContent
            .trim();

        return {
            nome: normalizarTexto(nomeAluno),
            nomeOriginal: nomeAluno,
            turma: turmaAluno,
            status: obterStatusAtual(linha)
        };

    }


    function obterChaveAluno(linha) {

        const dadosAluno = obterDadosAluno(linha);

        return (
            dadosAluno.nomeOriginal +
            "|" +
            dadosAluno.turma
        );

    }


    function aplicarStatus(
        linha,
        novoStatus,
        salvarAlteracao
    ) {

        const statusElemento = linha.querySelector(
            ".status-presenca"
        );

        const seletorStatus = linha.querySelector(
            ".seletor-presenca"
        );


        if (
            !statusElemento ||
            !textosStatus[novoStatus]
        ) {
            return;
        }


        statusElemento.classList.remove(
            "presente",
            "falta",
            "confirmar"
        );

        statusElemento.classList.add(novoStatus);


        if (seletorStatus) {
            seletorStatus.value = novoStatus;
        }


        if (salvarAlteracao) {

            frequenciasSalvas[
                obterChaveAluno(linha)
            ] = novoStatus;

            salvarFrequencias();
        }

    }


    function atualizarTextoBotaoFiltro() {

        const filtroAtual =
            filtrosStatus[indiceFiltroAtual];

        botaoFiltrar.textContent =
            textosFiltro[filtroAtual];

    }


    function aplicarFiltros() {

        const textoPesquisa = normalizarTexto(
            campoPesquisa.value
        );

        const filtroAtual =
            filtrosStatus[indiceFiltroAtual];

        let alunosEncontrados = 0;


        linhasAlunos.forEach(function (linha) {

            const dadosAluno =
                obterDadosAluno(linha);

            const nomeCorreto =
                dadosAluno.nome.includes(
                    textoPesquisa
                );

            const statusCorreto =
                filtroAtual === "todos" ||
                dadosAluno.status === filtroAtual;


            if (
                nomeCorreto &&
                statusCorreto
            ) {

                linha.style.display = "";

                alunosEncontrados++;

            } else {

                linha.style.display = "none";
            }

        });


        return alunosEncontrados;

    }


    function marcarFalta(linha) {

        aplicarStatus(
            linha,
            "falta",
            true
        );

        aplicarFiltros();

    }


    function marcarPresenca(linha) {

        aplicarStatus(
            linha,
            "presente",
            true
        );

        aplicarFiltros();

    }


    function carregarFrequenciasSalvas() {

        linhasAlunos.forEach(function (linha) {

            const statusSalvo = frequenciasSalvas[
                obterChaveAluno(linha)
            ];


            if (textosStatus[statusSalvo]) {

                aplicarStatus(
                    linha,
                    statusSalvo,
                    false
                );

            }

        });

    }


    campoPesquisa.addEventListener(
        "input",
        function () {

            aplicarFiltros();

        }
    );


    botaoPesquisa.addEventListener(
        "click",
        function () {

            const encontrados =
                aplicarFiltros();


            if (
                campoPesquisa.value.trim() !== "" &&
                encontrados === 0
            ) {

                alert(
                    "Nenhum aluno encontrado."
                );

            }

        }
    );


    botaoFiltrar.addEventListener(
        "click",
        function () {

            indiceFiltroAtual =
                (indiceFiltroAtual + 1) %
                filtrosStatus.length;

            atualizarTextoBotaoFiltro();


            const encontrados =
                aplicarFiltros();


            if (encontrados === 0) {

                alert(
                    "Nenhum aluno encontrado para o filtro selecionado."
                );

            }

        }
    );


    linhasAlunos.forEach(function (linha) {

        const botoesAcao = linha.querySelectorAll(
            ".acoes-aluno button"
        );

        const seletorStatus = linha.querySelector(
            ".seletor-presenca"
        );

        const botaoFalta =
            botoesAcao[0];

        const botaoPresenca =
            botoesAcao[1];


        if (botaoFalta) {

            botaoFalta.addEventListener(
                "click",
                function () {

                    marcarFalta(linha);

                }
            );

        }


        if (seletorStatus) {

            seletorStatus.addEventListener(
                "change",
                function () {

                    aplicarStatus(
                        linha,
                        seletorStatus.value,
                        true
                    );

                    aplicarFiltros();

                }
            );

        }


        if (botaoPresenca) {

            botaoPresenca.addEventListener(
                "click",
                function () {

                    marcarPresenca(linha);

                }
            );

        }

    });


    frequenciasSalvas = carregarFrequencias();

    carregarFrequenciasSalvas();

    atualizarTextoBotaoFiltro();

    aplicarFiltros();

});
