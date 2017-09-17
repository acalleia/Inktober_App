import React from 'react';

import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';

const Nav = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/artworks">Artwork</Link>
          </li>
          <li>
            <Link to ="/newartwork">Add artwork</Link>
          </li>
        </ul>
        {!Auth.isUserAuthenticated() ? (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <span className="logout" onClick={props.logoutUser}>Log Out</span>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;