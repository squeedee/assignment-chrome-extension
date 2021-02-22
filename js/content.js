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

//original code for highlighter, which was heavily edited and broken down
//https://jsfiddle.net/r9fo6nut/14/
//https://stackoverflow.com/questions/18946573/save-selection-text-and-show-it-later-in-html-and-javascript
