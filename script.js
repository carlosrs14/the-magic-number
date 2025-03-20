let secretNumber = parseInt(Math.random() * 100);
const form = document.getElementById("form");
const number = document.getElementById("number");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    validateWinner();
});

function validateWinner() {
    if (secretNumber < number.value) {
        alert("tu numero es mayor");
        return;
    }
    if (secretNumber > number.value) {
        alert("tu numero es menor");
        return;
    }
    alert("ganadorr")
}


