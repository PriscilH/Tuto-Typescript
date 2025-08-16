class Voiture {
    marque;
    modele;
    couleur;
    nbPortes;

    constructor(marque,modele,couleur,nbPortes){
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.nbPortes = nbPortes;
    }

    afficherVoiture() {
        console.log("Marque : " + this.marque);
        console.log("Modèle : " + this.modele);
        console.log("Couleur : " + this.couleur);
        console.log("Nombre de portes : " + this.nbPortes);
    }
}

var v1 = new Voiture("Yotota","Ryias","rouge",5);
var v2 = new Voiture("Yotota","Risau","noire",3);
v1.afficherVoiture();
console.log("-----------------------");
v2.afficherVoiture();
