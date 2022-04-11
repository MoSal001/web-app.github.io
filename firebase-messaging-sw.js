'use strict';
  
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js");
  
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAPHM1soh0R_0ii7sn3g-DGYfr7Ldjv7q8",
    authDomain: "web-push-fddb5.firebaseapp.com",
    projectId: "web-push-fddb5",
    storageBucket: "web-push-fddb5.appspot.com",
    messagingSenderId: "218115916861",
    appId: "1:218115916861:web:ed2f596a3eee7f9f8fd654"
};
  
// Initialize the firebase in the service worker.
firebase.initializeApp(FIREBASE_CONFIG);
  
self.addEventListener('push', function (event) {
  var data = event.data.json();
  
  const title = data.Title;
  data.Data.actions = data.Actions;
  const options = {
    body: data.Message,
    data: data.Data
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
  
self.addEventListener('notificationclick', function (event) {});
  
self.addEventListener('notificationclose', function (event) {}); It was originally published on https://www.apriorit.com/