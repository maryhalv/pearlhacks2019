chrome.browserAction.onClicked.addListener(
  function(activeTab) {
    var newURL = "chrome://newtab";
    chrome.tabs.update(activeTab.id, { url:newURL });
  });
