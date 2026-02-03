/* 
    Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
    Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado

    Dados de entrada:
    5
    50
    10
    98
    23

    saida:
    98
 */

const { informarMax, gets, print } = require('./informarMax');

(function() {

    print(informarMax());

})();