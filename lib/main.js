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
    executeShortcut(message);
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

function executeShortcut(message) {
  var input = message.split("/");
  var url = "";

  switch ( input[0] ) {
    case 'c':
      url = companyUrl( input );
      break;
    case 'i':
      url = itemUrl( input[1] );
      break;
    case 'o':
      url = orderUrl( input[1] );
      break;
    case 't':
      url = ticketUrl( input[1] );
      break;
    default:
      url = ticketUrl(message);
      break;
  }
  gotoUrl(url);
}

function companyUrl(input) {

  if (input.length == 1) {
    url =  "http://liberty-sweet.libertydistribution.com/companymanagement/editcompany.php?companyid=" 
            + input[1];
  } else {
    switch ( input[2] ) {
      case 's':
        url = storeUrl( input[1], input[3] );
        break;
    }
  }

  return url;

}

function itemUrl(item_id) {
  return "http://liberty-sweet.libertydistribution.com/itemmanagement/edititemform.php?itemid=" + item_id;
}

function orderUrl(order_id) {
  return "http://liberty-sweet.libertydistribution.com/ordermanagement/vieworder.php?invoiceid=" + order_id;
}

function ticketUrl(ticket_id) {
  return "http://support.libertydistribution.com/issues/" + ticket_id;
}

function storeUrl(company_id, store_id) {
  return "http://liberty-sweet.libertydistribution.com/companymanagement/storemanagement/editstore.php?companyid="
         + company_id + "&storeid=" + store_id;
}

function gotoUrl(url) {
  tabs.activeTab.url = url;
  panel.hide();
}
