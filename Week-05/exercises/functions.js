console.log("-------------");

console.log("Functions: A");
//Crear una función suma que reciba dos valores numéricos y retorne 
//el resultado. Ejecutar la función y guardar el resultado en una variable, 
//mostrando el valor de dicha variable en la consola del navegador.

function sumando (a,b) {
    return a + b;
}
var a = 22;
var b = 35;
var resultado = sumando (a,b);

console.log ("The result of "+a+" and "+ b+ " is: " + resultado );

console.log("Functions: B");
//Copiar la función suma anterior y agregarle una validación para 
//controlar si alguno de los parámetros no es un número; de no ser un
// número, mostrar un alert aclarando que uno de los parámetros tiene 
//error y retornar el valor NaN como resultado.

function numberValidation (numA,numB) {
    if (typeof numA !== "number" || typeof numB !== "number") {
    alert ("Error. Please enter only numbers");
    return NaN;
 } else {
    return numA + numB;
 }
}
console.log(numberValidation (57, "hola"));

console.log("Functions: C");
//Crear una función “validateInteger” que reciba un número como parámetro 
//y devuelva verdadero si es un número entero.

function validateInteger(a){

    return(Number.isInteger(a));
}
var validate= validateInteger(10,4);
console.log(validate);

console.log("Functions: D");
//Copiar y renombrar la función suma del ejercicio 6b) y agregarle una 
//llamada a la función del ejercicio 6c. y que valide que los números sean 
//enteros. En caso que haya decimales mostrar un alert con el error y retornar
// el número convertido a entero (redondeado).

function sumando1(a,b){
    if(isNaN(a) || isNaN(b)){
        alert("Is not a number");
        return(NaN);
    }
    else {
        if (validateInteger(a) != true) {
            alert("It's not an integer " + Math.round(a))

        }
        if (validateInteger(b) != true){
            alert("It's not an integer " + Math.round(b))
        }
        return(Math.round(a)+Math.round(b));
    }
}
var numm1,numm2,cuenta
    numm1= 9;
    numm2=3,2;
    cuenta=sumando1(numm1,numm2);
    alert("They are integer " + cuenta);

console.log("Functions: E");
//Convertir la validación del ejercicio 6d) en una función separada 
//y llamarla dentro de una nueva función probando que todo siga funcionando 
//igual que en el apartado anterior.

function check(a,b){

    return(sumando1);
 }
 var numm1,numm2,cuenta
    numm1= 3;
    numm2=4,5;
    cuenta=sumando1(numm1,numm2);
    console.log("Funciona" + " " + cuenta);
    
 




