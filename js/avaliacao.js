// ==========================================
// ATLAS DIGITAL - AVALIAÇÕES
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

    const cardsAlunos = document.querySelectorAll(
        ".card-avaliacoes"
    );


    // Pesquisa de aluno

    function pesquisarAluno() {

        const textoPesquisa = campoPesquisa.value
            .toUpperCase()
            .trim();

        let alunosEncontrados = 0;


        cardsAlunos.forEach(function (card) {

            const nomeAluno = card
                .querySelector(".nome-aluno span")
                .textContent
                .toUpperCase()
                .trim();


            if (nomeAluno.includes(textoPesquisa)) {

                card.style.display = "";

                alunosEncontrados++;

            } else {

                card.style.display = "none";

            }

        });


        return alunosEncontrados;

    }


    // Pesquisa enquanto o usuário digita

    campoPesquisa.addEventListener(
        "input",
        function () {

            pesquisarAluno();

        }
    );


    // Botão de pesquisa

    botaoPesquisa.addEventListener(
        "click",
        function () {

            const encontrados =
                pesquisarAluno();


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

            const cardsVisiveis =
                Array.from(cardsAlunos)
                    .filter(function (card) {

                        return card.style.display !== "none";

                    });


            if (cardsVisiveis.length === 0) {

                alert(
                    "Nenhum aluno encontrado."
                );

                return;

            }


            alert(
                "Turma selecionada: TURMA 1º A\n" +
                "Alunos encontrados: " +
                cardsVisiveis.length
            );

        }
    );


    // Botões de edição

    const botoesEditar = document.querySelectorAll(
        ".linha-avaliacao button"
    );


    botoesEditar.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const linha = botao.closest(
                    ".linha-avaliacao"
                );

                const card = botao.closest(
                    ".card-avaliacoes"
                );


                const nomeAluno = card
                    .querySelector(".nome-aluno span")
                    .textContent
                    .trim();


                const nomeAvaliacao = linha
                    .querySelector("span")
                    .textContent
                    .trim();


                const notas = linha.querySelectorAll(
                    "span:not(:first-child)"
                );


                notas.forEach(function (notaElemento) {

                    const notaAtual =
                        notaElemento.textContent
                            .replace(",", ".")
                            .trim();


                    const novaNota = prompt(
                        "Aluno: " + nomeAluno +
                        "\nAvaliação: " + nomeAvaliacao +
                        "\n\nDigite a nova nota:",
                        notaAtual
                    );


                    if (novaNota === null) {

                        return;

                    }


                    const valor = parseFloat(
                        novaNota.replace(",", ".")
                    );


                    if (
                        isNaN(valor) ||
                        valor < 0 ||
                        valor > 10
                    ) {

                        alert(
                            "Digite uma nota válida entre 0 e 10."
                        );

                        return;

                    }


                    notaElemento.textContent =
                        valor
                            .toFixed(1)
                            .replace(".", ",");

                });

            }
        );

    });


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


                if (nomePagina === "Avaliações") {

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


    // Sistema carregado

    console.log(
        "Atlas Digital - Avaliações carregado."
    );

});
