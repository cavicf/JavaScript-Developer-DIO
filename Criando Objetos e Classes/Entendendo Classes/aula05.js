// Classes são formas de criar "objetos genéricos", criando um modelo de um objeto, que vamos usar posteriormente para criar as intâncias/objetos literais, seguindo aquele determinado modelo.
// Assim não precisamos repetir código a cada criação de uma nova instância daquele mesmo tipo, só atribuímos os valores que se diferenciam às respectivas chaves

class Pessoa {
    nome;
    idade;
    descrever() { // na sintaxe de classes, n precisamos decalarar como function, pois automaticamente é reconhecido como um método
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

const camily = new Pessoa(); // Dado a criação da classe, agora podemos criar instâncias dela dessa forma, portanto estamos dizendo que camily é um objeto que possui os atributos nome, idade e a ação de descrever
console.log(camily); // De primeiro momento, esses atributos vem vazios, pois ainda não fizemos a atribuição de seus valores, apenas declaramos o objeto com o formato de pessoa

camily.nome = "Camily Victal Finamor"; // agora atribuimos os valores às chaves, populando essa instância de pessoa
camily.idade = 21;
camily.descrever();

// Dessa forma podemos criar quantas instâncias quisermos, mas sem necessidade de criar um objeto individual completo por vez, pois a classe ja define o modelo
const cintia = new Pessoa();
cintia.nome = "Cintia Victal Finamor";
cintia.idade = 23;
cintia.descrever();


// Se por acaso tivermos valores padrões e obrigatórios que toda instância de uma classe precisa ter, podemos ja fazer uma atribuição desses valores no construtor da classe
// Assim, toda vez que uma instância for criada, ela atutomaticamente já virá com esses valores preenchidos, pois passa pelo constructor
class Pessoa2 {
    nome;
    idade;

    constructor() {
        this.nome = "José"; // Aqui já estamos populando as chaves nome e idade com valores padrão
        this.idade = 65;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

const jose = new Pessoa2();
jose.descrever(); // perceba que os valores ja estão preenchidos


// O construtor também pode receber parametros, o que obriga o preenchimento na hora de criar a instância
class Pessoa3 {
    nome;
    idade;

    constructor(nome, idade) { // Aqui estamos passando parametros para que no momento da criação da instância eles ja sejam passados e as chaves ja sejam populadas com eles
        this.nome = nome; 
        this.idade = idade;
        this.anoNascimento = 2026 - this.idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos e nasci em ${this.anoNascimento}`);
    }
};

const valeria = new Pessoa3("Valéria", 59); //Assim ja criamos a instância e ja populamos seu nome e idade
valeria.descrever();

// =============================================================================================================================================================================

// Funções podem receber objetos como parâmetro também, podendo manipulá-los em sua execução
function compararPessoas(p1, p2) { 
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
};

const augusto = new Pessoa3("Augusto", 21);
const camily2 = new Pessoa3("Camily", 21);
compararPessoas(camily2, augusto); 