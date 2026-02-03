/* Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis, sendo elas:
1- Preço do etanol
2- Preço da gasolina
3- Tipo de combustivel do carro
4- Gasto médio de combustível do carro por KM
5- Distância em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem
 */

const etanolPrice = 5.79;
const gasolinePrice = 6.66;
let carFuelType = 'gasolina';
let fuelConsumption = 10;
let tripDistance = 387;
let tirpTotalCost = 0;

if (carFuelType === 'etanol') {
    tirpTotalCost = (tripDistance / fuelConsumption) * etanolPrice;
} else if (carFuelType === 'gasolina') {
    tirpTotalCost = (tripDistance / fuelConsumption) * gasolinePrice;
} else {
    console.log('Combustível inválido');
}

if (tirpTotalCost === 0) {
    console.log('Não foi possível calcular o gasto total pois há valores inválidos');
} else {
    console.log(tirpTotalCost.toFixed(2));
}

