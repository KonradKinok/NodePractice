"use strict";
const message = "NodeJS in amazing!";
console.log(message);

// const validator = require("validator");

// const validateEmail = (email) => {
//   return validator.isEmail(email);
// };

// console.log(
//   "Is mango@mail.com a valid email?: ",
//   validateEmail("mango@mail.com")
// );

// console.log(
//   "Is Mangozedog.com a valid email?: ",
//   validateEmail("Mangozedog.com")
// );

//M8Z15-Modułowość kodu
import { hello, goodbye } from "./greeter.js";

console.log(hello()); // "hello!"
console.log(goodbye()); // "goodbye!"
