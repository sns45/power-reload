if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    chrome.runtime.sendMessage({theme: 'dark'})
}
