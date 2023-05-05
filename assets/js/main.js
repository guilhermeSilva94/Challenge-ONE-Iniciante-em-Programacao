function validarTexto() {
    const expressaoRegular = /^[a-z\s]*$/;
    const validacao = expressaoRegular.test(textoPrincipal.value);
    if (!validacao) {
        aviso.classList.add('aviso-destaque');
        criptografar.onclick = null;
        descriptografar.onclick = null;
    }else {
        aviso.classList.remove('aviso-destaque');
        criptografar.onclick = mostrarMensagemCriptografada;
        descriptografar.onclick = mostrarMensagemDescriptografada;
    }
}

function criptografarMensagem(texto) {

    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');

    return texto;
}

function descriptografarMensagem(texto) {

    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    return texto;
}

function mostrarMensagemCriptografada() {
    const mensagem = textoPrincipal.value;
    const mensagemCriptografada = criptografarMensagem(mensagem);
    alert(mensagemCriptografada); 
}

function mostrarMensagemDescriptografada() {
    const mensagem = textoPrincipal.value;
    const mensagemCriptografada = descriptografarMensagem(mensagem);
    alert(mensagemCriptografada); 
}

const textoPrincipal = document.querySelector('#texto-principal');
const aviso = document.querySelector('#aviso');
const criptografar = document.querySelector('#criptografar');
const descriptografar = document.querySelector('#descriptografar');

textoPrincipal.addEventListener('input', validarTexto);