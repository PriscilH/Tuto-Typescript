
// Type Unknown
let test : unknown;
test = 31;
test = "Math";
test = true;

let sexe : boolean;
if(typeof test === "boolean"){
    sexe = test;
}
console.log(sexe);

// Type Never
function excep(msg:string) : never {
   throw {message : msg}
   
}

