// var && funcitons

const { default: test } = require("node:test");

// const Name = "Jane";
// let age = 4;
// let hasHobbies = true;

// function summarizeUser(userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     "," +
//     " Age is " +
//     userAge +
//     "," +
//     " and user has hobbies : " +
//     userHasHobby
//   );
// }

// console.log(summarizeUser(Name, age, hasHobbies));

// const summarizeUser = (userName, userAge, userHasHobby) => {
//   return (
//     "Name is " +
//     userName +
//     "," +
//     " Age is " +
//     userAge +
//     "," +
//     " and user has hobbies : " +
//     userHasHobby
//   );
// };

// const add = (a, b) => a + b;

// objects

// const person = {
//   name: "jane",
//   age: 9,
//   userHasHobbies: false,
//   greetUser: () => {
//     return " hello " + this.name;
//   },
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.userHasHobbies);
// console.log(person);
// console.log(person.greetUser());

// arrays

// const hobbies = ["Sports", "Cooking"];
// for (let x = 0; x < hobbies.length; x++) {
//   console.log(hobbies[x]);
// }

// console.log(
//   hobbies.map((hobby) => {
//     return hobby.at(0);
//   })
// );

// hobbies.push("Programming");
// console.log(hobbies);

// const copiedArray = [...hobbies]; // spread
// console.log(copiedArray);

// const toArray = (...args) => {
//   // rest
//   return args;
// };

// destructuring

// const printName = ({ name, age }) => {
//   console.log(name + " is " + age + " years old");
// };
// printName(person);

// const { name, age } = person;

// setTimeout(() => {
//   console.log("shivalli meri frand hain");
// }, 20000);

// console.log("hello !");
// console.log("his !");
// fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Done!");
//   }, 2000);
// };

// setTimeout(() => {
//   console.log("timer is done!! ");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);

// console.log("Hello!");
// console.log("hi!");
