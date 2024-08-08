'use strict';

////////// 
// Default Parameters
// const bookings = [];

// const createBooking = function (
//     flightNum, 
//     numPassengers = 1, 
//     price = 199 * numPassengers
// ) {
//     const booking = {
//         flightNum, 
//         numPassengers, 
//         price, 
//     };

//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('LH433');
// createBooking('LH557', 2, 400);

// console.log(bookings);

// createBooking('LH422', undefined, 1000);


// // Function Passing Arguments Values vs References
// const flight = 'LH737';
// const jonas = {
//     name: "Jonas", 
//     passport: 37846969463
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = "LH436", 
//     passenger.name = "Mr / Mrs / Miss" + passenger.name;

//     if (passenger.passport === 4678473646) {
//         alert("Checked In");
//     } else {
//         alert("Wrong Passport!");
//     }
// };

// console.log(jonas);
// checkIn(flight, jonas);

// console.log(flight);
// console.log(jonas);


////////// 
// Functions Accepting Callback Functions
// const oneWord = function (str) {
//     return str.replace(' / ', ' - ').toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(" ");
//     return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-Order Function
// const transformer = function (str, fn) {
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed String: ${fn(str)}`);

//     console.log(`Transformed By: ${fn.name}`);
// };

// transformer('Javascript is the Best Programming / Scripting Language!', oneWord);
// transformer('Javascript is the Best Programming / Scripting Language!', upperFirstWord);

// // JS uses Callbacks
// const high5 = function () {
//     console.log('hi5');
// }

// document.body.addEventListener("click", high5);
// ["Jonas", "Martha", "Adam"].forEach(high5);


// Functions Returning Functions
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// // const greeterHey = greet ("Hey!");
// // greeterHey("Jonas");
// // greeterHey("Sarah");

// greet ("Hello")("Martha");


// The call() and apply() methods
// const lufthansa = {
//     airLine: "Lufthansa", 
//     iataCode: "LH", 
//     bookings: [], 

//     book (flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     }
// }

// lufthansa.book(5436, 'Sarah');
// lufthansa.book(8643, 'Martha');
// console.log(lufthansa.bookings);

// const euroWings = {
//     airLine: "Eurowings", 
//     iataCode: "EW", 
//     bookings: [], 
// };

// const book = lufthansa.book;

// // does not work
// //book(7573, "Williams");

// // call() method
// book.call(euroWings, 67375, "Sara Williams");
// // console.log(book);

// console.log(lufthansa.bookings);
// console.log(euroWings.bookings);

// book.call(euroWings, 57982, "Williams");
// console.log(euroWings.bookings);


// // apply() method
// const swiss = {
//     airLine: "Swiss AirLine", 
//     iataCode: "SW", 
//     bookings: [], 
// };

// const flightData = [7469, "Cooper"];

// book.call(swiss, 3448, "Mary");
// book.apply(swiss, [7469, "Cooper"]);
// // book.apply(swiss, ...flightData);

// console.log(swiss.bookings);

// // bind() method
// book.call(euroWings, 7536, "George");

// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);

// bookEW(6362, "Adam");
// bookLH(67375, "Warner");
// bookSW(8673, "Bros");

// console.log(lufthansa.bookings);
// console.log(euroWings.bookings);
// console.log(swiss.bookings);

// // another way to create a new record using particular object and passing additional parameters
// const bookEW23 = book.bind(euroWings, 23);
// bookEW23("Schem");
// bookEW23("Mark");

// console.log(euroWings.bookings);

// with event listners
// const lufthansa = {
//     airLine: "Lufthansa", 
//     iataCode: "LH", 
//     bookings: [], 

//     book (flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     }
// };

// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };

// lufthansa.buyPlane();


// document
//     .querySelector(".buy")
//     .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// excercise: poll
// const poll = {
//     question: "What is your favorite programming language?", 
//     options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"], 
//     answers: new Array(4).fill(0), 

//     registerNewAnswer() {
//         const answer = Number(
//             prompt(`${this.question} \n ${this.options.join('\n')} \n (Write option Number)`)
//         );

//         console.log(answer);

//         // Register Answer
//         typeof answer === "number" && 
//             answer < this.answers.length && 
//             this.answers[answer]++;

//         this.displayResults();
//         this.displayResults("string");
//     }, 

//     displayResults(type = "array") {
//         if (type === "array") {
//             console.log(this.answers);
//         } else if (type === "string") {
//             console.log(`Poll results are ${this.answers.join(", ")}`);
//         }
//     }, 
// };

// document
//     .querySelector(".poll")
//     .addEventListener("click", poll.registerNewAnswer.bind(poll));


// const runOnce = function () {
//         console.log("This will never run again!");
// }
    
// runOnce();
// // Immediately Invoked Function Expressions (IIFE) (or)
// // Self Executing Functions
// // IIFE
// (function () {
//     console.log("This is an IIFE!");
//     const isPrivate = 747;
// })();
// // console.log(isPrivate);

// (() => console.log("This is an Arrow IIFE"))();


// // Closures
// // Function returning another function
// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();
// // booker();
// // booker();
// // booker();

// // more about closures
// let f;

// const g = function () {
//     const a = 23;

//     f = function () {
//         console.log(a * 2);
//     };
// };

// const h = function () {
//     const b = 65;

//     f = function () {
//         console.log(b * 2);
//     };
// };

// g();
// f();

// h();
// f();


// example
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout (function() {
//         console.log(`we are now boarding all ${n} passengers`);
//         console.log(`there are 3 groups, each group with ${perGroup} passengers`);
//     }, wait * 1000);
// }



// const perGroup = 1000;
// boardPassengers(180, 3);
