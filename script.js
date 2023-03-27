var participantes = [];

function jugar() {
  var nombre = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  if (participantes.some(function(participante) {
    return participante.email === email;
  })) {
    alert("Ya has participado en este juego.");
    return;
  }
  
  participantes.push({
    nombre: nombre,
    email: email,
    gano: 0,
    perdio: 0
  });
  
  localStorage.setItem("participantes", JSON.stringify(participantes));
  
  var cuadricula = document.getElementById("cuadricula");
  cuadricula.innerHTML = "";
  for (var i = 0; i < 100; i++) {
    var cuadro = document.createElement("div");
    cuadro.className = "cuadro";
    cuadro.onclick = function() {
      jugarCuadro }(this);
  cuadricula.appendChild(cuadro);
}
}
}

function jugarCuadro(cuadro) {
var resultado = Math.random();
cuadro.onclick = null;
cuadro.classList.add(resultado < 0.1 ? "ganaste" : "perdiste");

var email = document.getElementById("email").value;
var participante = participantes.find(function(participante) {
return participante.email === email;
});

if (resultado < 0.1) {
participante.gano++;
cuadro.textContent = "Ganaste";
} else {
participante.perdio++;
cuadro.textContent = "Perdiste";
}

localStorage.setItem("participantes", JSON.stringify(participantes));

if (participante.gano + participante.perdio === 2) {
alert("Has terminado tus 2 oportunidades de jugar.");
var form = document.querySelector("form");
form.reset();
}
}

// Cargar los datos de participantes desde localStorage, si existen
var datos = localStorage.getItem("participantes");
if (datos) {
participantes = JSON.parse(datos);
}

// Actualizar la tabla de resultados
var tabla = document.createElement("table");
var cabecera = document.createElement("tr");
var nombreCabecera = document.createElement("th");
nombreCabecera.textContent = "Nombre";
cabecera.appendChild(nombreCabecera);
var emailCabecera = document.createElement("th");
emailCabecera.textContent = "Email";
cabecera.appendChild(emailCabecera);
var ganoCabecera = document.createElement("th");
ganoCabecera.textContent = "Ganó";
cabecera.appendChild(ganoCabecera);
var perdioCabecera = document.createElement("th");
perdioCabecera.textContent = "Perdió";
cabecera.appendChild(perdioCabecera);
tabla.appendChild(cabecera);

participantes.forEach(function(participante) {
var fila = document.createElement("tr");
var nombreCelda = document.createElement("td");
nombreCelda.textContent = participante.nombre;
fila.appendChild(nombreCelda);
var emailCelda = document.createElement("td");
emailCelda.textContent = participante.email;
fila.appendChild(emailCelda);
var ganoCelda = document.createElement("td");
ganoCelda.textContent = participante.gano;
fila.appendChild(ganoCelda);
var perdioCelda = document.createElement("td");
perdioCelda.textContent = participante.perdio;
fila.appendChild(perdioCelda);
tabla.appendChild(fila);
});

document.body.appendChild(tabla);