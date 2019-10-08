/*

function generaCajas() {
    //obtenemos los datos ingresados en la caja de texto
    var datoIngresado=document.getElementById("dato").value;
    //validamos que sea un número, y que no esté vacío
if(isNaN(datoIngresado) || datoIngresado==""){
    alert("Debe ingresar un número.No puede quedar vacío ni escribir letras.");
}else{
    alert("El número digitado fue: "+datoIngresado);



     

            // crea un nuevo div 
    // y añade contenido 
    var newParentDiv = document.createElement("div"); 
    newParentDiv.setAttribute('class', 'd-inline-flex flex-wrap');
    // añade el elemento creado y su contenido al DOM 
    var currentDiv = document.getElementById("div"); 
    document.body.insertBefore(newParentDiv, currentDiv); 
    //el ciclo creará cajas hasta el límite determinado por el dato ingresado
    //debe comenzar en 1 el ciclo para que funcione bien con los datos ingresados por teclado
            for(var i=1; i<=datoIngresado;i++){
        // crea un nuevo div 
            // y añade contenido 
            var newDiv = document.createElement("div"); 
            var newContent = document.createTextNode("Campo: "+i); 
            newDiv.appendChild(newContent); //añade texto al div creado.  
            // añade el elemento creado y su contenido al DOM 
            var currentDiv = document.getElementById("div"); 
            document.body.insertBefore(newDiv, currentDiv); 


        //creamos elemento de tipo input
            var input = document.createElement("input");
            //establecemos el tipo texto
            input.setAttribute('type', 'text');
            input.name = "caja"+i;
            input.id="caja"+i;
            //campos en linea
            //input.setAttribute('class', 'd-sm-inline-flex');
            input.setAttribute('class', 'd-sm-flex');


            //le damos bordes al div
            newDiv.setAttribute('style','border: thin solid black');

            //asignamos un color a los div pares y otro a los impares
                if(i%2==0){
                    //color azul turquesa a los pares
                    newDiv.setAttribute('class','p-2 bg-light');
                }
                else{
                    //color amarillo a los impares
                    newDiv.setAttribute('class','p-2 bg-secondary');
                }

            newDiv.appendChild(input); //añade la caja de texto al div creado recientemente. 
        //se crearán tantos div como el número que se haya ingresado en la caja de texto
        newParentDiv.appendChild(newDiv); //añadimos cada div a su padre
    }
       

}

    

}



*/



/*
GET CON HTTPREQUEST
function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("GET", "json/personas.json", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("Your JSON Data Here");
}
*/

/* GET CON FETCH */
/*
function UserAction() {
    //fetch toma como argumento la ruta del recurso que quiere obtener
    // fetch('json/personas.json')     --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
    fetch('json/estructuraForm.json') 
    .then(function(response) {
        //devuelve un objeto promise conteniendo la respuesta, el objeto response
            //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
        return response.json();
    })
    .then(function(myJson) {
        //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola
      console.log(myJson);
      //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
      alert(JSON.stringify(myJson));
    });
 }
*/

 /* funcion que genera cajas de acuerdo al json leido */
