const isBlue = true; // Existe o tipo de variável boolean, que define se algo é verdadeiro ou falso, muito utilizado na computação na formação de lógicas condicionais
const isRed = false; 

// Para criar uma condição, utilizamos operadores lógicos como >, <, >=, <=, ===, !=. Esses operadores nos permitem fazer uma pergunta que será respondida com verdadeiro ou falso, criando uma comparação entre declarações
const number = 10;
const isEven = (number % 2) === 0; // o operador % significa o resto da divisão, ou seja, dividimos o primeiro numero pelo segundo e pegamos o resto da divisão deles

console.log(isEven);

// Em JS temos dois 2 tipos de operadores de igualdade: == ou ===
// O == faz uma comparação superficial sem comparar a tipagem do valor, como no caso abaixo, onde ele retorna que os valores são iguais mas não leva em conta que são tipos diferentes
console.log('10' == 10);
// Já o === faz uma comparação mais profunda, levando em conta tanto o valor quanto o tipo, então no mesmo exemplo agora ele retorna false, pois um é do tipo string e outro number
console.log('10' === 10);

// Podemos criar estruturas de condição, que nos permitem tomar diferentes caminhos dependendo do retorno de uma condição, ou seja, nos permite tratar de diferentes casos
if (isEven) { //o bloco do if é aquele que confere se a condição é verdadeira, caso for, ela executa seu bloco de comandos
    console.log('é par');
} else { // caso a condição não seja atendida, caímos no bloco do else, que executa um outro bloco de comandos para tratar esse caso
    console.log('é imapar');
}

// podemos também fazer uma negação da expressão, ou seja, ele transforma o resulto booleano em seu contrário
if (!isEven) { // aqui estamos vendo se o numero não é par, ou seja, estamos negando uma condição que deveria ser verdadeira, mas se ela for de fato falsa, então imprimimos
    console.log('é impar')
}


// temos também o else if, que nos permite criar mais de uma condição a ser testada, podendo criar quantas quisermos
const numberIsDivisibleBy5 = (number % 5) === 0;

if (number === 0) { // testamos primeiro uma regra hipotética de que não se pode conferir numeros iguais a 0, é nossa condição de partida
    console.log('Numero invalido');
} else if (numberIsDivisibleBy5) { // caso n seja 0, então podemos verificar se ele é de fato divisivel por 5
    console.log('é divisivel');
} else { // ou se não é
    console.log('não é divisivel');
}