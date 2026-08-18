// ==========================================
// ATLAS DIGITAL - BOLETIM
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Elementos da página

    const campoPesquisa = document.querySelector(
        ".pesquisa-aluno input"
    );

    const botaoPesquisa = document.querySelector(
        ".pesquisa-aluno button"
    );

    const botaoFiltrar = document.querySelector(
        ".botao-filtrar"
    );

    const seletorTurma = document.querySelector(
        ".seletor-turma"
    );

    const boletinsAlunos = document.querySelectorAll(
        ".boletim-aluno"
    );


    // Calcula as médias dos alunos

    function calcularMedias() {

        boletinsAlunos.forEach(function (boletim) {

            const linhas = boletim.querySelectorAll(
                "tbody tr"
            );

            linhas.forEach(function (linha) {

                const notas = linha.querySelectorAll(
                    "td:not(.media)"
                );

                const campoMedia = linha.querySelector(
                    ".media"
                );

                let soma = 0;

                notas.forEach(function (nota) {

                    const valor = parseFloat(
                        nota.textContent
                            .replace(",", ".")
                            .trim()
                    );

                    if (!isNaN(valor)) {
                        soma += valor;
                    }

                });

                const media = soma / notas.length;

                campoMedia.textContent =
                    media.toFixed(1).replace(".", ",");

            });

        });

    }


    // Pesquisa pelo nome do aluno

    function pesquisarAluno() {

        const textoPesquisa = campoPesquisa.value
            .toUpperCase()
            .trim();

        boletinsAlunos.forEach(function (boletim) {

            const nomeAluno = boletim
                .querySelector(".dados-aluno h3")
                .textContent
                .toUpperCase();

            if (nomeAluno.includes(textoPesquisa)) {

                boletim.style.display = "";

            } else {

                boletim.style.display = "none";

            }

        });

    }


    // Pesquisa enquanto o usuário digita

    campoPesquisa.addEventListener(
        "input",
        pesquisarAluno
    );


    // Botão de pesquisa

    botaoPesquisa.addEventListener(
        "click",
        pesquisarAluno
    );


    // Botão de filtro

    botaoFiltrar.addEventListener(
        "click",
        function () {

            const turmaSelecionada =
                seletorTurma.value;

            const boletinsEncontrados = [];

            boletinsAlunos.forEach(function (boletim) {

                const turmaAluno = boletim
                    .querySelector(".dados-aluno p:nth-of-type(2) span")
                    .textContent
                    .trim();

                const nomeAluno = boletim
                    .querySelector(".dados-aluno h3")
                    .textContent
                    .trim();

                let mostrar = false;

                if (turmaSelecionada === "1A") {

                    mostrar = turmaAluno === "1º A";

                } else if (turmaSelecionada === "1B") {

                    mostrar = turmaAluno === "1º B";

                } else if (turmaSelecionada === "2A") {

                    mostrar = turmaAluno === "2º A";

                } else if (turmaSelecionada === "2B") {

                    mostrar = turmaAluno === "2º B";

                }

                if (mostrar) {

                    boletim.style.display = "";

                    boletinsEncontrados.push(nomeAluno);

                } else {

                    boletim.style.display = "none";

                }

            });

            if (boletinsEncontrados.length === 0) {

                alert(
                    "Nenhum aluno encontrado na turma selecionada."
                );

            }

        }
    );


    // Atualiza os alunos quando a turma é alterada

    seletorTurma.addEventListener(
        "change",
        function () {

            botaoFiltrar.click();

        }
    );


    // Menu lateral

    const linksMenu = document.querySelectorAll(
        ".menu-lateral a"
    );


    linksMenu.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const nomePagina = link
                    .textContent
                    .trim();

                if (nomePagina === "Boletim") {
                    return;
                }

                alert(
                    "A página " +
                    nomePagina +
                    " ainda está em desenvolvimento."
                );

            }
        );

    });


    // Calcula as médias ao carregar a página

    calcularMedias();


    // Sistema carregado

    console.log(
        "Atlas Digital - Boletim carregado."
    );

});
