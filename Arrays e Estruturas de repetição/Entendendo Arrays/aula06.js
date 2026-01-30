// listas ou arrays são as estruturas de dados mais simples.
// Estruturas de dados são formas de armazenar uma coleção de valores, de forma especializada e organizada para que possam ser acessadas e manipuladas de forma eficiente quando necessário

// indices       0       1        2
let alunos = ['Joao', 'Maria', 'vitor']; // aqui declaramos que a variavel aluno vai guardar um conjunto de valores, no caso, strings
// Lembrando que a posição de cada valor é uma contagem iniciada a partir do 0

// Para acessar um valor específico na lista, utilizamos o seu indice
console.log(alunos[1]); 

//Para adicionarmos um item novo ao final da lista, utilizamos o metodo push, que ja é um metodo nativo de listas js, ou pela atribuição na posição
alunos.push('pedro');
alunos[4] = 'Julia';
console.log(alunos);

//Listas podem ter determinado valor de uma posição reatribuido/subtsituido
alunos[0] = 'Ana'; 
console.log(alunos);

// Listas Js podem ter tipos diferentes de valores
alunos.push(10);
console.log(alunos); //agora temos strings e numbers em uma lista só

// Podemos remover itens da lista também, utilizando o metodo pop, que sempre remove o ultimo elemento e antes de remover retorna o valor presente na posição para q seja usado posteriormente
const aluno01 = alunos.pop();
console.log(aluno01);
console.log(alunos);

// Para removermos um valor específico podemos usar o método splice, passando o indice de onde o ponteiro da remoção deve começar e a quantidade a ser removida, podendo remover do start e contando para frente ou para trás
alunos.splice(0, 1); // vou começar pela posição 0 e vou remover 1 elemento somente, no caso, o proprio valor do indice 0
// Também podemos fazer remoções filtrando nossa lista e a reatribuindo, ou seja, pegamos apenas os elementos que queremos manter e excluimos oq nao queremos
alunos = alunos.filter((valor) => valor !== 'Julia'); // o filter recebe uma função que define o criterio de filtro, ou seja, ele automaticamente recebe o valor atual percorrido na lista como parametro e podemos trabalhar com ele
console.log(alunos)

// Podemos também saber a quantidade de elementos que a estrutura possui com o método length
console.log(alunos.length)