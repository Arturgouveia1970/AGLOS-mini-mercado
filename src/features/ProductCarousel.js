import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import foto2 from '../assets/images/higiene.jpg';
import foto1 from '../assets/images/cereais.jpg';
import foto3 from '../assets/images/vinhos.jpg';
import foto4 from '../assets/images/foto-4.jpg';
import foto6 from '../assets/images/massas.jpg';
import styles from './ProductCarousel.module.css';

export default function ProductCarousel() {
  return (
    <div className={`${styles.medidas} container d-block img-thumbnail`}>
      <MDBCarousel slide dealy={4000} className="carousel-dark bg-success">
        <MDBCarouselItem
          className={`${styles.imgCnt} w-100 d-block img-fluid img-thumbnail`}
          itemId={1}
          src={foto1}
          alt="..."
        />
        <MDBCarouselItem
          className={`${styles.imgCnt} w-100 d-block img-fluid img-thumbnail`}
          itemId={2}
          src={foto2}
          alt="..."
        />
        <MDBCarouselItem
          className={`${styles.imgCnt} w-100 d-block img-fluid img-thumbnail`}
          itemId={3}
          src={foto3}
          alt="..."
        />
        <MDBCarouselItem
          className={`${styles.imgCnt} w-20 d-block img-fluid img-thumbnail`}
          itemId={4}
          src={foto4}
          alt="..."
        />
        <MDBCarouselItem
          className={`${styles.imgCnt} w-20 d-block img-fluid img-thumbnail`}
          itemId={5}
          src={foto6}
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}
