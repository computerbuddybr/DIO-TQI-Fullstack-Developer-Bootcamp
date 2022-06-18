//Inicializando as variáveis necessárias para o placar
let tentativasTotal = 0;
let tentativasMelhor = 200;
let tentativasAtual = 0;
let pontuacaoAtual = 10;
let pontuacaoTotal = 0;
let pontuacaoMelhor = 0;
let pontos = 10;
let penalidade = 5;

//Variável que vai controlar se o jogo acabou
let numeroDeCombinacoesCertasJogo = 0;
let numeroPossivelDeCombinacoesCertas = 6;

//Incializando as variáveis para mostrar o placar
let placarPontuacaoTotal = document.getElementById("pontuacaoTotal");
let placarPontuacaoMelhor = document.getElementById("pontuacaoMelhor");
let placarPontuacaoAtual = document.getElementById("pontuacaoAtual");
let placarTentativasTotal = document.getElementById("tentativasTotal");
let placarTentativasMelhor = document.getElementById("tentativasMelhor");
let placarTentativasAtual = document.getElementById("tentativasAtual");

//Inicializando a variável para controlar um novo jogo
let botaoJogarNovamente = document.getElementById("jogarNovamente");
let novoJogoPossivel = false;

/**
 * Função que adiciona pontos ao encontrar cartas iguais
 */
function pontuar() {
    pontuacaoAtual += pontos;
}

/**
 * Penaliza por errar cartas
 */
function penalizar() {
    pontuacaoAtual -= penalidade;
}

/**
 * Verifica se o jogo continua ou se ganhou e retorna false se acabou e true se contínua. Atualiza os placares respectivos.
 * @returns {boolean}
 */

function verificarSeJogoContinua() {
    if (numeroDeCombinacoesCertasJogo === numeroPossivelDeCombinacoesCertas) {
        botaoJogarNovamente.classList.remove("desativa");
        novoJogoPossivel = true;
        atualizarPontosPlacarAoFimDeJogo();
        return false;
    } else {
        atualizarPlacarAtual();
        return true;
    }
}


/**
 * Atualiza a informação de pontos e tentativas para o final do jogo
 */
function atualizarPontosPlacarAoFimDeJogo() {
    //Verifica se a jogada atual foi a melhor em pontuação ou tentativas
    if (tentativasAtual < tentativasMelhor) {
        tentativasMelhor = tentativasAtual;
    }
    if (pontuacaoAtual > pontuacaoMelhor) {
        pontuacaoMelhor = pontuacaoAtual;
    }

    //Soma pontuação e tentativas ao total
    pontuacaoTotal += pontuacaoAtual;
    tentativasTotal += tentativasAtual;

    //Atualiza os placares ao fim do jogo
    atualizarPlacarAtual();
    atualizarPlacarTotal();

}

/**
 * Atualiza o placar de pontos do Jogo atual
 */
function atualizarPlacarAtual() {
    placarPontuacaoAtual.innerHTML = pontuacaoAtual;
    placarTentativasAtual.innerHTML = tentativasAtual;
}

/**
 * Atualiza o placar de pontos dos melhores jogos
 */
function atualizarPlacarTotal() {

    placarPontuacaoTotal.innerHTML = pontuacaoTotal;

    placarPontuacaoMelhor.innerHTML = pontuacaoMelhor;
    placarTentativasTotal.innerHTML = tentativasTotal;
    if(tentativasMelhor === 200){
        placarTentativasMelhor.innerHTML = "Não aplica";
    } else {
        placarTentativasMelhor.innerHTML = tentativasMelhor;
    }

}

/**
 * Função que embaralha as cartas
 * @param lista
 * @returns {*}
 */
function embaralhar(lista) {
    let temporario;
    let aleatorio;


    for (let i = lista.length - 1; i !== 0; i--) {

        aleatorio = Math.floor(Math.random() * i);

        temporario = lista[i];
        lista[i] = lista[aleatorio];
        lista[aleatorio] = temporario;

    }
    return lista;
}


/**
 * Função que vira as cartas para que somente o verso apareça
 * @param carta
 */

function ocultar(carta) {
    carta.style.backgroundImage = "url('imagens/jogo/verso.png')";
    carta.onclick = clicar;
}

/**
 * Função que mostra a carta
 * @param carta
 */

function mostrar(carta) {
    carta.style.backgroundImage = `url('imagens/jogo/${concatImagens[Number(carta.id)]}')`;
    carta.onclick = null;
}

/**
 * Função que para o click nas cartas
 */
function pararClique() {
    for (let carta of cartas) {
        carta.onclick = null;
    }
}

/**
 * Função chamada ao clicar nas cartas
 */
function clicar(event) {
    mostrar(event.target);
    if (primeiraCarta) {
        segundaCarta = event.target;
        pararClique();
        verificarIgualdade();
    } else {
        primeiraCarta = event.target;
    }
}

/**
 * Função que verificase a carta pode ser clicada ou deve ser oculta
 */
function continuarCliques() {
    for (let carta of cartas) {
        if (!carta.classList.contains('ok')) {
            ocultar(carta);
        }
    }
}

/**
 * Função que verifica se as cartas são iguais
 */
function verificarIgualdade() {
    tentativasAtual++;

    if (primeiraCarta.style.backgroundImage !== segundaCarta.style.backgroundImage) {
        if (tentativasAtual > 2) {
            penalizar();
            atualizarPlacarAtual();
        }

        setTimeout(function () {
            ocultar(primeiraCarta);
            ocultar(segundaCarta);
            novaJogada();
        }, 1500);

    } else {
        primeiraCarta.classList.add('ok');
        segundaCarta.classList.add('ok');
        pontuar();
        numeroDeCombinacoesCertasJogo++;
        atualizarPlacarAtual();
        if (verificarSeJogoContinua()) {
            novaJogada();
        }

    }


}

/**
 * Função que inicia uma nova jogada após uma tentativa
 */
function novaJogada() {
    primeiraCarta = null;
    segundaCarta = null;
    continuarCliques();
}

/**
 * Função que joga
 */
function jogar() {
    for (let carta of cartas) {
        mostrar(carta);
    }

    setTimeout(function () {
        novaJogada();
    }, 3000);
}

/**
 * Função que inicia um novo jogo ao clicar no botão Novo Jogo
 */
function novoJogo() {
    if (novoJogoPossivel) {
    //Resetar cartas
    for (let carta of cartas) {
        carta.classList.remove('ok');
    }

    //Reseta pontuação e tentativas para novo jogo, botão e variável de controle

    botaoJogarNovamente.classList.add("desativa");
    numeroDeCombinacoesCertasJogo = 0;
    novoJogoPossivel = false;
    pontuacaoAtual = 10;
    tentativasAtual = 0;
    atualizarPlacarAtual();
    concatImagens = embaralhar(concatImagens);
    jogar();
    }
}


//Iniciando o jogo
atualizarPlacarAtual();
atualizarPlacarTotal();

let cartas = document.querySelectorAll('.cartas');

let primeiraCarta;
let segundaCarta;

let imagens = ['rafiki.png', 'scar.png', 'shenzi.png', 'simba.png', 'timao.png', 'zazu.png'];

let concatImagens = imagens.concat(imagens);

concatImagens = embaralhar(concatImagens);
jogar();

botaoJogarNovamente.addEventListener('click', novoJogo);



