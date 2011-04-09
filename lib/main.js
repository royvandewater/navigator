const widgets = require("widget");
const tabs = require("tabs");
const data = require("self").data;
var Hotkey = require("hotkeys");

var panel = require("panel").Panel({
  contentURL: data.url("foo.html")
});

var showHotKey = Hotkey({
  combo: "accel-e",
  onPress: function() {
    panel.show();
  }
});






 



