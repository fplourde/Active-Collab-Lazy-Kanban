var openKanban = function(tab) {
  chrome.tabs.sendMessage(tab.id, {
      command: "openKanban"
    },
    function(response) {
		chrome.tabs.create({'url': chrome.extension.getURL('kanban.html' + response.appendToUrl)}, function(tab) {
	  
		});
    });
}

chrome.browserAction.onClicked.addListener(openKanban);

