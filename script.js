window.onload= mostrarDatos;

function mostrarDatos(){
  var datos = document.getElementById("datos");
  datos.addEventListener("click", datosVisibles);
  
  var datos = document.getElementById("conocimiento");
  datos.addEventListener("click", conocimientosVisibles);

  var datos = document.getElementById("experiencia");
  datos.addEventListener("click", experienciaVisible);
}

function datosVisibles() {
  var x = document.getElementById('listaDatos');
  var y = document.getElementById('listaConocimientos');
  var z = document.getElementById('listaExperiencia');
  y.style.display= 'none';
  z.style.display = 'none';
  
  if (x.style.display === 'none') {
      x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function conocimientosVisibles() {
  var y = document.getElementById('listaDatos');
  var x = document.getElementById('listaConocimientos');
  var z = document.getElementById('listaExperiencia');
  y.style.display= 'none';
  z.style.display = 'none';
  
  if (x.style.display === 'none') {
      x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function experienciaVisible() {
  var y = document.getElementById('listaDatos');
  var z = document.getElementById('listaConocimientos');
  var x = document.getElementById('listaExperiencia');
  y.style.display= 'none';
  z.style.display = 'none';
  if (x.style.display === 'none') {
      x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}