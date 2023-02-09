import React from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import ProductCarousel from './ProductCarousel';
import styles from './products.module.css';

const Product = () => (
  <>
    <NavBar />
    <ProductCarousel />
    <div className={`${styles.produtsText}`}>
      <div className={`${styles.carnesText}`}>
        <h2>Carnes e Peixes</h2>
        <p>Nós temos uma variedade special de cortes de carne, peixe e frango</p>
      </div>
      <div className={`${styles.vegText}`}>
        <h2>Frutos e Vegetais</h2>
        <p>
          Especializamo-nos em frutas sasonais de fazendas locais.
          Todos os produtos são frescos e cuidadosamente escolhidos.
        </p>
      </div>
      <div className={`${styles.padariaText}`}>
        <h2>Padaria</h2>
        <p>Venha experimentar os nossos produtos frescos e entregues diariamente</p>
      </div>
      <div className={`${styles.especiaisText}`}>
        <h2>Higiéne</h2>
        <p>
          Temos uma variedade de produtos estabelecidos no mercado mundial. Todos os produtos
          higiéne pessoal e de casa num só lugar.
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default Product;
