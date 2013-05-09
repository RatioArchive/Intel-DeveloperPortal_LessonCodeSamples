var video = (function(){
    'use strict';

    var videoElem 		= document.getElementsByTagName('video')[0]
      , playElem 		= document.getElementById('play')
      , playIcon 		= playElem.querySelector('i')
      , muteElem 		= document.getElementById('mute')
      , muteIcon 		= muteElem.querySelector('i')
      , fullElem 		= document.getElementById('fullscreen')
      , fullIcon 		= fullElem.querySelector('i')
      , isFullScreen	= document.fullScreen || document.webkitIsFullScreen;

    playElem.addEventListener('click', playClickHandler.bind(this));
    muteElem.addEventListener('click', muteClickHandler.bind(this));
    fullElem.addEventListener('click', fullClickHandler.bind(this));
 
    function playClickHandler(e) {
    	videoElem.paused ? play() : pause();
    }

    function muteClickHandler(e) {
    	videoElem.muted ? unmute() : mute();
    }

    function fullClickHandler(e) {
    	isFullScreen ? exitFullscreen() : fullscreen();
    }

    // public methods
    function play() {
    	playIcon.className = 'icon-pause';
    	videoElem.play();
    }

    function pause() {
    	playIcon.className = 'icon-play';
    	videoElem.pause();
    }

    function mute() {
    	muteIcon.className = 'icon-volume-off';
    	videoElem.muted = true;
    }

    function unmute() {
    	muteIcon.className = 'icon-volume-up';
    	videoElem.muted = false;
    }

    function fullscreen() {
    	videoElem.requestFullscreen ? videoElem.requestFullscreen() : videoElem.webkitRequestFullscreen();
    }

    function exitFullscreen() {
    	videoElem.cancelFullScreen ? videoElem.cancelFullScreen() : videoElem.webkitCancelFullScreen();
    }
    
    return {
    	  play: 			play
    	, pause: 			pause
    	, mute: 			mute
    	, unmute: 			unmute
    	, fullscreen: 		fullscreen
    	, exitFullscreen: 	exitFullscreen
    	, element: 			videoElem
    }
 
})();