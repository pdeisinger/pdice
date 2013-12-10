$(document).ready(function(){
	var selected;
	var leftOriginal;
	var leftOffset;
	var origin;
	var chars = new Array();
	
	$('.boxy').each(function(i) {
		chars.push(this);
	});
	for (var j = 0; j < chars.length; j++) {
		chars[j].moved = false;
		origin = parseInt($(chars[j]).css("left"), 10)
		chars[j].originalSpot = origin;
		chars[j].newSpot = origin + 200; 
		console.log($(chars[j]).attr('id'));
	}	
	
	$(document.body).on("mouseenter", ".boxy", function(e) {
		for (var i = (jQuery.inArray(this, chars) + 1); i < chars.length; i++) {
			$(chars[i]).animate({ 
				"left" : chars[i].newSpot + "px"
			},  {
				duration: 500, 
				specialEasing: {}, 
				complete: function() {
					// console.log("entering:")
					// 					console.log($(this).attr('id'));
				}
			});
		}
	});
	$(document.body).on("mouseleave", ".boxy", function(e) {
		for (var i = (jQuery.inArray(this, chars) + 1); i < chars.length; i++) {
			$(chars[i]).animate({ 
				"left" : chars[i].originalSpot + "px"
			},  {
				duration: 500, 
				specialEasing: {}, 
				complete: function() {
					// console.log("leaving");
					// 					console.log($(this).attr('id'));
				}
			});
		}
	});
	
	
});