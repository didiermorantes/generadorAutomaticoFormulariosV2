function validaTipoCancer(){

    miTipoCancer = document.getElementById('TIPO_CANCE');

    
    if ( miTipoCancer.value.length == 0 ||  miTipoCancer.value  =='' ||  miTipoCancer.value ==null || /^\\s+$/.test( miTipoCancer.value )) {
        alert('Diligencie Datos.No se pueden dejar campos vacios en tipo cáncer.');
        miTipoCancer.focus();
        miTipoCancer.value='Diligencie datos';
    }//fin if
    //convierto a entero los datos tipo texto para validacion
    if((parseInt(miTipoCancer.value)<1) || (parseInt(miTipoCancer.value)>3)){
        alert('Digite un valor entre 1 y 3.');
        alert('1 Cáncer de Mama.\n 2 Cáncer de Cuello Uterino.\n 3 Ambos');
        miTipoCancer.focus();
        miTipoCancer.value='Diligencie datos Válidos';
    }//fin if
}//fin validaTipoCancer
/*

---------------------------------------------------------------------------------------------------------------------------------------------------------


*/
function poblarListaTipoCancerMenor18(){


    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.

        var miListaTipoCancerMenor18 = document.getElementById('TIPO_CA');
        var miListaTipoCancerMenor18_datos = document.getElementById('lista1');
     

//recuperamos el total de listas deplegables.
// Retrieve
var totalListasDesplegablesProcesar = localStorage.totalListasDesplegables ;
//alert("La cantidad de listas deplegables en este formulario es : "+totalListasDesplegablesProcesar);
console.log("La cantidad de listas deplegables en este formulario es : "+totalListasDesplegablesProcesar);
//arreglo para guardar los nombres de todas las listas desplegables
var nombresListasDesplegables = [];


var totalDatoLeido18=0;//variable para la cantidad de elementos del json
//recuperamos del localStorage el valor del total del json
totalDatoLeido18= localStorage.totalElementosJson;
     //Creamos tantas posiciones en el arreglo como total de listas desplegables hay
     //iniciamos el contador en 1 ya que no existe la variable que inicie en cero  ver script.js 852
     for(var lst=1; lst<=totalListasDesplegablesProcesar;lst++){
        nombresListasDesplegables[lst] = document.getElementById('lista'+lst) ;
      }

      //añadimos opción vacia a la lista desplegable auxiliar
         var tipoCancer = new Object();
         tipoCancer.valor="0";
         tipoCancer.nombre=" ";

     
     var options18="";
     options18 += '<option value="' +tipoCancer.valor +'">' +tipoCancer.nombre +'</option>';
     nombresListasDesplegables[1].innerHTML = options18;


     miListaTipoCancerMenor18.min=1; //agregamos el valor mínimo a la caja de tipo number
   

     //validamos si dejan vacio el campo
        if ( miListaTipoCancerMenor18.value.length == 0 ||  miListaTipoCancerMenor18.value  =='' ||  miListaTipoCancerMenor18.value ==null || /^\\s+$/.test( miListaTipoCancerMenor18.value )) {
            alert('Diligencie Datos.No se pueden dejar campos vacios en tipo cáncer.');
            miListaTipoCancerMenor18.focus();
            miListaTipoCancerMenor18.value='Diligencie datos';
        }//fin if
        else{
//EL CAMPO NO ESTÁ VACIO, PROCEDEMOS A LEER EL JSON DE LA LISTA DESPLEGABLE
      
            
//PROCESO PARA LEER EL JSON QUE TIENE LOS TIPÓS DE CANCER
var misCabeceras = new Headers();

misCabeceras.append("Content-Type", "application/json");
misCabeceras.append("Access-Control-Allow-Origin", "*");
misCabeceras.append('Access-Control-Allow-Headers','*');
misCabeceras.append('Access-Control-Allow-Methods','GET');



var miInit = { method: 'GET',
               headers: misCabeceras,
               mode: 'cors',
               cache: 'default' };

               var myRequest = new Request('https://vitalsaludem.com/services2/api_db/listasDesplegables/leerListasDesplegables.php',miInit);
               var myContentType = myRequest.headers.get('Content-Type');
                    //fetch toma como argumento la ruta del recurso que quiere obtener
                    //fetch('json/personas.json')  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
                    fetch('https://vitalsaludem.com/services2/api_db/listasDesplegables/leerListasDesplegables.php',miInit)
                    .then(function(response18) {

                        //si no hay respuesta 
                        if(!response18.ok){ 

                            console.log('No se pudo resolver la promesa');
                            console.log("La respuesta no fue satisfactoria");
                            console.log("HTTP status " + response18.status);
                            console.log("Contenido de respuesta: "+JSON.stringify(response18)); // mostramos el estado
          
                            console.log("La cabecera solicitada de contenido fue: "+myContentType);
  
                        }
                        else{
                                          //devuelve un objeto promise conteniendo la respuesta, el objeto response
                            //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
                            return response18.json();   
                        }
    
                    })
                    .then(function(myJson18) {
                    
                        //contamos la cantidad de elementos que tiene el json en el objeto "personas" y lo guardamos en datoIngresado
                        //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto personas
                    //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS

                            //contamos la cantidad de elementos que tiene el json en el objeto "tipo" y lo guardamos en datoIngresado
                        //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto tipoCancer
                    datoLeido18=Object.keys(myJson18.tipoCancer).length ;
                        //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
                    console.log("eL JSON obtenido fue "+myJson18);
                    // console.log('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    ---DESCOMENTARIAR SI SE USA EL JSON PERSONAS
                    console.log('La cantidad de elementos que tiene el json en el objeto "tipoCancer" es : '+datoLeido18);
                    //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
                    //alert("EL json obtenido fue: "+JSON.stringify(myJson18));
                    // alert('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
                   // alert('La cantidad de elementos que tiene el json en el objeto "tipoCancer" es : '+datoLeido18);

                    //la cantidad de elementos del json será el atributo máximo para la caja tipo number
                    //con la cantidad de elementos que tiene el json limitamos la cantidad de datos que se pueden ingresar en la caja tipo number
                    miListaTipoCancerMenor18.max = datoLeido18;
                    //guardamos en la variable web storage el valor que desaparecerá
                    localStorage.totalElementosJson=datoLeido18;
                            //recorremos el json
            for(var i18=0; i18<datoLeido18;i18++){
                        
    //rellenamos la lista desplegable nueva con la información obtenida del json
                options18 += '<option value="' +myJson18.tipoCancer[i18].valor +'">' +myJson18.tipoCancer[i18].nombre +'</option>';
                nombresListasDesplegables[1].innerHTML = options18;
                 }//fin for



                
                    })//fin  //then(function(myJson18)
                    .catch(function(error18) {
                        console.log('Hubo un problema con la petición Fetch:' + error18.message);
                        console.log("La cabecera solicitada de contenido fue: "+myContentType);
                      });


                      //DESPUES DE OBTENER LOS DATOS Y SABER QUE NO GENERÓ ERROR, VALIDAMOS SI LO QUE SE ESCRIBA EN LA CAJA NUMBER ESTÁ DENTRO DEL RANGO
                     //convierto a entero los datos tipo texto para validacion
    if((miListaTipoCancerMenor18.value<1) || (miListaTipoCancerMenor18.value>totalDatoLeido18)){
        alert('Digite un valor entre 1 y '+ totalDatoLeido18);
        var mensajeAlerta="";
        mensajeAlerta+="1: Leucemia Linfoide Aguda.\n 2: Leucemia Mieloide Aguda.\n 3: Otras Leucemias.\n 4: Linfomas y Neoplasias Reticuloendoteliales.\n 5: Tumores del Sistema Nervioso Central.\n";
        mensajeAlerta+="6: Neuroblastoma y otros tumores de celulas nerviosas periféricas.\n 7: Retinoblastoma.\n 8: Tumores Renales.\n 9: Tumores Hepáticos.\n 10: Tumores Óseos Malignos.\n";
        mensajeAlerta+="11: Sarcomas de Tejidos Blandos y Extraóseos.\n 12: Tumores Germinales, Trofoblásticos, y otros Gonadales.\n 13: Tumores Epiteliales Malignos y Melanoma.\n 14: Otras Neoplasias Malignas No Especificadas.\n";
        alert(mensajeAlerta);


        miListaTipoCancerMenor18.focus();// no podemos dejar el foco en el campo porque volveria 
        miListaTipoCancerMenor18.value=1;
    }//fin if
    else{
//si no hay error en el rango, correlacionamos el valor seleccionado con la lista desplegable generada

miListaTipoCancerMenor18_datos.value = miListaTipoCancerMenor18.value;

    }
                    




            



        }//fin else vacio




 
                



      } else {
        // Sorry! No Web Storage support..
        alert("Lo siento. Su navegador no soporta Web Storage. Intente con otro navegador");
      }//else web storage



}
/*

-----------------------------------------------------------------------------------------------------------------------------------------------

*/

function correlacionarListaDesplegable(){

    var miListaTipoCancerMenor18_datos = document.getElementById('lista1');
    var miListaTipoCancerMenor18 = document.getElementById('TIPO_CA');

    miListaTipoCancerMenor18.value=miListaTipoCancerMenor18_datos.value;

}

/*

-----------------------------------------------------------------------------------------------------------------------------------------------

*/