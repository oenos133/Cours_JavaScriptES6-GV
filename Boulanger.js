class Boulanger {
    constructor(prenom) {
        this.prenom = prenom;
        this.fabrication = [];
        console.log(`${this.prenom} est un boulanger`);
    }
    fabriquer(produit, quantite) {
        this.fabrication.push(new fabrication(produit, quantite));
        console.log(`${this.prenom}fabrique ${quantite} ${produit.nom}`);
    }
    bilan() {
        console.log(`Fabrication de ${this.prenom} :`);
        for (let fabrication of this.fabrication) {
            console.log(`  ${fabrication.quantite} ${fabrication.produit.nom}`);
        }
    }
}