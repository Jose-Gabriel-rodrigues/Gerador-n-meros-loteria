const button = document.querySelector("button");
const resultadoDiv = document.getElementById("resultado");
const tipoSelect = document.getElementById("tipo");

function gerarNumerosAleatorios(quantidade, maximo) {

    let numeros = [];

    while (numeros.length < quantidade) {

        let numeroAleatorio = Math.floor(Math.random() * maximo) + 1;

        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }

    return numeros.sort((a, b) => a - b);
}

button.addEventListener("click", () => {

    const jogoSelecionado = tipoSelect.value;

    let numerosGerados = [];

    if (jogoSelecionado === "Mega-Sena") {

        numerosGerados = gerarNumerosAleatorios(6, 60);

    } else if (jogoSelecionado === "Quina") {

        numerosGerados = gerarNumerosAleatorios(5, 80);

    } else if (jogoSelecionado === "Lotofácil") {

        numerosGerados = gerarNumerosAleatorios(15, 25);

    }

    resultadoDiv.textContent = numerosGerados.join(" - ");

});

const botaoLimpar = document.getElementById("limpar");
botaoLimpar.addEventListener("click", () => {
    resultadoDiv.textContent = "";
});