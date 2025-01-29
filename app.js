
let listaAmigos = [];

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo').value = '';
}



function agregarAmigo() {


    let friendToAdd = document.getElementById("amigo").value;

    if (friendToAdd == "") {
        alert("Por favor ingrese un nombre válido");
        return;
    }

    listaAmigos.push(friendToAdd);

    actualizarListaAmigos();
    limpiarCaja()


}

function actualizarListaAmigos() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    })
}

function selectAmigo() {


    if (listaAmigos.length < 2) {
        alert("La lista de amígos es muy corta, ingrese más nombres");
        return;
    }
    
    const randomNumber = Math.floor(Math.random() * listaAmigos.length);

    let selectedAmigo = listaAmigos[randomNumber];

    asignarTextoElemento("listaAmigos", "");
    asignarTextoElemento("resultado", `El amigo sorteado es: ${selectedAmigo}`);
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
