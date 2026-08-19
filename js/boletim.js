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


    // Aplica a pesquisa e o filtro de turma

    function aplicarFiltros() {

        const textoPesquisa = campoPesquisa.value
            .toUpperCase()
            .trim();

        const turmaSelecionada =
            seletorTurma.value;

        let alunosEncontrados = 0;


        boletinsAlunos.forEach(function (boletim) {

            const nomeAluno = boletim
                .querySelector(".dados-aluno h3")
                .textContent
                .toUpperCase()
                .trim();

            const turmaAluno = boletim
                .querySelector(
                    ".dados-aluno p:nth-of-type(2) span"
                )
                .textContent
                .trim();


            let turmaCorreta = false;


            if (turmaSelecionada === "1A") {

                turmaCorreta =
                    turmaAluno === "1º A";

            } else if (turmaSelecionada === "1B") {

                turmaCorreta =
                    turmaAluno === "1º B";

            } else if (turmaSelecionada === "2A") {

                turmaCorreta =
                    turmaAluno === "2º A";

            } else if (turmaSelecionada === "2B") {

                turmaCorreta =
                    turmaAluno === "2º B";

            }


            const nomeCorreto =
                nomeAluno.includes(textoPesquisa);


            if (
                turmaCorreta &&
                nomeCorreto
            ) {

                boletim.style.display = "";

                alunosEncontrados++;

            } else {

                boletim.style.display = "none";

            }

        });


        return alunosEncontrados;

    }


    // Pesquisa enquanto o usuário digita

    campoPesquisa.addEventListener(
        "input",
        function () {

            aplicarFiltros();

        }
    );


    // Botão de pesquisa

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


    // Botão de filtro

    botaoFiltrar.addEventListener(
        "click",
        function () {

            const encontrados =
                aplicarFiltros();


            if (encontrados === 0) {

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

            aplicarFiltros();

        }
    );


    // Calcula as médias ao carregar a página

    calcularMedias();


    // Aplica o filtro inicial

    aplicarFiltros();


    // Sistema carregado

    console.log(
        "Atlas Digital - Boletim carregado."
    );

});
