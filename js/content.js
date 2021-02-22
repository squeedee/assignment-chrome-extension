console.log("extension is running!")


//this works but it changes all text to green
//on click rather than just what I want to select. 
//unsure if there is a event listener that works
//list the css selector.
// $('p').on("click", function() {
// 	$('p').css({"color":"green"});
// })

// console.log("clicked")

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		var color = request.message;
		$("p").css("color", color)
		
	}
);
