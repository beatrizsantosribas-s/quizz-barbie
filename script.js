const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de chegar a Barbieland e descobre que pode escolher qualquer profissão do mundo para iniciar sua jornada. O que você pensa logo de cara?",
        alternativas: [
            {
                texto: "Isso é um pouco confuso, são muitas opções!",
                afirmacao: "No início, ficou em dúvida sobre qual caminho seguir diante de tantas possibilidades."
            },
            {
                texto: "Isso é incrível, eu posso ser o que eu quiser!",
                afirmacao: "Abraçou com entusiasmo a ideia de explorar diferentes carreiras e talentos."
            }
        ]
    },
    {
        enunciado: "Para o seu primeiro grande projeto, a Barbie Presidente pediu a sua ajuda na organização do Grande Festival de Barbieland. Como você decide planejar o evento?",
        alternativas: [
            {
                texto: "Usa um aplicativo moderno de organização para otimizar as tarefas e criar rotinas rápidas.",
                afirmacao: "Conseguiu usar a tecnologia para planejar tudo com muita eficiência."
            },
            {
                texto: "Reúne as amigas para conversar, anotar as ideias em um caderno e planejar tudo juntas.",
                afirmacao: "Preferiu confiar na criatividade coletiva e no trabalho em equipe tradicional."
            }
        ]
    },
    {
        enunciado: "Durante os preparativos, surge um debate sobre o figurino do festival: inovação com tecidos futuristas ou o clássico visual cor-de-rosa fashion dos anos 80?",
        alternativas: [
            {
                texto: "Defende o visual futurista, trazendo inovação e novas tendências para a moda local.",
                afirmacao: "Trouxe modernidade para o estilo da cidade e inspirou novos designers."
            },
            {
                texto: "Defende o estilo clássico cor-de-rosa, valorizando a história e a identidade icônica da Barbieland.",
                afirmacao: "Preservou a essência clássica que todos amam com muito brilho e elegância."
            }
        ]
    },
    {
        enunciado: "Na hora de criar os convites digitais do festival, você precisa decidir como vai desenhar a arte principal. Qual é a sua escolha?",
        alternativas: [
            {
                texto: "Desenhar manualmente em um programa de pintura digital.",
                afirmacao: "Mostrou suas habilidades artísticas e inspirou outras pessoas a expressarem sua arte de forma autoral."
            },
            {
                texto: "Utilizar ferramentas de design prontas para criar algo rápido e estilizado.",
                afirmacao: "Otimizou o tempo e ensinou a comunidade a criar artes bonitas de forma rápida."
            }
        ]
    },
    {
        enunciado: "Chegou o dia do festival, mas um problema técnico desligou o som do palco principal minutos antes do show da Barbie Popstar! O que você faz?",
        alternativas: [
            {
                texto: "Assume o microfone manual e organiza um show acústico inesquecível com a plateia.",
                afirmacao: "Provou que com improviso e alegria, qualquer imprevisto vira um momento especial."
            },
            {
                texto: "Usa seus conhecimentos técnicos para consertar a mesa de som e salvar o show original.",
                afirmacao: "Resolveu o problema técnico rapidamente, garantindo que o espetáculo continuasse perfeito."
            }
        ]
    }
];
