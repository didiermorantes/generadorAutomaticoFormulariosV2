/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
FUNCIONES GENÉRICAS

*/

function validaVacio(miCampo,miMensaje){
    
    if ( miCampo.value.length == 0 ||  miCampo.value  =='' ||  miCampo.value ==null || /^\\s+$/.test( miCampo.value )) {
        alert('Diligencie Datos.No se pueden dejar campos vacios.');
        alert(miMensaje);
        miCampo.value='Diligencie datos Válidos.';
        miCampo.focus();
        //retornamos 1 indicando que el campo estaba vacio
        return 1;
        
    }//fin if
    else{
        //de lo contrario retornamos cero
        return 0;
    }

}


function validaFechaSuperior(miCampo){


    var currentTime = new Date();
    // Comparamos solo las fechas => no las horas!!
    currentTime.setHours(0,0,0,0);  // Lo iniciamos a 00:00 horas

    var fechaFormulario =new Date(miCampo.value); //convertimos la fecha del formulario a un tipo que se pueda comparar con la fecha actual


 
    if( fechaFormulario > currentTime ){
        alert('La fecha digitada no puede ser mayor a la fecha del sistema.');
        miCampo.value=currentTime;
        miCampo.focus();
                //retornamos 1 indicando que la fecha es superior
                return 1;

    }
    else{
         //de lo contrario retornamos cero
        return 0;
    }

}


function valida_si_no(miCampo){

    if(miCampo.value<0 || miCampo.value>2){
        alert('Digite un valor entre 1 y 2.');
        alert('1 Si.\n2 No.');
        
        miCampo.value="Diligencie Datos Válidos.";
        miCampo.focus();
        //retornamos 1 indicando que los datos no estaban en el rango
        return 1;
    }else{
        //De lo contrario retornamos cero
        return 0;
    }
}

function valida_1_2(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>2){
        alert('Digite un valor entre 1 y 2.');
        alert(miMensaje);
        
        miCampo.value="Diligencie Datos Válidos.";
        miCampo.focus();
                //retornamos 1 indicando que los datos no estaban en el rango
                return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}

