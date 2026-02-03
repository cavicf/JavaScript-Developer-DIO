// 1) Crie um programa que dado um número, imprima sua tabuada

function calcularTabuada(numero, resultado) {
    for (let i = 1; i <= 10; i++) {
        resultado[i] = numero * i; // em objetos, podemos criar dinamicamente uma nova chave com seu valor através de colchetes e uma variavel auxiliar como o i
    }
    return resultado;
}

const numero = 2;
const resultado = {};
console.log(calcularTabuada(numero, resultado));
