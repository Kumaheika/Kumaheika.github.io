$(document).ready(function(){
	//Top
	$('.top').click(function(){
		goTag('html,body');
	});
	//關於我
	$(".btn-aboutMe").click(function () {
		goTag('.aboutMe');
    });
    //設計作品
    $(".btn-linkpage").click(function () {
    	goTag('.linkpage');
    });
    //卷軸超過N Top fadeIn()
	$(window).scroll(function(){
		if( $(this).scrollTop() > 400 ){
			$('.top').stop(true).fadeIn('fast');
		} else {
			$('.top').stop(true).fadeOut('fast');
		}
	});
	//手機模式 收放Menu
	$('.nav-icon').click(function(){
		$('ul.navbar').toggleClass('nav-icon-show');
	});
	//平滑位移
	function goTag($classTag){
		var position01 = $($classTag).offset();
		var y01 = position01.top;
		$("html,body").animate({
            scrollTop: y01
        }, 400);
	};
});