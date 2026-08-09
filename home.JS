// ========================================
// FAQ - PERGUNTAS FREQUENTES
// ========================================

const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach((pergunta) => {

    const botao = pergunta.querySelector(".botao-pergunta");
    const resposta = pergunta.querySelector(".resposta-pergunta");

    botao.addEventListener("click", () => {

        // Verifica se a pergunta já está aberta
        const estaAberta = resposta.style.display === "block";


        // Fecha todas as perguntas
        perguntas.forEach((outraPergunta) => {

            const outraResposta =
                outraPergunta.querySelector(".resposta-pergunta");

            const outroBotao =
                outraPergunta.querySelector(".botao-pergunta");

            outraResposta.style.display = "none";

            outroBotao.textContent = "+";

        });


        // Se estava fechada, abre
        if (!estaAberta) {

            resposta.style.display = "block";

            botao.textContent = "−";

        }

    });

});
