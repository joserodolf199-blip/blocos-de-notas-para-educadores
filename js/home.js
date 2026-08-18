// ========================================
// ATLAS DIGITAL - HOME
// ========================================

// Perguntas

const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach((pergunta) => {

    // Elemento da pergunta

    const botaoPergunta = pergunta.querySelector(".botao-pergunta");
    const respostaPergunta = pergunta.querySelector(".resposta-pergunta");


    // Clique no botão

    botaoPergunta.addEventListener("click", () => {

        // Verificar se a pergunta já está aberta

        const respostaAberta =
            respostaPergunta.style.display === "block";


        // Fechar todas as perguntas

        perguntas.forEach((outrasPerguntas) => {

            const outraResposta =
                outrasPerguntas.querySelector(".resposta-pergunta");

            const outroBotao =
                outrasPerguntas.querySelector(".botao-pergunta");


            outraResposta.style.display = "none";

            outroBotao.textContent = "+";

        });


        // Se estava fechada, abre

        if (!respostaAberta) {

            respostaPergunta.style.display = "block";

            botaoPergunta.textContent = "−";

        }

    });

});
