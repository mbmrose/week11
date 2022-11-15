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

let greet = (name, time = 'Day') => {
    console.log(`Hello ${name}! Have a good ${time}`)
}
greet(prompt("Enter a name: "), "Night")
   