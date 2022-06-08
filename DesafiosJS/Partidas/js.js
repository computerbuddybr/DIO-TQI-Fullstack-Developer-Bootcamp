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
let n = parseInt(gets("Número de equipes"));
let totalMatches = 0;
//Variável para guardar o número de partidas em cada etapa
let partidas = [];

//Função para alterar a informação de número de partidas e de equipes ainda no torneio
function calcularPartidas(numeroEquipes){
    if(numeroEquipes % 2 == 0){
       partidas.push(numeroEquipes/2);
        n = numeroEquipes/2;
    } else {
        partidas.push((numeroEquipes - 1)/2);
        n = ((numeroEquipes - 1)/2) + 1;
    }
}
while(n > 1){
    calcularPartidas(n);
}
partidas.forEach(quantidade => {totalMatches += quantidade});
print(totalMatches);
mostrarSaida(totalMatches);
