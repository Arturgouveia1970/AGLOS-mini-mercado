import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.css';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter1.svg';
import whatsapp from '../../assets/images/whatsapp.svg';

const Footer = () => (
  <div className="flex-column min-vh-100">
    <footer className={`${styles.footer} text-center text-lg-start mt-auto`}>
      <div className="container d-flex justify-content-center">
        <button type="button" className="btn btn-lg btn-floating mx-2">
          <a href="https://www.facebook.com/profile.php?id=100089306869306"><img src={facebook} alt="facebook-icon" className="facebook" /></a>
        </button>
        <button type="button" className="btn btn-lg btn-floating mx-2">
          <a href="https://instagram.com/agls_mini_mercado?igshid=YmMyMTA2M2Y="><img src={instagram} alt="instagram-icon" className="instagram" /></a>
        </button>
        <button type="button" className="btn btn-lg btn-floating mx-2">
          <img src={twitter} alt="twitter-icon" className="twitter" />
        </button>
        <button type="button" className="btn btn-lg btn-floating mx-2">
          <a href="https://wa.me/+244923362632"><img src={whatsapp} alt="whatsapp-icon" className="whatsapp" /></a>
        </button>
      </div>
      <div className="text-center text-white p-0 d-flex flex-column" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className="text-black" href="https://mdbootstrap.com/">por Artur Gouve</a>
      </div>
    </footer>
  </div>
);
export default Footer;
