
/* ================================= */
/* SISTEMA DE TELAS */
/* ================================= */

function trocarTela(numero) {

    const telas = document.querySelectorAll(".tela");

    if (!telas[numero]) {
        return;
    }

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    telas[numero].classList.add("ativa");

    window.scrollTo(0, 0);

}


/* ================================= */
/* CARTINHAS CLICÁVEIS */
/* ================================= */

function virarCartao(cartao) {

    cartao.classList.toggle("virado");

}


/* ================================= */
/* CORAÇÕES E ESTRELINHAS */
/* ================================= */

function criarDecoracoes() {

    const fundo = document.getElementById("coracoes");

    if (!fundo) {
        return;
    }

    // Evita criar decorações duplicadas.
    fundo.innerHTML = "";

    const simbolos = [
        "♡", "✦", "♥", "✧",
        "♡", "✦", "♡", "✧",
        "♥", "♡", "✦", "♡",
        "✧", "♥", "♡", "✦"
    ];

    simbolos.forEach(function(simbolo, indice) {

        const elemento = document.createElement("span");

        elemento.textContent = simbolo;

        elemento.classList.add("coracao-flutuante");

        // Espalha os símbolos pela largura da tela.
        const posicao = 3 + (indice * 6) % 94;

        elemento.style.left = posicao + "%";

        // Cada símbolo tem uma velocidade diferente.
        const duracao = 10 + (indice % 6) * 2;

        elemento.style.animationDuration =
            duracao + "s";

        // Faz alguns começarem no meio da animação.
        elemento.style.animationDelay =
            -(indice * 2.3) + "s";

        // Tamanhos diferentes.
        elemento.style.fontSize =
            (16 + (indice % 4) * 5) + "px";

        // Cores diferentes para estrelas e corações.
        if (simbolo === "✦" || simbolo === "✧") {
            elemento.style.color = "#ffe5b4";
        } else {
            elemento.style.color = "#ff9fc5";
        }

        fundo.appendChild(elemento);

    });

}


/* ================================= */
/* INICIAR AS DECORAÇÕES */
/* ================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        criarDecoracoes
    );

} else {

    criarDecoracoes();

}
