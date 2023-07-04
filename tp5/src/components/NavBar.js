import React from 'react';
import LOGO from '../LOGO.webp';
import '../App.css';

function NavBar() {

  return (
    <>
      <nav className="navbar navbar-light bg-light borderNav">
        <a className="navbar-brand" href="#">
          <img src={LOGO} className="d-inline-block align-top imag" alt="" />

        </a>
      </nav>
    </>
  );
}

export default NavBar;