$(function(){
	//alert('test2');
	//$("body").css({"background-color":"blue"}); 
	
	var pageSpeed = 0;
	chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
	  //This is where the stuff you want from the background page will be
	 //alert("message listener");
	  if(message.stuff == "test") {
		//alert("Test received");
	  }
	  
	  if(message.pageSpeed) {
		pageSpeed = parseInt(message.pageSpeed);
		//alert(pageSpeed);
		scroll($('html, body'), pageSpeed);
	  }
	});
	
	
	function scroll(element, speed) {
		element.animate({ scrollTop: $(document).height() }, speed,'linear', function() {
			$(this).animate({ scrollTop: 0 }, speed, 'linear', scroll(element, speed));
		});
	}
});

	