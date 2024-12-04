// In welke volgorde worden de nummers in de console geplaatst?
console.log(1);

// langdurendeTaak();

function logTwo() {
    console.log(2);
}

function logThree() {
    console.log(3);
}

console.log(4);

logTwo();

logMultiple();


function logMultiple() {
    console.log(5);
    logThree();
};



// Wat met lang durende taken?
function langdurendeTaak() {
    console.log('Taak start...');
    for (let i = 0; i < 10000000000; i++) {

    }
    console.log('Taak is klaar');
}



// WEB APIs

// --- setTimeout()
setTimeout(function() { 
    console.log("Dit zal verschijnen na 5s.")
}, 5000);



// --- addEventListener()
const block = document.getElementById("item");
block.addEventListener("click", function() {
        console.log("clicked");
    });


// ==> Deze Web API functies vragen een callback functie.
