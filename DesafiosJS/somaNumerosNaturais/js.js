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

const A = parseInt(gets("Primeiro natural"));
const B = parseInt(gets("Segundo natural"));

function formulaProgressaoAritmetica(primeiroValor, segundoValor){
    let n;
    if(primeiroValor < segundoValor){
        n = segundoValor - primeiroValor + 1;
    } else if (primeiroValor > segundoValor){
        n = primeiroValor - segundoValor + 1;
    } else{
        return primeiroValor;
    }
     return (n * (primeiroValor + segundoValor))/2;

}

const total = formulaProgressaoAritmetica(A,B);
print(total);
mostrarSaida(total);

