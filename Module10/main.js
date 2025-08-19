"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoClass(constructor) {
    console.log("Décorateur de la classe");
}
let Perso = class Perso {
    constructor(nom, age) {
        console.log("construteur de la classe Perso");
        this._nom = nom;
        this._age = age;
    }
};
Perso = __decorate([
    decoClass
], Perso);
const p1 = new Perso("Matthieu", 31);
const p2 = new Perso("Tya", 18);
