import React from 'react';
import NavBar from './common/NavBar';
import PromoContainer from './PromoContainer';
import Footer from './common/Footer';
import styles from './MarketContainer.module.css';

const MarketContainer = () => (
  <div className={styles.body}>
    <NavBar />
    <PromoContainer />
    <Footer />
  </div>
);

export default MarketContainer;
