import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
    // TODO
    // ,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  // console.log(firebase.auth().currentUser);
  return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <div>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <img className="rounded-circle" src={firebase.auth().currentUser.photoURL}/>
        <a className="btn btn-lg btn-secondary" onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
      <main role="main" className="inner cover">
        <h1 className="cover-heading">GMBL Games</h1>
        <p className="lead">Play the games that you love and win real prizes.</p>
        <p className="lead">
          <a onClick="#" className="btn btn-lg btn-secondary">Play Now</a>
        </p>
      </main>

      <footer className="mastfoot mt-auto">
        <div className="inner">
        </div>
      </footer>
    </div>
  );
}

export default Home;
// import React from 'react';
// import Login from './Login';
// import SignUp from './SignUp';
// import firebase from 'firebase';
// import firebaseui from 'firebaseui';
//
// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
//
// let uistart = () => ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     {
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: false
//     }
//   ]
// });
//
//
// const Home = () => (
//   <>
//       <p>
//         <button className="btn btn-primary" onClick={uistart} aria-expanded="false">
//           Login / Sign Up
//         </button>
//       </p>
// </>
// );
//
// export default Home;

// <body className="d-flex h-100 text-center text-white bg-dark">
//
// <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
//   <header className="mb-auto">
//     <div>
//       <h3 className="float-md-start mb-0">Cover</h3>
//       <nav className="nav nav-masthead justify-content-center float-md-end">
//         <a className="nav-link active" aria-current="page" href="#">Home</a>
//         <a className="nav-link" href="#">Features</a>
//         <a className="nav-link" href="#">Contact</a>
//       </nav>
//     </div>
//   </header>
//
//   <main className="px-3">
//     <h1>Cover your page.</h1>
//     <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
//     <p className="lead">
//       <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
//     </p>
//   </main>
//
//   <footer className="mt-auto text-white-50">
//     <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
//   </footer>
// </div>

// </body>
