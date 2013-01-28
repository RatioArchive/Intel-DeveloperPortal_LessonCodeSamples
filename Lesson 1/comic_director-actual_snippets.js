// javascript code snippets 
// from various locations in 
// Comic Director



// make a new item
var item = new Item();

// toggle edit mode
WinJS.Utilities.addClass(elem, "edit");


// user has clicked a new paint color
_view.libraryView._setActiveColor(userColor);


// when user clicks an effects
_view.onEffectItemClick.add(Delegate(this, onEffectItemClick));


// select the video control
var videoControl = document.getElementById('videoMenuControl').winControl;


// if user hits back before saving their comic, show a confirmation
smoke.confirm('Going back will wipe any progress you have. This cool?', function (e) {
    if (e) {
        //smoke.destroy();
        _thisHandle.persistenceService.deleteCurrentComic();
        WinJS.Navigation.back();
    }

    else
        smoke.signal("Woh, that was close.. publish your comic to save it", 6000);

}, { ok: "Yup", cancel: "No!" });  


// bring text to front
this.model.pane._ensureTextOnTop();     


// switch user to pen drawing mode
this.model.pane._paintController.switchToPen();
// stop painting
this.model.pane._paintController.stopDrawing();