chrome.storage.sync.get([
    'toggleAutoPlayStatus',
    'toggleForceListenStatus',
], (result) => {
    if (result.toggleAutoPlayStatus) {
        // AutoPlay Script
        console.log('toggleAutoPlayStatus');
        setTimeout(function() {
            setInterval(function() {
                if (!document.querySelectorAll("#listen-page > div > div > div.primary-buttons > div.stop > button").length && document.querySelectorAll("#listen-page > div > div > div.primary-buttons > div > button").length) {
                    document.querySelector("#listen-page > div > div > div.primary-buttons > div > button").click();
                }
            }, 1000);
        }, 5000);
    }

    if (result.toggleForceListenStatus) {
        // ForceListen Script
        console.log('toggleForceListenStatus');
        setInterval(() => {
            if (document.querySelectorAll(".record-instead").length) {
                // window.location.reload()
                document.querySelector(".track-fs-toggle-speak").click()
                setTimeout(function() {
                    document.querySelector(".track-fs-toggle-listen").click()
                }, 500);
            }
        }, 1000)
    }
});