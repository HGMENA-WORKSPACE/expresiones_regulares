/**
 * 01 Uso del metodo replace
 * */
let mensaje = "El cliente pidió sushi y comió su sushi, sushi, sushi, sushi";
console.log(mensaje.replace(/i/g, "o")); // => El cloente podoó susho y comoó su susho, susho, susho, susho
/**
 * 02 Metodo de busqueda
 * */
mensaje = "Estahistoriacontinuara";
const regExp_02_1 = /\W\S/g;
//  \W  Cualquier carácter que no sea alfanumérico
//  \S Cualquier carácter que no sea un espacio en blanco
console.log(mensaje.search(regExp_02_1)); // => -1
/**
 * 03 Entendiendo la propiedad LastIndex
 * */
const regExp_03_1 = /y/g;
console.log(regExp_03_1.lastIndex); // => 0
regExp_03_1.lastIndex = 6;
console.log(regExp_03_1.lastIndex); // => 6

const coincidencia = regExp_03_1.exec("sibr yfx sibr yfx");
console.log(coincidencia); // => [ 'y', index: 14, input: 'sibr yfx sibr yfx', groups: undefined ]
console.log(regExp_03_1.lastIndex); // => 15

const regExp_03_2 = /\d/g;

console.log(regExp_03_2.exec("Pedí 4 tacos y 1 agua")); // => [ '4', index: 5, input: 'Pedí 4 tacos y 1 agua', groups: undefined ]
console.log(regExp_03_2.exec("Pedí 4 tacos y 1 agua")); // => [ '1', index: 15, input: 'Pedí 4 tacos y 1 agua', groups: undefined ]
regExp_03_2.lastIndex = 0;
console.log(regExp_03_2.exec("Pedí 4 tacos y 1 agua")); // => [ '4', index: 5, input: 'Pedí 4 tacos y 1 agua', groups: undefined ]
/**
 * 04 Entendiendo la propiedad LastIndex
 * */
mensaje =
  "Llegaban por montones, primero 10, después 20, después 35 y se duplicaban hasta llegar a 1000";
const regExp_04_1 = /\b(\d+)\b/g;
let match;
while ((match = regExp_04_1.exec(mensaje))) {
  console.log(match); // => [ '1000', '1000', index: 89, input: 'Llegaban por montones, primero 10, después 20, después 35 y se duplicaban hasta llegar a 1000', groups: undefined ]
  console.log("Se encontró ", match[1], " en la posición: ", match.index); // => Se encontró  1000  en la posición:  89
}
