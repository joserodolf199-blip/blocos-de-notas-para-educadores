// ==========================================
// ATLAS DIGITAL - PERFIL DO ALUNO
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // CARDS DOS ALUNOS
    // ==========================================

    const perfisAlunos =
        document.querySelectorAll(".perfil-aluno");


    // ==========================================
    // CONFERE SE EXISTEM ALUNOS NA PÁGINA
    // ==========================================

    if (perfisAlunos.length === 0) {

        console.warn(
            "Nenhum perfil de aluno foi encontrado."
        );

        return;
    }


    // ==========================================
    // SELEÇÃO DO ALUNO
    // ==========================================

    perfisAlunos.forEach(function (perfil) {

        perfil.addEventListener("click", function () {

            // Remove a seleção dos outros alunos

            perfisAlunos.forEach(function (outroPerfil) {

                outroPerfil.classList.remove(
                    "aluno-selecionado"
                );

            });


            // Seleciona o aluno clicado

            perfil.classList.add(
                "aluno-selecionado"
            );


            // Pega o nome do aluno

            const nomeAluno =
                perfil.querySelector("h2");


            if (nomeAluno) {

                console.log(
                    "Aluno selecionado:",
                    nomeAluno.textContent.trim()
                );

            }

        });

    });

});
