"use strict";
class Fruit extends Aliment {
    constructor(nom, calorie, lipide, glucide, proteine, image) {
        super(nom, ClassAliment.BON, calorie, lipide, glucide, proteine, image);
        Fruit.listeFruit.push(this);
    }
    afficherAliment() {
        console.log("Fruit : " + this._nom);
        this.afficherValeursNutritive();
    }
}
Fruit.listeFruit = [];
//# sourceMappingURL=Fruits.class.js.map