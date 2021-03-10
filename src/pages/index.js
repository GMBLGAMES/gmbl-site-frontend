import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default class Home {
  constructor(props) {
    this.isUser = false;
  }
  changeToLogin(){
    this.isUser = true;
  }
  changeToSignIn(){
    this.isUser = false
  }
  render(){
    return !this.isUser ? (<>
      <p>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
</>
    ) : (

    )
  }
}
