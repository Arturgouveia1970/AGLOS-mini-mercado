import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import foto2 from '../assets/images/foto-2.jpg';
import foto1 from '../assets/images/foto-1.jpg';
import foto3 from '../assets/images/foto-3.jpg';
import foto4 from '../assets/images/foto-4.jpg';
import foto6 from '../assets/images/foto-6.jpg';
import styles from './ProductCarousel.module.css';

export default function ProductCarousel() {
  return (
    <div className={`${styles.medidas} container`}>
      <MDBCarousel showControls fade className="carousel-dark bg-success">
        <MDBCarouselItem
          className="w-100 d-block img-fluid img-thumbnail"
          itemId={1}
          src={foto1}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block img-fluid img-thumbnail"
          itemId={2}
          src={foto2}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block img-fluid img-thumbnail"
          itemId={3}
          src={foto3}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block img-fluid img-thumbnail"
          itemId={4}
          src={foto4}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block img-fluid img-thumbnail"
          itemId={5}
          src={foto6}
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}
