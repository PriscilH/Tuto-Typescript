function creerPerso(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const perso = { nom: "matthieu", age: 31 };
const guerrier = { classe: "guerrier", tribu: "Orc vert" };
const perso2 = { nom: "Tya", age: 18 };
const archer = { classe: "archer", nbFleches: 50 };
const g1 = creerPerso(perso, guerrier);
const g2 = creerPerso(perso2, archer);
const a = creerPerso({ nom: "Tya", age: 31 }, { classe: "fgdsgf" });
console.log(a);
