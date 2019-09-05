<?php
// encabezados requeridos para que funcione en servidor local
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
//aqui va la conexión a la base de datos
// incluimos la base de datos y la clase que leerá la base de datos
include_once '../config/database.php';
include_once '../objetos/tipoEvento.php';
 

//instanciamos la base de datos y el objeto tipoEvento
$database = new Database();
$db = $database->getConnection();
 
// inicializamos el objeto, pasando como parámetro el objeto de conexión (así está definida la clase)
$tipoEvento = new TipoEvento($db);
 
//Aqui estará la lectura de los productos
// consultamos los productos con el método adecuado
$stmt = $tipoEvento->leer();
$num = $stmt->rowCount();
 

//Verificamos si hay maás de 0 registros
if($num>0){
 
    // array tipoEvento
    $tipoEvento_arr=array();
    $tipoEvento_arr["registros"]=array();
 

    //recuperamos el contenido de nuestra tabla
        // fetch() es más rápido que fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        //extraemos la fila
        //esto convertirá $row['name'] a
        // solamente a $name
  
        extract($row);
 
        $tipoEvento_item=array(
            "id" => $id,
            "nombreTabla" => $nombreTabla,
            "idTablaEvento" => $idTablaEvento,
            "orden" => $orden,
            "nombre" => $nombre,
            "descripcion" => $descripcion,
            "tipo" => $tipo,
            "mandatorio" => $mandatorio,
            "expresionRegular" => $expresionRegular,
            "editable" => $editable,
            "valorPorDefecto" => $valorPorDefecto,
            "grupo" => $grupo,
            "ordenGrupo" => $ordenGrupo,
            "envoltorio" => $envoltorio,
            "css" => $css,
            "jsEvento" => $jsEvento,
            "descripcionLarga" => $descripcionLarga,
            "vigenciaDesde" => $vigenciaDesde,
            "vigenciaHasta" => $vigenciaHasta,
            "version" => $version,
            "ordenJson" => $ordenJson
        
        );
 
        array_push($tipoEvento_arr["registros"], $tipoEvento_item);
    }
 
    
    //establecemos código de respuesta a 200 OK
    http_response_code(200);
 
    
    //mostramos los datos de la tabla en formato json
    echo json_encode($tipoEvento_arr);
}
 
// aqui va el código de no se encontraron elementos
else{
 

    //establecemos el código de respuesta a 404 No encontrado
    http_response_code(404);
 
    // Le decimos al usuario que no se encontraron elementos
    echo json_encode(
        array("mensaje" => "No se encontraron elementos.")
    );
}