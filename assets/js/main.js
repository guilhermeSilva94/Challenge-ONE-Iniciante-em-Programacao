function validarTexto() {
    const expressaoRegular = /^[a-z\s]*$/;
    const validacao = expressaoRegular.test(textoPrincipal.value);
    if (!validacao) {
        aviso.classList.add('aviso-destaque');
    } else {
        aviso.classList.remove('aviso-destaque');
        criptografar.onclick = criptografarMensagem;
    }
}

function criptografarMensagem() {
    let textoCriptografado = textoPrincipal.value;
    
    textoCriptografado = textoCriptografado.replace(/e/g, 'enter');
    textoCriptografado = textoCriptografado.replace(/i/g, 'imes');
    textoCriptografado = textoCriptografado.replace(/a/g, 'ai');
    textoCriptografado = textoCriptografado.replace(/o/g, 'ober');
    textoCriptografado = textoCriptografado.replace(/u/g, 'ufat');

    return alert(textoCriptografado)
}

const textoPrincipal = document.querySelector('#texto-principal');
const aviso = document.querySelector('#aviso');
const criptografar = document.querySelector('#criptografar');
const descriptografar = document.querySelector('#descriptografar');
const textoCriptografado = ''

textoPrincipal.addEventListener('input', validarTexto);