/*
 function leerJson(){
var datoLeido=0;
 //fetch toma como argumento la ruta del recurso que quiere obtener
 //fetch('json/personas.json')  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
 fetch('json/estructuraForm.json')
 .then(function(response2) {
     //devuelve un objeto promise conteniendo la respuesta, el objeto response
         //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
     return response2.json();
 })
 .then(function(myJson2) {
   
     //contamos la cantidad de elementos que tiene el json en el objeto "personas" y lo guardamos en datoIngresado
     //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto personas
   //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS

        //contamos la cantidad de elementos que tiene el json en el objeto "campos" y lo guardamos en datoIngresado
     //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto personas
   datoLeido=Object.keys(myJson2.campos).length ;
     //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
     console.log(myJson2);
  // console.log('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    ---DESCOMENTARIAR SI SE USA EL JSON PERSONAS
   console.log('La cantidad de elementos que tiene el json en el objeto "campos" es : '+datoLeido);
   //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
   alert(JSON.stringify(myJson2));
  // alert('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
   alert('La cantidad de elementos que tiene el json en el objeto "campos" es : '+datoLeido);

            // crea un nuevo div 
    // y añade contenido 
    var newParentDiv2 = document.createElement("div"); 
    newParentDiv2.setAttribute('class', 'd-inline-flex flex-wrap');
    // añade el elemento creado y su contenido al DOM 
    var currentDiv2 = document.getElementById("div"); 
    document.body.insertBefore(newParentDiv2, currentDiv2); 
    //el ciclo creará cajas hasta el límite determinado por el dato ingresado
    //el for cuando se trabaja con json si comienza en cero, a diferencia del otro dato que se ingresaba por teclado, donde debia comenzar en uno, ademas la comparación ya no es menor o igual, es solo menor
            for(var i2=0; i2<datoLeido;i2++){
        // crea un nuevo div 
            // y añade contenido 
            var newDiv2 = document.createElement("div"); 
            //var newContent2 = document.createTextNode("Campo: "+i2);  --DESCOMENTARIAR SI SE QUIERE CONTENEDOR GENERICO
            
           // alert(myJson2.campos[i2].nombreCampo);      --DESCOMENTARIAR SI SE QUIERE VER CADA NOMBRE DE CAMPO EN UN ALERT
           //asignamos el nombre del campo de acuerdo al contenido del json
            var newContent2 = document.createTextNode(myJson2.campos[i2].nombreCampo); 
            newDiv2.appendChild(newContent2); //añade texto al div creado.  
            // añade el elemento creado y su contenido al DOM 
            var currentDiv2 = document.getElementById("div"); 
            document.body.insertBefore(newDiv2, currentDiv2); 


        //creamos elemento de tipo input
            var input2 = document.createElement("input");     
            //establecemos el tipo texto
            //input2.setAttribute('type', 'text'); --DESCOMENTARIAR SI SE QUIERE UN CONTENEDOR GENERICO DE TIPO TEXT

            //asignamos el tipo de dato, de acuerdo al json
            input2.setAttribute('type', myJson2.campos[i2].tipoCampo);
            //input2.name = "caja"+i2; --DESCOMENTARIRAR SI SE QUIERE UN NAME GENERICO
            //input2.id="caja"+i2;   --DESCOMENTARIAR SI SE QUIERE UN ID GENERICO

                //asignamos como name e id, la información del nombre del campo proveniente del json
            input2.name = myJson2.campos[i2].nombreCampo;
            input2.id=myJson2.campos[i2].nombreCampo;

            //campos en linea
            //input.setAttribute('class', 'd-sm-inline-flex');
            input2.setAttribute('class', 'd-sm-flex');
            //le damos bordes al div
                //insertamos función javascript al elemento con el evento onblur, es decir, cuando pierde el foco
                input2.setAttribute('onblur',myJson2.funciones[i2].codigoFuncion);


            newDiv2.setAttribute('style','border: thin solid black');
            //asignamos un color a los div pares y otro a los impares
                if(i2%2==0){
                    //color azul turquesa a los pares
                    newDiv2.setAttribute('class','p-2 bg-light');
                }
                else{
                    //color amarillo a los impares
                    newDiv2.setAttribute('class','p-2 bg-secondary');
                }

            newDiv2.appendChild(input2); //añade la caja de texto al div creado recientemente. 
        //se crearán tantos div como el número que se haya ingresado en la caja de texto
        newParentDiv2.appendChild(newDiv2); //añadimos cada div a su padre
    }




 });


 }


*/

 
 /* funcion que genera cajas de acuerdo a la respuesta json de la BD */
 /*
 function leerBD(){
    var datoLeido3=0;
     //fetch toma como argumento la ruta del recurso que quiere obtener
     //fetch('json/personas.json')  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
     //fetch('http://localhost:8181/api_db/tipoEvento/leer.php') --DESCOMENTARIAR SI SE USA XAMPP CON PUERTO 8181
     
     fetch('https://vitalsaludem.com/services/api_db/tipoEvento/leer.php')
     .then(function(response3) {
         //devuelve un objeto promise conteniendo la respuesta, el objeto response
             //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
         return response3.json();
     })
     .then(function(myJson3) {
       
         //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
       //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
    
            //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
       datoLeido3=Object.keys(myJson3.registros).length ;
         //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
         console.log(myJson3);
      // console.log('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    ---DESCOMENTARIAR SI SE USA EL JSON PERSONAS
       console.log('La cantidad de elementos que tiene el json en el objeto "registros" es : '+datoLeido3);
       //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
       alert(JSON.stringify(myJson3));
      // alert('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
       alert('La cantidad de elementos que tiene el json en el objeto "registros" es : '+datoLeido3);
    
                // crea un nuevo div 
        // y añade contenido 
        var newParentDiv3 = document.createElement("div"); 
        newParentDiv3.setAttribute('class', 'd-inline-flex flex-wrap');
        // añade el elemento creado y su contenido al DOM 
        var currentDiv3 = document.getElementById("div"); 
        document.body.insertBefore(newParentDiv3, currentDiv3); 
        //el ciclo creará cajas hasta el límite determinado por el datoLeido
        //el for cuando se trabaja con json si comienza en cero, a diferencia del otro dato que se ingresaba por teclado, donde debia comenzar en uno, ademas la comparación ya no es menor o igual, es solo menor
                for(var i3=0; i3<datoLeido3;i3++){
            // crea un nuevo div 
                // y añade contenido 
                var newDiv3 = document.createElement("div"); 
                //var newContent2 = document.createTextNode("Campo: "+i2);  --DESCOMENTARIAR SI SE QUIERE CONTENEDOR GENERICO
                
               // alert(myJson2.campos[i2].nombreCampo);      --DESCOMENTARIAR SI SE QUIERE VER CADA NOMBRE DE CAMPO EN UN ALERT
               //asignamos el nombre del campo de acuerdo al contenido del json
                var newContent3 = document.createTextNode(myJson3.registros[i3].nombre); 
                newDiv3.appendChild(newContent3); //añade texto al div creado.  
                // añade el elemento creado y su contenido al DOM 
                var currentDiv3 = document.getElementById("div"); 
                document.body.insertBefore(newDiv3, currentDiv3); 
    
    
            //creamos elemento de tipo input
                var input3 = document.createElement("input");     
                //establecemos el tipo texto
                //input2.setAttribute('type', 'text'); --DESCOMENTARIAR SI SE QUIERE UN CONTENEDOR GENERICO DE TIPO TEXT
    
                //asignamos el tipo de dato, de acuerdo al json
                input3.setAttribute('type', myJson3.registros[i3].tipo);
                //input2.name = "caja"+i2; --DESCOMENTARIRAR SI SE QUIERE UN NAME GENERICO
                //input2.id="caja"+i2;   --DESCOMENTARIAR SI SE QUIERE UN ID GENERICO
    
                    //asignamos como name e id, la información del nombre del campo proveniente del json
                input3.name = myJson3.registros[i3].nombre;
                input3.id=myJson3.registros[i3].nombre;
    
                //campos en linea
                //input.setAttribute('class', 'd-sm-inline-flex');
                input3.setAttribute('class', 'd-sm-flex');
                //le damos bordes al div
                    //insertamos función javascript al elemento con el evento onblur, es decir, cuando pierde el foco
                    input3.setAttribute('onblur',myJson3.registros[i3].jsEvento);
    
    
                newDiv3.setAttribute('style','border: thin solid black');
                //asignamos un color a los div pares y otro a los impares
                    if(i3%2==0){
                        //color azul turquesa a los pares
                        newDiv3.setAttribute('class','p-2 bg-light');
                    }
                    else{
                        //color amarillo a los impares
                        newDiv3.setAttribute('class','p-2 bg-secondary');
                    }
    
                newDiv3.appendChild(input3); //añade la caja de texto al div creado recientemente. 
            //se crearán tantos div como el número que se haya ingresado en la caja de texto
            newParentDiv3.appendChild(newDiv3); //añadimos cada div a su padre
        }
    
    
    
    
     });
    
    
     }

*/
     
 
 /* funcion que genera cajas de acuerdo a la respuesta json de la BD y a la lista seleccionada*/
 /*
 function leerBDLista(){

    
    var datoSeleccionadoLista = document.getElementById("miListaEventos").value;
    
    document.getElementById("demo").innerHTML = "Eligio : " + datoSeleccionadoLista;


    var datoLeido4=0;
    var datoLeido5=0;//variable para contabilizar la cantidad de elementos en el objeto de la
     //fetch toma como argumento la ruta del recurso que quiere obtener
     //fetch('json/personas.json')  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
     //fetch('http://localhost:8181/api_db/tipoEvento/leer.php') --DESCOMENTARIAR SI SE USA XAMPP CON PUERTO 8181

     var myJsonProcesado =0; //variable para guardar el json procesado
     var myJsonProcesado2 =0; //variable para guardar el json procesado
     var datoLeidoJsonProcesado =0;  //Variable para guardar la seleccion de la lista desplegable
     var idMyJsonProcesado=0;//Variable para guardar el id del primer valor del jsonProcesado
     var idMyJsonProcesado2=0;//Variable para guardar el id del ultimo valor del jsonProcesado
     
     
     fetch('https://vitalsaludem.com/services/api_db/tipoEvento/leerLista.php')
     .then(function(response4) {
         //devuelve un objeto promise conteniendo la respuesta, el objeto response
             //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
         return response4.json();
     })
     .then(function(myJson4) {
       
         //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
       //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
    
            //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
       datoLeido4=Object.keys(myJson4.registros).length; //esto arroja la cantidad de registros TOTAL que tiene el json
       

         //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
         console.log(myJson4);
      // console.log('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    ---DESCOMENTARIAR SI SE USA EL JSON PERSONAS
       console.log('La cantidad de elementos que tiene el json en el objeto "registros" es : '+datoLeido4);
       //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
       alert(JSON.stringify(myJson4));
     
       // PROCESO PARA DETERMINAR LA TABLA DESEADA , DE ACUERDO A LA LISTA DESPLEGABLE 
                    myJsonProcesado =myJson4.registros[datoSeleccionadoLista]; 

                    var testigoPrimerDato=0;//variable para encontrar el primer dato que tenga el idTablaEvento
                    var testigoUltimoDato=0;//Variable para encontrar el ultimo dato que tenga el idTablaEvento
                    //ciclo para encontrar los id de los elementos que coinciden con lo seleccionado en la lista desplegable   
                    for(var p4 = 0; p4 < datoLeido4; p4++){
                       
                          if(myJson4.registros[p4].idTablaEvento == datoSeleccionadoLista){
                                //Validamos que sea el primer dato que se encuentra para no usar break
                                if(testigoPrimerDato == 0){

                                    //obtenemos el id del registro que coincide con lo seleccionado en la lista
                                    idMyJsonProcesado=myJson4.registros[p4].id;
                                    //encontramos el indice de dicho id
                                    myJsonProcesado = p4;
                                    
                                    console.log("Este es el id del primer dato que coincide con lo seleccionado en la lista: "+idMyJsonProcesado);
                                    console.log("Este es el indice del ciclo que coincide con lo seleccionado en la lista "+myJsonProcesado);
                                    //cambiamos el valor del testigo para que nunca vuelva a entrar aqui
                                    testigoPrimerDato=1;
                                }//cierre if

                                            
                            
                          }//cierre if

                          //validamos si el idTablaEvento es superior a lo seleccionado en la lista
                          //como la consulta está ordenada de manera ascendente, si el idTablaEvento es superior al seleccionado significa que llegamos al ultimo valor
                          //es decir, ya estamos en un nuevo idTablaEvento
                          if(myJson4.registros[p4].idTablaEvento > datoSeleccionadoLista){
                            //Validamos que sea el primer dato que se encuentra para no usar break
                            if(testigoUltimoDato == 0){

                                //obtenemos el id del registro que coincide con lo seleccionado en la lista
                                idMyJsonProcesado2=myJson4.registros[p4].id;
                                //encontramos el indice de dicho id
                                myJsonProcesado2 = p4;
                                
                                console.log("Este es el id del ultimo dato que coincide con lo seleccionado en la lista (ya no es de la tabla seleccionada): "+idMyJsonProcesado2);
                                console.log("Este es el indice del ciclo que coincide con lo seleccionado en la lista "+myJsonProcesado2);
                                //cambiamos el valor del testigo para que nunca vuelva a entrar aqui
                                testigoUltimoDato=1;
                            }//cierre if

                                        
                        
                      }//cierre if
                          
                        }//cierre for
                      


                    //luego de obtener la respuesta  con el contenido del json processado, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
                    
                    
                            
                    datoLeidoJsonProcesado = Object.keys(myJson4.registros[myJsonProcesado]).length;
                            
                    console.log('La cantidad de elementos que tiene el json procesado en el objeto "registros" en la posicion '+datoSeleccionadoLista+' es : '+datoLeidoJsonProcesado);
                    
                           //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
                     alert(JSON.stringify(myJson4.registros[myJsonProcesado]));
                     alert('La cantidad de elementos que tiene el json procesado en el objeto "registros" en la posicion  '+datoSeleccionadoLista+' es : '+datoLeidoJsonProcesado);

                     //tenemos que extraer el id del primer elemento de la tabla seleccionada para comenzar a pintar desde ahi. El ordenamiento en la consulta cambia todo
                    
                     console.log('El id del primer valor obtenido de la tabla segun lista desplegable es  '+myJsonProcesado);
                     alert('El id del primer valor obtenido de la tabla segun lista desplegable es  '+idMyJsonProcesado);

                     console.log('El id del ultimo valor obtenido de la tabla segun lista desplegable es  '+myJsonProcesado2);
                     alert('El id del ultimo valor obtenido de la tabla segun lista desplegable es  '+idMyJsonProcesado2);





        // crea un nuevo div 
        // y añade contenido 
        var newParentDiv4 = document.createElement("div"); 
        newParentDiv4.setAttribute('class', 'd-inline-flex flex-wrap');
        // añade el elemento creado y su contenido al DOM 
        var currentDiv4 = document.getElementById("div"); 
        document.body.insertBefore(newParentDiv4, currentDiv4); 
        //el ciclo creará cajas hasta el límite determinado por el datoLeido
        //el for cuando se trabaja con json si comienza en cero, a diferencia del otro dato que se ingresaba por teclado, donde debia comenzar en uno, ademas la comparación ya no es menor o igual, es solo menor
               
       // for(var i4=0; i4<datoLeido4;i4++){ //DESCOMENTARIAR SI SE QUIEREN PINTAR TODOS LOS CAJONES i=O


        //LOS LIMITES DE ESTE CICLO SON EL idTablaEvento y el lenght obtenido  de ese registro
                        var limiteInferior = parseInt(myJsonProcesado);
                        console.log('El limite inferior del ciclo es '+limiteInferior);
                        var limiteSuperior =  parseInt(myJsonProcesado2)
                        console.log('El limite superior del ciclo es '+limiteSuperior);



                        console.log('El primer elemento del objeto completo segun el id de la lista es: ');
                        console.log(myJson4.registros[limiteInferior]);
                        console.log('El ultimo elemento del objeto completo segun el id de la lista es: ');
                        console.log(myJson4.registros[limiteSuperior]);

//no lo hacemos menor o igual al limite superior, pues el limite superior ya es parte de otra tabla
                    for(var i4=limiteInferior; i4<limiteSuperior;i4++){
            // crea un nuevo div 
                // y añade contenido 
                var newDiv4 = document.createElement("div"); 
                //var newContent2 = document.createTextNode("Campo: "+i2);  --DESCOMENTARIAR SI SE QUIERE CONTENEDOR GENERICO
                
               // alert(myJson2.campos[i2].nombreCampo);      --DESCOMENTARIAR SI SE QUIERE VER CADA NOMBRE DE CAMPO EN UN ALERT
               //asignamos el nombre del campo de acuerdo al contenido del json
                var newContent4 = document.createTextNode(myJson4.registros[i4].nombre); 
            
                
                newDiv4.appendChild(newContent4); //añade texto al div creado.  
                // añade el elemento creado y su contenido al DOM 
                var currentDiv4 = document.getElementById("div"); 
                document.body.insertBefore(newDiv4, currentDiv4); 
    
    
            //creamos elemento de tipo input
                var input4 = document.createElement("input");     
                //establecemos el tipo texto
                //input2.setAttribute('type', 'text'); --DESCOMENTARIAR SI SE QUIERE UN CONTENEDOR GENERICO DE TIPO TEXT
    
                //asignamos el tipo de dato, de acuerdo al json
                input4.setAttribute('type', myJson4.registros[i4].tipo);
                //input2.name = "caja"+i2; --DESCOMENTARIRAR SI SE QUIERE UN NAME GENERICO
                //input2.id="caja"+i2;   --DESCOMENTARIAR SI SE QUIERE UN ID GENERICO
    
                    //asignamos como name e id, la información del nombre del campo proveniente del json
                input4.name = myJson4.registros[i4].nombre;
                input4.id=myJson4.registros[i4].nombre;
    
                //campos en linea
                //input.setAttribute('class', 'd-sm-inline-flex');
                input4.setAttribute('class', 'd-sm-flex');
                //le damos bordes al div
                    //insertamos función javascript al elemento con el evento onblur, es decir, cuando pierde el foco
                    input4.setAttribute('onblur',myJson4.registros[i4].jsEvento);
    
    
                newDiv4.setAttribute('style','border: thin solid black');
                //asignamos un color a los div pares y otro a los impares
                    if(i4%2==0){
                        //color azul turquesa a los pares
                        newDiv4.setAttribute('class','p-2 bg-light');
                    }
                    else{
                        //color amarillo a los impares
                        newDiv4.setAttribute('class','p-2 bg-secondary');
                    }
    
                newDiv4.appendChild(input4); //añade la caja de texto al div creado recientemente. 
            //se crearán tantos div como el número que se haya ingresado en la caja de texto
            newParentDiv4.appendChild(newDiv4); //añadimos cada div a su padre
        }
    
    

     });
    
    
     }


*/
  
 
 /* funcion que genera cajas de acuerdo a la respuesta json de la BD y a la lista seleccionada*/
 function leerBDListaEspecificos(){

    
    var datoSeleccionadoLista10 = document.getElementById("miListaEventosEspecificos").value;
    
    document.getElementById("demo2").innerHTML = "Eligio Tabla Evento : " + datoSeleccionadoLista10;


    var datoLeido14=0;
    var datoLeido15=0;//variable para contabilizar la cantidad de elementos en el objeto de la
     //fetch toma como argumento la ruta del recurso que quiere obtener
     //fetch('json/personas.json')  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
     //fetch('http://localhost:8181/api_db/tipoEvento/leer.php') --DESCOMENTARIAR SI SE USA XAMPP CON PUERTO 8181

     var myJsonProcesado10 =0; //variable para guardar el json procesado
     var myJsonProcesado12 =0; //variable para guardar el json procesado
     var datoLeidoJsonProcesado10 =0;  //Variable para guardar la seleccion de la lista desplegable
     var idMyJsonProcesado10=0;//Variable para guardar el id del primer valor del jsonProcesado
     var idMyJsonProcesado12=0;//Variable para guardar el id del ultimo valor del jsonProcesado
     var contadorListaDesplegable=0;//variable para almacenar la cantidad de listas desplegables

     
     fetch('https://vitalsaludem.com/services2/api_db/tipoEvento/leerLista.php')
     .then(function(response14) {
         //devuelve un objeto promise conteniendo la respuesta, el objeto response
             //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
         return response14.json();
     })
     .then(function(myJson14) {
       
         //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
       //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
    
            //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
       datoLeido14=Object.keys(myJson14.registros).length; //esto arroja la cantidad de registros TOTAL que tiene el json
       

         //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
         console.log(myJson14);
      // console.log('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    ---DESCOMENTARIAR SI SE USA EL JSON PERSONAS
       console.log('La cantidad de elementos que tiene el json en el objeto "registros" es : '+datoLeido14);
       //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
       alert(JSON.stringify(myJson14));
     
       /* PROCESO PARA DETERMINAR LA TABLA DESEADA , DE ACUERDO A LA LISTA DESPLEGABLE */
                    myJsonProcesado10 =myJson14.registros[datoSeleccionadoLista10]; 

                    var testigoPrimerDato10=0;//variable para encontrar el primer dato que tenga el idTablaEvento
                    var testigoUltimoDato10=0;//Variable para encontrar el ultimo dato que tenga el idTablaEvento
                    //ciclo para encontrar los id de los elementos que coinciden con lo seleccionado en la lista desplegable   
                    for(var p14 = 0; p14 < datoLeido14; p14++){
                       
                          if(myJson14.registros[p14].idTablaEvento == datoSeleccionadoLista10){
                                //Validamos que sea el primer dato que se encuentra para no usar break
                                if(testigoPrimerDato10 == 0){

                                    //obtenemos el id del registro que coincide con lo seleccionado en la lista
                                    idMyJsonProcesado10=myJson14.registros[p14].id;
                                    //encontramos el indice de dicho id
                                    myJsonProcesado10 = p14;
                                    
                                    console.log("Este es el id del primer dato que coincide con lo seleccionado en la lista: "+idMyJsonProcesado10);
                                    console.log("Este es el indice del ciclo que coincide con lo seleccionado en la lista "+myJsonProcesado10);
                                    //cambiamos el valor del testigo para que nunca vuelva a entrar aqui
                                    testigoPrimerDato10=1;
                                }//cierre if

                                            
                            
                          }//cierre if

                          //validamos si el idTablaEvento es superior a lo seleccionado en la lista
                          //como la consulta está ordenada de manera ascendente, si el idTablaEvento es superior al seleccionado significa que llegamos al ultimo valor
                          //es decir, ya estamos en un nuevo idTablaEvento
                          if(myJson14.registros[p14].idTablaEvento > datoSeleccionadoLista10){
                            //Validamos que sea el primer dato que se encuentra para no usar break
                            if(testigoUltimoDato10 == 0){

                                //obtenemos el id del registro que coincide con lo seleccionado en la lista
                                idMyJsonProcesado12=myJson14.registros[p14].id;
                                //encontramos el indice de dicho id
                                myJsonProcesado12 = p14;
                                
                                console.log("Este es el id del ultimo dato que coincide con lo seleccionado en la lista (ya no es de la tabla seleccionada): "+idMyJsonProcesado12);
                                console.log("Este es el indice del ciclo que coincide con lo seleccionado en la lista "+myJsonProcesado12);
                                //cambiamos el valor del testigo para que nunca vuelva a entrar aqui
                                testigoUltimoDato10=1;
                            }//cierre if

                                        
                        
                      }//cierre if
                          
                        }//cierre for
                      


                    //luego de obtener la respuesta  con el contenido del json processado, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
                    
                    
                            
                    datoLeidoJsonProcesado10 = Object.keys(myJson14.registros[myJsonProcesado10]).length;
                            
                    console.log('La cantidad de elementos que tiene el json procesado en el objeto "registros" en la posicion '+datoSeleccionadoLista10+' es : '+datoLeidoJsonProcesado10);
                    
                           //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
                     alert(JSON.stringify(myJson14.registros[myJsonProcesado10]));
                     alert('La cantidad de elementos que tiene el json procesado en el objeto "registros" en la posicion  '+datoSeleccionadoLista10+' es : '+datoLeidoJsonProcesado10);

                     //tenemos que extraer el id del primer elemento de la tabla seleccionada para comenzar a pintar desde ahi. El ordenamiento en la consulta cambia todo
                    
                     console.log('El id del primer valor obtenido de la tabla segun lista desplegable es  '+myJsonProcesado10);
                     alert('El id del primer valor obtenido de la tabla segun lista desplegable es  '+idMyJsonProcesado10);

                     console.log('El id del ultimo valor obtenido de la tabla segun lista desplegable es  '+myJsonProcesado12);
                     alert('El id del ultimo valor obtenido de la tabla segun lista desplegable es  '+idMyJsonProcesado12);





        // crea un nuevo div 
        // y añade contenido 
        var newParentDiv14 = document.createElement("div"); 
        //newParentDiv14.setAttribute('class', ' flex-sm-fill flex-md-fill justify-content-center flex-grow-1 ');
        newParentDiv14.setAttribute('class', 'd-flex flex-wrap justify-content-center ');
        newParentDiv14.setAttribute('style','justify-content: space-around');
        // añade el elemento creado y su contenido al DOM 
        var currentDiv14 = document.getElementById("div"); 
        document.body.insertBefore(newParentDiv14, currentDiv14); 
        //el ciclo creará cajas hasta el límite determinado por el datoLeido
        //el for cuando se trabaja con json si comienza en cero, a diferencia del otro dato que se ingresaba por teclado, donde debia comenzar en uno, ademas la comparación ya no es menor o igual, es solo menor
               
       // for(var i4=0; i4<datoLeido4;i4++){ //DESCOMENTARIAR SI SE QUIEREN PINTAR TODOS LOS CAJONES i=O


        //LOS LIMITES DE ESTE CICLO SON EL idTablaEvento y el lenght obtenido  de ese registro
                        var limiteInferior10 = parseInt(myJsonProcesado10);
                        console.log('El limite inferior del ciclo es '+limiteInferior10);
                        var limiteSuperior10 =  parseInt(myJsonProcesado12)
                        console.log('El limite superior del ciclo es '+limiteSuperior10);



                        console.log('El primer elemento del objeto completo segun el id de la lista es: ');
                        console.log(myJson14.registros[limiteInferior10]);
                        console.log('El ultimo elemento del objeto completo segun el id de la lista es: ');
                        console.log(myJson14.registros[limiteSuperior10]);

                //Almacenamos en un arreglo aparte los datos del json, pero ordenado de acuerdo al campo orden
                        var arregloOrdenadoJson = []; //Array para almacenar el json de acuerdo al campo Orden
                        var indiceArregloOrdenado=0;//Variable para almacenar el indice del arreglo
//no lo hacemos menor o igual al limite superior, pues el limite superior ya es parte de otra tabla
                    for(var i14=limiteInferior10; i14<limiteSuperior10;i14++){

  indiceArregloOrdenado=myJson14.registros[i14].orden; //el indice del arreglo sera el campo orden
   arregloOrdenadoJson[indiceArregloOrdenado]=  myJson14.registros[i14];  //guardamos todo el json en esa posicion                 
   console.log("El orden visualizado en el arreglo es : "+arregloOrdenadoJson[indiceArregloOrdenado].orden);
                    }

                    limiteInferior10 = 1;//limite inferior para recorrer el arreglo especial
                    limiteSuperior10=arregloOrdenadoJson.length;//el limite superior será  el limite del arreglo
            

                    for(var i14=limiteInferior10; i14<limiteSuperior10;i14++){
//ANTES DE CREAR EL DIV VERIFICAMOS SI EL CAMPO ES EDITABLE PARA VISUALIZARLO O NO

let testigo=arregloOrdenadoJson[i14].editable;
//let testigo=myJson14.registros[i14].editable; //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
let nombreTestigo = arregloOrdenadoJson[i14].descripcion;
//let nombreTestigo = myJson14.registros[i14].descripcion; //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
let grupo =  arregloOrdenadoJson[i14].grupo; //variable para almacenar el grupo del elemento
//let grupo =  myJson14.registros[i14].grupo; //variable para almacenar el grupo del elemento DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
let ordenGrupo=10; //variable para tener en cuenta el orden en que se pintaran los div. Asignamos el valor 10 que es el valor por defecto que tiene en la tabla
let ordenGrupoEnvoltorio="";
let claseOrdenGrupo="";//variable que almacenará la clase de orden grupo que se usará en el flex
let claseOrdenGrupoEnvoltorio="";
let tooltip = arregloOrdenadoJson[i14].expresionRegular;//el tooltip será la información que se encuentre en el campo expresionRegular de la tabla
//let tooltip = myJson14.registros[i14].expresionRegular;//el tooltip será la información que se encuentre en el campo expresionRegular de la tabla  //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO


//var nombreCampos = []; //Array para almacenar los nombres de los campos que vengan de la tabla. Esto solucionará problemas a futuro

//al parecer el testigo retorna un caracter vacio (espacio) cuando es falso
//evaluamos por el caracter Unicode ya que otras validaciones fallaron
//validamos la posición(0) de testigo (El primer  bit)
//los que tienen valor cero no se muestran
if(testigo.charCodeAt(0) == 0){

    //no hacemos nada, y por tanto no se pintará
    console.log('El valor Unicode del carácter en el índice proporcionado  de la variable testigo es '+testigo.charCodeAt(0)+' para el campo '+nombreTestigo);
console.log('El valor del campo '+nombreTestigo+ ' es: ' + testigo);
}
else
{
//MOSTRAMOS 
console.log('El valor Unicode del carácter en el índice proporcionado  de la variable testigo es '+testigo.charCodeAt(0)+' para el campo '+nombreTestigo);
    console.log('El valor del campo '+nombreTestigo+ ' es: ' + testigo);




                    //VERIFICAMOS SI HAY ENVOLTORIOS PARA CREAR 
                //HACEMOS ESTA VERIFICACION PARA CREAR DIVS INDEPENDIENTES  PARA LOS ENVOLTORIOS EN EL LUGAR ADECUADO
              //  let envoltorio = myJson14.registros[i14].envoltorio;  //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
                let envoltorio = arregloOrdenadoJson[i14].envoltorio;
                //si el envoltorio no tiene longitud, significa que no hay datos
                //generalmente el envoltorio estará vacio o nulo, pero si no es nullo o indefinido o vacio, procedemos a imprimir lo que haya en el campo envoltorio
                if(envoltorio == null ){

                    //no hacemos nada, porque generalmente el envoltorio es null

                    //OJO EL ENVOLTORIO SOLAMENTE DEBE IR EN EL MISMO REGISTRO DONDE COMIENZA EL ENVOLTORIO PARA QUE ESTE CODIGO FUNCIONE, LOS DEMAS ENVOLTORIOS DEBEN IR NULL
                }
                else{

                            //creamos un div especial para el envoltorio en la secuencia adecuada


                                // crea un nuevo div 
                                // y añade contenido 
                                var newDivEnvoltorio= document.createElement("div"); 
                                //var newContent2 = document.createTextNode("Campo: "+i2);  --DESCOMENTARIAR SI SE QUIERE CONTENEDOR GENERICO

//ASIGNAMOS EL ORDEN AL FLEX DE ENVOLTORIO DE ACUERDO AL ORDEN DE GRUPO QUE TENGA EN LA TABLA, SI NO TIENE, NO ASIGNAMOS ORDEN Y SE MUESTRA SEGÚN SE VAYA GENERANDO
//EN LA TABLA Grupo NO PUEDE SER NULO Y TIENE UN VALOR POR DEFECTO DE TIPO STRING CON EL NOMBRE DEL EVENTO 
//VERIFICAREMOS QUE GRUPO SEA UN NUMERO PARA PODER TENER EN CUENTA EL ORDEN GRUPO
//ordenGrupoEnvoltorio= myJson14.registros[i14].grupo;//DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
ordenGrupoEnvoltorio= arregloOrdenadoJson[i14].grupo;
//validamos que la variable tenga un valor diferente al valor que tiene por defecto
//ordenamiento del flex
if(!isNaN(parseInt(ordenGrupoEnvoltorio))){//convertimos a entero el grupo, y luego evaluamos si es un numero

    console.log("El orden de grupo del elemento Padres es: "+ordenGrupoEnvoltorio); 
    claseOrdenGrupoEnvoltorio='order-'+ordenGrupoEnvoltorio;
    

}




                                newDivEnvoltorio.setAttribute('class', 'd-sm-flex flex-column '+claseOrdenGrupoEnvoltorio); //DIV DE TIPO FLEX DE TIPO COLUMNA y su orden flex
                                newDivEnvoltorio.setAttribute('style','border: thin solid black');





                                
                            // alert(myJson2.campos[i2].nombreCampo);      --DESCOMENTARIAR SI SE QUIERE VER CADA NOMBRE DE CAMPO EN UN ALERT
                            //asignamos el nombre del campo de acuerdo al contenido del json envoltorio
                                // var newContentEnvoltorio = document.createTextNode(myJson14.registros[i14].envoltorio); //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO 
                                var newContentEnvoltorio = document.createTextNode(arregloOrdenadoJson[i14].envoltorio); 
                            
                                
                                newDivEnvoltorio.appendChild(newContentEnvoltorio); //añade texto al div creado.  
                                // añade el elemento creado y su contenido al DOM 
                                var currentDivEnvoltorio = document.getElementById("div"); 
                                document.body.insertBefore(newDivEnvoltorio, currentDivEnvoltorio); 

                                
                                 
                            newParentDiv14.appendChild(newDivEnvoltorio); //añadimos cada div a su padre

                             


                }//fin else interno






                
                    // crea un nuevo div 
                                // y añade contenido 
                                var newDiv14 = document.createElement("div"); 
                                //var newContent2 = document.createTextNode("Campo: "+i2);  --DESCOMENTARIAR SI SE QUIERE CONTENEDOR GENERICO



                                newDiv14.setAttribute('class', 'd-sm-flex '); //DIV DE TIPO FLEX 






                                
                            // alert(myJson2.campos[i2].nombreCampo);      --DESCOMENTARIAR SI SE QUIERE VER CADA NOMBRE DE CAMPO EN UN ALERT
                            //asignamos el nombre del campo de acuerdo al contenido del json
                               // var newContent14 = document.createTextNode(myJson14.registros[i14].descripcion); //DESCOMENTAR SI NO SE USA EL ARREGLO ORDENADO
                                var newContent14 = document.createTextNode(arregloOrdenadoJson[i14].descripcion); 
                            
                                
                                newDiv14.appendChild(newContent14); //añade texto al div creado.  
                                // añade el elemento creado y su contenido al DOM 
                                var currentDiv14 = document.getElementById("div"); 
                                document.body.insertBefore(newDiv14, currentDiv14); 
                    
                    
                            //creamos elemento de tipo input
                                var input14 = document.createElement("input");     
                                //establecemos el tipo texto
                                //input2.setAttribute('type', 'text'); --DESCOMENTARIAR SI SE QUIERE UN CONTENEDOR GENERICO DE TIPO TEXT
                    
                                //asignamos el tipo de dato, de acuerdo al json
                                //input14.setAttribute('type', myJson14.registros[i14].tipo);


//VALIDACION DEL CAMPO COMO LISTA DESPLEGABLE
//DEBE CUMPLIR DOS CONDICIONES: QUE EL INPUT TYPE SEA NUMBER Y QUE EL CAMPO "valorPorDefecto" TENGA EL VALOR "listaDesplegable"
//HACEMOS LA VALIDACION ANTES DE AGREGAR EL INPUT TYPE

if((arregloOrdenadoJson[i14].tipo=="NUMBER") && (arregloOrdenadoJson[i14].valorPorDefecto =="listaDesplegable")){
//aumentamos en uno el contador de listas desplegables
contadorListaDesplegable=contadorListaDesplegable+1;
//si se cumplen estas dos condiciones, dibujamos un campo tipo <select> lista desplegable auxiliar,que luego se poblará dinámicamente
var lista14 = document.createElement("select");
//Agregamos nombre y id a la lista teniendo en cuenta el contador, por si llegan a existir muchas listas en el form
lista14.name = "lista"+contadorListaDesplegable;
lista14.id= "lista"+contadorListaDesplegable;
//Agregamos clase al select
lista14.setAttribute('class', 'd-sm-flex');
//Agregamos evento
lista14.setAttribute('onchange', 'correlacionarListaDesplegable()');
}




                                input14.setAttribute('type', arregloOrdenadoJson[i14].tipo);


                           
                                











                                //input2.name = "caja"+i2; --DESCOMENTARIRAR SI SE QUIERE UN NAME GENERICO
                                //input2.id="caja"+i2;   --DESCOMENTARIAR SI SE QUIERE UN ID GENERICO
                    
                                    //asignamos como name e id, la información del nombre del campo proveniente del json
                              //  input14.name = myJson14.registros[i14].nombre; //DESCOMENTARIAR SI NO SE USA EL ARREGLO ORDENADO
                              //  input14.id=myJson14.registros[i14].nombre; //DESCOMENTARIAR SI NO SE USA EL ARREGLO ORDENADO

                                input14.name = arregloOrdenadoJson[i14].nombre;
                                input14.id=arregloOrdenadoJson[i14].nombre;

                                //nombreCampos.push(myJson14.registros[i14].nombre); //añadimos elementos al array nombreCampos
                    
                                //campos en linea
                                //input.setAttribute('class', 'd-sm-inline-flex');
                                input14.setAttribute('class', 'd-sm-flex');

 


//
//ASIGNAMOS EL ORDEN AL FLEX DE ACUERDO AL ORDEN DE GRUPO QUE TENGA EN LA TABLA, SI NO TIENE, NO ASIGNAMOS ORDEN Y SE MUESTRA SEGÚN SE VAYA GENERANDO
//EN LA TABLA ordenGrupo NO PUEDE SER NULO Y TIENE UN VALOR POR DEFECTO DE 10   
//VERIFICAREMOS QUE ORDEN GRUPO SEA DIFERENTE DE 10 PARA PODER TENER EN CUENTA EL ORDEN GRUPO
//ordenGrupo= myJson14.registros[i14].ordenGrupo; //DESCOMENTARIAR SI NO SE USA EL ARREGLO ORDENADO
ordenGrupo= arregloOrdenadoJson[i14].ordenGrupo; 

//validamos que la variable tenga un valor diferente al valor que tiene por defecto
//ordenamiento del flex
if(ordenGrupo != 10){

    console.log("El orden de grupo del elemento es: "+ordenGrupo); 
    claseOrdenGrupo='order-'+ordenGrupo;
    

}




                                //le damos bordes al div
                                    //insertamos función javascript al elemento con el evento onblur, es decir, cuando pierde el foco
                                   // input14.setAttribute('onblur',myJson14.registros[i14].jsEvento); //DESCOMENTARIAR SI NO SE USA EL ARREGLO ORDENADO

                                    input14.setAttribute('onblur',arregloOrdenadoJson[i14].jsEvento);
                    
                    
                               //AÑADIMOS TOOLTIP A LOS CAMPOS INPUT CON EL TOOLTIP QUE SE ENCUENTRE EN LA TABLA CAMPO EXPRESION REGULAR
                               
                               input14.setAttribute('data-toggle','tooltip');
                               input14.setAttribute('data-placement','top');
                               input14.setAttribute('title',tooltip);




                                newDiv14.setAttribute('style','border: thin solid black');
                                //asignamos un color a los div pares y otro a los impares
                                    if(i14%2==0){
                                        //color azul turquesa a los pares
                                        newDiv14.setAttribute('class','p-2 bg-info '+claseOrdenGrupo); //añadimos el orden flex
                                    }
                                    else{
                                        //color amarillo a los impares
                                        newDiv14.setAttribute('class','p-2 bg-secondary '+claseOrdenGrupo);//añadimos el orden flex
                                    }
                    
                                newDiv14.appendChild(input14); //añade la caja de texto al div creado recientemente. 
                            //se crearán tantos div como el número que se haya ingresado en la caja de texto

                            //AGREGAMOS EL CAMPO ESPECIAL AL DIV EN CASO DE EXISTIR LISTAS DESPLEGABLES
                            if((arregloOrdenadoJson[i14].tipo=="NUMBER") && (arregloOrdenadoJson[i14].valorPorDefecto =="listaDesplegable")){
                                newDiv14.appendChild(lista14);
                            }



//AGREGAMOS CADA CONTENIDO A SU ENVOLTORIO, SI Y SOLO SI EL GRUPO ES UN VALOR NUMERICO
//EN LA TABLA LOS GRUPOS SON LETRAS
//if(myJson14.registros[i14].grupo == grupo && !isNaN(grupo)){//DESCOMENTARIRAR SI NO SE USA EL ARREGLO ORDENADO
if(arregloOrdenadoJson[i14].grupo == grupo && !isNaN(grupo)){
    //si hay envoltorio agregamos el div al div envoltorio
    newDivEnvoltorio.appendChild(newDiv14); //añadimos cada div a su envoltorio
}
else{
//si no hay envoltorio agregamos el div al div padre
    newParentDiv14.appendChild(newDiv14); //añadimos cada div a su padre
}

                           




     

}//fin else

          
        }//fin for
    
    //guardamos el valor de la cantidad de listas desplegables del formulario en el web storage
    // Store
localStorage.totalListasDesplegables = contadorListaDesplegable;

//generamos el footer dinamicamente

generaFooter();
    
    
     });//fin function(myJson14)
    
    
     }


