const numerosSorteados = [5, 50, 10, 98, 23];

function gets() {
    return numerosSorteados.pop();
}

function print(texto) {
    console.log(texto);
}

function informarMax () {
    let max = 0;

    for (let i = 0; i < numerosSorteados.length; i++) {
        let sorteado = gets();

        if (sorteado > max) {
            max = sorteado;
        } 
        
    }
    return max;
}

module.exports = { informarMax, gets, print };