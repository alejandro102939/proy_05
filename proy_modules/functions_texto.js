const functions = {};

// Funcion de minusculas a MAYUSCULAS
function mayusculas(alejandro) {
    return alejandro.toUpperCase();
}

// Funcion de MAYUSCULAS a minusculas 
function minusculas(LUIS) {
    return LUIS.toLowerCase();
}

// Funcion primera letra en mayuscula en cada nombre, las demas letras en minusculas 
function mayusculasyminusculas(alejandro, luis) {
    return alejandro[0].toUpperCase() + alejandro.substring(1).toLowerCase() +"  "+ luis[0].toUpperCase() + luis.substring(1).toLowerCase()
}





functions.minusculas = minusculas;
functions.mayusculas = mayusculas;
functions.mayusculasyminusculas = mayusculasyminusculas;

module.exports = functions;


