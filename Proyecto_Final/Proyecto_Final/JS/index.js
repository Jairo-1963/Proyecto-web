  // Obtener la referencia al elemento de la columna dos
  var fechaColumna = document.getElementById("fecha-columna");

  // Obtener la fecha actual
  var fecha = new Date();
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var año = fecha.getFullYear();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();

  // Crear el texto de la fecha
  var textoFechaHora = "Fecha actual ->: " + dia + "/" + mes + "/" + año + ".  Hora actual ->" + hora + ":" + minutos;

  // Agregar el texto de la fecha al elemento de la columna dos
  var fechaElemento = document.createElement("p");
  var horaElemento = document.createElement("p");

  fechaElemento.textContent = textoFechaHora;
  fechaColumna.appendChild(fechaElemento);

  function obtenerEstadoSesion() {
    var sesionCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('sesion='));
  
    if (sesionCookie) {
      var valorCookie = sesionCookie.split('=')[1];
      return valorCookie === 'true'; // Suponiendo que la cookie contiene "true" o "false"
    }
  
    return false; // Valor por defecto si no se encuentra la cookie
  }

  // Verificar la sesión del usuario antes de redirigir al catálogo o a iniciar sesión
  document.getElementById("catalogo-link").addEventListener("click", function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    // Aquí puedes realizar la verificación de sesión según tus necesidades
  var usuarioAutenticado = obtenerEstadoSesion(); // Función que obtiene el estado de la sesión del usuario

  if (usuarioAutenticado) {
    // El usuario ha iniciado sesión, redirigir al catálogo
      window.location.href = "catalogo.html";
    } else {
      // El usuario no ha iniciado sesión, redirigir a la página de inicio de sesión
      window.location.href = "inicio.html";
    }
  });
