(function(module){
	var thingsPandaHates = {};
	
	thingsPandaHates.annoyPanda = function(template, url) {
		console.log("template: " + template + "\nurl: " + url + "\n");
	}
	
	module.exports = thingsPandaHates;
}(module));