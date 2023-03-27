<?php
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$gano = $_POST["gano"];
$perdio = $_POST["perdio"];

$archivo = fopen("datos.csv", "a");
fwrite($archivo, "$nombre,$email,$gano,$perdio\n");
fclose($archivo);
?>