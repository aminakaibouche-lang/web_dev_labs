const city =" Algiers";
const celsius = "21.5";
const fahrenheit = celsius * 9/5 + 32;

const isWarm = celsius >= 20 ? true :false ;

console.log("Algiers :" ,celsius,"C = ", (fahrenheit).toFixed(1))

console.log(
    typeof(city),
    typeof(celsius),
    typeof(isWarm)
)

const weather = isWarm ? "Warm day" : "Cold day";
console.log(weather);
let form = "21.5" ;

console.log( form+1 ,Number(form)+1);