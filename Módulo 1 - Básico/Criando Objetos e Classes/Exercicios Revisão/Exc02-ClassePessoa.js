/* 2) Cire uma classe para representar pessoas
    Para cada pessoa teremos os atributos nome, peso e altura
    As pessoas devem ter a capacidade de dizer o valor do seu IMC. 
    Instancie uma pessoa chamada josé, que tenha 70kg e altura de 1.75 e peça ao José para dizer o valor de seu IMC
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    dizerIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC() {
        const imc = this.dizerIMC();
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
};

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.dizerIMC().toFixed(2));
console.log(jose.classificarIMC())