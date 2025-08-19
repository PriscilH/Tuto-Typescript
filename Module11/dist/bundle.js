"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var ClassAliment;
    (function (ClassAliment) {
        ClassAliment["MAUVAIS"] = "C";
        ClassAliment["MOYEN"] = "B";
        ClassAliment["BON"] = "A";
    })(ClassAliment = App.ClassAliment || (App.ClassAliment = {}));
    ;
    var Aliment = /** @class */ (function () {
        function Aliment(_nom, _sante, calorie, lipide, glucide, proteine, _image) {
            this._nom = _nom;
            this._sante = _sante;
            this.calorie = calorie;
            this.lipide = lipide;
            this.glucide = glucide;
            this.proteine = proteine;
            this._image = _image;
            Aliment.listeAliments.push(this);
        }
        Object.defineProperty(Aliment.prototype, "nom", {
            get: function () { return this._nom; },
            set: function (newNom) { this._nom = newNom; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Aliment.prototype, "sante", {
            get: function () { return this._sante; },
            set: function (newSante) { this._sante = newSante; },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Aliment.prototype, "image", {
            get: function () { return this._image; },
            set: function (newImage) { this._image = newImage; },
            enumerable: false,
            configurable: true
        });
        ;
        ;
        ;
        ;
        Aliment.prototype.afficherValeursNutritive = function () {
            console.log("Valeurs nutritionnelles :");
            console.log("Lipide : " + this.lipide);
            console.log("Glucide : " + this.glucide);
            console.log("Proteine : " + this.proteine);
        };
        Aliment.listeAliments = [];
        return Aliment;
    }());
    App.Aliment = Aliment;
})(App || (App = {}));
/// <reference path="Aliment.class.ts" />
var App;
(function (App) {
    var Fruit = /** @class */ (function (_super) {
        __extends(Fruit, _super);
        function Fruit(nom, calorie, lipide, glucide, proteine, image) {
            var _this = _super.call(this, nom, App.ClassAliment.BON, calorie, lipide, glucide, proteine, image) || this;
            Fruit.listeFruit.push(_this);
            return _this;
        }
        Fruit.prototype.afficherAliment = function () {
            console.log("Fruit : " + this._nom);
            this.afficherValeursNutritive();
        };
        Fruit.listeFruit = [];
        return Fruit;
    }(App.Aliment));
    App.Fruit = Fruit;
})(App || (App = {}));
/// <reference path="Aliment.class.ts" />
var App;
(function (App) {
    var Charcuterie = /** @class */ (function (_super) {
        __extends(Charcuterie, _super);
        function Charcuterie(nom, calorie, lipide, glucide, proteine, image) {
            var _this = _super.call(this, nom, App.ClassAliment.MAUVAIS, calorie, lipide, glucide, proteine, image) || this;
            Charcuterie.listeCharcuteries.push(_this);
            return _this;
        }
        Charcuterie.prototype.afficherAliment = function () {
            console.log("Charcuterie : " + this._nom);
            this.afficherValeursNutritive();
        };
        Charcuterie.listeCharcuteries = [];
        return Charcuterie;
    }(App.Aliment));
    App.Charcuterie = Charcuterie;
})(App || (App = {}));
/// <reference path="classes/Aliment.class.ts" />
/// <reference path="classes/Fruit.class.ts" />
/// <reference path="classes/Charcuterie.class.ts" />
var App;
(function (App) {
    new App.Fruit("Pomme", 53, 0.2, 14, 0.3, "pomme.png");
    new App.Fruit("Poire", 49, 0.1, 15, 0.4, "poire.png");
    new App.Charcuterie("Salami", 270, 26.5, 1.3, 12, "salami.png");
    new App.Charcuterie("Saucisson", 300, 33.1, 1.9, 27.6, "saucisson.png");
    var listeClasseAliment = {
        mauvais: App.Charcuterie.listeCharcuteries,
        moyen: [],
        bon: App.Fruit.listeFruit,
    };
    listeAliment();
    document.querySelector("#type").addEventListener("change", listeAliment);
    function listeAliment() {
        var typeAlimentSouhaite = document.querySelector("#type").value;
        var aliments = getListeAlimentType(typeAlimentSouhaite);
        var baliseTbody = document.querySelector("#listeAliments");
        var listeAlimentBalise = "";
        if (aliments.length > 0) {
            for (var _i = 0, aliments_1 = aliments; _i < aliments_1.length; _i++) {
                var aliment = aliments_1[_i];
                listeAlimentBalise += "\n                    <tr>\n                        <td>" + aliment.nom + "</td>\n                        <td>" + aliment.lipide + "</td>\n                        <td>" + aliment.glucide + "</td>\n                        <td>" + aliment.proteine + "</td>\n                        <td>" + aliment.sante + "</td>\n                        <td><img src=\"images/" + aliment.image + "\" width=\"100px\"/></td>\n                    </tr>\n                ";
            }
            baliseTbody.innerHTML = listeAlimentBalise;
        }
        else {
            baliseTbody.innerHTML = "Aucune données";
        }
    }
    function getListeAlimentType(type) {
        switch (type) {
            case "Tous":
                return App.Aliment.listeAliments;
                break;
            case "Mauvais":
                return listeClasseAliment.mauvais;
                break;
            case "Moyen":
                return listeClasseAliment.moyen;
                break;
            case "Bon":
                return listeClasseAliment.bon;
                break;
            default: return [];
        }
    }
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map