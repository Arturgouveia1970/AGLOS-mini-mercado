import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import mapa2 from '../../assets/images/mapa2.png';
import mapa3 from '../../assets/images/mapa4.png';
import styles from './Local.module.css';

const Local = () => (
  <>
    <NavBar />
    <h2 className={`${styles.texto}`}>Estamos localizados na entrada do condomínio Atlantic City.</h2>
    <div className={`${styles.map}`}>
      <img src={mapa3} alt="..." className={`${styles.foto2}`} />
    </div>
    <h2 
    <Footer />
  </>
);

export default Local;
