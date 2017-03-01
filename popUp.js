/**
 * Created by franklyn on 06/05/16.
 */

jQuery(document).ready(function ($){

    (function($){
        $.fn.showPopup = function (opciones){
            var configuración = $.extend({
                width: 0,
                height: 0,
                url: document.URL,
                nombre: 'miVentana'
            }, opciones);
            return this.each(function (){
                $(this).click(function (e){
                    // se evita cualquier accion del enlace
                    e.preventDefault();

                    var widthVentana = 0;
                    var heigthVentana = 0;
                    var posLeft = 0;
                    var target = '_blank';
                    var error = 0;
                    var msj = "Error\n==========================\n";



                    // capturar el ancho y alto del monitor
                    widthMonitor 	= parseInt(screen.width);
                    heigthMonitor 	= parseInt(screen.height);

                    /*
                     * verificar si el ancho del monitor es mayor
                     * al del tamaño del contenedor de la aplicacion
                     */
                    if (widthMonitor > 1000) {

                        // si es mayor entonces se iguala al tamaño del contenedor
                        widthVentana = 1000;
                    }else{

                        // si es manor entonces se iguala al tamaño del monitor
                        widthVentana = widthMonitor;
                    }

                    // verificar si el alto del monitor es mayor al especificado
                    if (heigthMonitor > 800) {

                        // establecer el alto de la ventana en el establecido
                        heigthVentana = 800;
                    }else{

                        // establecer el alto de la ventana al del monitor
                        heigthVentana = heigthMonitor;
                    }

                    // si se envia un ancho especifico se asigna
                    if (configuración.width !== 0){
                        if (isNaN(configuración.width)){
                            error=1;
                            msj+="\n * El valor del ancho de la ventana debe ser un numero entero.";
                        }else if(configuración.width < 50){
                            error=1;
                            msj+="\n * El valor del ancho de la ventana debe ser mayor a 50 pixeles.";
                        }else{
                            widthVentana = configuración.width;
                        }
                    }

                    // si se envia un alto especifico se asigna
                    if (configuración.height !== 0){
                        if (isNaN(configuración.height)){
                            error=1;
                            msj+="\n * El valor del ancho de la ventana debe ser un numero entero.";
                        }else if(configuración.height < 50){
                            error=1;
                            msj+="\n * El valor del ancho de la ventana debe ser mayor a 50 pixeles.";
                        }else{
                            heigthVentana = configuración.height;
                        }
                    }

                    // sacar la posicion que van a  tener las ventanas
                    if (widthMonitor > 1000) {

                        // se calcula la posicion izquierda para que la ventana aparezca centrada
                        posLeft = parseInt((widthMonitor / 2) - (widthVentana / 2));
                    }

                    // verificar si no hay ningun error
                    if (!error > 0){
                        //alert(configuración.url);
                        // crear la ventana emergente que se mostrara
                        var newPopUp = window.open(configuración.url, target, 'width='+widthVentana+'px, height='+heigthVentana+'px,left='+posLeft+'px, top=0px, scrollbars=yes, addressbar=0, menubar=0, toolbar=0');
                        // verificar si no esta bloqueado las ventanas emergentes
                        //if (newPopUp == null || typeof(newPopUp)=='undefined') {
                        //    error=1;
                        //    msj+="\n * Verifica que no esten otras ventanas emergentes abiertas, actualiza el navegador o favor deshabilita el bloqueador de ventanas emergentes y vuelve a realizar la operación.";
                        //}else {
                        //    newPopUp.focus();
                        //}
                    }
                    if (error > 0){
                        alert(msj);
                    }
                });
            });
        }
    })(jQuery);

    (function ($){
        $.fn.hidePopup = function (){
            return this.each(function (){
                $(this).click(function (){
                    if (newPopUp !== undefined){
                        newPopUp.close();
                    }else{
                        window.close();
                    }
                });
            });
        }
    })(jQuery);
});
/**
 * Ejemplo de uso */
/*
* $('a').showPopup({url, ''})*/