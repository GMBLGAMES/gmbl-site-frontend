import React from 'react';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';
//
// const user = firebase.auth().currentUser;

export default function Header(){

 return (
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">GMBL Games</h3>
              <nav className="nav nav-masthead justify-content-center">
                <Link className="nav-link active" to="/">Home</Link>
                <Link className="nav-link" to="/games">Games</Link>
                <Link className="nav-link" to="/profile">Profile</Link>
              </nav>
            </div>
          </header>
        )
      }
