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
    // navigator.serviceWorker.register('/sandbox-pwa/sw.js', {scope: '/sandbox-pwa/'});

    // Local
    navigator.serviceWorker.register('sw.js')
    .then(function() {
      // Nice to know. Only works in Chrome through
      if ('storage' in navigator && 'estimate' in navigator.storage) {
        navigator.storage.estimate().then(estimate => {
          var quota = document.createElement('p');

          var used = parseInt(estimate.usage) / (1000 * 1000);
          var left =  parseInt(estimate.quota) / (1000 * 1000);

          quota.innerHTML = `Using ${used} out of ${left} MB.`;
          var quotaContainer = document.createElement('div');
          quotaContainer.appendChild(quota);
          document.body.appendChild(quotaContainer);
        });
      } else {
        var quota = document.createElement('p');
        quota.innerHTML = 'Sorry pal! Can\'t use storage quota';
        var quotaContainer = document.createElement('div');
        quotaContainer.appendChild(quota);
        document.body.appendChild(quotaContainer);
      }
    });
  } catch (e) {
    console.log('ServiceWorker registration failed. Sorry about that.', e);
  }
}



const app = new App({
	target: document.body,
});

window.app = app;

export default app;
