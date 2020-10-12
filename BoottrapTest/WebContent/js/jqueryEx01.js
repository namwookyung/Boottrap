//$(function(){
//	$("ul > li").hover(function(){
//		$(this).find("ul").stop().slideDown();
//		$(this).children("a").addClass("on");
//	}, function(){
//		$(this).find("ul").stop().slideUp();
//		$(this).children("a").removeClass("on");
//	});
//});

$(function(){
	var heightArray=new Array();
	$("nav ul ul").css({display:"none"});
	$("nav > ul > li").each(function(){heightArray.push($(this).find("ul").height());});
	console.log(heightArray.join(", "));	//228, 114, 266, 190
	$("nav > ul > li").hover(
		function(){
			var n=$(this).index();
			$(this).find("ul").css({display:"block", height:"0px"}).stop()
			.animate({height:heightArray[n]+"px"}, 300);
			$(this).find("a:first").addClass("on");
		},
		function(){
			$(this).find("ul").stop()
			.animate({height:"0px"}, 300,
				function(){$(this).css({display:"none"});}
				);
				$(this).find("a:first").removeClass("on");
		}
	);
});