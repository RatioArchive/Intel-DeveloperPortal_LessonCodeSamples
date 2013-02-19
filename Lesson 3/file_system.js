// append an input to the body of the document

var   docfrag 			= document.createDocumentFragment()
	, filesystem_input 	= document.createElement('input');

filesystem_input.setAttribute('id', 'filedemo');	
filesystem_input.setAttribute('type', 'file');		
filesystem_input.setAttribute('multiple', '');		// set multiple to allow selection of more than 1 file

docfrag.appendChild(filesystem_input);
document.getElementById('FileSystem').querySelector('.span8').appendChild(docfrag);





// listen for changes on our input, change means files have been selected
// source: http://www.html5rocks.com/en/tutorials/file/filesystem/

document.getElementById('filedemo').onchange = function(e) {

  var files = this.files;

  window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
    // Duplicate each file the user selected to the app's filesystem.
    for (var i = 0, file; file = files[i]; ++i) {

      // Capture current iteration's file in local scope for the getFile() callback.
      (function(f) {
        fs.root.getFile(f.name, {create: true, exclusive: true}, function(fileEntry) {
          fileEntry.createWriter(function(fileWriter) {
            fileWriter.write(f); // Note: write() can take a File or Blob object.
          }, errorHandler);
        }, errorHandler);
      })(file);

    }
  }, errorHandler);

};