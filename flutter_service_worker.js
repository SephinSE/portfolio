'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "efbbc098542f56d5a47f83123e88c371",
"assets/AssetManifest.bin.json": "ff8c3d02c76e3acadefa75cc35bda4e2",
"assets/AssetManifest.json": "6d91ddd58aa89c5621215d05be6c5105",
"assets/assets/display.jpg": "2ec4a0528945272fcce585add0598449",
"assets/assets/project01.jpg": "82fa032db056708c84ed672a2b1cdbba",
"assets/assets/project02.jpg": "fa6193f439a854c7c6f4fb45612da5e2",
"assets/assets/project03.jpg": "9712dc6bb4f1b8345650fbc1b99f81a1",
"assets/assets/project04.jpg": "0dbad19930f8bea9583ac9d130389570",
"assets/assets/project05.jpg": "fcd3cc7530453ccfd4623f6ac901cc4d",
"assets/assets/project06.jpg": "64872891834fbdd18e58c0385b2ba4cd",
"assets/assets/resume.jpg": "1165d3143fcb8c6c850c7f914186c0a0",
"assets/assets/resume1.svg": "35206e29a8eea48b90e4929e4113a8a5",
"assets/assets/resume2.svg": "e8ccf7559390fb014629b03f5fab1826",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/fonts/MaterialIcons-Regular.otf": "585d29331a2d85160e5526eadb8dcdbd",
"assets/NOTICES": "a1a7960d50053768a0017d1ae19a0927",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "65de66670de2f5b6248fe1d843f492d8",
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
"index.html": "4b383b04a3c564c1a4ce7c87274c5a5f",
"/": "4b383b04a3c564c1a4ce7c87274c5a5f",
"main.dart.js": "20f4b38879c4eb5f5258c1624d330316",
"manifest.json": "e05ea268f4075d212d2aa2af538da884",
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
