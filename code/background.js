var openKanban = function(tab) {
  chrome.tabs.sendMessage(tab.id, {
      command: "openKanban"
    },
    function(msg) {
      console.log("result message:", msg);
    });
}

chrome.browserAction.onClicked.addListener(openKanban);

