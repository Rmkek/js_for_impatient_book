"use strict";
// my guess is commented first answer, second is the correct one
console.log("Question 1");
console.log(0 + NaN); // NaN, NaN
console.log(0 + Infinity); // Infinity, Infinity
console.log(0 + false); // 0, 0
console.log(0 + true); // 1, 1
console.log(0 + null); // 0, 0
console.log(0 + undefined); // undefined, NaN; undefined to number => NaN, NaN + 0 = NaN

console.log("Question 2");
console.log([] + []); // 0, ""; [] => 0 as number and "" as string, goes to string (why?), "" + "" = ""
console.log({} + []); // Object, Object
console.log([] + {}); // 0, Object
console.log({} + {}); // Object, ObjectObject; Object to string is [object Object] + another obj string = ObjectObject
console.log([] - {}); // 0, NaN; minus operates only on numbers, so [] to number = 0, {} to number = NaN, 0 - NaN = NaN

console.log("Question 3");
console.log(-1 % 2);
console.log(-2 % 2);
console.log(-4 % 2);
console.log(-1.5 % 2);
console.log(-0 % 2);

console.log("Question 4");
let angle = 720;
angle %= 360;
console.log(`Angle: ${angle}`);

console.log("Question 5");
let string1 = "\\\\";
let string2 = "\u{005C}\u{005C}";
console.log(string1);
console.log(string2);

console.log("Question 6");
console.log("🌐");
console.log("\u{1F310}");

console.log("Question 7");
let secondName = "Nullified";
let myName = `Roman ${secondName}`;
let string3 = `Hello, ${myName}`;
console.log(`string3: ${string3}`);

console.log("Question 8");
let arr1 = [1, 2, 3];
delete arr1[1];
let arr2 = [1, , 3];
let arr3 = [1, 2, 3];
arr3["1"] = undefined;

console.log(arr1);
console.log(arr2);
console.log(arr3); // i dunno of any better third way?

console.log("Question 9");
let arr = [];
arr[0] = 0;
arr["0.5"] = 0.5;
arr[1] = 1;
arr["1.5"] = 1.5;
arr[2] = 2;
console.log(arr);

console.log("Question 10");
let example_1 = "" + [[]];
let example_2 = [[]] + "";
console.log(example_1, typeof example_1); // """"? ""
console.log(example_2, typeof example_2); // """"? ""

console.log("Question 11");
let sally, harry;
harry = { name: "harry", friends: [] };
sally = { name: "sally", friends: [] };
harry.friends.push(sally);
sally.friends.push(harry);

console.log(harry);
console.log(sally);
console.log(JSON.stringify(harry)); // cycle dependency
console.log(JSON.stringify(sally)); // cycle dependency
