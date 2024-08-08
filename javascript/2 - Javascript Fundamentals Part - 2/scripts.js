'use strict';

////////// 
// Activating Strict Mode
// let hasDriversLicense = false;
// const passTest = false;
// const userName = "james";

// console.log(typeof hasDriversLicense);

// if (passTest) { hasDriversLicense = true; }
// else { hasDriversLicense = false; }

// if (hasDriversLicense) console.log("I can drive!");
// else console.log("No., I can't drive!");


////////// 
// Functions
// Simple Functions without Parameters, etc.,
// Declaration
// function logger() {
//     console.log("This is a logger function!");
// }

// console.log("thi is a global statement");

// // Calling / Invoking Functions
// logger();
// logger();
// logger();

// Function Declaration with Arguments
// function fruitProcessor(app, ora) {
//     const juice = `Juice with ${app} apples and ${ora} oranges!`;
//     console.log(juice);
// }

// let apples = 4;
// let oranges = 8;

// // Function Call with Parameters
// fruitProcessor(apples, oranges);

// apples = 0;
// oranges = 2;

// fruitProcessor(apples, oranges);

// Return Statement
// function fruitProcessor(app, ora) {
//     const juice = `Juice with ${app} apples and ${ora} oranges!`;
//     return juice;
// }

// let apples = 4;
// let oranges = 8;
// let fruits = "";

// // Function Call with Parameters
// fruits = fruitProcessor(apples, oranges);
// console.log(fruits);

// apples = 0;
// oranges = 2;

// fruits = fruitProcessor(apples, oranges);
// console.log(fruits);


// Anonymous Functions
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// let age1 = calcAge (1991);
// console.log(`age1: ${age1}`);

// age1 = calcAge(2012);
// console.log(`age1: ${age1}`);


// Arrow Functions
// const calcAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     console.log(age);
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }


// const calcYrs = yearsUntilRetirement(1991, "James");
// console.log(calcYrs);

// Functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));
// console.log(fruitProcessor(4, 5));

// Reviewing Functions
// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     console.log(retirement);

//     if (retirement > 0) {
//         // console.log(`${firstName} retires in ${retirement} years`);
//         return [firstName, retirement];
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(991, 'Jonas'));
// console.log(yearsUntilRetirement(997, 'Williams'));

//////////
// Inroduction to Arrays
// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

// // const friends = ["Micheal", "Steven", "Peter"];
// // console.log(friends);

// const friends = new Array("Micheal", "Steven", "Peter");
// console.log(friends);
// console.log(friends.length);
// console.log(friends.length - 1);

// console.log(friends[2]);

// console.log(friends);
// friends[1] = "Williams";
// console.log(friends);

// const firstName ="Jonas";
// const jonas = [firstName, "Peter", 2037 - 1991, "Teacher", friends];
// console.log(jonas);
// console.log(jonas.length);
// console.log(jonas[2]);
// console.log(jonas[4]);
// console.log(jonas[4][2]);

// Array Operations
// const friends = ["Micheal", "Steven", "Peter"];

// // Add elements
// const newLength = friends.push("Jay");
// console.log(newLength);
// console.log(friends);

// friends.unshift("john");
// console.log(friends);

// // Remove elements
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.includes("Steven"));

// // Remove elements at specific location
// let newFriends = friends.splice(1, 1);
// console.log(newFriends);

// console.log(friends);

// const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(totals);

// Introduction to Objects
// function userName(user) {
//     return `Username: ${user}`
// }

// const userArray = [
//     "firstName": "James", 
//     2037 - 1991, 
//     "Teacher", 
//     ["Micheal", "Steven", "Peter"], 
//     userName("Steven")
// ];

// console.log(userArray);
// console.log(userArray[3]);

// const userObject = {
//     "firstName": "James", 
//     lastName: "Williams", 
//     age: 2037 - 1991, 
//     job: "Teacher", 
//     friends: ["Micheal", "Steven", "Peter"], 
//     userName: function () {
//         return `Username: ${this.firstName}`
//     }, 
// };

