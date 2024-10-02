console.log("Exercicio 01 - Maioridade.");

let idadeUsuario = 14;
const idadeBase = 18;

if (idadeUsuario < 18){
    console.log("Você é menor de idade.")
} else {
    console.log("Você é maior de idade.")
}

console.log("Exercicio 02 - Impar Par.");

function verificarParOuImpar() {
    let num = 56;
    if (num%2==0) {
        return console.log("O número " + num + " é par.")
    } else{
        return console.log("O número " + num + " é impar.")
    }
}

verificarParOuImpar();

console.log("Exercicio 03 - N° Positivo, Negativo, Zero.")

let numExTres = -8;

if (numExTres == 0){
    console.log("Zero.")
} else if (numExTres > 0) {
    console.log("Número Positivo.")
} else{
    console.log("Número Negativo.")
}

console.log("Exercício 04 - Tabuada.")

function tabuada() {
    numTabuada = 70;
    for (let i = 1; i < 11; i++) {
        let resultado = numTabuada * i;
        console.log(numTabuada + " x " + i + " = " + resultado);
    }

}

tabuada();