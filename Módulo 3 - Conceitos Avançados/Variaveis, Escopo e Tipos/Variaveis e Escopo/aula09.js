// Vale lembrar que em JS as variaveis são case sensitive, ou seja, importa se escrevemos com letra maiuscula ou minuscula e também são fracamente tipadas, ou seja, ele mesmo tenta associar um tipo à variavel com base no que ela guarda

var var1 = 10;
var var2 = 'teste';
console.log(var1 + var2); // para exemplificar, estamos tentando fazer uma operação com uma string e um number. O js vai sempre tentar converter pra algo que ele consiga fazer, aqui no caso o 10 se tornará um string e será concatenado com a var2

// Hoisting em JS é um conceito de içamento de declarações, ou seja, o JS em tempo de execução tentará levar todas as suas declarações para o topo do arquivo, o que nos permite
// fazer a chamada de uma função mesmo antes declarar ela. Entretanto no caso de variaveis temos que tomar cuidado, pois a declaração delas vai pro topo, mas a atribuição de valores
// não, então se utilizarmos uma variavel pra guardar um função e tentar executar ela antes da atribuição do valor, teremos erro

teste();
function teste() {
    console.log('isso funciona, pois a função por si só vai pro topo do arquivo');
}

teste2();
var teste2 = function () {
    console.log('Isso dá erro, pq só a declaração de var teste2 vai pro topo, a atribuição da função fica, então ao tentar executar temos o erro de que teste2 não é function');
}

// Para entendermos a diferença entre var, let e const, o conceito de hoisting entra para fazer essa diferenciação, juntamente com o contexto de escopos.
// Var é o tipo que mais sofre hoisting, portanto ela funciona como no conceito de variaveis globais, onde sua declaração sempre vai ser movida pro topo do arquivo e podendo ser
// usada em qualquer parte do código, independentemente se estamos dentro de um escopo ou não, exceto quando ela é declarada dentro do escopo de uma função

if (true) {
    var exemploVar = 10;
}
console.log(exemploVar); // Isso funciona mesmo que a variavel tenha sido declarada dentro do escopo do if, agr se no lugar de if tivessemos uma função, isso ja n funcionaria
// devido ao hoisting, pois no caso do if a declaração do var vai pro topo do arquivo então conseguimos usar ela depois, já no caso de função, o bloco todo da função vai, então não conseguimos acessar o q tem dentro desse bloco

// Já o let é um tipo de variável que se restringe sempre ao escopo onde foi declarado, ele não sofre de hoisting a nivel global, apenas a nivel do escopo onde ele está.
// Então se declaramos o let dentro de um escopo, fora dele não teremos acesso a essa variável, ela existe apenas em seu bloco
if (true) {
    let exemploLet = 10; // assim só consigo usar essa variavel dentro desse bloco do if
}

// o const é a mesma ideia do let, ele se restringe apenas ao escopo onde foi declarado, mas a diferença dele para o let é que ele não pode ter seu valor modificado
// ou seja, ele é verdadeiramente uma constante imutável. Já o let e o var podem ter seus valores modificados e reatribuidos

if (true) {
    const exemploConst = 10; // assim essa variavel sempre terá o valor 10, nunca podendo ser mudada
}