// console.log(userObject);

// // dot notation
// console.log(userObject.age);
// console.log(userObject.friends);

// // bracket notation
// console.log(userObject["job"]);
// console.log(userObject["firstName"]);

// // console.log(userObject["userName"]);
// // console.log(userObject.userName("Steven 10"));

// console.log(userObject.userName());

// const nameKey = "Name";
// console.log(userObject["first" + nameKey]);
// console.log(userObject["last" + nameKey]);

// // const interestedIn = prompt("What do you want to know about User? Choose among firstName, lastName, age, job, friends");

// // if (userObject[interestedIn]) {
// //     console.log(userObject[interestedIn])
// // } else {
// //     console.log("Wrong request! Choose among ...");
// // }

// userObject.location = "FY 24/B";
// userObject["facebook"] = "https://facebook.com";

// console.log(userObject);

// Objects Methods
// const james = {
//     // properties
//     firstName: "James", 
//     lastName: "Doe", 
//     birthYear: 1991, 
//     job: "teacher", 
//     friends: ["Micheal", "Peter", "Steven"], 
//     hasDriversLicence: true, 

//     // methods
//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // }

//     // calcAge: function () {
//     //     // return 2037 - this.birthYear;
//     //     console.log(this);
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }, 

//     yearsUntilRetirement: function () {
//         return 65 - this.age
//     }, 

//     getSummary: function () {
//         return `${this.firstName} ${this.lastName} is a ${this.calcAge()} - years old, and he/she has ${this.hasDriversLicence ? "a" : "no"} driver's license`;
//     }
// };

// console.log(james);
// console.log(james.calcAge());
// console.log(james.yearsUntilRetirement());
// console.log(james.getSummary());
// // console.log(this);

// const mark = {
//     fullName: "Mark Miller", 
//     mass: 78, 
//     height: 1.69, 

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "John Smith", 
//     mass: 92, 
//     height: 1.95, 

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();


// console.log(mark.bmi);
// console.log(john.bmi);


// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is not higher than ${john.fullName}'s BMI (${john.bmi})`);
// }


////////// Iteration (loop)
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");

// // for loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }


//////////
// Looping Arrays, Break and Continue
// const jonas = [
//     "Jonas", 
//     "Schemn", 
//     2037 - 1991, 
//     "teacher", 
//     ["Micheal", "Peter", "Steven"], 
//     true
// ];

// const types = [];

// // console.log(jonas[0]);
// // console.log(jonas[6]);

// for (let i = 0; i < jonas.length; i++) {
//     // reading from jonas array
//     console.log(`value => ${jonas[i]}, typeof => ${typeof jonas[i]}`);

//     // filling types array
//     types.push(typeof jonas[i]);
// }

// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// continue and break
// console.log("----- ONLY STRINGS -----");
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== "string") {
//         continue;
//     }
//     console.log(`value => ${jonas[i]}`);
// }

// console.log("----- ONLY STRINGS -----");
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== "string") {
//         break;
//     }
//     console.log(`value => ${jonas[i]}`);
// }

// Looping Backwards and loops in loops
// const jonas = [
//     "Jonas", 
//     "Schemn", 
//     2037 - 1991, 
//     "teacher", 
//     ["Micheal", "Peter", "Steven"], 
//     true
// ];

// for (let excercise = 1; excercise < 4; excercise++) {
//     console.log(`--------- Starting excercise ${excercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`);
//     }
// }

// while loop
// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// let i = 1;
// while (dice !== 6) {
//     if (i === 4) {
//         break;
//     }
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     i++;
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 246, 145, 46, 190, 35, 93];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);


// const calcAverage = function (arr) {
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]; // sum = sum + arr[i]
//     }

//     return sum / arr.length;
// }

// console.log(calcAverage([2, 4, 7]));
