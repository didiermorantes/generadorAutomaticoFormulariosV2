<?php
class Database{
 
    // Especifique las credenciales de conexión
    //private $host = "localhost";
    //El host con CPanel puede dejarse como localhost
    private $host = "localhost";

    //en la base de datos llamada api_db se encuentra la tablatipoevento
    //private $db_name = "api_db";
    private $db_name = "vitalsal_api_db";

    //si es servidor local, el usuario es root y la clave vacia
    //private $username = "root";
    private $username = "vitalsal_api_db_root";

    //private $password = "";
    private $password = "Micontrasena123*";
    public $conn;
 
    // obtenemos la conexión a la base de datos
    public function getConnection(){
 
        $this->conn = null;
 
        //realizamos conexión a base de datos por pdo
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        
        }catch(PDOException $exception){
            echo "Error de conexión a la base de datos: " . $exception->getMessage();
            
        }
 
        return $this->conn;
    }
}
?>