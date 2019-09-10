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


 /* funcion que genera cajas de acuerdo al json leido */
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



 
 /* funcion que genera cajas de acuerdo a la respuesta json de la BD */
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


     
 
 /* funcion que genera cajas de acuerdo a la respuesta json de la BD y a la lista seleccionada*/
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
     
       /* PROCESO PARA DETERMINAR LA TABLA DESEADA , DE ACUERDO A LA LISTA DESPLEGABLE */
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
     
     
     fetch('https://vitalsaludem.com/services/api_db/tipoEvento/leerLista.php')
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
        newParentDiv14.setAttribute('class', 'd-inline-flex flex-wrap');
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

//no lo hacemos menor o igual al limite superior, pues el limite superior ya es parte de otra tabla
                    for(var i14=limiteInferior10; i14<limiteSuperior10;i14++){

//ANTES DE CREAR EL DIV VERIFICAMOS SI EL CAMPO ES EDITABLE PARA VISUALIZARLO O NO

let testigo=myJson14.registros[i14].editable;
let nombreTestigo = myJson14.registros[i14].descripcion;
//al parecer el testigo retorna un caracter vacio (espacio) cuando es falso
//evaluamos por el caracter Unicode ya que otras validaciones fallaron
//validamos la posición(0) de testigo (El primer  bit)
if(testigo.charCodeAt(0) == 0){

    //no hacemos nada, y por tanto no se pintará
console.log('El valor del campo editable  para '+nombreTestigo+ ' es: ' + testigo);
}
else
{
    console.log('El tipo de datos del testigo es '+testigo.charCodeAt(0));
    console.log('El valor del campo editable  para '+nombreTestigo+ ' es: ' + testigo);
      // crea un nuevo div 
                // y añade contenido 
                var newDiv14 = document.createElement("div"); 
                //var newContent2 = document.createTextNode("Campo: "+i2);  --DESCOMENTARIAR SI SE QUIERE CONTENEDOR GENERICO
                
               // alert(myJson2.campos[i2].nombreCampo);      --DESCOMENTARIAR SI SE QUIERE VER CADA NOMBRE DE CAMPO EN UN ALERT
               //asignamos el nombre del campo de acuerdo al contenido del json
                var newContent14 = document.createTextNode(myJson14.registros[i14].descripcion); 
            
                
                newDiv14.appendChild(newContent14); //añade texto al div creado.  
                // añade el elemento creado y su contenido al DOM 
                var currentDiv14 = document.getElementById("div"); 
                document.body.insertBefore(newDiv14, currentDiv14); 
    
    
            //creamos elemento de tipo input
                var input14 = document.createElement("input");     
                //establecemos el tipo texto
                //input2.setAttribute('type', 'text'); --DESCOMENTARIAR SI SE QUIERE UN CONTENEDOR GENERICO DE TIPO TEXT
    
                //asignamos el tipo de dato, de acuerdo al json
                input14.setAttribute('type', myJson14.registros[i14].tipo);
                //input2.name = "caja"+i2; --DESCOMENTARIRAR SI SE QUIERE UN NAME GENERICO
                //input2.id="caja"+i2;   --DESCOMENTARIAR SI SE QUIERE UN ID GENERICO
    
                    //asignamos como name e id, la información del nombre del campo proveniente del json
                input14.name = myJson14.registros[i14].nombre;
                input14.id=myJson14.registros[i14].nombre;
    
                //campos en linea
                //input.setAttribute('class', 'd-sm-inline-flex');
                input14.setAttribute('class', 'd-sm-flex');
                //le damos bordes al div
                    //insertamos función javascript al elemento con el evento onblur, es decir, cuando pierde el foco
                    input14.setAttribute('onblur',myJson14.registros[i14].jsEvento);
    
    
                newDiv14.setAttribute('style','border: thin solid black');
                //asignamos un color a los div pares y otro a los impares
                    if(i14%2==0){
                        //color azul turquesa a los pares
                        newDiv14.setAttribute('class','p-2 bg-light');
                    }
                    else{
                        //color amarillo a los impares
                        newDiv14.setAttribute('class','p-2 bg-secondary');
                    }
    
                newDiv14.appendChild(input14); //añade la caja de texto al div creado recientemente. 
            //se crearán tantos div como el número que se haya ingresado en la caja de texto
            newParentDiv14.appendChild(newDiv14); //añadimos cada div a su padre


}//fin else

          
        }//fin for
    
    
    
    
     });
    
    
     }
















      /* funcion que genera cajas de acuerdo a la respuesta json de la BD y a la lista seleccionada*/
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
     
       /* PROCESO PARA DETERMINAR LA TABLA DESEADA , DE ACUERDO A LA LISTA DESPLEGABLE */
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
     

     }