/* función que genera el footer dinamicamente*/
function generaFooter(){
    var newFooter= document.createElement("div"); 
    newFooter.setAttribute('class', 'd-sm-flex justify-content-center');

                                    // añade el elemento creado y su contenido al DOM 
                                    var currentDiv = document.getElementById("div"); 
                                    document.body.insertBefore(newFooter, currentDiv); 

    var newImg = document.createElement("img");
    newImg.setAttribute('src', 'img/footer.jpg');
    newImg.setAttribute('class', 'img-fluid');


    newFooter.appendChild(newImg); //añade la caja de img al footer creado recientemente. 

}












      /* funcion que genera cajas de acuerdo a la respuesta json de la BD y a la lista seleccionada*/
      /*
 function leerBDCaja(){

    
    var datoSeleccionadoLista = document.getElementById("datoCaja").value;
    
    document.getElementById("demo").innerHTML = "Eligio : " + datoSeleccionadoLista;


    var datoLeido4=0;
    var datoLeido5=0;//variable para contabilizar la cantidad de elementos en el objeto de la
     //fetch toma como argumento la ruta del recurso que quiere obtener
     //fetch('json/personas.json')  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
     //fetch('http://localhost:8181/api_db/tipoEvento/leer.php') --DESCOMENTARIAR SI SE USA XAMPP CON PUERTO 8181

     var myJsonProcesado =0; //variable para guardar el json procesado
     var myJsonProcesado2 =0; //variable para guardar el json procesado
     var datoLeidoJsonProcesado =0;  //Variable para guardar la seleccion de la lista desplegable
     var idMyJsonProcesado=0;//Variable para guardar el id del primer valor del jsonProcesado
     var idMyJsonProcesado2=0;//Variable para guardar el id del ultimo valor del jsonProcesado
     
     
     fetch('https://vitalsaludem.com/services/api_db/tipoEvento/leerLista.php')
     .then(function(response4) {
         //devuelve un objeto promise conteniendo la respuesta, el objeto response
             //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
         return response4.json();
     })
     .then(function(myJson4) {
       
         //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
       //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
    
            //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
       datoLeido4=Object.keys(myJson4.registros).length; //esto arroja la cantidad de registros TOTAL que tiene el json
       

         //luego de obtener la respuesta  con el contenido del json, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
         console.log(myJson4);
      // console.log('La cantidad de elementos que tiene el json en el objeto "personas" es : '+datoLeido);    ---DESCOMENTARIAR SI SE USA EL JSON PERSONAS
       console.log('La cantidad de elementos que tiene el json en el objeto "registros" es : '+datoLeido4);
       //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
       alert(JSON.stringify(myJson4));
     
       // PROCESO PARA DETERMINAR LA TABLA DESEADA , DE ACUERDO A LA LISTA DESPLEGABLE 
                    myJsonProcesado =myJson4.registros[datoSeleccionadoLista]; 

                    var testigoPrimerDato=0;//variable para encontrar el primer dato que tenga el idTablaEvento
                    var testigoUltimoDato=0;//Variable para encontrar el ultimo dato que tenga el idTablaEvento
                    //ciclo para encontrar los id de los elementos que coinciden con lo seleccionado en la lista desplegable   
                    for(var p4 = 0; p4 < datoLeido4; p4++){
                       
                          if(myJson4.registros[p4].idTablaEvento == datoSeleccionadoLista){
                                //Validamos que sea el primer dato que se encuentra para no usar break
                                if(testigoPrimerDato == 0){

                                    //obtenemos el id del registro que coincide con lo seleccionado en la lista
                                    idMyJsonProcesado=myJson4.registros[p4].id;
                                    //encontramos el indice de dicho id
                                    myJsonProcesado = p4;
                                    
                                    console.log("Este es el id del primer dato que coincide con lo seleccionado en la lista: "+idMyJsonProcesado);
                                    console.log("Este es el indice del ciclo que coincide con lo seleccionado en la lista "+myJsonProcesado);
                                    //cambiamos el valor del testigo para que nunca vuelva a entrar aqui
                                    testigoPrimerDato=1;
                                }//cierre if

                                            
                            
                          }//cierre if

                          //validamos si el idTablaEvento es superior a lo seleccionado en la lista
                          //como la consulta está ordenada de manera ascendente, si el idTablaEvento es superior al seleccionado significa que llegamos al ultimo valor
                          //es decir, ya estamos en un nuevo idTablaEvento
                          if(myJson4.registros[p4].idTablaEvento > datoSeleccionadoLista){
                            //Validamos que sea el primer dato que se encuentra para no usar break
                            if(testigoUltimoDato == 0){

                                //obtenemos el id del registro que coincide con lo seleccionado en la lista
                                idMyJsonProcesado2=myJson4.registros[p4].id;
                                //encontramos el indice de dicho id
                                myJsonProcesado2 = p4;
                                
                                console.log("Este es el id del ultimo dato que coincide con lo seleccionado en la lista (ya no es de la tabla seleccionada): "+idMyJsonProcesado2);
                                console.log("Este es el indice del ciclo que coincide con lo seleccionado en la lista "+myJsonProcesado2);
                                //cambiamos el valor del testigo para que nunca vuelva a entrar aqui
                                testigoUltimoDato=1;
                            }//cierre if

                                        
                        
                      }//cierre if
                          
                        }//cierre for
                      


                    //luego de obtener la respuesta  con el contenido del json processado, lo mostramos en consola. Podemos mostrarlo sin ningún tratamiento ya que la consola permite ver objetos
                    
                    
                            
                    datoLeidoJsonProcesado = Object.keys(myJson4.registros[myJsonProcesado]).length;
                            
                    console.log('La cantidad de elementos que tiene el json procesado en el objeto "registros" en la posicion '+datoSeleccionadoLista+' es : '+datoLeidoJsonProcesado);
                    
                           //stringify convierte el objeto en json para ser visualizado por el alert, o si no  solo se observa object object
                     alert(JSON.stringify(myJson4.registros[myJsonProcesado]));
                     alert('La cantidad de elementos que tiene el json procesado en el objeto "registros" en la posicion  '+datoSeleccionadoLista+' es : '+datoLeidoJsonProcesado);

                     //tenemos que extraer el id del primer elemento de la tabla seleccionada para comenzar a pintar desde ahi. El ordenamiento en la consulta cambia todo
                    
                     console.log('El id del primer valor obtenido de la tabla segun lista desplegable es  '+myJsonProcesado);
                     alert('El id del primer valor obtenido de la tabla segun lista desplegable es  '+idMyJsonProcesado);

                     console.log('El id del ultimo valor obtenido de la tabla segun lista desplegable es  '+myJsonProcesado2);
                     alert('El id del ultimo valor obtenido de la tabla segun lista desplegable es  '+idMyJsonProcesado2);





        // crea un nuevo div 
        // y añade contenido 
        var newParentDiv4 = document.createElement("div"); 
        newParentDiv4.setAttribute('class', 'd-inline-flex flex-wrap');
        // añade el elemento creado y su contenido al DOM 
        var currentDiv4 = document.getElementById("div"); 
        document.body.insertBefore(newParentDiv4, currentDiv4); 
        //el ciclo creará cajas hasta el límite determinado por el datoLeido
        //el for cuando se trabaja con json si comienza en cero, a diferencia del otro dato que se ingresaba por teclado, donde debia comenzar en uno, ademas la comparación ya no es menor o igual, es solo menor
               
       // for(var i4=0; i4<datoLeido4;i4++){ //DESCOMENTARIAR SI SE QUIEREN PINTAR TODOS LOS CAJONES i=O


        //LOS LIMITES DE ESTE CICLO SON EL idTablaEvento y el lenght obtenido  de ese registro
                        var limiteInferior = parseInt(myJsonProcesado);
                        console.log('El limite inferior del ciclo es '+limiteInferior);
                        var limiteSuperior =  parseInt(myJsonProcesado2)
                        console.log('El limite superior del ciclo es '+limiteSuperior);



                        console.log('El primer elemento del objeto completo segun el id de la lista es: ');
                        console.log(myJson4.registros[limiteInferior]);
                        console.log('El ultimo elemento del objeto completo segun el id de la lista es: ');
                        console.log(myJson4.registros[limiteSuperior]);

//no lo hacemos menor o igual al limite superior, pues el limite superior ya es parte de otra tabla
                    for(var i4=limiteInferior; i4<limiteSuperior;i4++){
            // crea un nuevo div 
                // y añade contenido 
                var newDiv4 = document.createElement("div"); 
                //var newContent2 = document.createTextNode("Campo: "+i2);  --DESCOMENTARIAR SI SE QUIERE CONTENEDOR GENERICO
                
               // alert(myJson2.campos[i2].nombreCampo);      --DESCOMENTARIAR SI SE QUIERE VER CADA NOMBRE DE CAMPO EN UN ALERT
               //asignamos el nombre del campo de acuerdo al contenido del json
                var newContent4 = document.createTextNode(myJson4.registros[i4].nombre); 
            
                
                newDiv4.appendChild(newContent4); //añade texto al div creado.  
                // añade el elemento creado y su contenido al DOM 
                var currentDiv4 = document.getElementById("div"); 
                document.body.insertBefore(newDiv4, currentDiv4); 
    
    
            //creamos elemento de tipo input
                var input4 = document.createElement("input");     
                //establecemos el tipo texto
                //input2.setAttribute('type', 'text'); --DESCOMENTARIAR SI SE QUIERE UN CONTENEDOR GENERICO DE TIPO TEXT
    
                //asignamos el tipo de dato, de acuerdo al json
                input4.setAttribute('type', myJson4.registros[i4].tipo);
                //input2.name = "caja"+i2; --DESCOMENTARIRAR SI SE QUIERE UN NAME GENERICO
                //input2.id="caja"+i2;   --DESCOMENTARIAR SI SE QUIERE UN ID GENERICO
    
                    //asignamos como name e id, la información del nombre del campo proveniente del json
                input4.name = myJson4.registros[i4].nombre;
                input4.id=myJson4.registros[i4].nombre;
    
                //campos en linea
                //input.setAttribute('class', 'd-sm-inline-flex');
                input4.setAttribute('class', 'd-sm-flex');
                //le damos bordes al div
                    //insertamos función javascript al elemento con el evento onblur, es decir, cuando pierde el foco
                    input4.setAttribute('onblur',myJson4.registros[i4].jsEvento);
    
    
                newDiv4.setAttribute('style','border: thin solid black');
                //asignamos un color a los div pares y otro a los impares
                    if(i4%2==0){
                        //color azul turquesa a los pares
                        newDiv4.setAttribute('class','p-2 bg-light');
                    }
                    else{
                        //color amarillo a los impares
                        newDiv4.setAttribute('class','p-2 bg-secondary');
                    }
    
                newDiv4.appendChild(input4); //añade la caja de texto al div creado recientemente. 
            //se crearán tantos div como el número que se haya ingresado en la caja de texto
            newParentDiv4.appendChild(newDiv4); //añadimos cada div a su padre
        }
    
    
    
    
     });
    
    
     }




 */  

 
 /*
     function obtenerDatosBasicosSinAxios(){

let http = new XMLHttpRequest();
http.open("POST", 'http://tudireccion.com', true);
http.setRequestHeader('Content-type', 'text/html; charset=UTF-8');
http.onreadystatechange = function() {
    if (http.readyState == 4) {
        if (http.status == 200)
            OkCallback(JSON.parse(http.responseText));
        else
            ErrorCallback(http);
    }
};
http.onerror = OkCallback;
http.send(text);
     }


     function obtenerCredenciales(){

        //parametros de autenticacion
        var params = {
            "Username":"andressvx", 
            "Password":"Iconoi.2019"
          }

        let http = new XMLHttpRequest();
        http.open("POST", 'http://10.10.100.13/apiSivigilaCRUD/api/login/authenticate', true);
        //cabeceras de la petición
        http.setRequestHeader('Access-Control-Allow-Origin','*');//permitimos origenes cruzados
        http.setRequestHeader('Content-type', 'application/json');
        
        http.onreadystatechange = function() {
            if (http.readyState == 4) {
                if (http.status == 200)
                    alert(JSON.parse(http.responseText));
                else
                    alert("no hubo status server 200 Ok");
            }
        };
        http.onerror = function () {
            console.log("Un error ha ocurrido en la transacción");
            alert("Un error ha ocurrido en la transacción");
          };
        http.send(JSON.stringify(params));

     }



*/


