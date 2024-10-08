'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f1ec92202b3c7821f2d88e1900645edb",
"assets/AssetManifest.bin.json": "ce79e2525ccc5e9b754f9382b6e0e11d",
"assets/AssetManifest.json": "0cdf4356c3a06d123d8df8914c426d14",
"assets/assets/display.jpg": "ece51fe64a5ef0d8d35f86e2dc1eb7c8",
"assets/assets/project01.jpg": "9712dc6bb4f1b8345650fbc1b99f81a1",
"assets/assets/project02.jpg": "0dbad19930f8bea9583ac9d130389570",
"assets/assets/project03.jpg": "fcd3cc7530453ccfd4623f6ac901cc4d",
"assets/assets/project04.jpg": "b85ae68c7497683d7254113490bcff9e",
"assets/assets/project05.jpg": "36fbae7a338879eeca36381c15857528",
"assets/assets/project06.jpg": "64872891834fbdd18e58c0385b2ba4cd",
"assets/assets/resume.jpg": "1165d3143fcb8c6c850c7f914186c0a0",
"assets/assets/sephinseTEX.pdf": "c94975cdae4b4a9682433922de436df8",
"assets/FontManifest.json": "2f8568e785b355ad59bd8d807fdb6883",
"assets/fonts/MaterialIcons-Regular.otf": "8d5ca040f7a9afeaf7a104d5039041f6",
"assets/NOTICES": "40adbcd2d6c32a8abdf26807a96f5722",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "7f8612f75ad62ce5dc0eb749e2a266fc",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "693a95b616c259aa50840aa969d55cc0",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "2dbce26941bb01ab737e612ed936e118",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "7584e6f52c6f781412a1635419971c37",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "f535dd1ca3db862ce86fdd043f07029f",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "c96ed13569b7fc0a702bb4010543aadb",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "54067b2c2568f2f1f7741b9cf6a1bf49",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "bb74cd54ca99259abe8895921ac7f147",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "f77b98a244229ff12454b034a2a630be",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "02f9b76737fbddedf9691be54bb177d8",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "f6eb618462bd8c90c37614e72b5b021f",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "4fc4c56a74935683f7b7fb6d19222dce",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
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
"flutter_bootstrap.js": "59448f47c5e08a2446ea524048018372",
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
"index.html": "f23fccd805e20fe1fddadbd56c575c32",
"/": "f23fccd805e20fe1fddadbd56c575c32",
"main.dart.js": "3dc1f4406db021f8d9e969b1f6c4e1a4",
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
