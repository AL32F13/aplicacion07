// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	 
	 var basedatos=window.sqlitePlugin.openDataBase({name: "coloresBD.db", createFromLocation:1});
	 
	audio=window.plugins.LowLatencyAudio;
	
	audio.preloadFX('B1','audio/C.mp3',function(){}, function(msg) {alert("error" + msg);});
	
	audio.preloadFX('B2','audio/D.mp3',function(){}, function(msg) {alert("error" + msg);});
	
	audio.preloadFX('B3','audio/E.mp3',function(){}, function(msg) {alert("error" + msg);});
	
	audio.preloadFX('B4','audio/F.mp3',function(){}, function(msg) {alert("error" + msg);});
	
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
		
	
	
	function quien (q)
	{
		audio.play(q);
		
		return q.substring(1);
	}
	
}); 
});


