// Functions

// Bestaande functies
console.log();


// Eigen Functies
sayHiToConsole(); // Werkt wel, want function declarations worden geregistreerd en kunnen gebruikt worden voor aanmaak (hoisting)
// sayHelloToConsole(); // Werkt niet want variabele met functie bestaat nog niet.


// -- Function declaration
function sayHiToConsole() {
    console.log("Hi!");
}

sayHiToConsole();

// -- Function Expression
const sayHelloToConsole = function() {
    console.log("Hello!");
}

sayHelloToConsole();


const myFriends = new Array("Monica", "Ross", "Chandler", "Joe", "Phoebie");
console.log(myFriends)

let friend = "Rachel";
function addFriend(friend) {
    console.log(friend);
    myFriends.push(friend);
    console.log(myFriends);
}
console.log(friend);
addFriend("Gunther");
addFriend("Rachel");

function logArray(arr = null) {
    console.log(arr);
}

logArray(myFriends);
logArray();

// function add(a, b) {
//     return a + b;
// }

const add = (a, b) => a + b;

const result = add(2, 4);
console.log(result);


document.querySelector("#p-tag")
    .addEventListener("click", (event) => event.target.style.color = "red");




// OEfenening 2
const lijst = document.querySelector("#lijst-van-namen");

const voornamen= ["Annelies", "Peter", "Jos", "Brent"];
const achternamen = ["Mertens", "Janssens", "Peeters", "Janssens"];

if (voornamen.length === achternamen.length) {
    for (let i = 0; i < voornamen.length; i++) {
        // Voornaam en achternaam uit Array halen
        const fName = voornamen[i];
        const lName = achternamen[i];

        // Lijst element (li) aanmaken voor elke persoon
        const lijstElement = document.createElement('li');

        // Volledige naam in li element plaatsen
        lijstElement.textContent = `${fName} ${lName}`;

        // Lijst element toevoegen aan lijst (ul)
        lijst.appendChild(lijstElement);
    }
}
