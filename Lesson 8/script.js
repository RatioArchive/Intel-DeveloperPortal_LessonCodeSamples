(function() {

	var apiCall
  	  , apiElem
  	  , apiData
  	  , cb;

  	var destinations = {
  		spotlight: 	'http://www.comicdirector.com/service/comic/search?spotlight=true&limit=',
  		recent: 	'http://www.comicdirector.com/service/comic/search?order=publish_time&limit=',
  		popular: 	'http://www.comicdirector.com/service/comic/search?order=rating&limit='
  	}

	function listen() {
		var limit = document.getElementById('limit');

		document.getElementById('spotlight').addEventListener('click', function() {
			pingAPI({
				url: 		destinations.spotlight + limit.value, 
				callback: 	apiSuccess
			});
		})
		document.getElementById('recent').addEventListener('click', function() {
			pingAPI({
				url: 		destinations.recent + limit.value, 
				callback: 	apiSuccess
			});
		})
		document.getElementById('popular').addEventListener('click', function() {
			pingAPI({
				url: 		destinations.popular + limit.value, 
				callback: 	apiSuccess
			});
		})
	}

	function pingAPI(params) {
		cb = params.callback;

		apiCall = new httpRequest();
		apiCall.onreadystatechange = apiChange;
		apiCall.open('GET', params.url);
		apiCall.send();
	}

	function apiChange() {
		if (apiCall.readyState === 4) {
			if (apiCall.status === 200) {
				cb(JSON.parse(apiCall.responseText));
			} 
			else {
				apiElem.innerText = 'There was a problem with the request.';
			}
		}
	}
 
	function apiSuccess(data) {
		apiElem = document.getElementById('apistatus');

		apiData = data.result;
		apiElem.innerText = 'Success! You got ' + apiData.comics.length + ' comics from the API.';

		showComicsInList();
	}

	function showComicsInList() {
		var list = document.getElementById('list')
		  , chunk = document.createDocumentFragment();

		for (var i = 0, l = apiData.comics.length; i < l; i++) {
			var comic = apiData.comics[i]
			  , title = document.createElement('dt')
			  , desc = document.createElement('dd')
			  , img = document.createElement('img');

			title.innerText = comic.title + ' by: ' + comic.author;
			img.src = comic.thumbnail_uri;

			desc.appendChild(img);

			chunk.appendChild(title);
			chunk.appendChild(desc);

			console.log(comic);
		}

		list.innerHTML = '';
		list.appendChild(chunk);
	}

	document.addEventListener('DOMContentLoaded', function() {
        listen();
    });

})()