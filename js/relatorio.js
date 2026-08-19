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


    // Gráfico de presença

    if (canvasGrafico && typeof Chart !== "undefined") {

        const graficoPresenca = new Chart(
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
                                65,
                                30,
                                5
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


    // Pesquisa de aluno

    function pesquisarAluno() {

        const textoPesquisa =
            campoPesquisa.value
                .toLowerCase()
                .trim();

        linhasAlunos.forEach(function (linha) {

            const nomeAluno =
                linha
                    .querySelector(".dados-aluno span")
                    .textContent
                    .toLowerCase();

            if (nomeAluno.includes(textoPesquisa)) {

                linha.style.display = "";

            } else {

                linha.style.display = "none";

            }

        });

    }


    // Botão de pesquisa

    if (botaoPesquisa) {

        botaoPesquisa.addEventListener(
            "click",
            pesquisarAluno
        );

    }


    // Pesquisa ao digitar

    if (campoPesquisa) {

        campoPesquisa.addEventListener(
            "input",
            pesquisarAluno
        );

    }


    // Botão filtrar

    if (botaoFiltrar) {

        botaoFiltrar.addEventListener(
            "click",
            function () {

                linhasAlunos.forEach(function (linha) {

                    const pendencias =
                        linha.querySelectorAll(
                            ".nao-realizada"
                        );

                    if (pendencias.length > 0) {

                        linha.style.display = "";

                    } else {

                        linha.style.display = "none";

                    }

                });

            }
        );

    }


    // Botão turma

    if (botaoTurma) {

        botaoTurma.addEventListener(
            "click",
            function () {

                linhasAlunos.forEach(function (linha) {

                    linha.style.display = "";

                });

                if (campoPesquisa) {

                    campoPesquisa.value = "";

                }

            }
        );

    }


    // Botões de editar

    const botoesEditar =
        document.querySelectorAll(
            '.acoes-pendencia button[aria-label="Editar pendência"]'
        );

    botoesEditar.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const linha =
                    botao.closest(".linha-aluno");

                const nome =
                    linha
                        .querySelector(".dados-aluno span")
                        .textContent
                        .trim();

                alert(
                    "Editando pendências de " + nome
                );

            }
        );

    });


    // Botões de confirmar

    const botoesConfirmar =
        document.querySelectorAll(
            '.acoes-pendencia button[aria-label="Confirmar pendência"]'
        );

    botoesConfirmar.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const linha =
                    botao.closest(".linha-aluno");

                const pendencias =
                    linha.querySelectorAll(
                        ".nao-realizada"
                    );

                pendencias.forEach(function (pendencia) {

                    pendencia.classList.remove(
                        "nao-realizada"
                    );

                    pendencia.classList.add(
                        "realizada"
                    );

                    pendencia.innerHTML =
                        '<i class="bi bi-check-circle-fill"></i> REALIZADA';

                });

            }
        );

    });


    // Atualização dos percentuais

    function atualizarPercentuais() {

        if (porcentagens.length < 3) {
            return;
        }

        const presente =
            Math.floor(
                Math.random() * 16
            ) + 60;

        const faltas =
            Math.floor(
                Math.random() * 16
            ) + 20;

        const atestados =
            100 - presente - faltas;

        porcentagens[0].textContent =
            presente + "%";

        porcentagens[1].textContent =
            faltas + "%";

        porcentagens[2].textContent =
            atestados + "%";

    }

});
