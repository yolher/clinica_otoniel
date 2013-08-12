$(document).ready(function(){
	$("#container").css("overflow", "hidden");
	
	$("a#controlLeft").click(function(e){
		e.preventDefault();
		$("#content").fadeOut(100);
		$("section#right").transition({x: -1290},500,'snap');
	});	

	$("a#controlRight").click(function(e){
		e.preventDefault();		
		$("section#right").transition({x: 0},500,'snap');
		$("#content").fadeIn(100);
	});
	


});