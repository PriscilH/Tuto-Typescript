class Voiture {
   
    constructor(
        private _marque : string,
        private _modele : string,
        private _couleur : string,
        private _nbPortes : number,
        public readonly annee : number
        ){
    }

    public afficherVoiture(this:Voiture) {
        console.log("Marque : " + this._marque);
        console.log("Modèle : " + this._modele);
        this.afficherCouleur();
        console.log("Nombre de portes : " + this._nbPortes);
        console.log("Annee de construction : " + this.annee);
    }

    private afficherCouleur() {
        console.log("Couleur : " + this._couleur);
    }

    get marque() : string {return this._marque;}
    get modele() : string {return this._modele;}
    set marque(newMarque:string) {
        console.log("Setter de la marque");
        this._marque = newMarque;
    }
    set modele(newModele:string){
        console.log("Setter du modele")
        this._modele = newModele;
    }

    /**
     * GETTERS Standard
     */
    // public getMarque() : string{return this.marque;}
    // public getModele() : string{return this.modele;}
    // public getNbPortes() : number{return this.nbPortes};

    /**
     * SETTERS Standard
     */
    // public setMarque(marque:string) : Voiture {
    //     if(marque === "Gepo" || marque === "Yotota"){
    //         this.marque = marque;
    //     }
    //     return this;
    // }
    // public setModele(modele:string) : Voiture {
    //     this.modele = modele;
    //     return this;
    // }
    // public setNbPortes(nbPortes : number){
    //     if(nbPortes === 5 || nbPortes === 3){
    //         this.nbPortes = nbPortes;
    //     }
    // }
}

var v1 = new Voiture("Yotota","Ryias","rouge",5,2020);
var v2 = new Voiture("Yotota","Risau","noire",3,2021);

v1.afficherVoiture();
v2.afficherVoiture();



// ... Utilisation de This ... //

// class Voiture {
//     marque;
//     modele;
//     couleur;
//     nbPortes;

//     constructor(marque,modele,couleur,nbPortes){
//         this.marque = marque;
//         this.modele = modele;
//         this.couleur = couleur;
//         this.nbPortes = nbPortes;
//     }

//     afficherVoiture(this:Voiture) {
//         console.log("Marque : " + this.marque);
//         console.log("Modèle : " + this.modele);
//         this.afficherCouleur();
//         console.log("Nombre de portes : " + this.nbPortes);
//     }

//     afficherCouleur() {
//         console.log("Couleur : " + this.couleur);
//     }
// }

// var v1 = new Voiture("Yotota","Ryias","rouge",5);
// var v2 = new Voiture("Yotota","Risau","noire",3);
// v1.afficherVoiture();
// console.log("-----------------------");
// v2.afficherVoiture();

// let affichages = {
//     afficherVoiture : v1.afficherVoiture.bind(v1)
// }
// affichages.afficherVoiture();