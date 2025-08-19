function decoClass(constructor:Function){
    console.log("Décorateur de la classe")
}

@decoClass
class Perso{
    private _nom : string;
    private _age : number;

    constructor(nom:string,age:number){
        console.log("construteur de la classe Perso");
        this._nom = nom;
        this._age = age;
    }
}

const p1 = new Perso("Matthieu",31);
const p2 = new Perso ("Tya",18);