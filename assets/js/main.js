function validarTexto() {
    const expressaoRegular = /^[a-z]*$/;
    const validacao = expressaoRegular.test(textoPrincipal.value);
    if (!validacao) {
        aviso.classList.add('aviso-destaque');
    } else {
        aviso.classList.remove('aviso-destaque');
    }
}

const textoPrincipal = document.querySelector('#texto-principal');
const aviso = document.querySelector('#aviso');    

textoPrincipal.addEventListener('input', validarTexto);