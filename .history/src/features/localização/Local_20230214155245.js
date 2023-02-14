import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import mapa2 from '../../assets/images/mapa2.png';
import mapa3 from '../../assets/images/mapa3.png';
import styles from './Local.module.css';

const Local = () => (
  <>
    <NavBar />
    <h2 className={`${styles.map}`}>Estamos localizados na entrada do condominio Atl</h2>
    <div className={`${styles.map}`}>
      <img src={mapa2} alt="..." className={`${styles.foto1}`} />
      <img src={mapa3} alt="..." className={`${styles.foto2}`} />
    </div>
    <Footer />
  </>
);

export default Local;
