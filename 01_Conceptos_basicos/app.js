/**
 * 01 Creacion de expresiones
 * */
const regExp_01_1 = new RegExp("abc");
const regExp_01_2 = /abc/;
const parrafo = /text1 \/n texto2 /;
/**
 * 02 Coincidencias
 * */
const regExp_02_1 = new RegExp("abc");
console.log(regExp_01_1.test("abcdef")); // => true
const regExp_02_2 = /Hola Mundo/;
console.log(regExp_01_2.test("El primer programa es Hola Mundo")); // => false
/**
 * 03 Conjunto de caracteres
 * */
const regExp_03_1 = /[0123456789]/;
console.log(regExp_03_1.test("Sucedió en 1996")); // => true
const regExp_03_2 = /[0-9a-zA-Z]/;
console.log(regExp_03_2.test("Sucedió en 1996")); // => true
/**
 * 04 Grupos de caracteres
 * */
const regExp_04_1 = /[0123456789]/;
console.log(regExp_04_1.test("29-junio-2007")); // => true
const regExp_04_2 = /\d\d-\d\d-\d\d\d\d/;
console.log(regExp_04_2.test("29-junio-2007")); // => false
console.log(regExp_04_2.test("29-06-2007")); // => true
/**
 * 05 Repeticion y negación
 * */
const regExp_05_1 = /[\d]/;
console.log(regExp_05_1.test("29-junio-2007"));
const regExp_05_2 = /[^01]/;
console.log(regExp_05_2.test("10101002100110001"));
/**
 * 06 Patrones de repeticion
 * */
const regExp_06_1 = /\d+/;
const regExp_06_2 = /\d*/;
console.log(regExp_06_1.test("1997")); // => true
console.log(regExp_06_2.test("2008")); // => true
/**
 * 07 Patrones de repeticion
 * */
var regExp_07_1 = /Hola mun?do/;
console.log(regExp_07_1.test("Hola mudo")); // => true
/**
 * 08 Patrones de repeticion
 * */
var regExp_08_1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2,}/;
console.log(regExp_08_1.test("27-06-2007 11:45")); // => true
