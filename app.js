
document.getElementById('amigo').value = ""; // iniciar campo sem valor

let listaDeAmigosSorteados = []; // declaracao variavel lista de amigos

//Declaracao funcao adicionarAmigo()

function adicionarAmigo(){
    
    let nomeAmigo = document.querySelector('input').value;

    if(nomeAmigo == ""){
        mensagemErro();
        return;
    }

    
    listaDeAmigosSorteados.push(nomeAmigo);
    let tamanhoLista = listaDeAmigosSorteados.length;
    
    const listElement = document.getElementById('listaAmigos');

    listElement.innerHTML = ''; 

    const newData = listaDeAmigosSorteados;

    newData.forEach(itemText => {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        listElement.appendChild(listItem);

        document.getElementById('amigo').value = "";
    });

}

function sortearAmigo(){
    if(listaDeAmigosSorteados.length <=0){
        mensagemErro();
        return;
    }

    let limiteAmigos = listaDeAmigosSorteados.length;

    let indiceEscolhido = parseInt(Math.random() * limiteAmigos);

    let amigo = listaDeAmigosSorteados[indiceEscolhido];

    exibeAmigo(amigo);

    const listElement = document.getElementById('listaAmigos');
    listElement.innerHTML = '';
    listaDeAmigosSorteados=[];

return;

}




//==================ESPACO AUXILIAR==============

function mensagemErro(){
    
    const listElement = document.getElementById('resultado');
    
    listElement.innerHTML = '';

    alert("Por favor, insira um nome válido.");

    return;
}

function exibeAmigo(friend){
    
    const listItemToUpdate = document.getElementById('resultado');
    const firstListItem = document.querySelector('#resultado li');
    listItemToUpdate.innerHTML = `'O amigo secreto sorteado é:  ${friend}`;
    
        const listElement = document.getElementById('listaAmigos');

        listElement.innerHTML = '';

        return;
}
