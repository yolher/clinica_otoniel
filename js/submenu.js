$(document).ready(function(){
	
	//Escondemos los submenus cuando el archivo se carga
	$('nav ul li.menu ul').hide();
	
	
	//Cuando el usuario se coloque encima de un elemento del menu
	$('nav ul li.menu').hover(
			//Funcion Hover
			function(){
				//Escondemos otros menus
				$('nav ul li.menu').not($('ul', this)).stop();
	
	
				// Mostramos el menú que corresponde
				$('ul', this).slideDown('fast');
			},
			//OnOut
			function(){
				// Hide Other Menus
				$('ul', this).slideUp('fast');
			}
	);

});
