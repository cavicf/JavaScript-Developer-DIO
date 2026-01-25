// Funções são blocos de código que fazem a execução de alguma coisa. São muito uteis pois podem fazer execuções padronizadas, mas genericas, que podem ser chamadas quantas vezes necessário sem que haja repetição de código.
// Podem receber parametros para manipular esses valores distintos conforme o necessário

// Temos essas funções que não retornam nada, chamadas de procedimentos, onde elas fazem alguma execução instantanea, mas n devolvem nada ao fluxo de código posterior
function teste() { //exemplo de uma função sem parametro, que apenas executa algo sem necessidade de manipular algum valor externo
    console.log('teste');
}
teste();


function sayMyName(name) { //Exemplo de função com parametro. Aqui recebemos qualquer nome e imprimimos ele com uma mensagem, essa função pode ser chamada quantas vezes for necessário e com qualquer nome que quisermos
    console.log('Your name is ' + name); // o mais entre strings representa concatenação de caracteres, então eles serão juntados em uma unica string final
}
sayMyName('Camily');

// =========================================================================================================================================================================================================================

// Aqui ja temos funções com retorno, onde elas fazem a execução de suas tarefas, e devolvem ao fluxo de código original algum tipo de resultado para que ele possa tratar / manipular
function pow(value) {
    return value * value;
}
let result = pow(10); // como aqui, estamos guardando o resultado da execução dessa função em uma variavel que pode utilizar desse valor para algo posteriormente
console.log(result);

function incrementarJuros( valor, percentualJuros) { // importante atentar que os valores passados no parametro devem respeitar a ordem que a função os recebe
    return valor + ((percentualJuros/100) * valor);
}
console.log(incrementarJuros(100, 10));

// =========================================================================================================================================================================================================================

// Assim como em outras linguagens de programação, para organizarmos nossas funções e separá-las do fluxo principal, criamos uma função central que conterá o fluxo de código principal onde acontecem as chamadas de outras funções e demais lógicas da aplicação
// Essa função é chamada popularmente de main() justamente por ser esse fluxo principal (temos somente 1 main para cada algoritmo que desenvolvemos)

function main() {
    console.log('Programa principal');
    let price = incrementarJuros(150, 20);
    console.log(price);
}

main(); //sempre chamamos a função main ao final para que esse fluxo principal seja executado

// =========================================================================================================================================================================================================================

// EXEMPLO PRÁTICO DE FUNÇÕES, USANDO O EXERCICIO DE IMC FEITO ANTERIORMENTE

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function avaliarIMC(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'obeso';
    } else {
        return 'obesidade grave';
    }
}

function main() { // função principal que faz as chamadas de funções auxiliares e define a lógica central do algoritmo
    const weigth = 47;
    const height = 1.55;

    let imc = calcularIMC(weigth, height);
    console.log(imc);

    let avaliacao = avaliarIMC(imc);
    console.log(avaliacao);
}

main();

// =========================================================================================================================================================================================================================

// Funções JS são como se fossem objetos, os quais conseguimos manipular como valores, variaveis
// Assim conseguimos reatribuir os valores delas/blocos de código, conseguimos passar funções como parametro de outras funções e muito mais

let main2 = main // Aqui estamos dizendo que a variavel recebe o mesmo escopo de execução da função main, podendo ser usada para chamar a execução também

// As coisas entre parenteses em JS são chamadas imediatas, eles obrigam a execução naquele momento onde foi chamada, sendo colocado como prioridade no fluxo de execução
(function () { 
    const weigth = 47;
    const height = 1.55;

    let imc = calcularIMC(weigth, height);
    console.log(imc);

    let avaliacao = avaliarIMC(imc);
    console.log(avaliacao);
})(); // assim, colocando a função envolta de parenteses e fazendo sua chamada, estamos fazendo sua execução imediata, ou seja, ela foi criada e já executada imediatamente
// Usamos bastante isso na web, para isolar escopos que queremos executar apenas uma vez. Podemos usar para o main também por exemplo, pois executamos o fluxo principal uma unica vez. Seria uma função "anônima"
