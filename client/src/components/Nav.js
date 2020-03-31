import React from 'react';
import { Link } from '@reach/router';


const Nav = props => {

  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
        </Link>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
        <div class="buttons">
                <a class="button is-light">
                    <strong><Link to ="/logged_in" >Home</Link></strong>
                </a>
            </div>  
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link className="button is-info" to="/">Sign Out</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;