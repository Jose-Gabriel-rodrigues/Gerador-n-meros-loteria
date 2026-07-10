const button = document.querySelector('button');
const resultadoDiv = document.getElementById('resultado');
const tipoSelect = document.getElementById('tipo');

function gerarNumerosAleatorios(quantidade, maximo) {
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio = Math.floor(Math.random() * maximo) + 1;
        numeros.push(numeroAleatorio);
    }
    return numeros.sort((a, b) => a - b);
}

button.addEventListener('click', () => {
    resultadoDiv.innerHTML = "Gerando...";
});
button.addEventListener('click', () => {
    const jogoSelecionado = tipoSelect.value;
    let numerosGerados = [];

    if (jogoSelecionado === 'Mega-Sena') {
        numerosGerados = gerarNumerosAleatorios(6, 60);
    }

    resultadoDiv.innerHTML = numerosGerados.join(' - ');
});