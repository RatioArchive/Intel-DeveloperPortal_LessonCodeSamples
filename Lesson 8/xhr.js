// cross browser xhr factory
var httpRequest = function() {
	var httpRequest;

	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
		httpRequest = new XMLHttpRequest();
	} 
	else if (window.ActiveXObject) { // IE
		try { httpRequest = new ActiveXObject("Msxml2.XMLHTTP"); } 
		catch (e) {
			try { httpRequest = new ActiveXObject("Microsoft.XMLHTTP"); } 
			catch (e) {}
		}
	}

	if (!httpRequest) {
		console.log('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}

	return httpRequest;
}