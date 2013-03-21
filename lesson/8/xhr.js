(function() {

	var apiCall
  	  , apiUrl = 'http://www.comicdirector.com/service/comic/search?spotlight=true&limit=4'
  	  , apiElem
  	  , apiData;

	function makeRequest(url, success) {
		apiCall = new httpRequest();
		apiCall.onreadystatechange = success;
		apiCall.open('GET', url);
		apiCall.send();
	}
 
	function apiSuccess() {
		apiElem = document.getElementById('apistatus');

		if (apiCall.readyState === 4) {
			if (apiCall.status === 200) {
				apiData = JSON.parse(apiCall.responseText).result;
				apiElem.innerText = 'Success! You got ' + apiData.total_count + ' comics from the API.';

				showComicsInList();
			} 
			else {
				apiElem.innerText = 'There was a problem with the request.';
			}
		}
	}

	function showComicsInList() {
		var list = document.getElementById('list');

		for (var i = 0, l = apiData.comics.length; i < l; i++) {
			var comic = apiData.comics[i]
			  , title = document.createElement('dt')
			  , desc = document.createElement('dd')
			  , img = document.createElement('img');

			console.log(comic);

			title.innerText = comic.title + ' by: ' + comic.author;
			img.src = comic.thumbnail_uri;

			desc.appendChild(img);

			list.appendChild(title);
			list.appendChild(desc);
		}
	}

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

	// finally make the request
	makeRequest(apiUrl, apiSuccess);

})()