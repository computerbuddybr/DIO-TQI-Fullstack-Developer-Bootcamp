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

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for (let i = 0; i < array.     ; i++){
    if (                      ){
        print(array[  ]);
    }
}
