$(function() {

	$('#PushState').on('click', function(e) {

		window.history.pushState({
			id: 	'PushState', 
			title: 	'PushState is Cool',
			url: 	'/pushstate'
		});

	});

	$('#ClearState').on('click', function(e) {
		
		window.history.pushState({
			id: 	'', 
			title: 	'',
			url: 	''
		});

	});

	$(window).on('popstate', function(e) {

		$('#History').prepend('<div class="alert alert-info"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Popped!</strong> State has changed.</div>');

	});

});