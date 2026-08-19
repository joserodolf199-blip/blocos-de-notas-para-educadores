// ==========================================
// ATLAS DIGITAL - PAINEL
// ==========================================


// Cria os indicadores do painel

const indicadores = [
    {
        icone: "👥",
        titulo: "Total de Alunos",
        valor: "32"
    },
    {
        icone: "🏫",
        titulo: "Turmas",
        valor: "4"
    },
    {
        icone: "📊",
        titulo: "Média Geral",
        valor: "8,2"
    },
    {
        icone: "✓",
        titulo: "Frequência Geral",
        valor: "94%"
    }
];


$.each(indicadores, function (indice, indicador) {

    $("#indicadores").append(`

        <div class="indicador">

            <div class="icone-indicador">
                ${indicador.icone}
            </div>

            <div class="info-indicador">

                <span>
                    ${indicador.titulo}
                </span>

                <strong>
                    ${indicador.valor}
                </strong>

            </div>

        </div>

    `);

});


// Cria os dados do gráfico de desempenho

const diasSemana = [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex"
];


const valoresGrafico = diasSemana.map(function () {

    return Math.floor(
        Math.random() * 11
    );

});


const contextoGrafico =
    document
        .getElementById("grafico-desempenho")
        .getContext("2d");


new Chart(contextoGrafico, {

    type: "bar",

    data: {

        labels: diasSemana,

        datasets: [

            {

                label: "Desempenho",

                data: valoresGrafico,

                borderWidth: 1,

                borderRadius: 5

            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        scales: {

            y: {

                min: 0,

                max: 10,

                ticks: {

                    stepSize: 2

                }

            }

        },

        plugins: {

            legend: {

                display: false

            }

        }

    }

});


// Mostra as próximas avaliações

const proximasAvaliacoes = [

    {
        data: "18/08",
        materia: "Português",
        avaliacao: "Prova 1",
        status: "Próxima"
    },

    {
        data: "20/08",
        materia: "Matemática",
        avaliacao: "Trabalho",
        status: "Próxima"
    },

    {
        data: "22/08",
        materia: "História",
        avaliacao: "Atividade",
        status: "Agendada"
    }

];


$.each(proximasAvaliacoes, function (indice, avaliacao) {

    $("#proximas-avaliacoes").append(`

        <div class="avaliacao-item">

            <div class="data-avaliacao">
                ${avaliacao.data}
            </div>

            <div class="info-avaliacao">

                <strong>
                    ${avaliacao.materia}
                </strong>

                <span>
                    ${avaliacao.avaliacao}
                </span>

            </div>

            <span class="status-avaliacao">
                ${avaliacao.status}
            </span>

        </div>

    `);

});


// Mostra os alunos que precisam de atenção

const alunosAtencao = [

    {
        nome: "Maria José",
        motivo: "Baixa frequência",
        imagem: "../imagens/aluno.png"
    },

    {
        nome: "João Jonas",
        motivo: "Nota abaixo da média",
        imagem: "../imagens/aluno.png"
    },

    {
        nome: "Wellington",
        motivo: "Baixo desempenho",
        imagem: "../imagens/aluno.png"
    }

];


$.each(alunosAtencao, function (indice, aluno) {

    $("#alunos-atencao").append(`

        <div class="aluno-atencao">

            <img
                src="${aluno.imagem}"
                alt="Foto do aluno"
            >

            <div class="info-aluno">

                <strong>
                    ${aluno.nome}
                </strong>

                <span>
                    ${aluno.motivo}
                </span>

            </div>

            <span class="alerta-aluno">
                Atenção
            </span>

        </div>

    `);

});


// Mostra o resumo das atividades de hoje

const resumoHoje = [

    "3 avaliações realizadas",

    "2 atividades corrigidas",

    "1 aluno com falta",

    "4 registros atualizados"

];


$.each(resumoHoje, function (indice, resumo) {

    $("#resumo-hoje").append(`

        <div class="resumo-item">

            <span>
                •
            </span>

            <span>
                ${resumo}
            </span>

        </div>

    `);

});


// Mostra as atividades recentes

const atividadesRecentes = [

    {
        atividade: "Nota adicionada",
        aluno: "Maria José",
        horario: "Hoje, 08:30"
    },

    {
        atividade: "Frequência atualizada",
        aluno: "João Jonas",
        horario: "Hoje, 09:15"
    },

    {
        atividade: "Avaliação registrada",
        aluno: "Wellington",
        horario: "Hoje, 10:20"
    },

    {
        atividade: "Boletim atualizado",
        aluno: "Maria José",
        horario: "Hoje, 11:05"
    }

];


$.each(atividadesRecentes, function (indice, atividade) {

    $("#atividades-recentes").append(`

        <div class="atividade-item">

            <span>
                🔴
            </span>

            <span>
                <strong>
                    ${atividade.atividade}
                </strong>

                - ${atividade.aluno}
            </span>

            <small>
                ${atividade.horario}
            </small>

        </div>

    `);

});


// Pesquisa os alunos pelo nome

$("#campo-pesquisa").on(
    "input",
    function () {

        const texto =
            $(this)
                .val()
                .toLowerCase()
                .trim();


        $(".aluno-atencao").each(
            function () {

                const nome =
                    $(this)
                        .find(".info-aluno strong")
                        .text()
                        .toLowerCase();


                if (nome.includes(texto)) {

                    $(this).show();

                } else {

                    $(this).hide();

                }

            }
        );

    }
);


// Confirma que o painel foi carregado

console.log(
    "Atlas Digital - Painel carregado."
);
