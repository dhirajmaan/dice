'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "048b156eeeabbf3e8b1c10406f9df311",
".git/config": "fdffc28fe62d1b0a79c4cd17dedfff11",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2a51b825315aad197b91eb2c23cc2531",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c93b564dd82623b51e33388bc0269223",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a14c57021e6af6f6129e5a733d32e024",
".git/logs/refs/heads/master": "a14c57021e6af6f6129e5a733d32e024",
".git/logs/refs/remotes/dice/master": "33caf083ae74636573bb44e9f58a128e",
".git/objects/01/5548ef620ac4a00b1af98bc0939979d4cd8056": "204b001bb395009ce2b7cab0bfb6068c",
".git/objects/02/740ddb4e87c98b030be05b1852c5a49f9ba842": "f5840173d71f992a1ff6009d74bc94e8",
".git/objects/09/5d03670e688d99b04386f6e985efe1c57a0b1a": "1e706679b2e25b615e0f7885ab630665",
".git/objects/09/d3f6ed2d3c05f3f5c30155b8cae0c61e8d8d62": "3d3108454e0741d2092e0d8b9db6a8a9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/5fa3ef6e19fb369d5ca8e897fb8aed1a633723": "5d2625ec604f9d2876c6a12ab0ff0b69",
".git/objects/2a/824ab2f6713ef9e55ceffe8f7f25277cae3c04": "d171f55de51276e8767af1640eac437c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/d8201fff46672ffe3daf65ea70564741b0a1c8": "9cdda6ea011e79d9e1cb2bedc888e539",
".git/objects/3b/179594c7218acef471ae7cf6a8dce67833af5e": "43a977f7621a1857cc46fde1d185ecc9",
".git/objects/3e/d5293e5aace45b5bf906f2a450ab9cc88d5ca6": "165bb715061dd2f7c042e95e63586bb3",
".git/objects/42/063ac7daf7f8be9ab3a1e7b73ed497605c6447": "46c874e3767bace004b4b64add36d62a",
".git/objects/43/f3e5d34dcb3bac4143f45f9c8926b170f135d2": "0d299743954994e3fca892c93add0e2f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/f3b733152c1570120f455148cfa0f01449c7c4": "7154b703065a0c69ad69aaadd962070b",
".git/objects/5b/f1a81546d736a26951ec75a5368734371f3ed0": "4a712b0925ccc3b5c3115a6d94ab00c6",
".git/objects/63/cb76fe152df782d054a1c7aa804bc9e7e0a1e5": "71ee086bf0b7e0afcc56fe71371ab07b",
".git/objects/66/8cae8e32b58ff6306f91e14d3b2581ece99f9f": "8402432a70e7ca10c3da9fd913781455",
".git/objects/70/6c29db593f9d8bcd4a29081b0375457d4e1e33": "4356518fd32e0da743cc6eea7f91839a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/b9116c127856380a92833f851db1888dd77d03": "b8f1b348de5594d88bfcc28b9ef87339",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/1dc5edb16cd20eddaf5f4836d3a1285d7de624": "b03dbcefa95edd36022fe02dd8d086c1",
".git/objects/9c/4ee4618e1c6699d53fb1a4db15726068ea2228": "806de331e010cf4192953a2ba134a429",
".git/objects/9c/aebddc19675fcab3a57eb8427d35d799cadb42": "e3bc83e0b2024dcb1bfe7c70842511bc",
".git/objects/9f/af90d7c7c4960170bd85b7b5d250868030a90a": "b380c8e641d4371191551907c33d3a69",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/329605070879e002869a3873f2bbba4ce60ba4": "5b4e156904a9d3ff4a73d6892e2664c2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/e870055414c471e756b030bb5041a3e0b0e805": "cc7cd5b8cc033dcfb16b3b0909e87c79",
".git/objects/b6/548e8a43dca6486dd293fcc2126a8ab0b01032": "41a85dcc070c15a0ba437dc931464f02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/e99e6b2d8572a505dfa9279979a018a8d81946": "1865ff76765da7f47fc3ed05e7388851",
".git/objects/f3/4be6273538d2446ac4d571666f0d7c23838da7": "a39c8adb5a9ee9e0703541b733bc6f72",
".git/ORIG_HEAD": "f307017349dd5fb4497c8e2261d1446d",
".git/refs/heads/master": "f307017349dd5fb4497c8e2261d1446d",
".git/refs/remotes/dice/master": "f307017349dd5fb4497c8e2261d1446d",
"assets/AssetManifest.json": "30c79ea6fc759e0ecf377d8db511e22a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/dice1.png": "5e0580134cde323cc6e2d54254b1a605",
"assets/images/dice2.png": "524559a3d0e61efa7b8a165bd2bad0da",
"assets/images/dice3.png": "683bc715f147a48b2e2dcabf2d573a05",
"assets/images/dice4.png": "3c7e0c5d05aeaa567bb90faf18f79f38",
"assets/images/dice5.png": "ae4a1c88865e22a54c7aeb91f18db784",
"assets/images/dice6.png": "2d7642d5229bb083f5e59cf1cee4aa28",
"assets/NOTICES": "fdb932d0c5b4b9b38df7746d616e3446",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "afb7403bd70696420f2f1dc8c14a9344",
"/": "afb7403bd70696420f2f1dc8c14a9344",
"main.dart.js": "45951568ab050724044d4584bded0f0e",
"manifest.json": "a715c6f7190e809b79aba6d906a781bc",
"version.json": "1c9f7474eb955e23603cf0c3da73ffb5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
