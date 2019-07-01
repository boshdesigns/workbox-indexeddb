// Import CSS
import '../css/normalize.css';
import '../css/global.css';
import '../css/grid.css';
import './uti/idb.js';

// Import Js
import App from '../svelte/App.svelte';

if ('serviceWorker' in navigator) {
  try {
    // production
    navigator.serviceWorker.register('/sandbox-pwa/sw.js', {scope: '/sandbox-pwa/'})
     .then(function() {
      // Nice to know. Only works in Chrome through
      if ('storage' in navigator && 'estimate' in navigator.storage) {
        navigator.storage.estimate().then(estimate => {
          var quota = document.getElementById('storage-quota');

          var used = parseInt(estimate.usage) / (1000 * 1000);
          var left =  parseInt(estimate.quota) / (1000 * 1000);

          quota.innerHTML = `Storage Quota: This site data is using: ${used} out of the devices total usable space of: ${left} mb`;

        });
      } else {
        var quota = document.getElementById('storage-quota');
        quota.innerHTML = 'Sorry pal! Can\'t use storage quota';

      }
    });
    var appMode = document.getElementById('app-mode');

    if (window.matchMedia('(display-mode: standalone)').matches) {
      appMode.innerHTML = "Viewing mode: WebApp";
    } else if (window.navigator.standalone === true) {
      appMode.innerHTML = "Viewing mode: WebApp";
    } else {
      appMode.innerHTML = "Viewing mode: Desktop";
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      console.log("beforeinstallprompt event", e);
    });

    // Local
    // navigator.serviceWorker.register('sw.js')
    // .then(function() {
    //   // Nice to know. Only works in Chrome through
    //   if ('storage' in navigator && 'estimate' in navigator.storage) {
    //     navigator.storage.estimate().then(estimate => {
    //       var quota = document.getElementById('storage-quota');
    //
    //       var used = parseInt(estimate.usage) / (1000 * 1000);
    //       var left =  parseInt(estimate.quota) / (1000 * 1000);
    //
    //       quota.innerHTML = `Storage Quota: This site data is using: ${used} out of the devices total usable space of: ${left} mb`;
    //     });
    //   } else {
    //     var quota = document.getElementById('storage-quota');
    //     quota.innerHTML = 'Sorry pal! Can\'t use storage quota';
    //   }
    // });
    //
    // var appMode = document.getElementById('app-mode');
    //
    // if (window.matchMedia('(display-mode: standalone)').matches) {
    //   appMode.innerHTML = "Viewing mode: WebApp";
    // } else if (window.navigator.standalone === true) {
    //   appMode.innerHTML = "Viewing mode: WebApp";
    // } else {
    //   appMode.innerHTML = "Viewing mode: test";
    // }
    //
    // let deferredPrompt;
    //
    // window.addEventListener('beforeinstallprompt', (e) => {
    //   // Prevent Chrome 67 and earlier from automatically showing the prompt
    //   e.preventDefault();
    //   // Stash the event so it can be triggered later.
    //   deferredPrompt = e;
    //   console.log("beforeinstallprompt event", e);
    // });

  } catch (e) {
    console.log('ServiceWorker registration failed. Sorry about that.', e);
  }
}



const app = new App({
	target: document.body,
});

window.app = app;

export default app;
