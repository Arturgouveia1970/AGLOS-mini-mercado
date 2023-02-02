import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo2.jpg';
import styles from './NavBar.module.css';

const NavBar = () => (
  // <footer className={`${styles.footer} text-center text-lg-start d-flex flex-column`}></footer>
  <nav className={`${styles.header} navbar navbar-expand-lg d-flex flex-column`}>
    <div className="container-fluid">
      <div className="navbar-brand"><img src={logo} alt="logo" /></div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sobre" className="nav-link">Sobre</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/produtos" className="nav-link">Produtos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/local" className="nav-link">Localização</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
