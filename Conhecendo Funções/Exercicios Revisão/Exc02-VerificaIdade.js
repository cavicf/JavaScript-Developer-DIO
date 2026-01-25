function verificaIdade(idade) {
    if (idade >= 18){
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

(function () {
    let idade = 19;
    verificaIdade(idade);
})();