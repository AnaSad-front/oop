// CHALLENGE 1
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
*/

// CHALLENGE 2
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
console.log(ford.speedUS);
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/
