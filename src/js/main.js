// Import CSS
import '../css/normalize.css';
import '../css/global.css';
import '../css/grid.css';
import './uti/idb.js';

// Import Js
import App from '../svelte/App.svelte';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    console.log('loaded');
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

      // SW registered
      navigator.serviceWorker.ready.then(function (registration) {
        console.log('Service worker successfully registered on scope', registration.scope);
      });


      // Check which mode the display is in
      var appMode = document.getElementById('app-mode');
      var appVersion;

      if (window.matchMedia('(display-mode: standalone)').matches) {
        appMode.innerHTML = "Viewing mode: WebApp";
        appVersion = "app";
      } else if (window.navigator.standalone === true) {
        appMode.innerHTML = "Viewing mode: WebApp";
        appVersion = "app";
      } else {
        appMode.innerHTML = "Viewing mode: Desktop";
        appVersion = "desktop";
      }

      var deferredPrompt;
      var btnAddContainer = document.getElementById('user-prompt');
      var iosContainer = document.getElementById('ios-prompt');
      var btnAdd = document.getElementById('user-click');

      function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }
        return "unknown";
      }

      var os = getMobileOperatingSystem();

      if(os != "unknown") {
        if(os == "iOS" && appVersion == "desktop") {
          setTimeout(function() {
            iosContainer.style.display = 'block';

            document.getElementById('ios-close-button').addEventListener('click', (e) => {
              console.log('ios-close-button clicked');
              console.log(iosContainer.style.display);

              iosContainer.style.display = 'none';
            });
          }, 3000);
        }
        return;
      } else {
        // Listen for beforeinstallprompt
        window.addEventListener('beforeinstallprompt', (e) => {
          console.log("beforeinstallprompt event", e);

          // Prevent Chrome 67 and earlier from automatically showing the prompt
          e.preventDefault();
          // Stash the event so it can be triggered later.
          deferredPrompt = e;

          btnAddContainer.style.display = 'block';
        });

        document.getElementById('prompt-close-button').addEventListener('click', (e) => {
          btnAddContainer.style.display = 'none';
        });

        btnAdd.addEventListener('click', (e) => {
          // hide our user interface that shows our A2HS button
          btnAddContainer.style.display = 'none';
          // Show the prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice
            .then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                btnAddContainer.style.display = 'none';
                console.log('User dismissed the A2HS prompt');
              }
              deferredPrompt = null;
            });
        });
      }





    } catch (e) {
      console.log('ServiceWorker registration failed. Sorry about that.', e);
    }
  });

}



const app = new App({
	target: document.body,
});

window.app = app;

export default app;
