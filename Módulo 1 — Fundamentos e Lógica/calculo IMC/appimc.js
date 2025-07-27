function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2)
    let categoriaPorImc
    const categoriasIMC = [
        { nome: "Abaixo do peso", cond: imc => imc < 18.6 },
        { nome: "Peso normal", cond: imc => imc < 25 },
        { nome: "Sobrepeso", cond: imc => imc < 30 },
        { nome: "Obesidade I", cond: imc => imc < 35 },
        { nome: "Obesidade II", cond: imc => imc < 40 },
        { nome: "Obesidade III", cond: () => true }, // fallback
    ];
    categoriaPorImc = categoriasIMC.find(cat => cat.cond(imc)).nome;
    return { imc: imc, categoriaPorImc: categoriaPorImc }; //retorna como objetos
}

function main() {
    let peso
    let altura
    peso = parseFloat(document.getElementById("weight").value);
    altura = parseFloat(document.getElementById("height").value);
    resultados = calcularIMC(peso, altura);
    document.getElementById("resultimc").innerHTML = "Seu IMC é: " + "<span id='valorImcDestaque'>" + resultados.imc.toFixed(2) + "</span>";
    document.getElementById("resultcategoria").innerHTML = "Categoria: " + "<span id='valorCategoriaDestaque'>" + resultados.categoriaPorImc + "</span>";
}
// Escuta o evento de envio do formulário para chamar a função main
// Isso impede o recarregamento da página e permite que o JavaScript processe os dados do formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('imc-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário e o recarregamento da página
        main(); // Chama a função main quando o formulário é enviado
    });
});