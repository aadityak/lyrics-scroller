$(function(){
	$("#scrollnow").click(function(){
		var pageSpeedVar = $("#speed").val();
		console.log();
		chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
			chrome.tabs.executeScript(null, { file: "content.js" }, function() {
				chrome.tabs.query({active:true,currentWindow:true}, function(tab) {
				  chrome.tabs.sendMessage(tab[0].id, {pageSpeed:pageSpeedVar});
				});
			});
		});
	});
});