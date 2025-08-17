class Toolbox{
    public static afficherTab (tab : any[]){
        for(let element of tab){
            console.log(element);
        }
    }

    public static calculMoyenne(...nombres:number[]){
        let moyenne = 0;
        for(let n of nombres){
            moyenne += n;
        }
        return moyenne/nombres.length;
    }
}

class ParcAuto {
    public listeVoiture:Voiture[] = [];
    // public listeBus:Bus[] = [];
}

class Voiture {
    public static readonly TVA:number = 20;
    public static listeVoiture:Voiture[] = [];
   
    constructor(
        private _marque : string,
        private _modele : string,
        private _couleur : string,
        private _nbPortes : number,
        public readonly annee : number
        ){
    }

    public static getVoitures(){
        //permet de récupérer les Voitures d'une base données.
    }

    public static ajouterVoitureListe(v: Voiture){
        Voiture.listeVoiture.push(v);
    }

    public static retirerVoitureListe(){
        Voiture.listeVoiture.pop();
    }

    public afficherVoiture(this:Voiture) {
        console.log("Marque : " + this._marque);
        console.log("Modèle : " + this._modele);
        this.afficherCouleur();
        console.log("Nombre de portes : " + this._nbPortes);
        console.log("Annee de construction : " + this.annee);
        console.log(Voiture.TVA)
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

Voiture.ajouterVoitureListe(v1);
Voiture.ajouterVoitureListe(v2);

Toolbox.afficherTab(Voiture.listeVoiture);

let notes = [ 10 , 15, 20];

Toolbox.afficherTab(notes);

console.log(Toolbox.calculMoyenne(10,15,20,25,100,200));

// v1.afficherVoiture();
// v2.afficherVoiture();

// var parcMGA = new ParcAuto();
// parcMGA.listeVoiture.push(v1,v2);
// console.log(parcMGA.listeVoiture);



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