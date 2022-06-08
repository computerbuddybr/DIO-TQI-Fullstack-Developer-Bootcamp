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
let input = gets("Quantidade de entradas:");


let qtdEntradas = parseInt(input);
let nivelEnergia;
let inseto = 8000;
let resultado;
let htmlFinal = "";

for(let i = 0; i < qtdEntradas; i++){
    input = gets("Entrada:");
    nivelEnergia = parseInt(input);

    if(nivelEnergia > inseto){
        resultado = "Mais de 8000!";

    }else{
        resultado = "Inseto!";

    }
    print(resultado);
    htmlFinal += resultado + "<br>";
}
mostrarSaida(htmlFinal);