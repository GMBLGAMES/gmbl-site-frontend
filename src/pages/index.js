import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Home = () => (
  <>
      <p>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Login
  </a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Sign Up
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
</>
);

export default Home;
