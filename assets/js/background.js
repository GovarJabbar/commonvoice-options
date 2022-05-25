// when the extension is first installed, set default values
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
        toggleAutoPlayStatus: true,
        toggleForceListenStatus: true,
    }, function() {});
});

// set up initial chrome storage values
var toggleAutoPlayStatus = true;
var toggleForceListenStatus = true;

chrome.storage.sync.get([
    'toggleAutoPlayStatus',
    'toggleForceListenStatus',
], function(result) {
    toggleAutoPlayStatus = result.toggleAutoPlayStatus;
    toggleForceListenStatus = result.toggleForceListenStatus;
});


// any time a storage item is updated, update global variables
chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (namespace === 'sync') {
        if (changes.toggleAutoPlayStatus) {
            toggleAutoPlayStatus = changes.toggleAutoPlayStatus.newValue;
        }

        if (changes.toggleForceListenStatus) {
            toggleForceListenStatus = changes.toggleForceListenStatus.newValue;
        }

    }
});