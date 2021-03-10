const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});
firebase.analytics();
