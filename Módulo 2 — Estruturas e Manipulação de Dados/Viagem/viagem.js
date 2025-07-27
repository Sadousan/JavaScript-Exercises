let num = 1; num % 2 == 0 ? console.log(num + " is a even number") : console.log(num + " is a odd number");

var precoComb;
var distancia;
var consumo;
var precoTotal;

function calcularPrecoViagem() {
    precoComb = parseFloat(document.getElementById("precoComb").value);
    distancia = parseFloat(document.getElementById("distancia").value);
    consumo = parseFloat(document.getElementById("consumo").value);
    mostrarResultado()
}

function mostrarResultado() {
    if (isNaN(precoComb) || isNaN(distancia) || isNaN(consumo) || consumo == 0) {
        alert("Por favor, preencha todos os campos com valores numéricos válidos. O consumo não pode ser zero.");
        mostrarresult.hidden = true
        
    }
    else {
        mostrarresult.hidden = false
        precoTotal = distancia / consumo * precoComb;
        console.log(precoTotal.toFixed(2));
        document.getElementById("resultado").textContent = "O valor do combustivel é: " + precoTotal.toFixed(2);
    }
}