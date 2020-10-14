$(function() {
	var distance = new Array(0, 600, 1200, 1800);
	$(".gallery").text(distance.join(", "));
	
	$(".prev").click(function(e){
		e.preventDefault();
		var arrayData = distance.pop();
		// console.log("arrayData : " + arrayData);
		// $(".gallery").text(distance.join(", "));
		distance.unshift(arrayData);
		$(".gallery").text(distance.join(", "));
	});
	$(".next").click(function(e){
		e.preventDefault();
		var arrayData = distance.shift();
		// console.log("arrayData : " + arrayData);
		// $(".gallery").text(distance.join(", "));
		distance.push(arrayData);
		$(".gallery").text(distance.join(", "));
	});
});