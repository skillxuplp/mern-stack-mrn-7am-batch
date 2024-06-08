////////// Fundamentals Part 1
//////////// How to Access JS with HTML
/**
 * 1. External
 * 2. Embedded
 * 3. Inline
 */

//////////// Display the Data 
/**
 * 1. Document
 * 2. Console
 */

// document
// document.write(64);
// document.write(8.64);
// document.write(-643);
// document.write(-57.974);
// document.write(4e2);

// console
// console.log(64);
// console.log(8.64);
// console.log(-643);
// console.log(-57.974);
// console.log(4e2);

// console.log('Javascript Fundamentals Part - 1');
// console.log("Javascript Fundamentals Part - 1");

// console.log('"Javascript" Fundamentals Part - 1');
// console.log("'Javascript' Fundamentals Part - 1");

// console.log('\'Javascript\' Fundamentals Part - 1');
// console.log("\"Javascript\" Fundamentals Part - 1");

// console.log(`
//  document.write(64);
//  \'document.write(8.64);\'
//  document.write(-643);
//  document.write(-57.974);
//  document.write(4e2);
// `);

// console.log(false);

//////////// Data Types
/**
 * 1. Primitive Data Types
 *  1. Number: 0 - 9; 342, -35, 85.3532442, 3**2, 5^8, 5e5
 *  2. String: a - z, A - Z, 0 - 9, `~!@#$%^&*()-_=+[]{} - ' ... ', " ... ", ` .... `
 *  3. Boolean: true or false
 * 
 * 2. Abstract Data Types
 * 3. Misc Data Types
 */


//////////// identifiers:
/**
 * 1. every identifier should start with either a - z, A - Z, _, $
 * 2. from second character we even can use 0 - 9
 * 3. no other special symbols are allowed except _, $
 * 4. no spaces are allowed
 * 5. can use a combination of lowercase & uppercase characters
 * 
 * examples: fullname, _fullname, $fullname, full_name, fullName, my_age, age, num1, my_first_job, myFirstJob
 */

//////////// keywords:
/**
 * list of keywords: try, async, promise, function, object, let, const, if, switch, etc.,
 */

//////////// variables:
/**
 * keyword identifierName;
 * keyword identifierName = itsValue;
 */

// // 1. keyword: var
// var myName; // undefined
// console.log("myName: " + myName + ", typeof: " + typeof myName);

// var fullName = "James"; // string
// console.log(`fullName: ${fullName}, typeof: ${typeof fullName}`); // template literal

// var age = 29; // number
// console.log(`age: ${age}, typeof: ${typeof age}`); 

// var salary_credited = "$689.00"; // string
// console.log(`salary_credited: ${salary_credited}`);

// var jobStatus = true; // string
// console.log(`jobStatus: ${jobStatus}`);

// myName = "Joe"; // string
// console.log("myName: " + myName);

// var age = "twenty four"; // re-declaration
// console.log(`age: ${age}`);

// // 2. keyword: let
// let myName; // undefined
// console.log("myName: " + myName + ", typeof: " + typeof myName);

// let fullName = "James"; // string
// console.log(`fullName: ${fullName}, typeof: ${typeof fullName}`); // template literal

// let age = 29; // number
// console.log(`age: ${age}, typeof: ${typeof age}`); 

// let salary_credited = "$689.00"; // string
// console.log(`salary_credited: ${salary_credited}`);

// let jobStatus = true; // string
// console.log(`jobStatus: ${jobStatus}`);

// myName = "Joe"; // string
// console.log("myName: " + myName);

// age = "twenty four"; // re-declaration
// console.log(`age: ${age}`);


// // 3. keyword: const
// const  myName = "joe"; // undefined
// console.log("myName: " + myName + ", typeof: " + typeof myName);

// const  fullName = "James"; // string
// console.log(`fullName: ${fullName}, typeof: ${typeof fullName}`); // template literal

// const  age = 29; // number
// console.log(`age: ${age}, typeof: ${typeof age}`); 

// const  salary_credited = "$689.00"; // string
// console.log(`salary_credited: ${salary_credited}`);

// const  jobStatus = true; // string
// console.log(`jobStatus: ${jobStatus}`);

// // myName = "doe"; // string
// // console.log("myName: " + myName);

