// make sure the browser supports the navigator API
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    // register our service worker
    .register("/service-worker.js")
    .then(registration => {
      console.log(
        "Successfully registered service worker for scope:",
        registration.scope
      );
    })
    .catch(error => {
      console.error("Failed to register service worker:", error);
    });
}
