<?php
// encabezados requeridos para que funcione en servidor local
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 

$jsonObtenido= file_get_contents("../../json/tipoCancerMenor18.json");

//Verificamos si existe el archivo, de lo contrario file_get_contents arroja false
if($jsonObtenido){
 
 
  
    
 
    
    //establecemos código de respuesta a 200 OK
    http_response_code(200);
 
    
    //mostramos los datos del arhivo 
    echo  $jsonObtenido;
}
 
// aqui va el código de no se encontraron elementos
else{
 //no existe el archivo o se ha movido

    //establecemos el código de respuesta a 404 No encontrado
    http_response_code(404);
 
    // Le decimos al usuario que no se encontraron elementos
    echo json_encode(
        array("mensaje" => "No se encontraron elementos o el archivo se ha movido.")
    );
}
?>