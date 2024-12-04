// Een array van personages uit Friends
const friendsArray = ["Monica", "Rachel", "Joey", "Chandler", "Ross", "Phoebe"];

// Callback-functie 1: Geef elk personage een begroeting
const greetFriend = function(friend) {
    console.log(`Hey, ${friend}! How you doin'?`);
};

// Callback-functie 2: Check de lengte van de naam
const checkNameLength = function(friend) {
    console.log(`${friend} heeft een naam van ${friend.length} karakters.`);
};

// Callback-functie 3: Converteer de naam naar hoofdletters
const shoutName = function(friend) {
    console.log(friend.toUpperCase());
};

// Custom loopfunctie die een callback accepteert
const loopThroughArray = function(arr, callbackFunction) {
    for (const element of arr) {
        callbackFunction(element);
    }
};

friendsArray.forEach(function(friend) {
    console.log(`Hey, ${friend}! How you doin'?`);
});

// Roep de custom loopfunctie aan met verschillende callbacks
loopThroughArray(friendsArray, greetFriend);
loopThroughArray(friendsArray, checkNameLength);
loopThroughArray(friendsArray, shoutName);
