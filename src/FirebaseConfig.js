import firebase from 'firebase/app';
import 'firebase/messaging';

let VapidKey = "BPO2pT-UL0rv4YS_YskcdRFy0F-0s-Dy9QpxAXX5dt8Z4QE33gr_yQGPhoPjIP9AdxwIVMvykob0ouH3bLWbFeA";

let initializeFirebase = () => {
   let config = {
      apiKey: "AIzaSyCVkcr_g5l-mbUuluN6-XqYkcVeivQO5R4",
      authDomain: "temp-befc0.firebaseapp.com",
      projectId: "temp-befc0",
      storageBucket: "temp-befc0.appspot.com",
      messagingSenderId: "733002491905",
      appId: "1:733002491905:web:10c8ae32266e3a9d60f800",
      measurementId: "G-0G03F4H6E5"
   };

   firebase.initializeApp(config);

   const messaging = firebase.messaging();
   messaging.usePublicVapidKey(VapidKey);
   // custom service worker file
   // navigator.serviceWorker.register('/my-sw.js').then((registration) => {
   //    firebase.messaging().useServiceWorker(registration);
   // });

};

const askForPermissioToReceiveNotifications = async () => {
   try {
      let messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('user token: ', token);
      return token;
   } catch (error) {
      console.error(error);
   }
};

const messaging = firebase.messaging();
// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(() => {
   try {
      const token = await messaging.getToken();
      console.log('Token refreshed.');
      console.log('user token: ', token);
      return token;
   } catch (error) {
      console.error(error);
      console.log('Unable to retrieve refreshed token ', err);
   }
});


// let handleFirebaseConfiguration = () => {
//    const messaging = firebase.messaging();
//    messaging.usePublicVapidKey(VapidKey);
//
//    Notification.requestPermission().then((permission) => {
//       if (permission === 'granted') {
//          console.log('Notification permission granted.');
//
//          // Retrieving an Instance ID token for use with FCM.
//          messaging.getToken().then((currentToken) => {
//             if (currentToken) {
//                sendTokenToServer(currentToken);
//                updateUIForPushEnabled(currentToken);
//             } else {
//                // Show permission request.
//                console.log('No Instance ID token available. Request permission to generate one.');
//                // Show permission UI.
//                updateUIForPushPermissionRequired();
//                setTokenSentToServer(false);
//             }
//          }).catch((err) => {
//             console.log('An error occurred while retrieving token. ', err);
//             showToken('Error retrieving Instance ID token. ', err);
//             setTokenSentToServer(false);
//          });
//
//       } else {
//          console.log('Unable to get permission to notify.');
//       }
//    });
//
//    // Callback fired if Instance ID token is updated.
//    messaging.onTokenRefresh(() => {
//       messaging.getToken().then((refreshedToken) => {
//          console.log('Token refreshed.');
//          // Indicate that the new Instance ID token has not yet been sent to the
//          // app server.
//          setTokenSentToServer(false);
//          // Send Instance ID token to app server.
//          sendTokenToServer(refreshedToken);
//          // ...
//       }).catch((err) => {
//          console.log('Unable to retrieve refreshed token ', err);
//          showToken('Unable to retrieve refreshed token ', err);
//       });
//    });
//
//
// }


// export default handleFirebaseConfiguration;
export {initializeFirebase, askForPermissioToReceiveNotifications};