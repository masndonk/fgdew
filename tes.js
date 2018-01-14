$(document).ready(function() {
	var linkpub = 'http://bit.ly/2EzwQAi';
	var count = 0;
	// Tiempo respuesta
	var tmres = 2500;
	// Duración vieo
	var duracion = '4:45';
	// Sonido
	var sonido = true;
	if(sonido){
		$('<audio id="noti"><source src="noti.mp3" type="audio/mpeg"></audio>').appendTo('body');
		notisi = $('#noti')[0];
		notisi.play();
	}
	// Hora
	var dt = new Date();
	var min = dt.getMinutes();
	if(min<10){min='0'+min;}else{min=min+'';}
	var hora = dt.getHours()+':'+min;
	// Random Facebook
	var rdface = Math.floor(Math.random()*1999999999)+999999999;
	$('.randface').html(rdface);
	$('.linkface').attr('href',linkpub);
	$('#chat h3').html(hora);
	$('h1').html(nomwsp);
	$('#avatarimg').attr('title',nomwsp);
	$('#chat').append('<p class="ella"><span class="imge"></span>'+msj1+'</p>');
	$('#chat p span.imge,#perfil .info #imginfo').attr('style',avimgpr);
	document.title=nomwsp+' new message';
});
