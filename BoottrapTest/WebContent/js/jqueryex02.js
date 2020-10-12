$(function(){
	var isOnMenu = true;
	$(".menuBtn").click(function(){
		if(isOnMenu == false){
			isOnMenu = true;
			$(this).find("span").stop(false, true);
			$(this).find("span").removeClass("menuBtnOn");
			$("nav").removeClass("navOn");
			$(".overlay").css({"width":"0", "height":"0"});
		} else {
			isOnMenu = false;
			$(this).find("span").stop(false, true);
			$(this).find("span").addClass("menuBtnOn");
			$("nav").addClass("navOn");
			$(".overlay").css({"width":"100%", "height":"100%"});
		}
	});
	$(".overlay").click(function(){
		$(".menuBtn").trigger("click");
	});
});