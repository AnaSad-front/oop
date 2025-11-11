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

Person.hey = function () {
  console.log("Hey there 👋");
  console.log(this);
};
Person.hey();

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

// ES6 CLASSES

// class expression
// const PersonCl =class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Devis", 1990);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// 1. classes are NOT hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode

const walter = new PersonCl("Walter White", 1965);
console.log(walter);

PersonCl.hey();

// GETTERS AND SETTERS

const account = {
  owner: "Ana",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/

// OBJECT.CREATE
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
*/
