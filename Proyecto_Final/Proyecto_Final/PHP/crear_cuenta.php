<?php
include 'conexion_be.php';
$nombre_completo = $_POST['nombre_completo'];
$correo = $_POST['correo'];
$usuario= $_POST['usuario'];
$contraceña = $_POST['contraceña'];

//Encriptamiento de contraseña
$contraceña = hash('sha512', $contraceña);

$query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contraceña) 
          VALUES('$nombre_completo', '$correo', '$usuario', '$contraceña')";

//Verificar que el correo no se repita en la base de datos
$verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo'");
if(mysqli_num_rows($verificar_correo) > 0){
    echo '
    <script>
        alert("Este correo ya esta registrado, intenta  con otro diferente");
        window.location = "../HTML/inicio.html";
    </script>
    ';
    exit();
}

//Verificar que el nombre de usuario no se repita en la base de datos
$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario'");
if(mysqli_num_rows($verificar_usuario) > 0){
    echo '
    <script>
        alert("Este usuario ya esta existe, intenta  con otro diferente");
        window.location = "../HTML/inicio.html";
    </script>
    ';
    exit();
}

$ejecutar = mysqli_query($conexion, $query);

if($ejecutar){
    echo'
    <script>
        alert("Usuario registrado correctamente");
        window.location = "../HTML/catalogo.html";
    </script>
    ';
}else{
    echo'
    <script>
        alert("Intentalo de nuevo, usuario no registrado");
        window.location = "../HTML/inicio.html";
    </script>
    ';
}
mysqli_close($conexion);

header("Location: ../HTML/catalogo.html");
exit();
?>