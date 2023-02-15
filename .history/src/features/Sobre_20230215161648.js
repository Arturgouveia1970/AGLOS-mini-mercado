import React from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';

const Sobre = () => (
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
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
      sit aspernatur aut odit aut fugit, sed quia consequuntur magni
      dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
      quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
      adipisci velit, sed quia non numquam eius modi tempora incidunt
      ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
      ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      Quis autem vel eum iure reprehenderit qui in ea voluptate velit
      esse quam nihil molestiae consequatur, vel illum qui dolorem
      eum fugiat quo voluptas nulla pariatur?
    </p>
    <Footer />
  </>
);

export default Sobre;
