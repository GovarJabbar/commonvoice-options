<template>
    <div class="wrapper">
        <img height="50" src="images/commonvoice.svg" alt="Commonvoice icon">

        <hr class="opacity-30">

        <div class="block">
            <div class="title">Autoplay</div>
            <div class="buttons">
                <button type="button" class="state-off" :class="{'is-active': autoplay_status == '0'}" @click="setAutoPlay('0')">Off</button>
                <button type="button" class="state-on" :class="{'is-active': autoplay_status == '1'}" @click="setAutoPlay('1')">Once</button>
                <button type="button" class="state-on" :class="{'is-active': autoplay_status == '2'}" @click="setAutoPlay('2')">Loop</button>
            </div>
        </div>
        <hr class="opacity-30">
        <div class="block">
            <div class="title">Force Listen</div>
            <div class="buttons">
                <button type="button" class="state-off" :class="{'is-active': !force_listen_status}" @click="setForceListen(false)">Off</button>
                <button type="button" class="state-on" :class="{'is-active': force_listen_status}" @click="setForceListen(true)">On</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            base_url: 'commonvoice.mozilla.org',
            autoplay_status: true,
            force_listen_status: true,
        }
    },
    created() {
        chrome.storage.sync.get(['toggleAutoPlayStatus', 'toggleForceListenStatus'], (result) => {
            this.autoplay_status = result.toggleAutoPlayStatus;
            this.force_listen_status = result.toggleForceListenStatus;
        });
    },
    methods: {
        setAutoPlay(status) {
            this.autoplay_status = status;
            chrome.storage.sync.set({
                toggleAutoPlayStatus: status
            }, () => { });

            this.reload()
        },

        setForceListen(status) {
            this.force_listen_status = status;
            chrome.storage.sync.set({
                toggleForceListenStatus: status
            }, () => { });

            this.reload()
        },

        reload() {
            setTimeout(() => {

                const tabs = chrome.tabs
                const self = this
                chrome.windows.getAll({ populate: true }, function (windows) {
                    windows.forEach(function (window) {
                        window.tabs.forEach(function (tab) {

                            if (tab.url.indexOf("http://" + self.base_url) != -1 || tab.url.indexOf("https://" + self.base_url) != -1) {
                                tabs.reload(tab.id);
                            }
                        });
                    });
                });

                // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                //     chrome.tabs.reload(tabs[0].id);
                // });
            }, 100);
        }

    }
}
</script>