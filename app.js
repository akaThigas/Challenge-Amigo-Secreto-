// Lista com os nomes dos amigos adicionados
let listaDeAmigos = [];

const campoAmigo = document.getElementById('amigo');
campoAmigo.value = ''; // iniciar campo sem valor

// Permite adicionar o nome pressionando Enter
campoAmigo.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    const nomeAmigo = campoAmigo.value.trim();

    if (nomeAmigo === '') {
        mensagemErro('Por favor, insira um nome válido.');
        return;
    }

    const nomeJaExiste = listaDeAmigos.some(
        (amigo) => amigo.toLowerCase() === nomeAmigo.toLowerCase()
    );
    if (nomeJaExiste) {
        mensagemErro(`O nome "${nomeAmigo}" já foi adicionado.`);
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    limparMensagem();
    limparResultado();
    atualizarLista();

    campoAmigo.value = '';
    campoAmigo.focus();
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        mensagemErro('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    limparMensagem();
    const indiceEscolhido = Math.floor(Math.random() * listaDeAmigos.length);
    exibeAmigo(listaDeAmigos[indiceEscolhido]);
}

//==================ESPACO AUXILIAR==============

function atualizarLista() {
    const listElement = document.getElementById('listaAmigos');
    listElement.innerHTML = '';

    listaDeAmigos.forEach((nome) => {
        const listItem = document.createElement('li');
        listItem.textContent = nome;
        listElement.appendChild(listItem);
    });

    const total = listaDeAmigos.length;
    document.getElementById('contador').textContent =
        total === 1 ? '1 amigo adicionado' : `${total} amigos adicionados`;
}

function limparResultado() {
    document.getElementById('resultado').innerHTML = '';
}

function mensagemErro(mensagem) {
    limparResultado();
    const elemento = document.getElementById('mensagem');
    elemento.textContent = mensagem;
    elemento.hidden = false;
    campoAmigo.focus();
}

function limparMensagem() {
    document.getElementById('mensagem').hidden = true;
}

function exibeAmigo(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const listItem = document.createElement('li');
    listItem.textContent = `O nome sorteado é: ${amigo}`;
    resultado.appendChild(listItem);
}
