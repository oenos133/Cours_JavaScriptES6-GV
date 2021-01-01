"use strict"
try {
    console.log(n);

}catch (e) {
    console.log(e.message);
}
console.log('OK');

// limite de recursivité

function f(){
    k++
    f();
}
let k = 0;

try {
    f();
} catch{
console.log(k);
}