// ==========================================
// ATLAS DIGITAL - RELATÓRIOS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Elementos da página

    const canvasGrafico =
        document.getElementById("grafico-presenca");

    const campoPesquisa =
        document.querySelector(".pesquisa-aluno input");

    const botaoPesquisa =
        document.querySelector(".pesquisa-aluno button");

    const botaoFiltrar =
        document.querySelector(".botao-filtrar");

    const botaoTurma =
        document.querySelector(".botao-turma");

    const linhasAlunos =
        document.querySelectorAll(".linha-aluno");

    const porcentagens =
        document.querySelectorAll(".porcentagem");


    // Valores aleatórios de presença

    let presente;
    let faltas;
    let atestados;


    function gerarPercentuais() {

        presente =
            Math.floor(
                Math.random() * 21
            ) + 70;

        faltas =
            Math.floor(
                Math.random() * 16
            ) + 5;

        atestados =
            100 - presente - faltas;


        if (atestados < 2) {

            atestados = 2;

            faltas =
                100 - presente - atestados;

        }

    }


    gerarPercentuais();


    // Atualiza os percentuais exibidos na página

    function atualizarPercentuais() {

        if (porcentagens.length < 3) {
            return;
        }


        porcentagens[0].textContent =
            presente + "%";


        porcentagens[1].textContent =
            faltas + "%";


        porcentagens[2].textContent =
            atestados + "%";

    }


    atualizarPercentuais();


    // Cria o gráfico de presença

    if (
        canvasGrafico &&
        typeof Chart !== "undefined"
    ) {

        new Chart(
            canvasGrafico,
            {

                type: "doughnut",

                data: {

                    labels: [
                        "Presente",
                        "Faltas",
                        "Atestados"
                    ],

                    datasets: [

                        {

                            data: [
                                presente,
                                faltas,
                                atestados
                            ],

                            backgroundColor: [
                                "#2e7d32",
                                "#c62828",
                                "#f9a825"
                            ],

                            borderWidth: 0

                        }

                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {
                            display: false
                        },

                        tooltip: {

                            callbacks: {

                                label: function (context) {

                                    return (
                                        context.label +
                                        ": " +
                                        context.parsed +
                                        "%"
                                    );

                                }

                            }

                        }

                    },

                    cutout: "65%"

                }

            }
        );

    }


    // Pesquisa alunos pelo nome

    function pesquisarAluno() {

        const textoPesquisa =
            campoPesquisa.value
                .toLowerCase()
                .trim();


        linhasAlunos.forEach(
            function (linha) {

                const elementoNome =
                    linha.querySelector(
                        ".dados-aluno span"
                    );


                if (!elementoNome) {
                    return;
                }


                const nomeAluno =
                    elementoNome
                        .textContent
                        .toLowerCase();


                if (
                    nomeAluno.includes(
                        textoPesquisa
                    )
                ) {

                    linha.style.display = "";

                } else {

                    linha.style.display = "none";

                }

            }
        );

    }


    // Ativa o botão de pesquisa

    if (botaoPesquisa) {

        botaoPesquisa.addEventListener(
            "click",
            pesquisarAluno
        );

    }


    // Pesquisa automaticamente enquanto digita

    if (campoPesquisa) {

        campoPesquisa.addEventListener(
            "input",
            pesquisarAluno
        );

    }


    // Filtra somente alunos com pendências

    if (botaoFiltrar) {

        botaoFiltrar.addEventListener(
            "click",
            function () {

                linhasAlunos.forEach(
                    function (linha) {

                        const pendencias =
                            linha.querySelectorAll(
                                ".nao-realizada"
                            );


                        if (
                            pendencias.length > 0
                        ) {

                            linha.style.display = "";

                        } else {

                            linha.style.display = "none";

                        }

                    }
                );

            }
        );

    }


    // Mostra novamente todos os alunos

    if (botaoTurma) {

        botaoTurma.addEventListener(
            "click",
            function () {

                linhasAlunos.forEach(
                    function (linha) {

                        linha.style.display = "";

                    }
                );


                if (campoPesquisa) {

                    campoPesquisa.value = "";

                }

            }
        );

    }


    // Botões para editar pendências

    const botoesEditar =
        document.querySelectorAll(
            '.acoes-pendencia button[aria-label="Editar pendência"]'
        );


    botoesEditar.forEach(
        function (botao) {

            botao.addEventListener(
                "click",
                function () {

                    const linha =
                        botao.closest(
                            ".linha-aluno"
                        );


                    if (!linha) {
                        return;
                    }


                    const elementoNome =
                        linha.querySelector(
                            ".dados-aluno span"
                        );


                    if (!elementoNome) {
                        return;
                    }


                    const nome =
                        elementoNome
                            .textContent
                            .trim();


                    alert(
                        "Editando pendências de " +
                        nome
                    );

                }
            );

        }
    );


    // Botões para confirmar pendências

    const botoesConfirmar =
        document.querySelectorAll(
            '.acoes-pendencia button[aria-label="Confirmar pendência"]'
        );


    botoesConfirmar.forEach(
        function (botao) {

            botao.addEventListener(
                "click",
                function () {

                    const linha =
                        botao.closest(
                            ".linha-aluno"
                        );


                    if (!linha) {
                        return;
                    }


                    const pendencias =
                        linha.querySelectorAll(
                            ".nao-realizada"
                        );


                    pendencias.forEach(
                        function (pendencia) {

                            pendencia.classList.remove(
                                "nao-realizada"
                            );


                            pendencia.classList.add(
                                "realizada"
                            );


                            pendencia.innerHTML =
                                '<i class="bi bi-check-circle-fill"></i> REALIZADA';

                        }
                    );

                }
            );

        }
    );


    console.log(
        "Atlas Digital - Relatórios carregado."
    );

});
