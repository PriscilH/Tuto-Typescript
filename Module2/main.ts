type Personnage = {
    nom : string;
    poids : number,
    [props:string] : string | number;
}

const p1:Personnage = {
    nom : "Math",
    poids : 48,
    age : 31

}

p1.taille = 180;

console.log(p1);
// Cela crée un Object, la propriété taille avec sa valeur a été ajoutée
// age : 31
// nom : "Math"
// poids : 48
// taille : 180