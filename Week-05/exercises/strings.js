console.log("----------------");

console.log("Strings: A");
//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var word3="Consideration";
var upperWord3=word3.toUpperCase();

console.log(upperWord3);

console.log("Strings: B");
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var word4="Incrimination";
var restingWord4=word4.substring(0,5);

console.log(restingWord4);

console.log("Strings: C");
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var word5="Department";
var restingWord5=word5.substring(7,10);

console.log(restingWord5);

console.log("Strings: D");
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var word6="university";
var modifyWord6=word6.substring(0,1).toUpperCase(0)+word6.substring(1,10).toLowerCase(1,10);

console.log(modifyWord6);

console.log("Strings: E");
//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var space1="i need a coffee";
var findingSpace1=space1.indexOf(" ");

console.log(findingSpace1);

console.log("Strings: F");
//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var word7="completely astonished";
var everyMethod=word7.substring(0,1).toUpperCase(0)+word7.substring(1,10).toLowerCase(1,10);
var everyMethod2=word7.indexOf(" ");
var everyMethod3=word7.substring(11,12).toUpperCase(11)+word7.substring(12,21).toLowerCase(12,21);

console.log(everyMethod, everyMethod2, everyMethod3);

console.log("----------------");


