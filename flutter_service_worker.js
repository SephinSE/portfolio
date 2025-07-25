'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "efbbc098542f56d5a47f83123e88c371",
"assets/AssetManifest.bin.json": "ff8c3d02c76e3acadefa75cc35bda4e2",
"assets/AssetManifest.json": "6d91ddd58aa89c5621215d05be6c5105",
"assets/assets/display.jpg": "2ec4a0528945272fcce585add0598449",
"assets/assets/project01.jpg": "996ebb3f025d9ec7e6f9ee42c14b7ea4",
"assets/assets/project02.jpg": "82fa032db056708c84ed672a2b1cdbba",
"assets/assets/project03.jpg": "fa6193f439a854c7c6f4fb45612da5e2",
"assets/assets/project04.jpg": "9712dc6bb4f1b8345650fbc1b99f81a1",
"assets/assets/project05.jpg": "0dbad19930f8bea9583ac9d130389570",
"assets/assets/project06.jpg": "fcd3cc7530453ccfd4623f6ac901cc4d",
"assets/assets/resume.jpg": "1165d3143fcb8c6c850c7f914186c0a0",
"assets/assets/resume1.svg": "77f797a964723b52b4e71e897824357c",
"assets/assets/resume2.svg": "9fa3cccb2f902aca27e367e0080db73d",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/fonts/MaterialIcons-Regular.otf": "47e86bd44bbb3adc2f4506dc2e6413e9",
"assets/NOTICES": "ec9a097e44dbf7e4a2327fe146469283",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "985071bc1f5b2ee7d751d918389d3800",
"icons/android-icon-144x144.png": "66111823ed829b4b5f52d175b9b69e9c",
"icons/android-icon-192x192.png": "8282c8e7a9aaa3a1e6190c44766498f2",
"icons/android-icon-36x36.png": "41f637ae3b035e7b20cf4e9f2227154c",
"icons/android-icon-48x48.png": "ccbe3402703d5736aed52ff8778b2aa0",
"icons/android-icon-72x72.png": "2f9c80516a8135b2445625b31da65ce9",
"icons/android-icon-96x96.png": "bde0d316b355ec044642ac4ea8f46ae4",
"icons/apple-icon-114x114.png": "259d4ab8b61753dc7473112ba3483457",
"icons/apple-icon-120x120.png": "9ee49fed1d50bf8d45f46ab05e87deb4",
"icons/apple-icon-144x144.png": "66111823ed829b4b5f52d175b9b69e9c",
"icons/apple-icon-152x152.png": "927a8abaa07ecae49a748d266e39796b",
"icons/apple-icon-180x180.png": "27962948115a1ea31803af56846d0b98",
"icons/apple-icon-57x57.png": "d4be3e218bbe67c463ecf92bdb66dcd4",
"icons/apple-icon-60x60.png": "f810a3bf41b697516d072875d4ef203b",
"icons/apple-icon-72x72.png": "2f9c80516a8135b2445625b31da65ce9",
"icons/apple-icon-76x76.png": "d2c35f0ffd71b0649fb7a82bb9bfb05a",
"icons/apple-icon-precomposed.png": "6d86fc90bc8066bf817ac5d04d710b26",
"icons/apple-icon.png": "6d86fc90bc8066bf817ac5d04d710b26",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "659d350777bcae4cc988f34cd37b049b",
"icons/favicon-32x32.png": "ae2b8c47b85b6b4411ecd08a18c35eff",
"icons/favicon-96x96.png": "313acfb608b50d92cd09aaf42f6a04a0",
"icons/favicon.ico": "af4220f159a91bdb26c8608520759511",
"icons/ms-icon-144x144.png": "66111823ed829b4b5f52d175b9b69e9c",
"icons/ms-icon-150x150.png": "e7c2f60fe438318044472a149ece1d1e",
"icons/ms-icon-310x310.png": "3b2d899183f3423996d7105bbc0a9c04",
"icons/ms-icon-70x70.png": "8db49674540b57af67102d3ae1219d03",
"index.html": "8876382620eb3fbdd47296fd4e79f94b",
"/": "8876382620eb3fbdd47296fd4e79f94b",
"main.dart.js": "60fac6c4ee5c6cc6f0bb7631d3f21ecc",
"manifest.json": "5561882f5a1700943c34f880ca8f48d2",
"version.json": "93f79c4845bca743997d155b19290ff9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