/*
     function obtenerCredencialesFetch(){
/*
        var myBody = {
            "Username":"andressvx", 
            "Password":"Iconoi.2019"
          }

          */

          /*
        const userAction = async () => {
            const response = await fetch('http://10.10.100.13/apiSivigilaCRUD/api/login/authenticate', {
              method: 'POST',
              body: myBody, // string or object
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const myJson = await response.json(); //extract JSON from the http response
            
            // do something with myJson
            console.log(myJson);
            alert(JSON.parse(myJson));
          }

*/

/*
//mis cabeceras
var myHeaders = new Headers();
//myHeaders.set("Content-Type", "application/json");

myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append('Access-Control-Allow-Methods','POST');
myHeaders.append('Access-Control-Allow-Headers','*');
myHeaders.append("Host", "10.10.100.13");
//myHeaders.append("Origin","http://corpohumboldt.edu.co");
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");


//mi body
var myBody={"Username":"andressvx", "Password":"Iconoi.2019"};

//mi parametro de inicialización del fetch
var myInit = {method: 'POST',
                headers: myHeaders,
               body:JSON.stringify(myBody), //los datos pueden ser string u object
               mode: 'cors', //en mode: 'no-cors' el navegador está limitado a enviar 'simple-request' y su  Content-Type cuyos valores sean ( application/x-www-form-urlencoded, multipart/form-data, text/plain )
               cache: 'no-cache' };
 
               //creamos objeto de petición para verificar cabeceras
               var myRequest = new Request('http://10.10.100.13/apiSivigilaCRUD/api/login/authenticate',myInit);
               var myContentType = myRequest.headers.get('Content-Type');
     fetch('http://10.10.100.13/apiSivigilaCRUD/api/login/authenticate',myInit)
     .then(function(response6) {
         //devuelve un objeto promise conteniendo la respuesta, el objeto response

         //Una petición promise fetch() será rechazada con TypeError cuando se encuentre un error de red, aunque esto normalmente significa problemas de permisos o similares — por ejemplo, un 404 no constituye un error de red.
         //solo verifica si hay error de red,o similar. Si contesta con error de CORS si hay respuesta
         if (!response6.ok) { //si no hay respuesta 
             console.log("La respuesta no fue satisfactoria");
            console.log("HTTP status " + response6.status);
            console.log("Contenido de respuesta: "+JSON.stringify(response6)); // mostramos el estado
          
           console.log("La cabecera solicitada de contenido fue: "+myContentType);
          
         }else{
             //response es una respuesta http y no el archivo json, por tanto, usamos el método json() para extraer el contenido
             return response6.json();
         }


     })
     .then(function(myJson6) {

        if (myJson6 == null || myJson6==undefined) {

            console.log("El Json no tiene contenido");

            }else{
       
         //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
       //datoLeido=Object.keys(myJson2.personas).length ;  --DESCOMENTARIAR SI SE USA EL JSON PERSONAS
    
            //contamos la cantidad de elementos que tiene el json en el objeto "registros" y lo guardamos en datoLeido
         //si no especificamos el objeto, el json solamente tiene un elemento, es decir, solamente tiene el objeto registros
         datoLeido6=Object.keys(myJson6).length; //est
         console.log("este es el contenido del json "+datoLeido6);
         alert(datoLeido6);

            }
         
    })
    .catch(function(error) //este solo sera rechazado ante un fallo de red o si algo impidió completar la solicitud.  Pruebe quitando el mode:'no-cors' para verificar
    {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        console.log("La cabecera solicitada de contenido fue: "+myContentType);

    }) ;
     

*/