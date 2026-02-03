    /*
    1- Crie uma classe para representar carros 
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por km rodado. 
    Crie um método que dado a quantidade de quilometros e o preço do combustivel nos dê o valor gasto em reais para realizar esete percurso. 
*/

class Car {
    brand;
    color;
    fuelConsumption;

    constructor(brand, color, fuelConsumption) {
        this.brand = brand;
        this.color = color;
        this.fuelConsumption = fuelConsumption;
    }
    calculateTripCost(tripDistance, fuelPrice) {
        const tripFinalCost = (tripDistance / this.fuelConsumption) * fuelPrice;
        return tripFinalCost.toFixed(2);
    }
}

const uno = new Car("uno", "veremelho", 5);
console.log(uno);
console.log(uno.calculateTripCost(200, 5.80));