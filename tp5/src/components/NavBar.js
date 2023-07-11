import React from 'react';
import tierra from '../tierra.png';
import '../App.css';

function NavBar() {

  return (
    <>
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
          <img src={tierra} className="d-inline-block align-top imag" alt="" />

        </a>
      </nav>
    </>
  );
}

export default NavBar;


//rfc tab Componente
//rfcp tab Componente con propTypes