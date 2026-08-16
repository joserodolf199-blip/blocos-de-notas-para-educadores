// ==========================================
// ATLAS DIGITAL - PERFIL DO PROFESSOR
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Botão para salvar o perfil
    const botaoSalvar =
        document.querySelector(".botao-salvar");


    // Confere se o botão foi encontrado
    if (!botaoSalvar) {

        console.error(
            "Erro: botão de salvar não foi encontrado."
        );

        return;
    }


    // Salva as informações do perfil
    botaoSalvar.addEventListener("click", () => {

        alert(
            "Perfil do professor salvo com sucesso!"
        );

    });

});
