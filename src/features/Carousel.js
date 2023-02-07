import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import fotofora from '../assets/images/foto-fora.jpg';
import fotolonge from '../assets/images/foto-longe.jpg';
import styles from './Carousel.module.css';

export default function MarketCarousel() {
  return (
    <div className={`${styles.tamanho} container`}>
      <MDBCarousel showControls fade className="carousel-dark">
        <MDBCarouselItem
          className="w-100 d-block img-fluid img-thumbnail"
          itemId={1}
          src={fotofora}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block img-fluid img-thumbnail"
          itemId={2}
          src={fotolonge}
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}
