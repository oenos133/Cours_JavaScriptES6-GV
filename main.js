
let p = new Promise((resolve, reject) => {
    let test = Math.random() < .5;
    console.log(test);

 setTimeout(() => test ? resolve("OK"): reject("KO"), 2000);
})

.then(val => console.log( "SUCCES",val))
.catch(val => console.log("ECHEC", val));

//Afficher le timeout sous forme de promesse----

let timeout = new Promise((resolve) => setTimeout(() => resolve("TIMEOUT"),5000) );

Promise.race([p, timeout]).then(val => console.log(val == "TIMEOUT"? val: ''));

//Afficher FIN---------------
console.log("FIN");git 