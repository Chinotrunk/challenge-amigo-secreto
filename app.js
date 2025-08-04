let amigos = [];

function agregarAmigo() {
  let input =  document.getElementById('amigo');
  let nombre = input.value.trim();

  if ( nombre === "") {
    alert('Por favor, inserte un nombre.')
    return;
  }

  amigos.push(nombre);
  input.value = "";
  input.focus();
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  let lista = document.getElementById("listaAmigos");

  resultado.innerHTML = ""; 

  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${amigoSorteado}`;
  resultado.appendChild(li);

  lista.innerHTML = "";

  amigos.splice(indiceAleatorio, 1);

}

