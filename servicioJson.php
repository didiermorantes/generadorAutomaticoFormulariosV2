<?php
/*
CORS(Cross Origin Resource Sharing) es un acrónimo que refiere a las reglas de seguridad que garantizan la comunicación entre dos puntos con una precedencia diferente al dominio desde el cual se llama (es decir: diferentes dominios).
Access-Control-Allow-Origin: es un encabezado que se devuelve para indicar si la respuesta puede ser compartida con el dominio solicitante. Puedes indicar los dominios con los que querrás compartir la información (separados por comas) o un asterisco (*) si no conoces la procedencia de tus solicitante.

Nota: el asterisco suele ser útil si tienes una API expuesta (pública), en caso contrario, es recomendable no usarlo.
*/
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

echo'{"nombre":"Didier","cargo":"desarrollador"}';
?>