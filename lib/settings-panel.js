const panels = require("panel");
const data = require("self").data;
const tabs = require("tabs");

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
    contentURL: data.url("settings.html"),
    contentScriptFile: [data.url("jquery-1.5.2.min.js")],
    contentScriptWhen: "ready",
    onShow: function() {
      panel.postMessage("show");
    }
  });
}

SettingsPanel.prototype.postMessage = function() {
  this.panel.postMessage("show");
}
