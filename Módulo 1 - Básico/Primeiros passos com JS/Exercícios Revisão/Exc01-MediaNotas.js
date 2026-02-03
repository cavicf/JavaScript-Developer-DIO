/* 
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima sua média e a sua classificação conforme a tabela abaixo.
    Classificação: 
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7. passou de semestre;
*/

const score1 = 7;
const score2 = 6.5;
const score3 = 3.9;

let mean = (score1 + score2 + score3) / 3;
console.log(mean.toFixed(2));

if (mean < 5) {
    console.log('Aluno reprovado');
} else if (mean >= 5 && mean <= 7) {
    console.log('Aluno em recuperação');
} else {
    console.log('Aluno aprovado');
}