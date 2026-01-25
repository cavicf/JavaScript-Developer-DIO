/* 
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida para efetuar o cálculo adequado.

    Código condição de pagamento:
    1 - A vista Débito - recebe 10% de desconto;
    2 - A vista no Dinheiro ou PIX - recebe 15% de desconto;
    3 - Em duas vezes, preço normal da etiqueta sem juros;
    4 - Acima de duas vezes - preço normal de etiqueta mais juros de 10% 
*/

const productPrice = 100;
let payMethod = 4;

let finalCost = 0;

if (payMethod === 1) {
    finalCost = productPrice - (productPrice * 0.1);
} else if (payMethod === 2) {
    finalCost = productPrice - (productPrice * 0.15);
} else if (payMethod === 3) {
    finalCost = productPrice;
} else {
    finalCost = productPrice + (productPrice * 0.1);
}

console.log(finalCost)