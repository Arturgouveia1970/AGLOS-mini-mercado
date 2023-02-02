import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fotofora from '../assets/images/foto-fora.jpg';
import fotolonge from '../assets/images/foto-longe.jpg';
import styles from './Carousel.module.css';

// const data = [
//   {
//     image: require('./assets/images/foto-fora.jpg'),
//     caption:"Caption",
//     description:"description here",
//   },
//   {
//     image: require('./assets/images/foto-1.jpg'),
//     caption:"Caption",
//     description:"description here",
//   }
// ]

function MarketCarousel() {
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    // <footer className={`${styles.footer} text-center text-lg-start d-flex flex-column`}></footer>
    <Carousel className={`${styles.tamanho} carousel-slide`}>
      <div className="carousel-inner">
        <div className="carousel-item active h-25 d-inline-block">
          <img src={fotofora} className="d-block w-100" alt="foto da loja por fora" />
        </div>
        <div className="carousel-item h-25 d-inline-block">
          <img src={fotolonge} className="d-block w-100" alt="vista da porta" />
        </div>
        {/* <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="...">
        </div> */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </Carousel>
  );
}

export default MarketCarousel;
