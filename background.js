chrome.browserAction.onClicked.addListener(
  function(activeTab) {
  console.log("ASFDJKHKFAJDSHJKASDHF");
    var newURL = "https://www.youtube.com";
    chrome.tabs.create({ url:newURL });
  });
