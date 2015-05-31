"use strict";

(function() {
	$(window).on('action:ajaxify.end', function(data) {
		//console.log("ajaxify ended: " + data);
	
		if($("#tph-audio").length == 0){
			var curName = "";
			
			var songArray = ["Hestia%20Dance.mp3"];
		
			var targetedUsers = ["PangoPanjo"];
									
			var trackSelected = Math.floor(Math.random() * songArray.length);
			
			var audioTag = "<div id='tph-audio'>" + "<audio autoplay><source src=\"http://chir.uno/TargetTracks/" + songArray[trackSelected] +"\" type=\"audio/mpeg\"></audio>" + "</div>";
			
			if($("#user-header-name").length > 0)
				curName = $("#user-header-name").html();
				
			if($.inArray(curName, targetedUsers) != -1){
				$("body").append(audioTag);
			}
		}
	});
}());