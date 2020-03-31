import React from 'react';
import { Router } from '@reach/router';
import { navigate, Link } from '@reach/router';
import Home from './components/Home';
import EditPet from './components/EditPet';
import CreatePet from './components/CreatePet';
import ViewPet from './components/ViewPet';
import 'bulma/css/bulma.min.css';
import SignInView from './components/SignInView';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/logged_in" />
        <EditPet path="/edit/:_id" />
        <CreatePet path="/new" />
        <ViewPet path="/pets/:_id" />
        <SignInView path="/" />
      </Router>
    </div>
  );
}

export default App;
