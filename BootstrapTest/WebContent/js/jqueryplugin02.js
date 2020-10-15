$(function() {
	var images = [
		"images/picture1.jpg",
		"images/picture2.jpg",
		"images/picture3.jpg",
		"images/picture4.jpg",
		"images/picture5.jpg"
	];
	
	var clickCnt = 0;
	
	$("#imgDel").click(function() {
		clickCnt = 0;
		$(".picture").empty();
	});
	
	$("#imgAdd").click(function() {
		for (var i = images.length * clickCnt++; i < images.length * clickCnt; i++) {
			$(".picture").append("<div><img src='" + images[i % images.length] + "'/></div>");
		}
		var addImg = (clickCnt - 1) == 0 ? "" : (":gt(" + (images.length * (clickCnt - 1) - 1)) + ")";
		$(".picture > div" + addImg).each(function() {
			var thisImg = $(this);	//추가
			thisImg.imagesLoaded()	//수정
				.always(function(){
					console.log("always");
				})
				.done(function(){
					console.log("done");
					thisImg.find(".loader").hide();	//추가
				})
				.fail(function(){
					console.log("fail");
					thisImg.hide();	//추가
				})
				.progress(function(){
					console.log("progress");
					thisImg.prepend("<div class='loader'>Loading...</div>");	//추가
				});
		});
	});
});