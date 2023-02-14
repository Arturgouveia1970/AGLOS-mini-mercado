import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import mapa2 from '../../assets/images/mapa2.png';
import mapa3 from '../../assets/images/mapa4.png';
import styles from './Local.module.css';

const Local = () => (
  <>
    <NavBar />
    <h2 className={`${styles.texto}`}>Estamos localizados na EN100 a dois Kms sul do Museu da Escravatura. </h2>
    <div className={`${styles.map}`}>
      <img src={mapa3} alt="..." className={`${styles.foto3}`} />
    </div>
    <h2 className={`${styles.texto1}`}>Situados na Entrada do condom</h2>
    <div className={`${styles.map}`}>
      <img src={mapa2} alt="..." className={`${styles.foto2}`} />
    </div>
    <Footer />
  </>
);

export default Local;
