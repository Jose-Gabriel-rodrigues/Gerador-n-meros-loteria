// Altere a primeira linha de querySelector para getElementById
const button = document.getElementById("gerar");
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

    // Substituido a linha antiga: resultadoDiv.textContent = numerosGerados.join(" - ");
    // Por este bloco abaixo:
    resultadoDiv.innerHTML = ""; // Limpa o resultado anterior
    numerosGerados.forEach(numero => {
        const bola = document.createElement("span");
        bola.classList.add("bola-loteria");
        bola.textContent = String(numero).padStart(2, '0'); // Garante formato 01, 02...
        resultadoDiv.appendChild(bola);
    });

    // Cria a mensagem de sucesso pós-sorteio
    const aviso = document.createElement("p");
    aviso.textContent = "🎉 Sorteio realizado com sucesso!";
    aviso.style.fontSize = "14px";
    aviso.style.marginTop = "10px";
    
    // Remove o aviso anterior para não acumular na tela
    const antigoAviso = document.querySelector(".aviso-sucesso");
    if (antigoAviso) antigoAviso.remove();
    
    aviso.className = "aviso-sucesso";
    resultadoDiv.after(aviso); // Exibe o aviso abaixo do resultado
});

// Botão para limpar resultado gerado
const botaoLimpar = document.getElementById("limpar");
botaoLimpar.addEventListener("click", () => {
    resultadoDiv.innerHTML = ""; // Limpeza estruturada e correta das bolinhas

    // Remove a mensagem de sucesso ao limpar a tela
    const antigoAviso = document.querySelector(".aviso-sucesso");
    if (antigoAviso) antigoAviso.remove();
});

// Alterna entre o modo claro e o modo escuro
const btnDark = document.getElementById("toggle-dark");
btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Altera o texto do botão de acordo com o modo ativo
    if (document.body.classList.contains("dark-mode")) {
        btnDark.textContent = "☀️ Modo Claro";
        btnDark.style.backgroundColor = "#f4f7f6";
        btnDark.style.color = "#333";
    } else {
        btnDark.textContent = "🌙 Modo Escuro";
        btnDark.style.backgroundColor = "#333";
        btnDark.style.color = "#fff";
    }
});