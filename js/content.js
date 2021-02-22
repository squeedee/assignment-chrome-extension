console.log("extension is running!")


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		var color = request.message;

document.designMode = "on"; 


$("p").attr("class", "textToSelect");

console.log("paragraph class has changed")

$(".textToSelect").on('mouseup', function(e){
	document.execCommand('hiliteColor', false, color)
		}); 	
 	}
 );

// document.designMode = "on"; 


// $("p").attr("class", "textToSelect");

// console.log("paragraph id has changed")

// $(".textToSelect").on('mouseup', function(e){
// 	document.execCommand('hiliteColor', false, 'yellow')
// }); 

