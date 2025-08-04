let amigos = [];

function agregarAmigo() {
  let input =  document.getElementById('amigo');
  let nombre = input.value.trim();

  if ( nombre === "") {
    alert('Por favor, ingresa un nombre válido')
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



