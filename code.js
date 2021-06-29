let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  datosPersona.nombre = prompt("Ingrese su nombre:");  
  let anioNacimiento = prompt("Ingrese su año de nacimento:");
  if (anioNacimiento>0){
    datosPersona.edad = 2021 - anioNacimiento
  } else {
    datosPersona.edad = ""
  };
  datosPersona.ciudad = prompt("Ingrese su ciudad:");
  datosPersona.interesPorJs = confirm("¿Tiene interés por aprender JavaScript?");
}

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
  let obtenerNombre = document.querySelector("#nombre");
  let obtenerEdad = document.querySelector("#edad");
  let obtenerCiudad = document.querySelector("#ciudad");
  let obtenerInteres = document.querySelector("#javascript");

  obtenerNombre.innerHTML = datosPersona.nombre;
  obtenerEdad.innerHTML = datosPersona.edad;
  obtenerCiudad.innerHTML = datosPersona.ciudad;
  let interes = datosPersona.interesPorJs ? "Si" : "No";
  obtenerInteres.innerHTML = interes;
}



const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  let contenedor = document.querySelector('#fila');
  if (contenedor.innerHTML == "") {
    for (element of listado) {
      contenedor.innerHTML += `
      <div class="caja">
        <img src="${element.imgUrl}" alt="${element.lenguajes}">
        <p class="lenguajes">Lenguaje: ${element.lenguajes}</p>
        <p class="bimestre">Bimestre: ${element.bimestre}</p>
        </div>
      `
    }
  }   
}


function mostrarYOcultarDescripcionCompleta() {
  let sobreMi= document.querySelector('.sobre-mi');
  sobreMi.classList.toggle('sobre-mi-completo')
}
