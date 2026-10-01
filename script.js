const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a cor do sol?",
        alternativas: [
            {
                texto:  "Branco",
                afirmacao: "afirmacao"
            },
            {
                texto: "Amarelo",
                afirmacao: "afirmacao"
            }
            
            
        ]
    },
    {
        enunciado: "Porque o Kauan falta aula?",
        alternativas: [
            {
                texto: "Por motivos sérios(mentira)",
                afirmacao: "afirmacao"
            },
            {
                texto: "Por preguiça",
                afirmacao: "afirmacao"
            }
            
            
        ]
    },
      {
        enunciado: "O Fernando fica jogando até três horas da manhã?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "claro",
                afirmacao: "afirmacao"
            }
            
        ]
    },
     {
        enunciado: "O Gabriel é o melhor alunos de todos?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "Sim",
                afirmacao: "afirmacao"
            }
            
            
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function() {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();
