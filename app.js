require('colors');

const functions = require('./proy_modules/functions_texto.js')

const main = async() => {

        console.log('*************************************************'.red);
        console.log('*            '.red, 'MAYUSCULAS'.bgYellow,'                 *'.red);
        console.log('*************************************************'.red);
        console.log('*            '.red, "" + functions.mayusculas('alejandro'),'                  *'.red);
        console.log('*************************************************'.red);
        console.log('*            '.red, 'MINUSCULAS'.bgYellow,'                 *'.red);
        console.log('*************************************************'.red);
        console.log('*            '.red, "" + functions.minusculas('LUIS'),'                      *'.red);
        console.log('*************************************************'.red);
        console.log('*************************************************'.red);
        console.log('*            '.red, 'MAYUSCULAS Y MINUSCULAS'.bgYellow,'                   *'.red);
        console.log('*************************************************'.red);
        console.log('*            '.red, "" + functions.mayusculasyminusculas('LUIS', 'ALEJANDRO'),'                 *'.red);
        console.log('*************************************************'.red);
        console.log('*************************************************'.red);
        console.log('*            '.red, 'SE QUITA LA ULTIMA LETRA'.bgYellow,'                  *'.red);
        console.log('*************************************************'.red);
        let derecha = "luis alejandro";

        // Funcion quitar la ultima letra una por una hasta quedar una letra 
        function quitarLetra1() {
            if (derecha.length > 0) {
                derecha = derecha.slice(0, -1);
                console.log(derecha);
                quitarLetra1();
            }
        }
        quitarLetra1();
        console.log('*************************************************'.cyan);
}
main();
console.log('**************************************************'.cyan);
        console.log('*    '.cyan, 'SE QUITA LA PRIMERA LETRA'.bgYellow,'           *'.cyan);
        console.log('***********************************************'.cyan);

let alreves = "luis alejandro";

// Funcion quitar la primera letra una por una hasta quedar una letra
function quitarLetra2() {
    if (alreves.length > 0) {
        console.log(alreves);
        alreves = alreves.slice(1);
        quitarLetra2();
    }
} 

quitarLetra2();
console.log('**************************************************'.cyan);
