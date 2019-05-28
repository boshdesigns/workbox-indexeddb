// Import CSS
import '../css/normalize.css';
import '../css/global.css';
import '../css/grid.css';
import './uti/idb.js';

// Import Js
import App from '../svelte/App.svelte';

if ('serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.register('./sw.js');
  } catch (e) {
    console.log('ServiceWorker registration failed. Sorry about that.', e);
  }
} else {
  document.querySelector('.alert').removeAttribute('hidden');
}

const app = new App({
	target: document.body,
});

window.app = app;

export default app;
