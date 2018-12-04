import React from 'react';
import { NewsHeaderCard } from 'react-ui-cards';
import Img from '../../images/card1.jpg';
import Img2 from '../../images/card2.jpg';
import Img3 from '../../images/card3.jpg';
import Img4 from '../../images/card4.jpg';

const Partners = props => (
  <div style={{color:'white'}}>
    <h1 className=" text-center">PARTNERS</h1>
    <div className=" row">
      <section className="offset-md-3 col-md-6 text-center">
        Koris Aviation has teamed up with a wide variety of agencies, government
        bodies and innovative companies to add exceptional value and expertise
        to our services. Some of our partners are:
      </section>
    </div>
    <div className="row" style={{ margin: '0 2.5em' }}>
      <section className="col-md-4">
        <NewsHeaderCard thumbnail={Img2} author="Spring Fountain" />
      </section>
      <section className="col-md-4">
        <NewsHeaderCard
          thumbnail={Img3}
          author="African Aircraft Leasing Company Limited"
        />
      </section>
      <section className="col-md-4">
        <NewsHeaderCard thumbnail={Img4} author="Open-Cosmos Ltd." />
      </section>
    </div>
  </div>
);

export default Partners;
