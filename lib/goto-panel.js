const panels = require("panel");
const data = require("self").data;
const tabs = require("tabs");

exports.GotoPanel = GotoPanel;

function GotoPanel() {
  this.panel = this.getPanel();
}

GotoPanel.prototype.show = function() {
  this.panel.show();
}

GotoPanel.prototype.getPanel = function() {
  var panel = this;
  return panels.Panel({
    width: 220,
    height: 60,
    contentURL: data.url("panel.html"),
    contentScriptFile: [data.url("jquery-1.5.2.min.js"), data.url("app.js")],
    contentScriptWhen: "ready",
    onMessage: function(message) {
      var url = "http://www.google.com/?#q=" + message;
      panel.gotoUrl(url);
    },
    onShow: function() {
      panel.postMessage("show");
    }
  });
}

GotoPanel.prototype.gotoUrl = function(url) {
  tabs.activeTab.url = url;
  this.panel.hide();
}

GotoPanel.prototype.postMessage = function() {
  this.panel.postMessage("show");
}
