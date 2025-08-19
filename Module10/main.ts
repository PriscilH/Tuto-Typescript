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

function decoAccesseur(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("-------------");
    console.log("PropertyKey : " + propertyKey);
    console.log("Descriptor : ");
    console.log(descriptor);
    console.log("-------------");
}

function decoMethode(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log("Décorateur de la fonction " + propertyKey);
}

function decoParameter(target: Object, propertyKey: string | symbol, parameterIndex: number){
    console.log("Decorateur de parametre")
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

    @decoAccesseur
    get nom() {return this._nom};
    set nom(newNom : string){this._nom = newNom};
    
    @decoAccesseur
    get age() {return this._age};
    set age(newAge : number){this._age = newAge};

    @decoMethode
    afficherPerso(){
        console.log("Nom : " + this._nom);
        console.log("Age : " + this._age);
    }

    modifierAge(@decoParameter nombre : number){
        this._age = nombre;
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