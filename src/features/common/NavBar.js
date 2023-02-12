import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo1.jpg';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav className={`${styles.header} navbar navbar-expand-lg d-flex flex-column`}>
    <div className="container-fluid">
      <div className={`${styles.logo} navbar-brand`}>
        <button className="navbar-toggler position-absolute top-1 left-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <img src={logo} alt="logo" className={`${styles.logo}`} />
      </div>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className={`${styles.navlinks} navbar-nav me-auto mb-2 mb-lg-0`}>
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
            <NavLink to="/especiais" className="nav-link">Especiais</NavLink>
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
