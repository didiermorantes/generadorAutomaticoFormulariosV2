/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA TIPO CÁNCER  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaTipoCancer(){

    var miTipoCancer = document.getElementById('TIPO_CANCE');

    
    if ( miTipoCancer.value.length == 0 ||  miTipoCancer.value  =='' ||  miTipoCancer.value ==null || /^\\s+$/.test( miTipoCancer.value )) {
        alert('Diligencie Datos.No se pueden dejar campos vacios en tipo cáncer.');
        miTipoCancer.focus();
        miTipoCancer.value='Diligencie datos';
    }//fin if
    //convierto a entero los datos tipo texto para validacion
    else if((parseInt(miTipoCancer.value)<1) || (parseInt(miTipoCancer.value)>3)){
        alert('Digite un valor entre 1 y 3.');
        alert('1 Cáncer de Mama.\n 2 Cáncer de Cuello Uterino.\n 3 Ambos');
        miTipoCancer.focus();
        miTipoCancer.value='Diligencie datos Válidos';
    }//fin if
    else{
        //el dato no es vacio y está dentro del rango de 1  y 3
        //HABILITAMOS Y DESHABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO

        //variables cáncer cuello uterino
        var miFecTomaE = document.getElementById('FEC_TOMA_E');
        var miFecResEx = document.getElementById('FEC_RES_EX');
        var miBiopExoce = document.getElementById('BIOP_EXOCE');
        var miResBExoc = document.getElementById('RES_B_EXOC');
        var miGradoHist = document.getElementById('GRADO_HIST');
        var miBiopEndoc = document.getElementById('BIOP_ENDOC');
        var miResBAden = document.getElementById('RES_B_ADEN');
        var miResBHist = document.getElementById('RES_B_HIST');



//variables cáncer de mama
        var miFecProCo = document.getElementById('FEC_PRO_CO');
        var miFecResBi = document.getElementById('FEC_RES_BI');
        var miResBiops9 = document.getElementById('RES_BIOPS9');
        var miGradHisto = document.getElementById('GRAD_HISTO');

        //validamos el tipo de cancer para inhabilitar los demás controles
        if(miTipoCancer.value  ==1){
           //deshabilitamos campos de cancer de cuello uterino
            miFecTomaE.disabled=true;
            miFecResEx.disabled=true;
            miBiopExoce.disabled=true;
            miResBExoc.disabled=true;
            miGradoHist.disabled=true;
            miBiopEndoc.disabled=true;
            miResBAden.disabled=true;
            miResBHist.disabled=true;


            //habilitamos campos de cáncer de mama
            miFecProCo.disabled=false;
            miFecResBi.disabled=false;
            miResBiops9.disabled=false;
            miGradHisto.disabled=false;


        }
        else if(miTipoCancer.value  ==2){
          //deshabilitamos campos de cancer de mama
            miFecProCo.disabled=true;
            miFecResBi.disabled=true;
            miResBiops9.disabled=true;
            miGradHisto.disabled=true;

            //habilitamos campos de cancer de cuello uterino
            miFecTomaE.disabled=false;
            miFecResEx.disabled=false;
            miBiopExoce.disabled=false;
            miResBExoc.disabled=false;
            miGradoHist.disabled=false;
            miBiopEndoc.disabled=false;
            miResBAden.disabled=false;
            miResBHist.disabled=false;       

        }
        else if(miTipoCancer.value  ==3){

            //habilitamos campos de cáncer de mama
            miFecProCo.disabled=false;
            miFecResBi.disabled=false;
            miResBiops9.disabled=false;
            miGradHisto.disabled=false;
            //habilitamos campos de cancer de cuello uterino
            miFecTomaE.disabled=false;
            miFecResEx.disabled=false;
            miBiopExoce.disabled=false;
            miResBExoc.disabled=false;
            miGradoHist.disabled=false;
            miBiopEndoc.disabled=false;
            miResBAden.disabled=false;
            miResBHist.disabled=false;  

             }


    }
}//fin validaTipoCancer


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_PRO_CO  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaFechaProCo(){

    var miFecProCo = document.getElementById('FEC_PRO_CO');

    var currentTimeProCo = new Date();
    // Comparamos solo las fechas => no las horas!!
    currentTimeProCo.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas

    var fechaFormularioProCo =new Date(miFecProCo.value); //convertimos la fecha del formulario a un tipo que se pueda comparar con la fecha actual


 
    if( fechaFormularioProCo > currentTimeProCo ){
        alert('La fecha digitada no puede ser mayor a la fecha del sistema');
        miFecProCo.focus();
        miFecProCo.value=currentTimeProCo;
    }


  }//fin validFechaExam



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_RES_BI  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaFechaResult(){

    var miFecResBi = document.getElementById('FEC_RES_BI');

    var currentTimeResBi = new Date();
    // Comparamos solo las fechas => no las horas!!
    currentTimeResBi.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas

    var fechaFormularioResBi =new Date(miFecResBi.value); //convertimos la fecha del formulario a un tipo que se pueda comparar con la fecha actual


 
    if( fechaFormularioResBi > currentTimeResBi ){
        alert('La fecha digitada no puede ser mayor a la fecha del sistema');
        miFecResBi.focus();
        miFecResBi.value=currentTimeResBi;
    }


  }//fin validaFechaResult


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RES_BIOPS9

*/
function validaResultBiopsia(){
    var miResBiops = document.getElementById('RES_BIOPS9');

    if(miResBiops.value<0 || miResBiops.value>2){
        alert('Digite un valor entre 1 y 2');
        alert('1 Carcinoma Ductal.\n 2 Carcinoma Lobulillar.');
        
        miResBiops.value="Diligencie Datos";
        miResBiops.focus();
    }


}//fin validaResultBiopsia



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA GRAD_HISTO

*/

function validaGradHisto(){
    var miGradHisto = document.getElementById('GRAD_HISTO');

    if(miGradHisto.value<0 || miGradHisto.value>3){
        alert('Digite un valor entre 1 y 3');
        alert('1 In Situ.\n 2 Infiltrante.\n 3 No Indicado');
        
        miGradHisto.value="Diligencie Datos";
        miGradHisto.focus();
    }


}//fin validaGradHisto






/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_TOMA_E

*/

function validaFechaTomaE(){
    var miFecTomaE = document.getElementById('FEC_TOMA_E');


    var currentTimeFecTomaE = new Date();
    // Comparamos solo las fechas => no las horas!!
    currentTimeFecTomaE.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas

    var fechaFormularioFecTomaE =new Date(miFecTomaE.value); //convertimos la fecha del formulario a un tipo que se pueda comparar con la fecha actual


 
    if( fechaFormularioFecTomaE > currentTimeFecTomaE ){
        alert('La fecha digitada no puede ser mayor a la fecha del sistema');
        miFecTomaE.focus();
        miFecTomaE.value=currentTimeFecTomaE;
    }


}//fin validaFechaTomaE



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_RES_EX

*/

function validaFechaResEx(){
    var miFecResEx = document.getElementById('FEC_RES_EX');


    var currentTimeFecResEx = new Date();
    // Comparamos solo las fechas => no las horas!!
    currentTimeFecResEx.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas

    var fechaFormularioFecResEx =new Date(miFecResEx.value); //convertimos la fecha del formulario a un tipo que se pueda comparar con la fecha actual


 
    if( fechaFormularioFecResEx > currentTimeFecResEx ){
        alert('La fecha digitada no puede ser mayor a la fecha del sistema');
        miFecResEx.focus();
        miFecResEx.value=currentTimeFecResEx;
    }


}//fin validaFechaResEx



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