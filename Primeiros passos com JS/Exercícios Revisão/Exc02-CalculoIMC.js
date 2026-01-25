/*     
    2) O IMC - Indice de massa corporal - é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta

    Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

    IMC em adultos:
    - Abaixo de 18.5 - abaixo do peso;
    - Entre 18.5 e 25 - peso normal;
    - Entre 25 e 30 - acima do peso;
    - Entre 30 e 40 - obeso;
    - Acima de 40 - obesidade grave;
 */

const weigth = 47;
const height = 1.55;

let imc = weigth / (Math.pow(height, 2)); //Math é a biblioteca nativa do JS de funções matemáticas, e o pow seria o metodo de potencia, onde como parametro recebemos o valor e em seguida a potencia que queremos elevar aquele valor
console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('obeso');
} else {
    console.log('obesidade grave');
}