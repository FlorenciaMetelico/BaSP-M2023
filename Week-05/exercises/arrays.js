console.log("Arrays: A");
//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[4]," "+months[10]);

console.log("Arrays: B");
//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
months.sort();

console.log(months);

console.log("Arrays: C");
//Agregar un elemento al principio y al final del array (utilizar unshift y push).

months.unshift("Coffee");
months.push("Break");

console.log(months);

console.log("Arrays: D");
//Quitar un elemento del principio y del final del array (utilizar shift y pop).

months.shift();
months.pop();

console.log(months);

console.log("Arrays: E");
//Invertir el orden del array (utilizar reverse).

months.reverse();

console.log(months);

console.log("Arrays: F");
//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

var newMonths=months.join("-");

console.log(newMonths);

console.log("Arrays: G");
//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var someMonths=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var someMonths2=someMonths.slice(4,11);

console.log(someMonths2);

console.log("----------------")




