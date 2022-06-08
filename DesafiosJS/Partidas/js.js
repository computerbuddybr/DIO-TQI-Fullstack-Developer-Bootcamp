//Minha implementação do print para testes
function print(variavel){
    console.log(variavel)
}
//Minha implementação do gets(). Não usar no desafio. O gets() já é implementado no sistema
function gets(pergunta) {
    let valor = prompt(pergunta);
    while (isNaN(valor) && valor >= 1) {
        valor = prompt("Você não digitou um número válido. Favor digitar um número maior ou igual a 1.");
    }
    return valor;
}

//capturando div saida
let saida = document.getElementById("saida");
//para mostrar a saida no html
function mostrarSaida(valor){
    saida.innerHTML = valor;
}

//Desafio:
