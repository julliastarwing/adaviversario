
function trocarTela(numero) {
    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    telas[numero].classList.add("ativa");

    window.scrollTo(0, 0);
}

function virarCartao(cartao) {
    cartao.classList.toggle("virado");
}
