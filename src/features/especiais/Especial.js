import React from 'react';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import fotolonge from '../../assets/images/foto-longe.jpg';
import fotofora from '../../assets/images/foto-fora.jpg';
import styles from './Especial.module.css';
import foto1 from '../../assets/images/gloria.jpg';
import foto2 from '../../assets/images/sagiko.jpg';
import foto3 from '../../assets/images/salfino.jpg';
import foto4 from '../../assets/images/lulu.jpg';
import foto5 from '../../assets/images/donabia.jpg';
import foto6 from '../../assets/images/yolo.jpg';

const Especial = () => (
  <>
    <NavBar />
    <div className={`${styles.specialCtn}`}>
      <div className={`${styles.header} img-fluid`}>
        <img src={fotolonge} alt="..." className={`${styles.images1} img-fluid float-start`} />
        <img src={fotofora} alt="..." className={`${styles.images2} img-fluid float-end`} />
      </div>
      <div className={`${styles.main} `}>
        <div className={`${styles.toprow} justify-content-center`}>
          <img src={foto1} alt="..." className={`${styles.images3}`} />
          <img src={foto2} alt="..." className={`${styles.images4}`} />
        </div>
        <div className={`${styles.secondrow} justify-content-center`}>
          <img src={foto3} alt="..." className={`${styles.images5}`} />
          <img src={foto4} alt="..." className={`${styles.images6}`} />
        </div>
        <div className={`${styles.thirdrow} justify-content-center`}>
          <img src={foto5} alt="..." className={`${styles.images7}`} />
          <img src={foto6} alt="..." className={`${styles.images8}`} />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Especial;
