import React from 'react';
import { Router } from '@reach/router';
import { navigate, Link } from '@reach/router';
import Home from './components/Home';
import EditPet from './components/EditPet';
import CreatePet from './components/CreatePet';
import ViewPet from './components/ViewPet';
import 'bulma/css/bulma.min.css';
import SignInView from './components/SignInView';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
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
      <Router>
        <Home path="/" />
        <EditPet path="/edit/:_id" />
        <CreatePet path="/new" />
        <ViewPet path="/pets/:_id" />
        <SignInView path="/sign_in" />
      </Router>
    </div>
  );
}

export default App;
