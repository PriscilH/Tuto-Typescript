"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoClass(nomClasse) {
    return (constructor) => {
        console.log("Décorateur de la classe : " + nomClasse);
    };
}
function decoAttribut(typeAttribut) {
    return (target, propertyKey) => {
        console.log("PropertyKey : " + propertyKey + " : " + typeAttribut);
    };
}
function decoAttribut2(target, propertyKey) {
    console.log("Decorateur Attribut");
}
let Perso = class Perso {
    constructor(nom, age) {
        console.log("construteur de la classe Perso");
        this._nom = nom;
        this._age = age;
    }
};
__decorate([
    decoAttribut("string"),
    decoAttribut2
], Perso.prototype, "_nom", void 0);
__decorate([
    decoAttribut("number")
], Perso.prototype, "_age", void 0);
Perso = __decorate([
    decoClass("Perso")
], Perso);
let Humain = class Humain extends Perso {
    constructor() {
        super(...arguments);
        this._race = "Humain";
    }
};
__decorate([
    decoAttribut("string")
], Humain.prototype, "_race", void 0);
Humain = __decorate([
    decoClass("Humain")
], Humain);
const p1 = new Perso("Matthieu", 31);
const p2 = new Perso("Tya", 18);
const p3 = new Humain("Milo", 31);
