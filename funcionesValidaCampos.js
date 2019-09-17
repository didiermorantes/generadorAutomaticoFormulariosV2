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

    let prices = {"apple":[{value:3,desc:"Apple 1kg 3&euro;"},{value:5,desc:"Apple 2kg 5&euro;"},{value:7,desc:"Apple 3kg 7&euro;"}],
    "banana":[{value:3,desc:"Banana 2kg 3.5&euro;"},{value:5,desc:"Banana 4kg 7&euro;"},{value:7,desc:"Banana 5kg 11&euro;"}],
    "peach":[{value:3,desc:"Peach 1.5kg 3&euro;"},{value:5,desc:"Peach 3kg 6&euro;"},{value:7,desc:"Peach 4kg 7&euro;"}]};


 
       // miListaTipoCancerMenor18_1= document.getElementById('lista1');

        document.getElementsByName('TIPO_CANCE')[0].addEventListener('change', function(e) {  
            let options = "";
            for(obj of prices[this.value]) {
                options += '<option value="' +obj.value +'">' +obj.desc +'</option>';
            }
            document.getElementsByName('lista1')[0].innerHTML = options;
            },false);






   

}