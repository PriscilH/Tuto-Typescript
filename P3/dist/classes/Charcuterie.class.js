"use strict";
class Charcuterie extends Aliment {
    constructor(nom, calorie, lipide, glucide, proteine, image) {
        super(nom, ClassAliment.MAUVAIS, calorie, lipide, glucide, proteine, image);
        Charcuterie.listeCharcuteries.push(this);
    }
    afficherAliment() {
        console.log("Charcuterie : " + this._nom);
        this.afficherValeursNutritive();
    }
}
Charcuterie.listeCharcuteries = [];
//# sourceMappingURL=Charcuterie.class.js.map