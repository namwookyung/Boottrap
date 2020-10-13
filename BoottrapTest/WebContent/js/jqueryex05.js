$(function(){
	var num = 0;
	var $move = $(".photoList > ul > li");
	
	$move.eq(num).find("a").addClass("on");
	
	function listUp(){
		if($(".photoList > ul").queue().length > 0) return;
		if(num > 0) {
			num--;
			$move.find("a").removeClass("on");
			$move.eq(num).find("a").addClass("on");
			$(".picture > img").attr("src", "images/picture" + (num + 1) + ".jpg")
				.css({opacity:0}).animate({opacity:1}, 300);
			if(num > 0 && num < $move.length -2) {
				$(".photoList > ul").animate({"top":"+=51px"});
			}
		} else {
			return;
		}
	}
	
	function listDown() {
		if($(".photoList > ul").queue().length > 0) return;
		if(num < $move.length - 1) {
			num++;
			$move.find("a").removeClass("on");
			$move.eq(num).find("a").addClass("on");
			$(".picture > img").attr("src", "images/picture" + (num + 1) + ".jpg")
				.css({opacity:0}).animate({opacity:1}, 300);
			if(num > 1 && num < $move.length -1) {
				$(".photoList > ul").animate({"top":"-=51px"});
			}
		} else {
			return;
		}
	}
		
		$(".up").click(function() {listUp();});
		$(".down").click(function() {listDown();});
		
		$(".control").on("mousewheel DOMMouseScroll", function(e){
			if(e.originalEvent.wheelDelta == 120 || e.originalEvent.detail == -3) {
				listUp();
			} else if (e.originalEvent.wheelDelta == -120 || e.originalEvent.detail == 3) {
				listDown();
			}
		});
});