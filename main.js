// Une classe
class Stylo {
    constructor(marque){
        this.marque = marque;
        
        if (Stylo.nb ===undefined){
            Stylo.nb = 0;
        }
        Stylo.nb++
    }
    ecrire() {
        console.log(`Le stylo ${this.marque} écrit`);
    };
    static denombrer(){
        console.log(`Il y a ${Stylo.nb} stylos`);
    }
}
// Programme principal
let stylo1 = new Stylo("bic");
let stylo2 = new Stylo("pentel");
console.log(Stylo.nb);
Stylo.denombrer();
stylo1.ecrire();