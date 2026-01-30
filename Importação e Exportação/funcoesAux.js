// A forma de importação e exportação mais simples do node é utilizando require e module.exports, pois não demandam de configurações a mais como um import e export demandariam

// Vamos simular as funções de gets e print da plataforma da DIO, onde o gets le uma entrada do usuário e o print exibe uma mensagem (seria o console.log)
// Para isso vamos criar essas funções separadamente e exportá-las para serem utilizadas em outro arquivo

function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print }; //assim exportamos as duas funções que serão recebidas por um require