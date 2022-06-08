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
let array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];
let html = "";

for (let i = 0; i < array.length; i++){
    if ( array[i] % 2 == 0){
        print(array[i]);
        html += array[i] + "<br>";
    }
}

mostrarSaida(html);
//Outra opção
html += "Segunda opção:<br>";
console.log("Segunda opção:");
array.forEach(elemento => {
    if(elemento % 2 == 0){
        print(elemento);
        html += elemento + "<br>";
    }
});
mostrarSaida(html);
