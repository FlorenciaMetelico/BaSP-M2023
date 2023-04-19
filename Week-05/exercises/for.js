console.log("----------------");

console.log("For: A");
//Crear un array que contenga 5 palabras y recorrer dicho 
//array utilizando un bucle for de JavaScript para mostrar una 
//alerta utilizando cada una de las palabras.

var myList=["planta", "vela", "lampara", "maceta", "mantel"];
for (var i=0; i < myList.length; i++){
    alert(myList[i]);
}

console.log("For: B");
//Al array anterior convertir la primera letra de cada 
//palabra en mayúscula y mostrar una alerta por cada palabra
// modificada.

var myList=["planta", "vela", "lampara", "maceta", "mantel"];
for (var i = 0; i < myList.length; i++) {
    var upWord1 = myList[i];
    var upWord2 = upWord1.substring(0,1).toUpperCase(0);
    var list = upWord1.substring (1);
    alert (upWord2+list);
}

console.log("For: C");
//Crear una variable llamada “sentence” que tenga un string vacío, 
//luego al array del punto a) recorrerlo con un bucle for para ir 
//guardando cada palabra dentro de la variable sentence. Al final 
//mostrar una única alerta con la cadena completa.

var sentence= "";
for (var i = 0; i < myList.length; i++){
    var upWord1 = myList[i];
    sentence= sentence + " " + upWord1;
    alert(sentence);
}

console.log("For: D");
//Crear un array vacío y con un bucle for de 10 repeticiones. 
//Llenar el array con el número de la repetición, es decir que 
//al final de la ejecución del bucle for debería haber 10 elementos 
//dentro del array, desde el número 0 hasta al número 9. Mostrar por la
// consola del navegador el array final (utilizar console.log).

var listFor10 = [];
for (var i = 0; i < 10 ; i++) {
    listFor10.push (i);
}
console.log ("List of ten " + listFor10);