function valida_1_3(miCampo,miMensaje){
    if(miCampo.value<0 || miCampo.value>3){
        alert('Digite un valor entre 1 y 3.');
        alert(miMensaje);
        
        miCampo.value="Diligencie Datos Válidos.";
        miCampo.focus();
                        //retornamos 1 indicando que los datos no estaban en el rango
                        return 1;
    }
    else{
        //De lo contrario retornamos cero
        return 0;

    }

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA TIPO CÁNCER  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaTipoCancer(){

    var miTipoCancer = document.getElementById('TIPO_CANCE');
    
    var miTexto = '1 Cáncer de Mama.\n2 Cáncer de Cuello Uterino.\n3 Ambos.';

    var miValidaVacio =1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    var miValidaValor=1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    //validamos campo vacio
    miValidaVacio=validaVacio(miTipoCancer,miTexto);

    //validamos valor entre 1 y 3
    miValidaValor=valida_1_3(miTipoCancer,miTexto);

    //si ambas validaciones retornan cero significa que los datos ingresados son validos
    if(miValidaVacio==0 && miValidaValor==0){
//invocamos la función para habilitar los campos de acuerdo a la seleccion
        habilitaCamposTipoCancer(miTipoCancer);
    
    }//fin if




}//fin validaTipoCancer



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para Habilita campos tipo cancer

*/

function habilitaCamposTipoCancer(miCampo){


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
    if(miCampo.value  ==1){
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
    else if(miCampo.value  ==2){
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
    else if(miCampo.value  ==3){

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


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_PRO_CO  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaFechaProCo(){

    var miFecProCo = document.getElementById('FEC_PRO_CO');
    validaFechaSuperior(miFecProCo);

  }//fin validFechaExam



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_RES_BI  _ CÁNCER DE MAMA Y CUELLO UTERINO

*/
function validaFechaResult(){

    var miFecResBi = document.getElementById('FEC_RES_BI');
    validaFechaSuperior(miFecResBi);


  }//fin validaFechaResult


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RES_BIOPS9

*/
function validaResultBiopsia(){
    var miResBiops = document.getElementById('RES_BIOPS9');

    var miTexto = "1 Carcinoma Ductal.\n 2 Carcinoma Lobulillar.";

    //validamos campo vacio
    validaVacio(miResBiops,miTexto);

    //validamos valor entre 1 y 2
    valida_1_2(miResBiops,miTexto);
    

}//fin validaResultBiopsia



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA GRAD_HISTO

*/

function validaGradHisto(){
    var miGradHisto = document.getElementById('GRAD_HISTO');

    var miTexto = "1 In Situ.\n2 Infiltrante.\n3 No Indicado.";

    //validamos campo vacio
    validaVacio(miGradHisto,miTexto);

    //validamos valor entre 1 y 3
    valida_1_3(miGradHisto,miTexto);
    


}//fin validaGradHisto






/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_TOMA_E

*/

function validaFechaTomaE(){
    var miFecTomaE = document.getElementById('FEC_TOMA_E');
    validaFechaSuperior(miFecTomaE);


}//fin validaFechaTomaE



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FEC_RES_EX

*/

function validaFechaResEx(){
    var miFecResEx = document.getElementById('FEC_RES_EX');
    validaFechaSuperior(miFecResEx);


}//fin validaFechaResEx



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA BIOP_EXOCE

*/

function validaBiopExocervix(){
    var miBiopExocer = document.getElementById('BIOP_EXOCE');
    var miTexto = "1 Si.\n2 No.";
    var miValidaVacio =1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    var miValidaValor=1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos


    //validamos campo vacio
    miValidaVacio=validaVacio(miBiopExocer,miTexto);

    //validamos valor entre 1 y 2
    miValidaValor=valida_si_no(miBiopExocer);


        //si ambas validaciones retornan cero significa que los datos ingresados son validos
        if(miValidaVacio==0 && miValidaValor==0){
            //invocamos la función para habilitar los campos de acuerdo a la seleccion
                    habilitaCamposBiopExocer(miBiopExocer);
                
                }//fin if



}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para Habilita campos BiopExocer

*/

function habilitaCamposBiopExocer(miCampo){


    //el dato no es vacio y está dentro del rango de 1  y 2
        //HABILITAMOS Y DESHABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO
    
 
        var miResultadoExoc = document.getElementById('RES_B_EXOC');

    
        //validamos el valor, si es uno (1=si) habilitamos RES_B_EXOC
        //validamos el valor, si es dos (2=no) inhabilitamos RES_B_EXOC
        if(miCampo.value  ==1){
           //habilitamos RES_B_EXOC
           miResultadoExoc.disabled=false;    
    
        }
        else if(miCampo.value  ==2){
          //deshabilitamos RES_B_EXOC
          miResultadoExoc.disabled=true; 
           
        }

    
    
    }//fin funcion habilitaCamposBiopExocer



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RES_B_EXOC

*/
function validaResExoc(){
    var miResExoc = document.getElementById('RES_B_EXOC');
    var miTexto = "1=LEI AG.\n2=Carcinoma Escamocelular.";

    //validamos campo vacio
    validaVacio(miResExoc,miTexto);

    //validamos valor entre 1 y 2
    valida_1_2(miResExoc,miTexto);

}




/*

---------------------------------------------------------------------------------------------------------------------------------------------------------

VALIDA GRADO_HIST
*/

function validaGradoHist(){
    var miGradoHist = document.getElementById('GRADO_HIST');

    var miTexto = "1 In Situ.\n2 Infiltrante.\n3 No Indicado.";

    //validamos campo vacio
    validaVacio(miGradoHist,miTexto);

    //validamos valor entre 1 y 3
    valida_1_3(miGradoHist,miTexto);
    


}//fin validaGradoHist



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA BIOP_ENDOC

*/

function validaBiopEndocervix(){
    

    var miBiopEndocer = document.getElementById('BIOP_ENDOC');
    var miTexto = "1 Si.\n2 No.";
    var miValidaVacio =1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    var miValidaValor=1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos


    //validamos campo vacio
    miValidaVacio=validaVacio(miBiopEndocer,miTexto);

    //validamos valor entre 1 y 2
    miValidaValor=valida_si_no(miBiopEndocer);


        //si ambas validaciones retornan cero significa que los datos ingresados son validos
        if(miValidaVacio==0 && miValidaValor==0){
            //invocamos la función para habilitar los campos de acuerdo a la seleccion
                    habilitaCamposBiopEndocer(miBiopEndocer);
                
                }//fin if





}





/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para Habilita campos BiopEndocer

*/

function  habilitaCamposBiopEndocer(miCampo){


    //el dato no es vacio y está dentro del rango de 1  y 2
        //HABILITAMOS Y DESHABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO
    
 
        var miResultadoEndocer = document.getElementById('RES_B_ADEN');
        var miResultadoHist = document.getElementById('RES_B_HIST');

    
        //validamos el valor, si es uno (1=si) habilitamos RES_B_ADEN y RES_B_HIST
        //validamos el valor, si es dos (2=no) inhabilitamos RES_B_ADEN y RES_B_HIST
        if(miCampo.value  ==1){
           //habilitamos RES_B_ADEN y RES_B_HIST
           miResultadoEndocer.disabled=false;   
           miResultadoHist.disabled=false; 
    
        }
        else if(miCampo.value  ==2){
          //deshabilitamos RES_B_ADEN y RES_B_HIST
          miResultadoEndocer.disabled=true;
          miResultadoHist.disabled=true; 
           
        }

    
    
    }//fin funcion  habilitaCamposBiopEndocer






/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RES_B_ADEN

*/


function validaAdenocarcinoma(){

    var miResBAden = document.getElementById('RES_B_ADEN');
    var miTexto = "1=Positivo.\n2=Negativo.";

    //validamos campo vacio
    validaVacio(miResBAden,miTexto);

    //validamos valor entre 1 y 2
    valida_1_2(miResBAden,miTexto);


}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA RES_B_HIST

*/



function validaResBHist(){
    var miResBHist = document.getElementById('RES_B_HIST');

    var miTexto = "1 In Situ.\n2 Infiltrante.\n3 No Indicado.";

    //validamos campo vacio
    validaVacio(miResBHist,miTexto);

    //validamos valor entre 1 y 3
    valida_1_3(miResBHist,miTexto);


}//fin validaResBHist


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------

VALIDA SEG_TRAT_I
*/
function validaSegTratI(){


    var miValidaSegTratI = document.getElementById('SEG_TRAT_I');
    var miTexto = "1 Si.\n2 No.";
    var miValidaVacio =1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos
    var miValidaValor=1;//inicializamos las variables en 1. Su valor cambiará si se ingresan datos validos


    //validamos campo vacio
    miValidaVacio=validaVacio(miValidaSegTratI,miTexto);

    //validamos valor entre 1 y 2
    miValidaValor=valida_si_no(miValidaSegTratI);

    //invocamos la función para habilitar los campos de acuerdo a la seleccion
    //como los campos estarán deshabilitados por defecto, si el usuario no digita una opción valida, se deshabilitarán
    //por eso no es necesario el siguiente if, pues así no se digiten datos válidos, los campos estarán deshabilitados
    habilitaCamposSegTratI(miValidaSegTratI);

    
        //si ambas validaciones retornan cero significa que los datos ingresados son validos
        if(miValidaVacio==0 && miValidaValor==0){
            //invocamos la función para habilitar los campos de acuerdo a la seleccion
                    habilitaCamposSegTratI(miValidaSegTratI);
                
                }//fin if



}




/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
funcion para Habilita campos SegTratI

*/

function  habilitaCamposSegTratI(miCampo){


    //el dato no es vacio y está dentro del rango de 1  y 2
        //HABILITAMOS Y DESHABILITAMOS CAMPOS SEGÚN SIVIGILA ESCRITORIO
    
 
        var miRadioterapia = document.getElementById('radioterap');
        var miQuirurgico = document.getElementById('quirurgico');
        var miQuimiotera = document.getElementById('quimiotera');
        var miHormonoter = document.getElementById('hormonoter');
        var miCuidPalia = document.getElementById('cuid_palia');
        var miInmunotera = document.getElementById('inmunotera');
        var miFechaSegTr = document.getElementById('FCH_SEG_TR');

    
        //validamos el valor, si es uno (1=si) habilitamos los campos anteriores
        //validamos el valor, si es dos (2=no) inhabilitamos los campos anteriores
        if(miCampo.value  ==1){
           //habilitamos 
           
           miRadioterapia.disabled=false;
           miQuirurgico.disabled=false;
           miQuimiotera.disabled=false;
           miHormonoter.disabled=false;
           miCuidPalia.disabled=false;
           miInmunotera.disabled=false;
           miFechaSegTr.disabled=false;
    
        }
        else{
          //deshabilitamos de lo contrario. No tenemos que validar el 2, porque viene de una verificar unos datos validos
         
          miRadioterapia.disabled=true;
          miQuirurgico.disabled=true;
          miQuimiotera.disabled=true;
          miHormonoter.disabled=true;
          miCuidPalia.disabled=true;
          miInmunotera.disabled=true;
          miFechaSegTr.disabled=true;
           
        }

    
    
    }//fin funcion  habilitaCamposSegTratI


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA radioterap

*/
function validaRadioterap(){
    var miRadioterap = document.getElementById('radioterap');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miRadioterap,miTexto);

    //validamos valor entre si y no
    valida_si_no(miRadioterap);

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA quirurgico

*/
function validaQuirurgico(){
    var miQuirurgico = document.getElementById('quirurgico');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miQuirurgico,miTexto);

    //validamos valor entre si y no
    valida_si_no(miQuirurgico);

}

/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA quimiotera

*/
function validaQuimiotera(){
    var miQuimiotera = document.getElementById('quimiotera');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miQuimiotera,miTexto);

    //validamos valor entre si y no
    valida_si_no(miQuimiotera);

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA hormonoter

*/
function validaHormonoter(){
    var miHormonoter = document.getElementById('hormonoter');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miHormonoter,miTexto);

    //validamos valor entre si y no
    valida_si_no(miHormonoter);

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA hormonoter

*/
function validaHormonoter(){
    var miHormonoter = document.getElementById('hormonoter');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miHormonoter,miTexto);

    //validamos valor entre si y no
    valida_si_no(miHormonoter);

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA cuid_palia

*/
function validaCuidPalia(){
    var miCuidPalia = document.getElementById('cuid_palia');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miCuidPalia,miTexto);

    //validamos valor entre si y no
    valida_si_no(miCuidPalia);

}



/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA inmunotera

*/
function validaInmunotera(){
    var miInmunotera = document.getElementById('inmunotera');
    var miTexto = "1=Si.\n2=No.";

    //validamos campo vacio
    validaVacio(miInmunotera,miTexto);

    //validamos valor entre si y no
    valida_si_no(miInmunotera);

}


/*

---------------------------------------------------------------------------------------------------------------------------------------------------------
VALIDA FCH_SEG_TR

*/
function validaFCH_SEG_TR(){

    var miFCH_SEG_TR = document.getElementById('FCH_SEG_TR');
    validaFechaSuperior(miFCH_SEG_TR);

  }//fin validFechaExam



/*



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