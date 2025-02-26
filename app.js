let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let regra = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {//função com parâmetro.
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensahemInicial() {
    exibirTextoNaTela('h1', 'Escolha um número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${regra}`);
}

exibirMensahemInicial();
function verificarChute() { //fução sem retorno e sem parâmentro.
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}! PARABÉNS`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto e menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto e maior ');
        }
        tentativas++;
        limpaCampo();
    }
}
function gerarNumeroAleatorio() {//função com retorno.
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}
function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensahemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}