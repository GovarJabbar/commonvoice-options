chrome.storage.sync.get([
    'toggleAutoPlayStatus',
    'toggleForceListenStatus',
], (result) => {
    // console.log(result);
    if ((result.toggleAutoPlayStatus == '1' || result.toggleAutoPlayStatus == '2') && result.toggleAutoPlayStatus != '0') {
        // console.log(result.toggleAutoPlayStatus);
        // AutoPlay Script
        let played_sounds = []

        setTimeout(function() {
            setInterval(function() {

                let audio_selector = document.querySelectorAll("audio").length > 0 && document.querySelector("audio").src ? document.querySelector("audio").src : null

                if (!played_sounds.includes(audio_selector)) {
                    if (!document.querySelectorAll("#listen-page > div > div > div.primary-buttons > div.stop > button").length && document.querySelectorAll("#listen-page > div > div > div.primary-buttons > div > button").length) {

                        if (result.toggleAutoPlayStatus == '1' && audio_selector) {
                            played_sounds.push(audio_selector)
                        }

                        setTimeout(() => {
                            document.querySelector("#listen-page > div > div > div.primary-buttons > div > button").click();
                        }, 100);

                    }
                }
            }, 1000);
        }, 5000);
    }

    if (result.toggleForceListenStatus) {
        // ForceListen Script
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