/* 
    2) Faça um programa que receba N (quantidade de numeros) e seus respectivos valores.
    IMprima o maior valor par e o menor valor impar entre eles 
*/

const { gets, print } = require('./funcoesAux');

function maiorParMenorImpar(n) {
    let maior = 0;
    let menor = 0;

    for (let i = 0; i < n; i++) {
        let valorAtual = gets()
        if (valorAtual % 2 === 0) {
            maior = valorAtual > maior ? valorAtual : maior;
        } else {
            menor = menor === 0 || valorAtual < menor ? valorAtual : menor;
        }
    }

    return {maior, menor}; // para reotornar mais de um valor em uma função, podemos tranformá-la em objeto
}

(function () {
    const n = gets();

    const { maior, menor } = maiorParMenorImpar(n); // e desestruturar o retorno em variaveis respctivas na ordem do retorno

    print(`maior valor par é: ${maior}`);
    print(`menor valor impar é: ${menor}`)
})();