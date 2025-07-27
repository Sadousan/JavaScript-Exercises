let num = 1; num % 2 == 0 ? console.log(num + " is a even number") : console.log(num + " is a odd number");

let tipoCombustivel;
var precoComb;
var distancia;
var consumo;
var precoTotal;

function calcularPrecoViagem() {
    tipoCombustivel = document.getElementById("tipoCombustivel").value;
    atribuirPrecoCombustivel();
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
        document.getElementById("resultado").innerHTML = "O valor do combustível é: R$ <span id='preco-destaque'>" + precoTotal.toFixed(2) + "</span>";
        //utilizando innerHTML em vez de textcont porque permite conteudo html e separacao por tags, para estilizacao mais invidual.
    }
    
}

function atribuirPrecoCombustivel() {
    const tipoCombustivel = document.getElementById("tipoCombustivel").value;
    switch (tipoCombustivel) {
        case "gasolina":
            precoComb = 5.79;
            break;
        case "etanol":
            precoComb = 4.99;
            break;
        case "diesel":
            precoComb = 4.49;
            break;
        default:
            alert("Por favor, selecione um tipo de combustível válido.");
            
    }
}