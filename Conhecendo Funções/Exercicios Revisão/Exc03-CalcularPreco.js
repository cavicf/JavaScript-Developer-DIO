/* 
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida para efetuar o cálculo adequado.

    Código condição de pagamento:
    1 - A vista Débito - recebe 10% de desconto;
    2 - A vista no Dinheiro ou PIX - recebe 15% de desconto;
    3 - Em duas vezes, preço normal da etiqueta sem juros;
    4 - Acima de duas vezes - preço normal de etiqueta mais juros de 10% 
*/

// COM FUNÇÕES

function aplicarDesconto(valorProduto, desconto) {
    return valorProduto - (valorProduto * (desconto/100));
}

function aplicarJuros(valorProduto, juros) {
    return valorProduto + (valorProduto * (juros/100));
}

(function () {
    const productPrice = 100;
    let payMethod = 4;
    let finalCost = 0;

    if (payMethod === 1) {
        finalCost = aplicarDesconto(productPrice, 10);
    } else if (payMethod === 2) {
        finalCost = aplicarDesconto(productPrice, 15);
    } else if (payMethod === 3) {
        finalCost = productPrice;
    } else {
        finalCost = aplicarJuros(productPrice, 10);
    }

    console.log(finalCost);
})();
