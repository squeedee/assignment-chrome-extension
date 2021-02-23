console.log("I'm the popup")

//linked to buttons
$(".themebutton").each( (_,k) => { $(k).on('click', changeTheme)})

function changeTheme () {
	var color = $(this).attr('data-color');

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {message: color});
	});
 }

