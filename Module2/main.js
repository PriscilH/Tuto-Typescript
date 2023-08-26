// Type Unknown
var test;
test = 31;
test = "Math";
test = true;
var sexe;
if (typeof test === "boolean") {
    sexe = test;
}
console.log(sexe);
// Type Never
function excep(msg) {
    throw { message: msg };
}
