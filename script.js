function trocarTela(telaAtual, proximaTela) {

    document.querySelector(telaAtual).classList.remove("ativa");

    document.querySelector(proximaTela).classList.add("ativa");

}


function iniciarSurpresa() {

    trocarTela(".inicio", ".surpresa");

}


function mostrarHistoria() {

    trocarTela(".surpresa", ".historia");

}
