importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.1e8bd260eea761b7cbeeff90a5ad1629.css",
    "revision": "8ddea061939458417df67f399c7c5232"
  },
  {
    "url": "/_nuxt/app.9a6b632bfc27eb249c17.js",
    "revision": "741a77bf9ae89e54614f1e1eef7a1ae6"
  },
  {
    "url": "/_nuxt/layouts/default.0143b21c924d623d40f0.js",
    "revision": "5ac55e2e784b0212aacd1e090a7ffefd"
  },
  {
    "url": "/_nuxt/manifest.219d8c43826f35775af6.js",
    "revision": "a9491d30b96c3512254c03d96a0d61f2"
  },
  {
    "url": "/_nuxt/pages/blog.ab1295a8e7876572665e.js",
    "revision": "0e49ea145cffa59f8984fb5f5f6badc8"
  },
  {
    "url": "/_nuxt/pages/contact.0b5169608d0ab0bccaf4.js",
    "revision": "83d5ee6b2443c9b37876c002d636a0bb"
  },
  {
    "url": "/_nuxt/pages/index.02efc43296565cf82712.js",
    "revision": "da72c12d70e2fc917c27b766d6a3567b"
  },
  {
    "url": "/_nuxt/pages/resume.85a79682ea0792102cb6.js",
    "revision": "831eac0ad987dffa46b73dc484864ef1"
  },
  {
    "url": "/_nuxt/pages/works.23ba1279184463189f78.js",
    "revision": "ed55aa4777a110e37bf0fa4fe4eb814a"
  },
  {
    "url": "/_nuxt/vendor.3eaa1e8b3b525bff4124.js",
    "revision": "db7c3e5279a37f10359232d14a7cac2e"
  }
], {
  "cacheId": "clarkmitchell.dev",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





