const gotoPanels = require('goto-panel');
const settingsPanels = require('settings-panel');
const { Hotkey } = require("hotkeys");

var gotoPanel = new gotoPanels.GotoPanel();
var settingsPanel = new settingsPanels.SettingsPanel();

Hotkey({
  combo: "accel-e",
  onPress: function() {
    gotoPanel.show();
  }
});

Hotkey({
  combo: "accel-shift-e",
  onPress: function() {
    settingsPanel.show();
  }
});
