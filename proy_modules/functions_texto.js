const functions = {};

function mayusculas(alejandro) {
    return alejandro.toUpperCase();
}
function minusculas(LUIS) {
    return LUIS.toLowerCase();
}
function mayusculasyminusculas(alejandro, luis) {
    return alejandro[0].toUpperCase() + alejandro.substring(1).toLowerCase() +"  "+ luis[0].toUpperCase() + luis.substring(1).toLowerCase()
}





functions.minusculas = minusculas;
functions.mayusculas = mayusculas;
functions.mayusculasyminusculas = mayusculasyminusculas;

module.exports = functions;


