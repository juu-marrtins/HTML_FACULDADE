let num01 = Number (prompt("Digite o 1° número: "));
let num02 = Number (prompt ("Digite o 2° número: "));
let operador = prompt ("Descreva a operação desejada: ");
let result;

function calculadora(num01, num02, operador){
    if (operador == "Soma"){
        return result = (num01+num02)
    } else if (operador == "Subtração"){
        return result = (num01-num02)
    } else if (operador == "Multiplicação"){
        return result = (num01*num02)
    } else if (operador == "Divisão"){
        return result = (num01/num02)
    } else {
        return result = "Operador Inválido"
    }
}

calculadora(num01, num02, operador);

console.log("Operador selecionado: " + operador + ". \nNúmeros escolhidos: " + num01 + " e " + num02 + ". \nResultado: " + result + ".");