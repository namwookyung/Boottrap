$(function() {
	var moving =  false;
	
	$(".next").click(function(e) {
		e.preventDefault();
		// $(".gallery").append($(".gallery li:first"));
		// $(".gallery").append($(".gallery li:first").clone());
		
		// $(".gallery li:first").clone().appendTo(".gallery");
		// $(".gallery li:first").remove();
		
		if(!moving) {
			moving = true;
			$(".gallery li:first").clone().appendTo(".gallery");
			$(".gallery").stop().animate({left:"-=90px"}, 600, function() {
				moving = false;
				$(".gallery").css({left:"+=90px"});
				$(".gallery li:first").remove();
			});
		}
	});

	$(".prev").click(function(e){
		e.preventDefault();
		if(!moving) {
			moving = true;
			$(".gallery li:last").clone().prependTo(".gallery");
			// $(".gallery").css({left:"-=90px"});
			$(".gallery").stop().animate({left:"-=90px"}, 0);
			$(".gallery").stop().animate({left:"+=90px"}, 400, function() {
				moving = false;
				$(".gallery li:last").remove();
				});
			}
		});
	});