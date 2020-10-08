(function(){
  chrome.browserAction.onClicked.addListener(function(tab) {
    if(!tab.url) return;

    const outlineSite = `https://outline.com/${tab.url}`

    const code = `window.location.href = "${outlineSite}"`
    chrome.tabs.executeScript(tab.id, {code: code})
  });
})()