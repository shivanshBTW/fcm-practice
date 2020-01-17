importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
   apiKey: "AIzaSyCVkcr_g5l-mbUuluN6-XqYkcVeivQO5R4",
   authDomain: "temp-befc0.firebaseapp.com",
   projectId: "temp-befc0",
   storageBucket: "temp-befc0.appspot.com",
   messagingSenderId: "733002491905",
   appId: "1:733002491905:web:10c8ae32266e3a9d60f800",
   measurementId: "G-0G03F4H6E5"
});

const messaging = firebase.messaging();