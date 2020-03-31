import React from 'react';
import Register from './Register';
import Login from './Login';



const SignInView = props => {
  return (
    <div className= "container">
      <section class="hero is-info">
      <div class="hero-body">
          <div class="container">
          <h1 class="title">
              Pet Shelter
          </h1>
          <h2 class="subtitle">
              These pets are looking for a good home
          </h2>
          </div>
      </div>
      </section>
      <div className="columns">
        <div className="column">
          <Register />
        </div>
        <div className="column">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default SignInView;