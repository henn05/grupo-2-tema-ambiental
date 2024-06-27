const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Qual das seguintes opções ajuda a reduzir a poluição do ar?",
        alternativas: ["Usar transporte público ou bicicleta", "Aumentar o uso de veículos individuais"],
    },
    {
        enunciado: "O que é mais sustentável em termos de consumo de água?",
        alternativas: ["Tomar banhos mais longos", "Usar um regador para irrigar o jardim de forma controlada"],
    },
    {
        enunciado: "Qual ação contribui mais para a preservação da biodiversidade?",
        alternativas: ["Desmatamento indiscriminado", "Conservação de habitats naturais"],
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    if (atual < perguntas.length) {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    } else {
        caixaPerguntas.textContent = '';
        caixaAlternativas.innerHTML = '';
        caixaResultado.textContent = "Você respondeu todas as perguntas! Sua história: $(historiaFinal)";
    }
}

function mostraAlternativas(alternativas) {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    perguntaAtual.alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener('click', () => {
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada + ' ';
    atual++;
    mostraPergunta();
}

mostraPergunta();