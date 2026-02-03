/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis, sendo elas:
1- Preço do Combústivel
2- Gasto médio de combustível por KM
3- Distância em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem
 */

const fuelPrice = 5.79;
const fuelConsumption = 10;
let tripDistance = 398;

let tripTotalCost = (tripDistance / fuelConsumption) * fuelPrice; //Primeiro descobrimos quanto de combustivel seria gasto na viagem toda e depois multiplicamos pelo preço desse combústivel.

console.log(tripTotalCost.toFixed(2)); // ToFixed é um método que faz o arredondamento de casas decimais em números fracionários, onde o parametro é a quantidade de casas que vamos exibir ao final
