/**
 * 01 Limitando palabras y cadenas de texto
 * */
const regExp_01_1 = /\bcat\b/;
console.log(regExp_01_1.test("cat"));
/**
 * 02 Seleccion de patrones
 * */
const regExp_02_1 = /pollo|res|pescado/;
console.log(regExp_02_1.test('El cliente pidió pollo')); // => true
console.log(regExp_02_1.test('El cliente pidió tacos')); // => false
/**
 * 03 Patrones al inicio y al final
 * */
const expresionInicio = /^Any/;
const expresionFin = /JavaScript$/
const expIniciFin = /^Any|JavaScript$/
console.log(expresionInicio.test('Any app that can be imagined can be made in Python')); // => true
console.log(expresionFin.test('Any app that can be imagined can be made in Python')); // => false
console.log(expIniciFin.test('Any app that can be imagined can be made in JavaScript')); // => true
