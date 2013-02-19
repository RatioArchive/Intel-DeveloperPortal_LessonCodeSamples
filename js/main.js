$(function(){
	$('#navbar').scrollspy();

	$('#SpawnWorker').on('click', function() {
		var worker = new Worker('web_worker.js');
		worker.postMessage(); // Start the worker.
	});

	
});

function sayHI() {
	worker.postMessage({'cmd': 'start', 'msg': 'Hi'});
}

function stop() {
	// Calling worker.terminate() from this script would also stop the worker.
	worker.postMessage({'cmd': 'stop', 'msg': 'Bye'});
}

function unknownCmd() {
	worker.postMessage({'cmd': 'foobard', 'msg': '???'});
}

var worker = new Worker('web_worker.js');
worker.addEventListener('message', function(e) {
	document.getElementById('result').textContent = e.data;
}, false);