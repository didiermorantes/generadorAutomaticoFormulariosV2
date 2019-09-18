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

function poblarListaTipoCancerMenor18(){


    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.


        alert("Funciona la creación dinámica del js");
        var miListaTipoCancerMenor18 = document.getElementById('TIPO_CA');
        alert("El valor seleccionado fue: "+miListaTipoCancerMenor18.value);
//recuperamos el total de listas deplegables.
// Retrieve
var totalListasDesplegablesProcesar = localStorage.totalListasDesplegables ;
alert("La cantidad de listas deplegables en este formulario es : "+totalListasDesplegablesProcesar);

//arreglo para guardar los nombres de todas las listas desplegables
var nombresListasDesplegables = [];


     //Creamos tantas posiciones en el arreglo como total de listas desplegables hay
     //iniciamos el contador en 1 ya que no existe la variable que inicie en cero  ver script.js 852
     for(var lst=1; lst<=totalListasDesplegablesProcesar;lst++){
        nombresListasDesplegables[lst] = document.getElementById('lista'+lst) ;
      }
         var tipoCancer = new Object();
         tipoCancer.valor="1";
         tipoCancer.nombre="posicion69";
     
     
     var options2="";
     options2 += '<option value="' +tipoCancer.valor +'">' +tipoCancer.nombre +'</option>';
     nombresListasDesplegables[1].innerHTML = options2;


     
//PROCESO PARA LEER EL JSON QUE TIENE LOS TIPÓS DE CANCER
var misCabeceras = new Headers(
    {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'multipart/form-data'
    }

);
var miInit = { method: 'GET',
               headers: misCabeceras,
               mode: 'cors',
               cache: 'default' };


                    //fetch toma como argumento la ruta del recurso que quiere obtener
                    //fetch('json/personas.json')  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
                    fetch('json/tipoCancerMenor18.json',miInit)
                    .then(function(response18) {
                        //devuelve un objeto promise conteniendo la respuesta, el objeto response
                            //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
                        return response18.json();
                    })
                    .then(function(myJson18) {
                    
                        //contamos la cantidad de elementos que tiene el json en el objeto "personas" y lo guardamos en datoIngresado
                        //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto personas
                    //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS

                            //contamos la cantidad de elementos que tiene el json en el objeto "tipo" y lo guardamos en datoIngresado
                        //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto tipoCancer
                    datoLeido18=Object.keys(myJson18.tipoCancer).length ;
                        //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
                        console.log(myJson18);
                    // console.log('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    ---DESCOMENTARIAR SI SE USA EL JSON PERSONAS
                    console.log('La cantidad de elementos que tiene el json en el objeto "tipoCancer" es : '+datoLeido18);
                    //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
                    alert(JSON.stringify(myJson18));
                    // alert('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
                    alert('La cantidad de elementos que tiene el json en el objeto "tipoCancer" es : '+datoLeido18);

                            //recorremos el json
            for(var i18=0; i2<datoLeido18;i18++){
                        
    //rellenamos la lista desplegable nueva con la información obtenida del json
                options2 += '<option value="' +myJson18.tipoCancer[i18].valor +'">' +myJson18.tipoCancer[i18].nombre +'</option>';
                nombresListasDesplegables[1].innerHTML = options2;
                 }//fin for

                
                    }); //fin  //then(function(myJson18)







      } else {
        // Sorry! No Web Storage support..
        alert("Lo siento. Su navegador no soporta Web Storage. Intente con otro navegador");
      }



}