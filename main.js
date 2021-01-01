"use strict"
function moy(){
    let somme = 0;
    for(let i = 0; i <arguments.length; i++){
        somme +=arguments[i];
    }
    let moyenne = (somme / arguments.length) || 0;
        console.log(moyenne);
}
moy(12, 8, 13);
moy();