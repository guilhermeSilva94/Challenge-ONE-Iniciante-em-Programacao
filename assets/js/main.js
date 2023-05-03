function validacaoTexto() {
    const expressaoRegular = /^[a-z]*$/;
    const validacao = expressaoRegular.test(textoPrincipal.value);
    if (!validacao) {
        aviso.classList.add('aviso-destaque');
    } else {
        aviso.classList.remove('aviso-destaque');
    }

    textoPrincipal.addEventListener('input', validacaoTexto);
}

const textoPrincipal = document.querySelector('#texto-principal');
const aviso = document.querySelector('#aviso');


validacaoTexto()