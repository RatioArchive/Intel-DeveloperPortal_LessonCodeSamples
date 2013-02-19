$(function() {

	$('#PushState').on('click', function(e) {

		window.history.pushState(
			{ 
				key: 'value'
			},
			'PushState is Cool',
			'pushstate.html'
		);

	});

	$('#ClearState').on('click', function(e) {
		
		window.history.pushState(
			{},
			'',
			''
		);

	});

	$('#ForwardState').on('click', function(e) {
		window.history.forward();
	});

	$('#BackwardState').on('click', function(e) {
		window.history.back();
	});

	$(window).on('popstate', function(e) {

		$('#History').prepend('<div class="alert alert-info"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Popped!</strong> State has changed.</div>');

	});

});