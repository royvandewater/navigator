const panels = require("panel");
const data = require("self").data;
const tabs = require("tabs");
const storage = require("simple-storage");

exports.SettingsPanel = SettingsPanel;

function SettingsPanel() {
  this.panel = this.getPanel();
}

SettingsPanel.prototype.show = function() {
  this.panel.show();
}

SettingsPanel.prototype.getPanel = function() {
  var panel = this;
  return panels.Panel({
    width: 640,
    height: 480,
    contentURL: data.url("settings-panel.html"),
    contentScriptFile: [data.url("jquery-1.5.2.min.js"), data.url("settings-controller.js")],
    contentScriptWhen: "ready",
    onMessage: function(message) {
      panel.saveSettings(message);
    }
  });
}

SettingsPanel.prototype.saveSettings = function(message) {
  storage.storage.settings = message;
  console.log(message);
}
