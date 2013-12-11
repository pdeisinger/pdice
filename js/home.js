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
	
	// $(document.body).on("mouseenter", ".boxy", function(e) {
	// 		$(this).children().animate({
	// 			"font-size": "100%"
	// 		}, {
	// 			duration: 500, 
	// 			specialEasing: {}, 
	// 			complete: function() {
	// 			}
	// 		});	
	// 	});
	// 	$(document.body).on("mouseleave", ".boxy", function(e) {
	// 		$(this).children().animate({
	// 			"font-size": "100%"
	// 		}, {
	// 			duration: 500, 
	// 			specialEasing: {}, 
	// 			complete: function() {
	// 			}
	// 		});	
	// 	});
	///eughghghghgh
	$(document.body).on("mouseenter", ".boxy", function(e) {
		for (var i = 0; i < (jQuery.inArray(this, chars) + 1); i++) {
			$(chars[i]).animate({ 
				"left" : chars[i].originalSpot + "px"
			},  {
				duration: 250, 
				specialEasing:{},
				complete: function() {
					// console.log("entering:")
					// 					console.log($(this).attr('id'));
				}
			});
		}
		for (var i = (jQuery.inArray(this, chars) + 1); i < chars.length; i++) {
			//if (chars[i].moved === false) {
				$(chars[i]).animate({ 
					"left" : chars[i].newSpot + "px"
				},  {
					duration: 250, 
					specialEasing: {
					}, 
					complete: function() {
						
					}
				});
				chars[i].moved = true;
			//}
		}
	});
	$(document.body).on("mouseleave", "#container", function(e) {
		for (var i = 0; i < chars.length; i++) {
			$(chars[i]).animate({ 
				"left" : chars[i].originalSpot + "px"
			},  {
				duration: 500, 
				specialEasing: {}, 
				complete: function() {
					// console.log("entering:")
					// 					console.log($(this).attr('id'));
				}
			});
			chars[i].moved = false;
		}
	});
	// $(document.body).on("mouseleave", ".boxy", function(e) {
	// 		
	// 		leaveChar = parseInt($(this).attr("id").substring(5), 10);
	// 		console.log("leaveChar = " + leaveChar);
	// 		if (leaveChar === enterChar)
	// 		{
	// 			$(this).animate({ 
	// 				"left" : this.originalSpot + "px"
	// 			},  {
	// 				duration: 500, 
	// 				specialEasing: {}, 
	// 				complete: function() {
	// 					// console.log("leaving");
	// 					// 					console.log($(this).attr('id'));
	// 				}
	// 			});
	// 		}
	// 		else {
	// 			for (var i = (jQuery.inArray(this, chars) + 1); i < chars.length; i++) {
	// 
	// 				$(chars[i]).animate({ 
	// 					"left" : chars[i].originalSpot + "px"
	// 				},  {
	// 					duration: 500, 
	// 					specialEasing: {}, 
	// 					complete: function() {
	// 						// console.log("leaving");
	// 						// 					console.log($(this).attr('id'));
	// 					}
	// 				});
	// 			}
	// 		}
	// 	
	// 	});
	
	
});