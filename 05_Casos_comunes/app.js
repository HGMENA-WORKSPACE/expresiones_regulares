/**
 * 01 Validando correo electronico
 * */
const isValidMail = (email) =>
  /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
const mail = "fulano@mail.com";
console.log(isValidMail(mail)); // => true;
/**
 * 02 Validando usuario de Twitter
 * */
const isValidUsuarioTwitter = (twitterUser) => /^@(\w+)$/.test(twitterUser);
const twitterUser = "@fulano_detal";
console.log(isValidUsuarioTwitter(twitterUser)); // => true;
/**
 * 03 URL/Dirección web válida
 * */
const isValidUrl = (url) =>
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/.test(url);
let url = "https://localhost";
console.log(isValidUrl(url)); // => false;
url = "https://localhost.com";
console.log(isValidUrl(url)); // => true;
/**
 * 04 Valida password segura con:
 * al menos una letra mayúscula.
 * al menos una letra minúscula.
 * al menos un número o caracter especial.
 * mínimo 8 caracteres.
 * */
const isValidPass = (pass) =>
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
    pass
  );
const pass = "Yo_12345678";
console.log(isValidPass(pass)); // => true;
/**
 * 05 Teléfonos en el mundo
 * */
const isValidPhone = (phone) =>
  /^\+[1-9]{1}[0-9]{7,11}$/.test(
    phone
  );
const phone = "+593667907637";
console.log(isValidPhone(phone)); // => true;
/**
 * Tarjetas de credito
 * BRAND : VISA
 * NUMBER : 4916958669931218
 * BANK : BANCO BILBAO VIZCAYA ARGENTARIA
 * NAME : Catherine Szcs
 * ADDRESS : Avda. Alameda Sundheim 97
 * COUNTRY : SPAIN
 * MONEY : $641
 * CVV/CVV2 : 130
 * EXPIRY : 04/2023
 * PIN : 9136
 */
const isValidCreditCard = (creditCard) =>
  /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$/.test(
    creditCard
  );
const creditCard = "4916958669931218";
console.log(isValidCreditCard(creditCard)); // => true;
/**
 * Código postal
 */
const isValidPostalCode = (zipCode) =>
  /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(zipCode);
const zipCode = "28047";
console.log(isValidPostalCode(zipCode)); // => true;
/**
 * Nombres de usuario
 * Mínimo 6 caracteres
 * Máximo 30 caracteres
 */
const isValidUserName = (userName) =>
/^[a-z\d_]{6,30}$/i.test(userName)
const userName = "fulano";
console.log(isValidUserName(userName)); // => true;
