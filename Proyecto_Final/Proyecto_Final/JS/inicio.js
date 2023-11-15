// Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

// Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

// FUNCIONES
function anchoPage() {
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";

    // Verificar el estado de sesión
    if (obtenerEstadoSesion()) {
      formulario_login.style.display = "none";
      formulario_register.style.display = "none";
      // Acciones adicionales para usuarios con sesión iniciada
      var mensajeBienvenida = document.createElement("p");
      mensajeBienvenida.textContent = "¡Bienvenido de nuevo!";
      mensajeBienvenida.classList.add("mensaje-bienvenida");
      contenedor_login_register.appendChild(mensajeBienvenida);
    }
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }

  // Verificar el estado de sesión
  if (obtenerEstadoSesion()) {
    // Acciones adicionales para usuarios con sesión iniciada
    var mensajeBienvenida = document.createElement("p");
    mensajeBienvenida.textContent = "¡Bienvenido de nuevo!";
    mensajeBienvenida.classList.add("mensaje-bienvenida");
    contenedor_login_register.appendChild(mensajeBienvenida);
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }

  // Verificar el estado de sesión
  if (obtenerEstadoSesion()) {
    // Acciones adicionales para usuarios con sesión iniciada
    var mensajeBienvenida = document.createElement("p");
    mensajeBienvenida.textContent = "¡Bienvenido de nuevo!";
    mensajeBienvenida.classList.add("mensaje-bienvenida");
    contenedor_login_register.appendChild(mensajeBienvenida);
  }
}

function compararContrasenas() {
  var contrasena = document.getElementById("contrasena").value;
  var confirmarContrasena = document.getElementById("confirmarContrasena").value;

  if (contrasena !== confirmarContrasena) {
    alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
  }
}

function obtenerEstadoSesion() {
  var sesionCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('sesion='));

  if (sesionCookie) {
    var valorCookie = sesionCookie.split('=')[1];
    return valorCookie === 'true';
  }

  return false;
}

// Verificar el estado de sesión al cargar la página
window.addEventListener("load", function () {
    if (obtenerEstadoSesion()) {
      // Acciones adicionales para usuarios con sesión iniciada
      var mensajeBienvenida = document.createElement("p");
      mensajeBienvenida.textContent = "¡Bienvenido de nuevo!";
      mensajeBienvenida.classList.add("mensaje-bienvenida");
      contenedor_login_register.appendChild(mensajeBienvenida);
    } else {
      // Acciones adicionales para usuarios sin sesión iniciada
      var mensajeNoSesion = document.createElement("p");
      mensajeNoSesion.textContent = "Inicia sesión o regístrate para acceder a contenido exclusivo.";
      mensajeNoSesion.classList.add("mensaje-no-sesion");
      contenedor_login_register.appendChild(mensajeNoSesion);
    }
  });