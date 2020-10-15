$(function() {
	var goPage;
	var topPos;
	
	$("nav a").click(function(e) {
		e.preventDefault();
		goPage = $(this).attr("href");
		//console.log(goPage);
		topPos = $(goPage).offset().top;
		//console.log(topPos);
		$("html, body").stop().animate({scrollTop: topPos}, 800);
	});
	
	$(window).scroll(function() {
		var t = $(this).scrollTop();
		if (t > 45) {
			$(".fixedNav").addClass("show");
			$("nav a").removeClass("on");
			
			
			
			
			if(t < $("#area2").offset().top) {
					$(".nav li").eq(0).find("a").addClass("on");
					$(".fixedNav li").eq(0).find("a").addClass("on");
				} else if (t < $("#area3").offset().top) {
					$(".nav li").eq(1).find("a").addClass("on");
					$(".fixedNav li").eq(1).find("a").addClass("on");
				} else if (t < $("#area4").offset().top) {
					$(".nav li").eq(2).find("a").addClass("on");
					$(".fixedNav li").eq(2).find("a").addClass("on");
				} else if (t < $("#area5").offset().top) {
					$(".nav li").eq(3).find("a").addClass("on");
					$(".fixedNav li").eq(3).find("a").addClass("on");
				} else {
					$(".nav li").eq(4).find("a").addClass("on");
					$(".fixedNav li").eq(4).find("a").addClass("on");
						$("nav a").removeClass("on");
				}
		} else {
			$(".fixedNav").removeClass("show");
		}
	});
});