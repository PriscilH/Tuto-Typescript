interface Vehicule{
    masse:number;
    calculPoids():number;
}

interface Roulable{
    nbRoues : number;
}

class Velo implements Roulable{
    public nbRoues : number = 2;
}

abstract class Voiture implements Vehicule, Roulable {
    public static readonly TVA:number = 20;
    public static listeVoiture:Voiture[] = [];
   
    constructor(
        protected _marque : string,
        protected _modele : string,
        protected _couleur : string,
        protected _nbPortes : number,
        protected readonly _annee : number,
        public masse:number,
        public readonly nbRoues : number = 4
        ){
    }

    public calculPoids(){
        return this.masse * 9.81;
    }

    public static ajouterVoitureListe(v: Voiture){
        Voiture.listeVoiture.push(v);
    }

    public static retirerVoitureListe(){
        Voiture.listeVoiture.pop();
    }

    abstract afficherVoiture(this:Voiture);

    protected afficherCouleur() {
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
}

class VoitureCourse extends Voiture {

    constructor(marque : string,
        modele : string,
        nbPortes : number,
        annee : number,
        masse : number,
        private _vitesse : number){
            super(marque,modele,"Bleue",nbPortes,annee,masse);
        }
    
    public afficherVitesse(){
        console.log("La vitesse max est de : " + this._vitesse);
    }

    public afficherVoiture(this:VoitureCourse) {
        console.log("Marque : " + this._marque);
        console.log("Modèle : " + this._modele);
        this.afficherCouleur();
        console.log("Nombre de portes : " + this._nbPortes);
        console.log("Annee de construction : " + this._annee);
        console.log(Voiture.TVA);
        this.afficherVitesse();
        console.log("Masse : " + this.masse);
        console.log("Poids : " + this.calculPoids());
        console.log("Nombres de roues : "+this.nbRoues);
    }
}

class VoitureAncienne extends Voiture{
    constructor(marque : string,
        modele : string,
        nbPortes : number,
        annee : number
        ){
            super(marque,modele,"Noire",nbPortes,annee,300);
        }
    
    public afficherVoiture(this:VoitureAncienne) {
        console.log("Marque : " + this._marque);
        console.log("Modèle : " + this._modele);
        console.log("Nombre de portes : " + this._nbPortes);
        console.log("Annee de construction : " + this._annee);
        console.log("Masse : " + this.masse);
        console.log("Poids : " + this.calculPoids())
        console.log("Nombres de roues : "+this.nbRoues);
    }
}

var v1 = new VoitureCourse("Yotota","Ryias",5,2020,450,300);
var v2 = new VoitureCourse("Yotota","Risau",3,2021,400,200);
var v3 = new VoitureAncienne("Yotota","Ryias",5,1999)
v1.afficherVoiture();
console.log("-------------------")
v2.afficherVoiture();
console.log("-------------------")
v3.afficherVoiture();

Voiture.ajouterVoitureListe(v1);
Voiture.ajouterVoitureListe(v2);


