import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import mapa2 from '../../assets/images/mapa2.png';
import mapa3 from '../../assets/images/mapa3.png';
import styles from './Local.module.css';

const Local = () => (
  <>
    <NavBar />
    <div className={`${styles.map}`}>
      <img src={mapa2} alt="..." />
    </div>
    <Footer />
  </>
);

export default Local;
