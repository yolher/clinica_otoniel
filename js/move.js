$(document).ready(function($){
    var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
    console.log(ventana_ancho);console.log(ventana_alto);
    $(".patron").css("min-height", ventana_alto-110);
    $(".patron").css("width", ventana_ancho);


});