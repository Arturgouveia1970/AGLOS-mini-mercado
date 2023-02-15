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
    <div className={`${styles.specialCtn} container-fluid max-vh-100`}>
      <div className={`${styles.header} img-fluid`}>
        <img src={fotolonge} alt="..." className={`${styles.image1} img-fluid float-start`} />
        <img src={fotofora} alt="..." className={`${styles.image2} img-fluid float-end`} />
      </div>
      <div className={`${styles.texto}`}>
        <h2>Especiais 2023</h2>
      </div>
      <div className={`${styles.main} `}>
        <div className={`${styles.toprow} img-fluid`}>
          <img src={foto1} alt="..." className={`${styles.image3}`} />
          <img src={foto2} alt="..." className={`${styles.image4}`} />
        </div>
        <div className={`${styles.secondrow} img-fluid`}>
          <img src={foto3} alt="..." className={`${styles.image5}`} />
          <img src={foto4} alt="..." className={`${styles.image6}`} />
        </div>
        <div className={`${styles.thirdrow} img-fluid`}>
          <img src={foto5} alt="..." className={`${styles.image7}`} />
          <img src={foto6} alt="..." className={`${styles.image8}`} />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Especial;
