import React from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import styles from './Sobre.module.css';
import fotolonge from '../assets/images/foto-longe2.jpg';
import fotofora from '../assets/images/foto-fora.jpg';
import MarketCarousel from './Carousel';

const Sobre = () => (
  <>
    <NavBar />
    <div className={`${styles.sobreCtn} container-fluid max-vh-100`}>
      {/* <div className={`${styles.header} img-fluid`}>
        <img src={fotolonge} alt="..." className={`${styles.image1} img-fluid float-start`} />
        <img src={fotofora} alt="..." className={`${styles.image2} img-fluid float-end`} />
      </div> */}
      <M
      <div className={`${styles.sobreText}`}>
        <h2
          className={`${styles.sobreh2}`}
        >
          Deixe a Nossa loja trazer-lhe os sabores e tradições do mundo para a sua mesa
        </h2>
        <p className={`${styles.text}`}>
          AGLS meu mercadinho é um negócio familiar que se dedica a providenciar a comunidade
          local o acesso a uma variedade de alta qualidade de produtos nacionais e estrangeiros.
          Venha visitar-nos e um membro da nossa equipa ajudár-lhe-a a levar novos sabores e
          receitas para a sua mesa de jantar.
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default Sobre;
