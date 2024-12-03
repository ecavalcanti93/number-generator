function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let numMinimo = parseInt(document.getElementById("de").value);
    let numMaximo = parseInt(document.getElementById("ate").value);

    if (numMinimo >= numMaximo) {
        alert("The 'From number' field must be less than the 'To number' field. Please check!")
        return;
    }

    if (quantidade > (numMaximo - numMinimo + 1)) {
        alert("The 'Quantity of number' field must be less than or equal to the number range. Please check!")
        return;
    }

    let sorteados = [];
    let numero;
    
    for(let i = 0; i < quantidade; i++) {
        numero = numeroAleatorio(numMinimo, numMaximo);
        
        while (sorteados.includes(numero)) {
            numero = numeroAleatorio(numMinimo, numMaximo);
        }
        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Numbers drawn: ${sorteados} </label>`
    statusBotao();
}

function verificarCampos() {
    let quantidade = document.getElementById("quantidade").value;
    let numMinimo = document.getElementById("de").value;
    let numMaximo = document.getElementById("ate").value;
    let botao = document.getElementById("btn-sortear");

    if (quantidade && numMinimo && numMaximo && quantidade > 0) {
        botao.disabled = false; 
    } else {
        botao.disabled = true; 
    }
}

// Adiciona o evento 'input' aos campos de entrada para monitorar mudanças
document.getElementById("quantidade").addEventListener("input", verificarCampos);
document.getElementById("de").addEventListener("input", verificarCampos);
document.getElementById("ate").addEventListener("input", verificarCampos);


function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function statusBotao(){
    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao")
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado")
}
}

function reiniciar() {
    document.getElementById("quantidade").value = " ";
    document.getElementById("de").value = " ";
    document.getElementById("ate").value = " ";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Numbers drawn: none so far...</label>';
    statusBotao();
    verificarCampos();
}