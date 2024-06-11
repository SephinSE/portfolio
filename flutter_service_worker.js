'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dfff5aed4c8c979dd9424e16a40519cf",
"assets/AssetManifest.bin.json": "e4587e77c71146d1c24a942f167df5cc",
"assets/AssetManifest.json": "89400601bf3d7a14daa4264ee7507b20",
"assets/assets/display.jpg": "95878d9eba26543d03085321b847b13b",
"assets/assets/project01.jpg": "9712dc6bb4f1b8345650fbc1b99f81a1",
"assets/assets/project02.jpg": "64872891834fbdd18e58c0385b2ba4cd",
"assets/assets/project03.jpg": "b85ae68c7497683d7254113490bcff9e",
"assets/assets/project04.jpg": "36fbae7a338879eeca36381c15857528",
"assets/assets/resume.jpg": "4c57bc65d6ca453f8b9090abc1d8a045",
"assets/assets/sephinseTEX.pdf": "c94975cdae4b4a9682433922de436df8",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "06b74a03affcbdb53bd2a05176e13619",
"assets/NOTICES": "dc03c469579f8a3bd4a38925ad53f2c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d50b9060c73959fb1a76a20662b5ca88",
"icons/android-icon-144x144.png": "3317075dedb693c76fa64614fe026c4f",
"icons/android-icon-192x192.png": "58709fbdeaff0f4a0162978c23701674",
"icons/android-icon-36x36.png": "2f18ce949175f82a6cd77ba2a6dc971a",
"icons/android-icon-48x48.png": "be109dbdd4e3914337f2049a59c7d892",
"icons/android-icon-72x72.png": "580fa821aae7a5f1095db9787378a6b8",
"icons/android-icon-96x96.png": "592c5ac525cd44c7bab8b9165b3eef2b",
"icons/apple-icon-114x114.png": "ba56e1226e6573490e2431a36282942d",
"icons/apple-icon-120x120.png": "09eba6910ae82df324bbf78108b978a3",
"icons/apple-icon-144x144.png": "138089cb47c7283bbd0b905a307a0edf",
"icons/apple-icon-152x152.png": "46c9b57a48369631f470affd55201cbd",
"icons/apple-icon-180x180.png": "eb6644cc19aa5affab3a41f4b496ffd1",
"icons/apple-icon-57x57.png": "31b9e23156f30f77ea8ee33bf5b2f557",
"icons/apple-icon-60x60.png": "c877230ee64600aa6218ece62586614a",
"icons/apple-icon-72x72.png": "580fa821aae7a5f1095db9787378a6b8",
"icons/apple-icon-76x76.png": "06e7b6cf4594845b8152ee99a2549c95",
"icons/apple-icon-precomposed.png": "6190b2479401a0dc5af724543ffdfd80",
"icons/apple-icon.png": "6190b2479401a0dc5af724543ffdfd80",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "87362cc794db94e5532826a938901b29",
"icons/favicon-32x32.png": "9365601d847fe2789403870461aebe7b",
"icons/favicon-96x96.png": "b15d17f06062ee3f25ab52220b5c41fe",
"icons/favicon.ico": "42624fc89bd9d1fb80c0ebb991293b6a",
"icons/ms-icon-144x144.png": "138089cb47c7283bbd0b905a307a0edf",
"icons/ms-icon-150x150.png": "2f33193628ec5cf4d89956ee8773d7cd",
"icons/ms-icon-310x310.png": "dd6b6e365bddc7b58c51a66043b5858d",
"icons/ms-icon-70x70.png": "4f587a8f7d61fbb3c2b487603c3303f8",
"index.html": "4fdf2186dc9def0e3cef5dedba57cfcf",
"/": "4fdf2186dc9def0e3cef5dedba57cfcf",
"main.dart.js": "9af5a34b7c6bf85652b233b520e51e28",
"manifest.json": "c91bd3c6a487e43e5ea5ec565da5ec98",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
