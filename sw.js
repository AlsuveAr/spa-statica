importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c3052d91a7fbc1e24e6.js",
    "revision": "f0292fdd74ee9a6eb5f05b7abb1c05a7"
  },
  {
    "url": "/_nuxt/47acf19be595d8654fb4.js",
    "revision": "f22c3c33f28719c2987f1a6c0a72d5a6"
  },
  {
    "url": "/_nuxt/4ebf591ad9b6cd49c658.js",
    "revision": "6240ee1f8c56a837dd365aa39b0cedfa"
  },
  {
    "url": "/_nuxt/4fe38c86873c16bb7596.js",
    "revision": "2a93fd033c06de32b23d65a18423238c"
  },
  {
    "url": "/_nuxt/75a372d44b716aa16ef8.js",
    "revision": "97215ef3a4dbf01485c4a2a70cb29620"
  },
  {
    "url": "/_nuxt/8bc29dc9d971e83fd73d.js",
    "revision": "dee4f3096a6009494a7d68ff259a3ede"
  },
  {
    "url": "/_nuxt/b5f5bdebf768c50003b5.js",
    "revision": "c568d0e50db76767ed77e430d249ee01"
  },
  {
    "url": "/_nuxt/efddaa66aeb106ed83e6.js",
    "revision": "03abc69932289c86d42a0611291ded7f"
  },
  {
    "url": "/_nuxt/f4972d817e3b0d3a0335.js",
    "revision": "e81c2fb47acb177a58c2dea75d214feb"
  },
  {
    "url": "/_nuxt/f9db223c747d764de35b.js",
    "revision": "6bc7681a5fc5c83924b6a5dbeabcc24e"
  }
], {
  "cacheId": "nuxt-spa",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
