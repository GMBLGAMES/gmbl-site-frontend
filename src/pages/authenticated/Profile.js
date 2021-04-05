import React from 'react';
import firebase from 'firebase';
import Home from '../';

const user = firebase.auth().currentUser;

function Profile(){
  let {photoURL, displayName} = user;
    return (
      <>
        <div className="container-fluid">
          <div className="card container">
            <div className="row g-0">
              <div className="col-md-4">
                <img className="rounded-circle" src={photoURL} alt={displayName}/>
              </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{displayName}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
  }

export default Profile;
