function alinhar(){
    const texto = document.querySelector('#texto');
    const alinhamentos = ['left', 'center', 'right'];
    let indiceAtual = 0;

    botao.addEventListener('click', () => {
        indiceAtual = (indiceAtual + 1) % alinhamentos.length;
        texto.style.textAlign = alinhamentos[indiceAtual];
    });
}




