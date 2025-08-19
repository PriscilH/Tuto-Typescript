var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var h1 = { nom: "Tya", age: 18 };
var o1 = { nom: "Gael", tribu: "Orc vert" };
var g1 = creerGuerrier(h1);
var g2 = creerGuerrier(o1);
var g3 = creerGuerrier({ nom: "toto", sexe: true });
function creerGuerrier(j) {
    return __assign(__assign({}, j), { classe: "Guerrier" });
}
