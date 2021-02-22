console.log("I'm the popup")

//linked to buttons
$('#deepskyblue').on('click', changeTheme);
$('#lightblue').on('click', changeTheme);
$('#pink').on('click', changeTheme);
$('#lightgreen').on('click', changeTheme);
$('#yellow').on('click', changeTheme);
$('#orange').on('click', changeTheme);
$('#deeppink').on('click', changeTheme);
$('#turquoise').on('click', changeTheme);
$('#navajowhite').on('click', changeTheme);

function changeTheme () {
	var color = $(this).attr('id');
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {message: color});
	});
 }

