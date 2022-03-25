//Sumar
function add(x1, x2) {
    return x1 + x2;
}

//Restar
function substract(x1, x2) {
    return x1 - x2;
}

//Multiplicar
function multiply(x1, x2) {
    return x1 * x2;
}

//Dividir
function divide(x1, x2) {
    if(x2 == 0) {
        console.log('No se puede dividir por 0');
    } else {
        return x1 / x2;
    }
}

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
