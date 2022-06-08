//Minha implementação do print para testes
function print(variavel){
    console.log(variavel)
}
//Minha implementação do gets(). Não usar no desafio. O gets() já é implementado no sistema
function gets(pergunta) {
    let valor = prompt(pergunta);
    return valor;
}

//capturando div saida
let saida = document.getElementById("saida");
//para mostrar a saida no html
function mostrarSaida(valor){
    saida.innerHTML = valor;
}

//Desafio:
let input = gets("Quantos treinos deseja inserir?");

let qtdEntradas = parseInt(input);
let melhor = 999;


for(let i = 0; i < qtdEntradas; i++){
    input = gets("Qual o tempo do treino?");
    let tempo = parseFloat(input);
    if (tempo < melhor) melhor = tempo;

}
print(melhor);
mostrarSaida(melhor);
