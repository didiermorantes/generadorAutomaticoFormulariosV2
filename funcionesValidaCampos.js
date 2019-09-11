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