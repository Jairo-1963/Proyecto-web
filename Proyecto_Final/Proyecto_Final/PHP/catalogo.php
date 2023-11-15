<?php
session_start();

// Verificar si el usuario no ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
  // Redirigir a la página de inicio de sesión
  header("Location: iniciar_sesion.php");
  exit;
}
?>