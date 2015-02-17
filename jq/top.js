$(document).ready(function(){
	$('.top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		},400);
	});
	$('.nav-icon').click(function(){
		$('ul.navbar').toggleClass('nav-icon-show');
	});
});