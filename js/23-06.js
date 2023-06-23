// дз 11
// завдання 1

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     const newArr = i + 1;
//     const sumArr = newArr + "-" + array[i];
//     console.log(sumArr);
//   }
// };

// const logItems = array => {
//  for (let i = 0; i < array.length; i++) {
//     const newArr = i + 1;
//      const sumArr = newArr + "-" + array[i];
//      console.log(sumArr);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// завдання 2

// const calculateEngravingPrice = (message, pricePerWord) {
//   const findPrice = message.split("").length * pricePerWord;
//   return findPrice;
// };

// const calculateEngravingPrice = (message, pricePerWord) => message.split("").length * pricePerWord;

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );

// завдання 3

// const findLongestWord = function (string) {
//   const word = string.split(" ");
//   let maxWord = word[0];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length > maxWord.length) {
//       maxWord = word[i];
//     }
//   }
//   return maxWord;
// };

// const findLongestWord = string => {
//   const word = string.split(" ");
//   let maxWord = word[0];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length > maxWord.length) {
//       maxWord = word[i];
//     }
//   }
//   return maxWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// завдання 4

// const formatString = function (row) {
//   let newRoow = " ";
//   if (row.length < 40) {
//     newRoow = row;
//   } else {
//     newRoow = row.slice(0, 40) + "...";
//   }
//   return newRoow;
// };

// const formatString = row => {
//   let newRoow = " ";
//   if (row.length < 40) {
//     newRoow = row;
//   } else {
//     newRoow = row.slice(0, 40) + "...";
//   }
//   return newRoow;
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// console.log(formatString("Curabitur ligula sapien."));
// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );

// завдання 5

// const checkForSpam = function (message) {
//   message.toLowerCase().includes("sale");
//     message.toLowerCase().includes("spam");
//     return message;
// };

// const checkForSpam = message =>
//   message.toLowerCase().includes("sale") ||
//   message.toLowerCase().includes("spam");

// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));

// завдання 6

// const workNumber = function (input) {
//     const numbers = [];
//     const arr = numbers.concat(input);
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total = arr[i] + arr.length;
//         console.log(total);
//     }
// };

// const workNumber =  input => {
//   const numbers = [];
//   const arr = numbers.concat(input);
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total = arr[i] + arr.length;
//     console.log(total);
//   }
// };

// let input = prompt("ввести число").split("");

// дз 12

// завдання 1

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const makePizza = () =>
//  "Your pizza is being prepared, please wait.";

// // Change code below this line

// const result = makePizza();

// const pointer = result;
// console.log(pointer);


// завдання 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // // Chande code below this line

// function makeMessage(pizzaName, callback) {
//     const pizza = callback(pizzaName);
//    return pizza;
// }

// const deliverPizza = pizzaName =>
//    `Delivering ${pizzaName} pizza.`;


// const makePizza = pizzaName =>
//    `Pizza ${pizzaName} is being prepared, please wait...`;


// const makeMessage = (pizzaName, callback) =>
//  callback(pizzaName);

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Margarita", deliverPizza));


// завдання 3

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

//   callback(pizzaName);
// }

// const makePizza = (pizzaName, callback) => {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

//   callback(pizzaName);
// };

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });


// завдання 4

// function actionsText(text, callback) {
//     alert("");
//     const texxt = callback(text);
//     return texxt;
// }

// function outputText(text) {
//     return alert(`${text}`);
// }

// const actionsText = (text, callback) =>{
//   alert("");
//   const texxt = callback(text);
//   return texxt;
// }

// const outputText = text => alert(`${text}`);


// console.log(actionsText("Hello World!", outputText));


// завдання 5

// download ended ;)

// const btnRef = document.querySelector("[data-btn]");


// // function showInfo() {
// //     console.log("клік по кнопці");
// // };

// const showInfo = () =>
//     console.log("клік по кнопці");


// btnRef.addEventListener("click", showInfo);

// завдання 6

// const applyCallbackToEachElement = function (arr, callback) {
//     const newCallback = callback(arr);
//     return newCallback;
//   }

// const squareCallback = function (arr) {
//     arr = [];
//     arr.splice(1, 2, 1, 4, 9, 16, 25);
//     return arr;
// }

// const applyCallbackToEachElement = (arr, callback) => callback(arr);

// const squareCallback = (arr) => {
//   arr = [];
//   arr.splice(1, 2, 1, 4, 9, 16, 25);
//   return arr;
// };

// const arr1 = [1, 2, 3, 4, 5];
 
//   const result = applyCallbackToEachElement(arr1, squareCallback);

// console.log(result); // [1, 4, 9, 16, 25]


// завдання 7

// const calculateDiscountedPrice = function (price, discount, callback) {
//     const priceDiscount = callback(price, discount);
//     return priceDiscount;

//   };

// const showDiscountedPrice = function (price, discount) {
//       return price - discount;
//   }

// const calculateDiscountedPrice = (price, discount, callback) =>
//   callback(price, discount);

// const showDiscountedPrice = (price, discount) => price - discount;

//  console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice));// Discounted price: 90

// ДЗ з відео

// 1

// const showName = () =>
//     console.log("Oleg-bobr"); //2

// setTimeout(showName, 0);
// console.log("Вася"); //1

// 2

// showMessge(); //Правильно
// function showMessge() {
//     console.log("Письмо");
// }

// 3

// showMessge(); //Не правильно ну поперше я не можна проголошувати через let а по друге не можли так викликати функцію котрої нема
//  let showMessge = function() {
//     console.log("Письмо");
// }

// 4

"use strict"

if (2 > 1) {
     function showMessge() {
    console.log("Письмо");
    }
    showMessge();//ТАК Облясть видимості просто не видить функцію
}

