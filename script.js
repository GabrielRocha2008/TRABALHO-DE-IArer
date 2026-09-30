const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a cor do sol?",
        alternativas: [
            "Branco",
            "Amarelo"
        ]
    },
    {
        enunciado: "Porque o Kauan falta aula?",
        alternativas: [
            "Por motivos sérios(mentira)",
            "Por preguiça"
        ]
    },
      {
        enunciado: "O Fernando fica jogando até três horas da manhã?",
        alternativas: [
            "Sim",
            "Concerteza"
        ]
    },
     {
        enunciado: "O Gabriel é o melhor alunos de todos?",
        alternativas: [
            "Sim",
            "Sim"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();

