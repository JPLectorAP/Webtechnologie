// OBJECTEN

const myFirstObject = {
    numberOne: 1,
    numberTwo: 2
};
logToConsole(myFirstObject.numberOne);

console.log(myFirstObject);


console.log(myFirstObject.numberOne);
console.log(myFirstObject["numberOne"]);


// const myArray = [1,2,3];
// console.log(myArray[1]);


const keyOfInterest = "numberTwo";

console.log(myFirstObject[keyOfInterest]);

myFirstObject.numberThree = "three";

console.log(myFirstObject);

myFirstObject.numberTwo = "two";
console.log(myFirstObject);

// Function declaration
function logToConsole(a) {
    console.log(a);
}

// Function expression
// const logToConsoleAlternative = function() {
//     console.log();
// }

// logToConsoleAlternative();









// Oefening1 
const phoebe = {
    name: "Phoebe Buffay",
    age: 32,
    songs: ["smelly cat", "sticky shoes"]
}
console.log(phoebe);

// Oefening 2
const ross = {
    name: "Ross Geller",
    age: 30,
    job: "Paleontologist"
};

ross.hobby = "Dinosaurs";
console.log(ross);

// Oefening 3
// const chandler = {
//     name: "Chandler Bing",
//     job: "Statistical Analyst",
//     quirk: "uses sarcasm a lot",
//   };

// function describeCharacter(character) {
//     console.log(`${character.name} works as a ${character.job} and ${character.quirk}`);
// }

// describeCharacter(chandler);
// describeCharacter(ross);


const monica = {
    name: "Monica Geller",
    age: 31,
    increaseAge: function() {
        this.age++;
    }
};
// console.log(monica);
// monica.increaseAge();
// console.log(monica);


// Oefening 4
const joey = {
    name: "Jeoy Tribbiani",
    age: 25,
    job: "actor",
    catchPhrase: "How you doin'?",
    introduce: function() {
        console.log(`Hi, I'm ${this.name}, an ${this.job}. ${this.catchPhrase}`);
    }
}

// Object.entries()
console.log(Object.entries(joey));

// Object.keys()
console.log(Object.keys(joey));

// Object.values()
console.log(Object.values(joey));



// Oefening 5
const friends = {
    Monica: 30,
    Rachel: 28,
    Joey: 27,
    Chandler: 29,
    Ross: 31,
    Phoebe: 32,
  };

// const friendsKeys = Object.keys(friends); // ["Monica", "Rachel", ...]
// for (key of friendsKeys) {
//     console.log(`${key} is ${friends[key]} years old.`);
// }

// let key = Object.entries(friends)[0];
// let value = Object.entries(friends)[1]; 

// let [key, value] = Object.entries(friends) // = [key, value]
// console.log(key);



for (let [key, value] of Object.entries(friends)) {
    console.log(`${key} is ${value} years old.`);
}


const friendsKeys = Object.keys(friends);
const friendsValues = Object.values(friends);

for (let i = 0; i < friendsValues.length; i++) {
    console.log(`${friendsKeys[i]} is ${friendsValues[i]} years old.`);
}




const myFriendsCharacters = [joey, monica];
console.log(myFriendsCharacters);

