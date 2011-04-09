const widgets = require("widget");
const tabs = require("tabs");
const data = require("self").data;
const { Hotkey } = require("hotkeys");

var panel = require("panel").Panel({
  width: 220,
  height: 60, 
  contentURL: data.url("panel.html"),
  contentScriptFile: [data.url("jquery-1.5.2.min.js"), data.url("app.js")],
  contentScriptWhen: "ready",
  onMessage: function(message) {
    var url = "http://liberty-sweet.libertydistribution.com/ordermanagement/vieworder.php?invoiceid=" + message;
    tabs.activeTab.url = url;
    panel.hide();
  },
  onShow: function() {
    panel.postMessage("show");
  }
});

var showHotKey = Hotkey({
  combo: "accel-e",
  onPress: function() {
    panel.show();
  }
});
