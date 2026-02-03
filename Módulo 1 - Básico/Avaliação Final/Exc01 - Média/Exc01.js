/* 
    1) Faça um programa que receba a média de um aluno 
    Caso a média seja < 5, imprima "reprovado"
    Caso a media seja >= 5 e < 7 imprima "recuperação"
    Caso a media seja >= 7 imprima "aprovado"
 */

const { gets, print } = require('./funcoesAux');

(function () {

    const media = gets();

    if (media >= 0 && media < 5) {
        print('Reprovado');
    } else if (media >= 5 && media < 7) {
        print('Recuperação');
    } else if (media >= 7) {
        print('Aprovado');
    } else {
        print('Numero invalido');
    }

})();