// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];


function asignarTextoElemento (elementoID, texto) {
    const elementoHTML = document.getElementById (elementoID);
    elementoHTML.innerHTML= texto;
}

function verificarYAgregar() {
    const nombreAmigo= document.getElementById ('nombreAmigo').value.trim();
    
     if (nombreAmigo === ''){
        alert ('Porfavor, ingresa un nombre valido');
        return false;
    }
    if (nombreAmigo.match(/.*\d.*/)){
        alert ('Porfavor, ingresa un nombre valido (sin numeros).');
        return false
    }

    //Si paso las validaciones, agrego el array
    listaDeAmigos.push(nombreAmigo);
    return true;
}

function agregarAmigo() {
    if (verificarYAgregar ()) {
        actualizarListaEnHTML();
        document.getElementById ('nombreAmigo').value = '';
       
    }
}

function actualizarListaEnHTML() {
    const listaHTML = document.querySelector ('#listaAmigos');
    if (!listaHTML) return;
     listaHTML.innerHTML = '';

    for (const nombre of listaDeAmigos) {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    listaHTML.appendChild(nuevoElemento);
    }
}

function realizarSorteo() {
    if (listaDeAmigos.length < 2) {
        asignarTextoElemento('mensaje', 'Para sortear, debes agregar al menos 2 amigos.');
        return;
    }
     const confirmacion = confirm('¿Estás seguro de que quieres realizar el sorteo?');

     if (confirmacion) {
        const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        const amigoGanador = listaDeAmigos[indiceAleatorio];

        asignarTextoElemento('mensaje', `¡Y el amigo secreto es... ${amigoGanador}!`);

        // Optional: clear the list after the draw
        listaDeAmigos = [];
        actualizarListaEnHTML();
    }
}