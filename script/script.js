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

function changeListStyle(){
    unorderedListElement.classList.add("squareList");
    unorderedListElement.classList.remove("circleList");
}
changeListStyle()

function updateImage(){
    const imageElement = document.querySelector("#shoppingCart");
    console.log(imageElement);
    imageElement.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
    imageElement.height = 100;
    imageElement.width = 100;
    imageElement.alt = "shopping cart item"
}
updateImage()

function findGreen(){
    const listItems = document.querySelectorAll(".shopping li");
    for (let i = 0; i < listItems.length; i++){
        console.log(listItems[i])
        if(listItems[i].textContent.includes("Green")){
            listItems[i].classList.add("greenText")
        }
    }
}
findGreen();


// const unorderedList = document.querySelector(".shopping")

// function addToList(list){
//     let l = prompt();
//     for (let l = 0; l < list.length; l++){
//         console.log(list[l]);
//         const listItemElement = document.createElement("li");
//         listItemElement.textContent = list[l];
//         unorderedList.append(listItemElement);}
//     if (l != "Done")
//     unorderedList.append(l);
//     else
//     console.log("Have fun shopping!");}

// let shoppingList2 = [];
// addToList(shoppinglist2);