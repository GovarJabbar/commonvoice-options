<template>
    <div class="wrapper">
        <img height="50" src="images/commonvoice.svg" alt="Commonvoice title">

        <hr class="opacity-30">

        <div class="block">
            <div class="title">Autoplay</div>
            <div class="buttons">
                <button type="button" class="state-off" :class="{'is-active': !autoplay_status}" @click="setAutoPlay(false)">Off</button>
                <button type="button" class="state-on" :class="{'is-active': autoplay_status}" @click="setAutoPlay(true)">On</button>
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
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    chrome.tabs.reload(tabs[0].id);
                });
            }, 100);
        }

    }
}
</script>