(()=>{browser.runtime.onInstalled.addListener((function(){browser.storage.sync.set({toggleAutoPlayStatus:!0,toggleForceListenStatus:!0},(function(){}))}));browser.storage.sync.get(["toggleAutoPlayStatus","toggleForceListenStatus"],(function(t){t.toggleAutoPlayStatus,t.toggleForceListenStatus})),browser.storage.onChanged.addListener((function(t,e){"sync"===e&&(t.toggleAutoPlayStatus&&t.toggleAutoPlayStatus.newValue,t.toggleForceListenStatus&&t.toggleForceListenStatus.newValue)}))})();