chrome.runtime.onInstalled.addListener(() => {
    chrome.action.disable();
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        let rule = {
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostSuffix: '.youtube.com',
                        urlContains: 'youtube.com/shorts/'
                    },
                })
            ],
            actions: [new chrome.declarativeContent.ShowAction()],
        };
        let rules = [rule];
        chrome.declarativeContent.onPageChanged.addRules(rules);
    });
    chrome.action.onClicked.addListener(function (tab) {
        console.log(tab.url.replace("shorts\/", 'watch?v='));
    });
});