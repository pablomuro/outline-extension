(function () {
  chrome.action.onClicked.addListener(function (tab) {
    if (!tab.url) return;

    const outlineSite = `https://outline.com/${tab.url}`

    const code = `window.location.href = "${outlineSite}"`
    if (chrome.scripting) {
      chrome.scripting.executeScript(tab.id, {
        function: () => code
      });
    } else if (chrome.tabs.executeScript) {
      chrome.tabs.executeScript(tab.id, { code: code })
    } else {
      chrome.tabs.update({ url: outlineSite })
    }

  })
})()