// for our app to update when we make changes, we'll need to update
// the version here on each deploy
const CACHE_NAME = "cache-v1";

// array of URLs to cache on app startup - add any images you used
// in your resume here as well
const PRECACHE_URLS = ["/index.html", "/styles.css", "/assets/me.jpg"];

// listen for the install event
self.addEventListener("install", event => {
  event.waitUntil(
    // open the cache we name above
    caches
      .open(CACHE_NAME)
      // add all our precache resources to the cache
      .then(cache => cache.addAll(PRECACHE_URLS))
  );
});

// listen for fetch events
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // the resource is cached - no need to make a network request
      if (response) {
        return response;
      }
      // otherwise, fetch the resource
      return fetch(event.request);
    })
  );
});
