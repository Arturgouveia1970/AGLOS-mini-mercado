import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import mapa from '../../assets/images/map2.png';
import styles from './Local.module.css';

const Local = () => (
  <>
    <NavBar />
    <div className={`${styles.map}`}>
      <img src={mapa} alt="..." />
    </div>
    <Footer />
  </>
);

export default Local;
