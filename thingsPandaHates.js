"use strict";

(function() {
	$(window).on('action:ajaxify.end', function(data) {
		console.log("ajaxify ended: " + data);
	});
}());