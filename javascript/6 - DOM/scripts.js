'use strict';

// 1. Change Text when user clicks on Button
// // accessing an element by its Id
// const titleElement = document.getElementById("title");
// console.log(titleElement);
// console.log(titleElement.textContent);

// // accessing an element by its classname
// const descriptionElements = document.getElementsByClassName("description");
// console.log(descriptionElements);
// console.log(descriptionElements[0].textContent);

// // adding an event listener to a button
// const button = document.getElementById("changeTxtBtn");
// button.addEventListener("click", () => {
//     titleElement.textContent = "Hello DOM!";
// });


// 2. Adding a New Item, when user clicks on Button
// const itemList = document.getElementById("itemList");
// const addItemBtn = document.getElementById("addItemBtn");
// const removeItemBtn = document.getElementById("removeItemBtn");

// addItemBtn.addEventListener("click", () => {
//     // Creating a New List Item
//     const newItem = document.createElement("li");
//     newItem.textContent = "New Item Added";

//     itemList.appendChild(newItem);
// });

// removeItemBtn.addEventListener("click", () => {
//     if (itemList.lastChild) {
//         itemList.removeChild(itemList.lastChild);
//     }
// });

