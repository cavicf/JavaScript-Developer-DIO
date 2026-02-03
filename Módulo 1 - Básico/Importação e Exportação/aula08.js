// A forma de importação e exportação mais simples do node é utilizando require e module.exports, pois não demandam de configurações a mais como um import e export demandariam

// Na primeira importaçã, o node executa aquele arquivo e guarda em um "cache" o resultado que é o objeto das funções. Assim, quando importamos novamente, ele busca esse cache e não executa novamente.
const funcoes = require('./funcoesAux'); // aqui estamos importando as funções que foram exportadas pelo outro arquivo

let texto = funcoes.gets(); // Dessa forma conseguimos utilizar as funções que estavam no outro arquivo aqui, separando responsabilidades
funcoes.print(texto);

// Como o que exportamos no outro arquivo é basicamente um objeto com funções, podemos fazer aqui no arquivo de importação o que chamamos de object destructure
const { gets, print } = require('./funcoesAux'); // assim eu declaro variaveis que vão receber diretamente as respectivas funções que vieram de lá e usá-las diretamente
print(gets());
