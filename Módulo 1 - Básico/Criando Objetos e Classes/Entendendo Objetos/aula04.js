// Um objeto pode ser entendido como uma váriavel que guarda não apenas um único valor, mas uma coleção dinâmica de dados que são identificados por uma chave e possuem seu valor correspondente
// Assim, podemos acessar um valor especifico daquele conjunto de dados do objeto, através de sua chave.
// Objetos podem representar entidades, com o conjunto de atributos necessários para representar determinado contexto
const pessoa = {
    nome: 'Camily Victal Finamor',
    idade: 21,
    cargo: 'desenvolvedora frontend'
};

console.log(pessoa.nome); // Fazendo a chamada do valor de um atributo específico do objeto
console.log(pessoa.idade);
console.log(pessoa); // Podemos imprimir também o objeto todo, mostrando suas coleções de chave e valor

pessoa.altura = 1.55; // Depois de criado, o objeto também pode ser incrementado, adicionando uma nova chave com seu valor correspondente, por isso é dinâmico
console.log(pessoa);

delete pessoa.cargo; //Assim como podemos incrementar, também podemos remover um par de chave-valor do objeto

// Além de valores literais, também podemos atribuir funções aos objetos, que comumente são conhecidas por métodos, que fazem algum tipo de execução coerente com aquele contexto
pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); // Como estamos manipulando valores que estão dentro so próprio objeto onde o método também é declarado, usamos o prefixo this que assume e faz referencia ao objeto em si
}
pessoa.descrever(); // Assim podemos fazer a chamada do método através do objeto para executá-lo


const atributo = 'idade';
console.log(pessoa[atributo]); // Podemos acessar também dinamicamente o atributo de um objeto através de strings, ou seja, usando notação de coleção, passando o nome da chave entre colchetes