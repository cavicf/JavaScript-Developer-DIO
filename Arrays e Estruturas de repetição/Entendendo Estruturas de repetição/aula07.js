// Estruturas de repetição são muito úteis na manipulação de arrays, pois nos permite iterar dinamicamente sobre cada valor da lista e manipulá-los um a um

// A estrutura de repetição mais conhecida é o FOR, pois nela temos um controle bem estabelecido de onde vamos iniciar a iteração, até onde vamos e de quanto em quanto
// sua estrutura é 

for (let i = 0; i < 10; i++) { // a primeira parte declaramos uma variavel que será a responsavel por manter a iteração funcionando, dizemos em que valor ela inicia
    // a segunda parte é uma condição que, enquanto verdadeira, fara com que o bloco de codigo da estrutura seja executado. Quando a condição é desfeita, ou seja, false, o loop é interrompido e o fluxo de execução volta para o código imediatamente a seguir da estrtura
    // a terceira parte define de quanto em quanto vamos fazer essa interação, geralmente é de um a um, onde vamos somando na variavel até q ela chegue no limite da condição, mas nada impede de ser de 2 em 2 ou mais 
    console.log(i);    
}

const nome = "Camily Victal"; // strings nada mais são do que uma cadeia de caracteres, ou seja, um array de caracteres que pode ser iterado em uma estrutura de repetição
for (let i = 0; i < nome.length; i++) { // aqui nossa condição de parada é até atingir toda a quantidade de caracteres
    console.log(nome[i]); // a cada iteração, fazemos a varivel de iteração assumir a posição do array
} 


// Exemplo pratico 

function calculamedia(notas) {
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

const notas = [7, 7.5, 4, 2, 3];
let media = calculamedia(notas);
console.log(media.toFixed(2));