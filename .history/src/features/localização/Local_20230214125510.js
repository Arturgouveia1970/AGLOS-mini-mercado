import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import mapa from '../../assets/images/mapa.p'

const Local = () => (
  <>
    <NavBar />
    <div classname={`${styles.map}`} >
      <img src={mapa} alt='...' />
    </div>
    <Footer />
  </>
);

export default Local;
