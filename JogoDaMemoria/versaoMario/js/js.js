//Inicializando as variáveis necessárias para o placar
let totalAttempts = 0;
let bestAttempts = 200;
let currentAttempts = 0;
let currentScore = 10;
let totalScore = 0;
let bestScore = 0;
let points = 10;
let penalty = 5;

//Variável que vai controlar se o jogo acabou
let numberOfMatches = 0;
let totalNumberOfMatches = 6;

//Incializando as variáveis para mostrar o placar
let scoreboardTotalScore = document.getElementById("totalScore");
let socreboardBestScore = document.getElementById("bestScore");
let scoreboardCurrentScore = document.getElementById("currentScore");
let socreboardTotalAttempts = document.getElementById("totalAttempts");
let scoreboardBestAttempts = document.getElementById("bestAttempts");
let scoreboardCurrentAttemts = document.getElementById("currentAttempts");

//Inicializando a variável para controlar um novo jogo
let playAgainButton = document.getElementById("playAgain");
let canPlayAgain = false;

//Inicializando variáveis de jogo
const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

/**
 * Função que adiciona pontos ao encontrar cartas iguais
 */
function gainPoints() {
    currentScore += points;
}

/**
 * Penaliza por errar cartas
 */
function penalize() {
    currentScore -= penalty;
}

/**
 * Reseta as variáveis que contabilizam os pontos e tentativas atuais, assim como as variáveis de controle para um novo jogo. Também reseta o placar.
 */
function resetScoreBoardAndControl(){
    currentAttempts = 0;
    currentScore = 10;
    numberOfMatches = 0;
    canPlayAgain = false;
    updateCurrentScoreboard();

}

/**
 * Verifica se o jogo continua ou se ganhou e retorna false se acabou e true se contínua. Atualiza os placares respectivos.
 * @returns {boolean}
 */

function checkIfGameContinues() {
    if (numberOfMatches === totalNumberOfMatches) {
        playAgainButton.classList.remove("disabled");
        canPlayAgain = true;
        updateScoreboardsOnGameOver();
        return false;
    } else {
        updateCurrentScoreboard();
        return true;
    }
}


/**
 * Atualiza a informação de pontos e tentativas para o final do jogo
 */
function updateScoreboardsOnGameOver() {
    //Verifica se a jogada atual foi a melhor em pontuação ou tentativas
    if (currentAttempts < bestAttempts) {
        bestAttempts = currentAttempts;
    }
    if (currentScore > bestScore) {
        bestScore = currentScore;
    }

    //Soma pontuação e tentativas ao total
    totalScore += currentScore;
    totalAttempts += currentAttempts;

    //Atualiza os placares ao fim do jogo
    updateCurrentScoreboard();
    updateTotalScoreboard();

}

/**
 * Atualiza o placar de pontos do Jogo atual
 */
function updateCurrentScoreboard() {
    scoreboardCurrentScore.innerHTML = currentScore;
    scoreboardCurrentAttemts.innerHTML = currentAttempts;
}

/**
 * Atualiza o placar de pontos dos melhores jogos
 */
function updateTotalScoreboard() {

    scoreboardTotalScore.innerHTML = totalScore;

    socreboardBestScore.innerHTML = bestScore;
    socreboardTotalAttempts.innerHTML = totalAttempts;
    if(bestAttempts === 200){
        scoreboardBestAttempts.innerHTML = "Não aplica";
    } else {
        scoreboardBestAttempts.innerHTML = bestAttempts;
    }

}



//Jogo



//função para virar carta
function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

/**
 * Verifica se as cartas são iguais e pontua, além de alterar controle de jogo
 */
function checkForMatch() {
    currentAttempts++;
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        gainPoints();
        numberOfMatches++;
        updateCurrentScoreboard();
        checkIfGameContinues();
        return;
    }

    if(currentAttempts > 2){
        penalize();

    }
    updateCurrentScoreboard();

    unflipCards();
}

//função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

/**
 * Desvira as cartas
 */
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

/**
 * Reseta o tabuleiro
 */
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/**
 * Embaralha as cartas
 */
function shuffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
}

/**
 * Joga o jogo
 */
function playGame(){
    updateTotalScoreboard();
    updateCurrentScoreboard();
    playAgainButton.classList.add("disabled");
    shuffle();

//adiciona evento de clique na carta
    cards.forEach((card) => {
        card.addEventListener('click', flipCard)
    });
}

/**
 * Recomeça o jogo
 */
function newGame(){
    if(canPlayAgain){
        for(let card of cards){
            card.classList.remove('flip');
        }
        resetBoard();
        resetScoreBoardAndControl();
        playGame();
    }
}


//Jogando

playGame();

playAgainButton.addEventListener('click', newGame);



