const gotoPanels = require('goto-panel');
const { Hotkey } = require("hotkeys");

var gotoPanel = new gotoPanels.GotoPanel();

Hotkey({
  combo: "accel-e",
  onPress: function() {
    gotoPanel.show();
  }
});
