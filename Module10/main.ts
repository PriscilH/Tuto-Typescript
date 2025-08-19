function decoClass(nomClasse:string){
    return (constructor : Function) => {
        console.log("Décorateur de la classe : "+ nomClasse);
    }
}

function decoAttribut(typeAttribut : string){
    return (target: any, propertyKey: string) => {
        console.log("PropertyKey : " + propertyKey + " : " + typeAttribut);
    }
}

function decoAttribut2(target: any, propertyKey: string){
    console.log("Decorateur Attribut");
}

@decoClass("Perso")
class Perso{
    @decoAttribut("string")
    @decoAttribut2
    private _nom : string;
    @decoAttribut("number")
    private _age : number;

    constructor(nom:string,age:number){
        console.log("construteur de la classe Perso");
        this._nom = nom;
        this._age = age;
    }
}

@decoClass("Humain")
class Humain extends Perso{
    @decoAttribut("string")
    private _race = "Humain";
}

const p1 = new Perso("Matthieu",31);
const p2 = new Perso ("Tya",18);
const p3 = new Humain("Milo",31);