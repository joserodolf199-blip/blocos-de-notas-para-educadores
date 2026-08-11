// ========================================
// ATLAS DIGITAL - HOME
// ========================================

//Perguntas 
const pergunta = document.querySelectorAll(".pergunta");

perguntas.forEach((pergunta) => {

//Elemento da pergunta
const botaoPergunta = pergunta.querySelector(".botao-pergunta");
const respostaPergunta = pergunta.querySelector(".resposta-pergunta");


//Clique no botão
botaoPergunta.addEventListener("click", () => {

    //verificar se a pergunta já está pronta
    const repostaAberta =
        repostaPerguta.style.display === "block";


    //Fechar todas as perguntas
    pergunta.forEach((outrasPerguntas) => {

        const outraResposta = 
            outraPergunta.querySelector(".resposta-pergunta");
        
        const outroBotao = 
            outraPergunta.querySelecctor(".botao-pergunta");

        outraResposta.style.display = "none";
        
        outroBotao.textContent = "+";
    });


    // Se estava fechada, abre
    if (!respostaAberta) {
        repostaPergunta.style.display = "block";

        botaoPergunta.textContent = "−";
        }
    });
});    
