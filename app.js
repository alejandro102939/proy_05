require('colors');

const functions = require('./proy_modules/functions_texto.js')

const main = async() => {

        console.log('*************************************************'.cyan);
        console.log('*            '.cyan, 'MAYUSCULAS'.bgYellow,'                 *'.cyan);
        console.log('*************************************************'.cyan);
        console.log('*            '.cyan, "" + functions.mayusculas('alejandro'),'                  *'.cyan);
        console.log('*************************************************'.cyan);
        console.log('*            '.cyan, 'MINUSCULAS'.bgYellow,'                 *'.cyan);
        console.log('*************************************************'.cyan);
        console.log('*            '.cyan, "" + functions.minusculas('LUIS'),'                      *'.cyan);
        console.log('*************************************************'.cyan);
        console.log('*************************************************'.cyan);
        console.log('*            '.cyan, 'MAYUSCULAS Y MINUSCULAS'.bgYellow,'                   *'.cyan);
        console.log('*************************************************'.cyan);
        console.log('*            '.cyan, "" + functions.mayusculasyminusculas('LUIS', 'ALEJANDRO'),'                 *'.cyan);
        console.log('*************************************************'.cyan);
        console.log('*************************************************'.cyan);
        console.log('*            '.cyan, 'SE QUITA LA ULTIMA LETRA'.bgYellow,'                  *'.cyan);
        console.log('*************************************************'.cyan);
        let derecha = "luis alejandro";

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

function quitarLetra2() {
    if (alreves.length > 0) {
        console.log(alreves);
        alreves = alreves.slice(1);
        quitarLetra2();
    }
} 

quitarLetra2();
console.log('**************************************************'.cyan);
