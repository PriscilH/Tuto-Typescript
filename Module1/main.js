var inputNb1 = document.querySelector("#nb1");
var inputNb2 = document.querySelector("#nb2");
var divResultat = document.querySelector(".resultat");
var inputCalcul = document.querySelector("#calcul");
inputCalcul.addEventListener("click", function () {
    // let resultat = addition(parseInt(inputNb1.value),parseInt(inputNb2.value));
    var resultat = addition(+inputNb1.value, +inputNb2.value); // utilisation avec le + plus récente
    // let resultat = addition(inputNb1.value,inputNb2.value);
    divResultat.innerHTML = "" + resultat; // ou bien resultat.toString();
});
// Dans la fonction on indique le type number pour nb1 et nb2 pour qu'il soit considérés
// comme des nombres et non des strings ou any. Cette fonction ne pourras plus être 
// utilisée pour la concaténation
function addition(nb1, nb2) {
    // if (typeof(nb1) === "number" && typeof(nb2) === "number") {
    return nb1 + nb2;
    // } else {
    //     return `Les valeurs ne sont pas de type "Number"`;
    // } 
}
