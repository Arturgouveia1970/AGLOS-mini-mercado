import React from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import styles from './Sobre.module.css';
import MarketCarousel from './Carousel';

const Sobre = () => (
  <>
    <NavBar />
    <div className={`${styles.sobreCtn} container-fluid max-vh-100`}>
      <MarketCarousel  />
      <div className={`${styles.sobreText}`}>
        <h2
          className={`${styles.sobreh2}`}
        >
          Deixe a Nossa loja trazer-lhe os sabores e tradições do mundo para a sua mesa
        </h2>
        <p className={`${styles.text}`}>
          AGLS meu mercadinho é um mini mercado que se dedica a facilitar á comunidade
          local e arredores o acesso a uma variedade de alta qualidade e melhores preços de produtos
          locais e importados.
          Venha visitar-nos e um membro da nossa equipa ajudar-lhe-á a levar novos sabores e
          receitas para a sua mesa.
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default Sobre;
