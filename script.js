"use strict";

// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER create methods inside constructor functions
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const ana = new Person("Ana", 1996);
console.log(ana);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

const jay = "Jay";

console.log(ana instanceof Person);
console.log(jay instanceof Person);

// PROTOTYPES

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

ana.calcAge();
matilda.calcAge();

console.log(ana.__proto__);
console.log(ana.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ana)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = "Homo sapiens";
console.log(ana.species, matilda.species);

console.log(ana.hasOwnProperty("firstName")); // true
console.log(ana.hasOwnProperty("species")); // false

// PROTOTYPAL INHERITANCE
console.log(ana.__proto__);
// Object.prototype (top of prototype chain)
console.log(ana.__proto__.__proto__);
console.log(ana.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [2, 4, 5, 7, 2, 4, 6, 4, 8]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS
const h1 = document.querySelector("h1");
console.dir((x) => x + 1);
*/
