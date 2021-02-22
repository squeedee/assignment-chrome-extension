console.log("extension is running!")


// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 		var color = request.message;
// 		$("p").css("color", color)
		
// 	}
// );
document.designMode = "on"; 



$("p").attr("id", "textToSelect");

console.log("paragraph id has changed")
document.getElementById("textToSelect").addEventListener('mouseup', function(e){
	document.execCommand('hiliteColor', false, 'yellow')
}); 

