'use strict';

//////// Object Oriented Programming
// Constructor Functions and the 'new' operator
// const Person = function (firstName, birthYear) {
//     // instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// const jonas = new Person ("Jonas", 1991);
// console.log(jonas);

// const matilda = new Person ("Matilda", 2017);
// console.log(matilda);

// const jack = new Person ("Jack", 1982);
// console.log(jack);

// // adding or creating a new method using a constructor outside the definition
// Person.hey = function () {
//     console.log(`hey there!`);
//     console.log(this);    
// }

// Person.hey();


// ///////// 
// // Prototypes
// console.log(Person.prototype);

// jonas.emailAddress = "jonas@gmail.com";
// console.log(jonas);

// Person.prototype.userName = "admin";

// console.log(jonas.userName);
// console.log(matilda.userName);
// console.log(jack.userName);

// console.log(Person);

// // using constructor, if we want to add any new property or method,
// // we have to use prototype
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }

// jonas.calcAge();
// matilda.calcAge();


// console.log(jonas.__proto__);
// console.log(matilda.__proto__);


// // prototypeOfLinkedObjects
// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species);
// console.log(matilda.species);

// console.log(jonas.hasOwnProperty("firstName"));

// // prototypal inheritance on builtin objects
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// understanding the array with prototype
// const arr = [3, 6, 6, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }

// console.log(arr.unique());


// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
// }


// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}`);
// }

// const bmw = new Car ("BMW", 120);
// const mercedes = new Car ("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();

// bmw.brake();

////////////////////////
// ES6 Class's and Object
// class PersonCl {
//     // built-in method
//     constructor (fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // instance methods 
//     calcAge () {
//         console.log(2037 - this.birthYear);
//     }

//     greet () {
//         console.log(`hey ${this.fullName}`);
//     }

//     get age () {
//         return 2037 - this.birthYear;
//     }

//     // set fullName (name) {
//     //     this.fullName = name;
//     // }

//     // get fullName () {
//     //     return this.fullName;
//     // }
// }

// // declare objects
// const jessica = new PersonCl ("Jessica Davis", 1996);
// console.log(jessica);

// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //     console.log(`hey ${this.fullName}`);
// // }

// jessica.greet();


// // getters and setters
// const account = {
//     owner: "Jonas", 
//     movements: [200, 550, 120, 300], 

//     get latest () {
//         return this.movements.pop();
//     }, 

//     set latest (mov) {
//         this.movements.push(mov);
//     }
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.latest);


// // Object.create
// const PersonProto = {
//     calcAge () {
//         console.log(2037 - this.birthYear);
//     }, 

//     init (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }, 
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1965);
// sarah.calcAge();



// Inheritance
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// };


// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student("Mike", 1991, "Computer Science");
// mike.introduce();
// mike.calcAge();

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge--;

//     console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
// }

// const tesla = new EV("Tesla", 120, 25);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();


// Inheritance between 'class\'s'
// class PersonCl {
//     constructor (fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     calcAge () {
//         console.log(`calcAge: ${2037 - this.birthYear}`);
//     }

//     greet () {
//         console.log(`hey ${this.fullName}`);
//     }

//     get age () {
//         return 2037 - this.birthYear;
//     }

//     set fullName (name) {
//         if (name.includes (' ')) this._fullName = name;
//         else alert(`${name} is not a fullName!`);
//     }

//     get fullName () {
//         return this._fullName;
//     }

//     static hey () {
//         console.log(`hey there!`);
//     }
// }


// class StudentCl extends PersonCl {
//     constructor (fullName, birthYear, course) {
//         super (fullName, birthYear);
//         this.course = course;
//     }

//     introduce () {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }

//     calcAge () {
//         console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${(2037 - this.birthYear) - 10} `);
//     }
// }

// const martha = new StudentCl ("Martha Jonas", 1993, "Computer Science");
// martha.introduce();
// martha.calcAge();


///////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

/**
 * 1. Public Fields
 * 2. Private Fields
 * 3. Public Methods
 * 4. Private Methods
 * (Static)
 */


// class Account {
//     // 1. Public Fields 
//     locale = navigator.language;

//     // 2. Private Fields
//     #movements = [];
//     #pin;

//     constructor (owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;

//         // 3. Protected Properties
//         this.#movements = [];
//         this.locale = navigator.language;

//         console.log(`thank you for opening an account: ${owner}`);
//     }

//     // 3. Public Methods
//     // Public Interface
//     getMovements () {
//         return this.#movements;
//     }

//     deposit (val) {
//         this.#movements.push(val);
//         return this;
//     }

//     withdrawn (val) {
//         this.#movements.push(-val);
//         return this;
//     }

//     requestLoan (val) {
//         if (this._approvedLoan(val)) {
//             this.deposit(val);
//             console.log(`loan approved`);
//             return this;
//         }
//     }

//     static helper () {
//         console.log('helper');
//     }


//     // 4. Private Methods
//     // #approvedLoad (val)
//     _approvedLoan(val) {
//         return true;
//     }
// }

// const acc1 = new Account ("Jonas", "EUR", 1111);

// // acc1._movements.push(250);
// // acc1._movements.push(-140);
// acc1._approvedLoan(1000);

// acc1.deposit(240);
// acc1.withdrawn(140);

// console.log(acc1.getMovements());
// console.log(acc1);