// // age = "twenty four"; // re-declaration
// // console.log(`age: ${age}`);


////////// Operators:
// Math Operators: +, -, *, /, ^, **, %
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 1981;

// console.log(now)
// console.log(ageJonas);
// console.log(ageSarah);

// console.log(ageJonas * 2, ageSarah / 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Williams";

// console.log(firstName + " " + lastName);

// // Assignment Operators: +=, -=, *=, /=, %=
// let x = 10 + 5;
// console.log(`x: ${x}`);

// x += 10; // x = 15 + 10
// console.log(`x: ${x}`);

// // Increment & Decrement Operators: ++, --
// // Pre & Post - Increment & Decrement
// x++; // x = x + 1
// console.log(`x: ${x}`);

// ++x; // x = 1 + x
// console.log(`x: ${x}`);

// // Comparison Operators: <, >, <=, >=
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);
// console.log(now - 1991 > now - 2018);

// Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 1981;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(`x: ${x}`);
// console.log(`y: ${y}`);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(`averageAge: ${averageAge}`);

// Equality Operators: ==, !=, ===, !==
// const firstName = "Jonas";
// const lastName = "Deo";

// const age = 23;
// const salary = "678";
// const amount = 678;

// console.log(firstName == "jonas");
// console.log(firstName === "jonas");

// console.log(amount == salary);
// console.log(amount === salary);
// console.log(amount !== salary);

//////////// 
// Strings and Template Literals
// const firstName = "James";
// const job = "Teacher";
// const birthYear = 1991;
// const year = 2037;

// const james = 'I\'m '  + firstName + ", a " + job + " with the age of " + (year - birthYear) + " yrs old!";
// console.log(james);

// const james2 = `
// I\'m "${firstName}", 
// a ${job} with the 
// age of ${year - birthYear} 
// yrs old`;

// console.log(james2);

//////////// 
// Decision Making Statements: if, if else, if else if else, switch case
// const age = 25;

// if (age >= 18) {
//     console.log(`Sarah can start driving the car!`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. should wait for another ${yearsLeft} yrs`);
// }

// const birthYear = 1962;

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(`as the birthYear: ${birthYear}, so now its century: ${century}`);


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);
// } else {
//     console.log(`Mark's BMI (${BMIMark}) is not higher than John's BMI (${BMIJohn})!`);
// }

//////////// 
// Type Conversion and Coercion
// Type Conversion
// const inputYear = "19.91";
// console.log(`inputYear: ${inputYear} and its type: ${typeof inputYear}`);

// const changeYear = Number(inputYear);
// console.log(`changeYear: ${Number(changeYear)} and its type: ${typeof changeYear}`);

// console.log(Number(inputYear) + 18);
// console.log(typeof NaN);

// // Coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' + 3);

// let n = '1' + 1;
// console.log(typeof n);

// n = n - 1;
// console.log(typeof n);

//////////// 
// Truthy and Falsy
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// let height = 0;
// if (height) {
//     console.log(`YAY! Height is defined!`);
// } else {
//     console.log(`Height is UNDEFINED!`);
// }

//////////// 
// Logical Operators: &&, ||, !
// const hasDriversLicense = false;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah having the Drivers License and also have a Good Vision!`);
// } else {
//     console.log(`Sarah either don't having the Drivers License or else not having a Good Vision!`);
// }


// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);
// console.log(hasDriversLicense || hasGoodVision || isTired);


//////////// 
// The Switch Case Statement
// const day = "wednesday";

// switch (day) {
//     case "monday": 
//         console.log("Plan course structure");
//         console.log("Go to coding meet-up");
//         break;

//     case "tuesday": 
//         console.log("Prepare theory videos");
//         break;

//     case "wednesday": 
//         break;

//     case "thursday": 
//         console.log("Write code examples");
//         break;

//     case "friday":
//         console.log("Record videos");
//         break;

//     case "saturday":
//         break;

//     case "sunday":
//         console.log("Enjoy the weekend");

//     default:
//         console.log("Not a valid day");
// }

//////////// 
// Statements and Expressions
// 3 + 7;
// 1689;
// true && false;

//////////// 
// Conditional (Ternary) Statements
// const age = 23;
// age >= 18 ? console.log("the age is greater than 18") : console.log("the age is not greater than 18");