var manifest = chrome.runtime.getManifest();
$(document).ready(function(){
	setHeader();
});

function setHeader(){
	$('a#homepage').attr('href', manifest.homepage_url);
	$('#spanTitle, .spanTitle').text(manifest.browser_action.default_title);
	$('a#sourcepage').attr('href', manifest.permissions[2]);
}