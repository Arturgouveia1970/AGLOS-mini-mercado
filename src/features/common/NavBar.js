import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className="navbar-brand">AGLS Meu Mercadinho</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Produtos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Localização</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
