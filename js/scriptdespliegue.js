$(document).ready(function(){

//==================== efecto despliegue de servicios

var cantidad = $("#contenedor > article").length;

for (i=1; i<=cantidad;i++) {		
		$(".descripcion"+i).css("display","none");
}
	$("a.control").toggle(function(e){
		e.preventDefault();
		var num = $(this).attr('id');
		$(this).html("<img src='../images/down2.png'>");
		$(".descripcion"+num).slideDown("fast");		
	},function(e){
		e.preventDefault();
		var num = $(this).attr('id');
		$(this).html("<img src='../images/down.png'>");
		$(".descripcion"+num).slideUp("fast");
	});


	});