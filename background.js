chrome.runtime.onMessage.addListener(function (request) {
    if (request.theme == "dark") {
        chrome.browserAction.setIcon({
            path: {
                "16": "images/refresh-white.png",
                "32": "images/refresh-white.png",
                "48": "images/refresh-white.png",
                "128": "images/refresh-white.png"
            }
        })
    }
});

function reload() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
}

function clearCache() {
    chrome.browsingData.remove({"since": 0}, {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": false,
        "fileSystems": true,
        "formData": true,
        "history": false,
        "indexedDB": true,
        "localStorage": true,
        "serverBoundCertificates": true,
        "pluginData": false,
        "passwords": false,
        "webSQL": true
    }, reload);
};

chrome.browserAction.onClicked.addListener(clearCache);


