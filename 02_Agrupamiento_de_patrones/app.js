/**
 * 01 No sensible a mayúsculas
 * */
const regExp_01_1 = /Hola Mundo/i;
console.log(regExp_01_1.test("Hola mundo")); // => true
/**
 * 02 Subexpresiones de patrones
 * */
const regExp_02_1 = /Woo+(hoo+)+/i;
console.log(regExp_02_1.test("Wooohooohooohooohoooooooohooohooohooohooohooo")); // => true
/**
 * 03 Coincidencias y grupos
 * */
const regExp_03_1 = /\d+/.exec("Del año 1984");
console.log(regExp_03_1); // => [ '1984', index: 8, input: 'Del año 1984', groups: undefined ]
console.log("Hasta 1994".match(/\d+/)); // => [ '1994', index: 6, input: 'Hasta 1994', groups: undefined ]
