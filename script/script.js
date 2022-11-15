// function greet(name){
//     console.log("Hello " + name + "!")
// }
// greet(prompt("What is your name?: "))


// function greet (username){
//     console.log(username)
// }
// greet("Neda")

// let greet = function(name){
//     console.log(`hello ${name}`);
// }
// greet(prompt("Enter a name: "));

// let greet = (name, time = 'Day') => {
//     console.log(`Hello ${name}! Have a good ${time}`)
// }
// greet(prompt("Enter a name: "), "Night")
   

const unorderedListElement = document.querySelector(".shopping")

function populateList(list){
    for (let l = 0; l < list.length; l++){
        console.log(list[l]);
        const listItemElement = document.createElement("li");
        listItemElement.textContent = list[l];
        unorderedListElement.append(listItemElement);
    }
}
let shoppingList = ["Cheese", "Ham", "Bread", "Green Pepper", "Milk", "Coffee"];

populateList(shoppingList);