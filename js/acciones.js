// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btnjugar').on('tap', function(){
		var pantalla = $.mobile.getScreenHeight();
		var encabezado = $('.ui-header').outerHeight();
		var pie = $('.ui-footer').outerHeight();
		var contenido = $('ui.content').outerHeight();
		var alto = (pantalla - encabezado - pie)/2;
		$('.cuadro').height(alto);
		});//btnjugar.click
		
		$('.cuadro').on('vmousedown', function(){
			$(this).addClass('pulsado');
			});//mousedown
		
		function quien (q)
	{
		return q.substring(1);
	}	
		
		$('.cuadro').on('vmouseup', function (){
			$('#pantalla').append(quien($(this).attr('id')));
			$(this).removeClass('pulsado');
		});
		
	audio=window.plugins.LowLatencyAudio;
	
	audio.prexloadfx('B1','audio/c.mp3',function(){}, function(msg) {alert("error" + msg);});
	
	audio.prexloadfx('B2','audio/c.mp3',function(){}, function(msg) {alert("error" + msg);});
	
	audio.prexloadfx('B3','audio/c.mp3',function(){}, function(msg) {alert("error" + msg);});
	
	audio.prexloadfx('B4','audio/c.mp3',function(){}, function(msg) {alert("error" + msg);});
	
	function quien (q)
	{
		audio.play(q);
		
		return q.substring(1);
	}
	
//}); 
});


