// ========================================
// ATLAS DIGITAL - CONTROLE DE TURMA
// ========================================


// Controle de Turmas

const listaTurmas =
    document.querySelector(".lista-turmas");

const botaoAdicionarTurma =
    document.querySelector(".botao-adicionar-turma");

let numeroTurma = 4;


// Acessa uma turma

function acessarTurma(botao) {

    const cardTurma =
        botao.closest(".turma");

    const nomeTurma =
        cardTurma
            .querySelector(".cabecalho-turma h2")
            .textContent
            .trim();

    alert(
        "Você acessou a " +
        nomeTurma +
        "."
    );

}


// Botões das turmas que já existem

const botoesAcessarTurma =
    document.querySelectorAll(
        ".botao-acessar-turma"
    );


botoesAcessarTurma.forEach((botao) => {

    botao.addEventListener(
        "click",
        function () {

            acessarTurma(botao);

        }
    );

});


// Adicionar uma nova turma

botaoAdicionarTurma.addEventListener(
    "click",
    function () {

        numeroTurma++;


        const numeroFormatado =
            numeroTurma
                .toString()
                .padStart(2, "0");


        const novaTurma =
            document.createElement("div");


        novaTurma.classList.add("turma");


        novaTurma.innerHTML = `

            <div class="cabecalho-turma">

                <h2>
                    TURMA ${numeroFormatado}
                </h2>

                <span class="icone-turma">
                    ●
                </span>

            </div>


            <div class="lista-alunos">

                <p>ALUNO 01</p>
                <p>ALUNO 02</p>
                <p>ALUNO 03</p>
                <p>ALUNO 04</p>
                <p>ALUNO 05</p>

            </div>


            <p class="numero-turma">
                Nº ${numeroFormatado}
            </p>


            <button
                class="botao-acessar-turma"
                type="button"
            >
                Acessar turma
            </button>

        `;


        listaTurmas.insertBefore(
            novaTurma,
            botaoAdicionarTurma
        );


        const botaoAcessarNovaTurma =
            novaTurma.querySelector(
                ".botao-acessar-turma"
            );


        botaoAcessarNovaTurma.addEventListener(
            "click",
            function () {

                acessarTurma(
                    botaoAcessarNovaTurma
                );

            }
        );

    }
);


// Perguntas frequentes

const perguntas =
    document.querySelectorAll(".pergunta");


perguntas.forEach((pergunta) => {

    const botaoPergunta =
        pergunta.querySelector(
            ".botao-pergunta"
        );


    const respostaPergunta =
        pergunta.querySelector(
            ".resposta-pergunta"
        );


    botaoPergunta.addEventListener(
        "click",
        function () {

            const respostaAberta =
                respostaPergunta.style.display === "block";


            // Fecha as outras respostas

            perguntas.forEach((outraPergunta) => {

                const outraResposta =
                    outraPergunta.querySelector(
                        ".resposta-pergunta"
                    );


                const outroBotao =
                    outraPergunta.querySelector(
                        ".botao-pergunta"
                    );


                outraResposta.style.display =
                    "none";


                outroBotao.textContent =
                    "+";


                outroBotao.setAttribute(
                    "aria-label",
                    "Mostrar resposta"
                );

            });


            // Abre a resposta selecionada

            if (!respostaAberta) {

                respostaPergunta.style.display =
                    "block";


                botaoPergunta.textContent =
                    "−";


                botaoPergunta.setAttribute(
                    "aria-label",
                    "Esconder resposta"
                );

            }

        }
    );

});
