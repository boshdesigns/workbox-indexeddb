importScripts("precache-manifest.871e7dc09de8ecbfbc232fc196ab5a34.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if ('workbox' in self) {

  // TODO: Should webpack handle the version number?
  // injectManifest already uses revision to know if the assets need updating
  // how would this work for dynamic assets/files????
  const VERSION = 'v1.0.0';
  const ASSET_CACHE_VERSION = 'v1.0.0';


  // using Webpack injectManifest which will injects assets including
  // bundle files
  // TODO: look at injectManifest globPatterns to cache non-webpack assets
  // this require a relative path to files which i can't fucking figure out
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);


  // Needs a good caching strategy to cache files correctly

  // Setup const to use for caching names
  // Best to seperate names for different types of files
  const pagesCacheName = 'svelte-pwa-pages-cache-' + ASSET_CACHE_VERSION;
  const assetsCacheName = 'svelte-pwa-assets-cache-' + ASSET_CACHE_VERSION;

  // Cache stuff that aren't being passed through Webpack
  workbox.routing.registerRoute('/manifest.json',
    // Workbox will use ('old' - staleWhileRevalidate > 'new' - StaleWhileRevalidate) as a class so call with new
    new workbox.strategies.StaleWhileRevalidate(
      { cacheName: assetsCacheName }
    ),
  );

  workbox.routing.registerRoute('/',
    new workbox.strategies.StaleWhileRevalidate(
      { cacheName: assetsCacheName }
    ),
  );

  // Cache pages i.e the index page
  // workbox.routing.registerRoute('/',
  //   workbox.strategies.staleWhileRevalidate(
  //     { cacheName: pagesCacheName }
  //   ),
  // );
}

