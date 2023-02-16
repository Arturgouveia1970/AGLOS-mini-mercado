import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import fotofora from '../assets/images/foto-fora.jpg';
import fotocrianca from '../assets/images/crianca.jpg';
import fotolonge2 from '../assets/images/foto-longe2.jpg';
import styles from './Carousel.module.css';

export default function MarketCarousel() {
  return (
  // <div className={`${styles.tamanho} container d-block img-thumbnail`}>
    <MDBCarousel showControls fade className={`${styles.tamanho} carousel-dark bg-success>
      <MDBCarouselItem
        className={`${styles.image} w-100 d-block img-fluid img-thumbnail`}
        itemId={1}
        src={fotolonge2}
        alt="..."
      />
      <MDBCarouselItem
        className={`${styles.image} w-100 d-block img-fluid img-thumbnail`}
        itemId={2}
        src={fotofora}
        alt="..."
      />
      <MDBCarouselItem
        className={`${styles.image} w-100 d-block img-fluid img-thumbnail`}
        itemId={3}
        src={fotocrianca}
        alt="..."
      />
    </MDBCarousel>
    // </div>
  );
}
