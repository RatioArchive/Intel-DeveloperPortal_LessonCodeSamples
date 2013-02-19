$(function() {

  var video             = document.getElementById('cameraVideo'),
      canvas            = document.getElementById('cameraCanvas'),
      ctx               = canvas.getContext('2d'),
      localMediaStream  = null;

  function snapshot() {
    if (localMediaStream) {
      ctx.drawImage(video, 0, 0);
      // "image/webp" works in Chrome 18. In other browsers, this will fall back to image/png.
      document.getElementById('cameraImg').src = canvas.toDataURL('image/webp');
    }
  }

  video.addEventListener('click', snapshot, false);

  $('#getCameraData').on('click', function(e) {

    // Not showing vendor prefixes or code that works cross-browser.
    navigator.webkitGetUserMedia({video: true}, function(stream) {
      video.src = window.URL.createObjectURL(stream);
      localMediaStream = stream;
    });
    
  })

});