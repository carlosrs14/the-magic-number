let secretNumber = parseInt(Math.random() * 100) + 1;
const form = document.getElementById("form");
const numberInput = document.getElementById("number");
const contador = document.getElementById("contador");
const listaIntentos = document.getElementById("lista-intentos");

var intentos = 0;
var numerosIngresados = new Set();

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let userNumber = parseInt(numberInput.value);
    
    if (numerosIngresados.has(userNumber)) {
        alert("ya has ingresado este numero");
        return;
    }
    
    numerosIngresados.add(userNumber);
    intentos++;
    contador.textContent = intentos;

    let li = document.createElement("li");
    li.className = "intento";
    li.textContent = userNumber;

    listaIntentos.prepend(li);

    validateWinner(userNumber);
});

function validateWinner(userNumber) {
    if (secretNumber < userNumber) {
        alert("tu numero es mayor");
        return;
    }
    if (secretNumber > userNumber) {
        alert("tu numero es menor");
        return;
    }
    alert("ganadorr")
}


