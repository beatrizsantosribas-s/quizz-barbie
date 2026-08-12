// VARIÁVEIS DE CONTROLE
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// FUNÇÃO PARA MOSTRAR A PERGUNTA ATUAL
function mostraPergunta() {
    if (atual >= perguntas.length) {
        exibeResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

// FUNÇÃO PARA CRIAR OS BOTÕES DAS ALTERNATIVAS
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// FUNÇÃO AO CLICAR EM UMA ALTERNATIVA
function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

// FUNÇÃO PARA EXIBIR O RESULTADO FINAL
function exibeResultado() {
    caixaPerguntas.textContent = "Em 2026, a sua jornada na Barbieland foi assim:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

// INICIA O QUIZ
mostraPergunta();
