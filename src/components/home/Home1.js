import React from 'react';
import Img from '../../images/slider1.jpg';
import Img2 from '../../images/slider3.jpg';
// import Nav from './Nav';
import './home.css';

const Home = props => (
  <main className="page landing-page">
    {/* <Nav /> */}
    <section
      className="clean-block clean-hero"
      style={{
        backgroundImage: `url(${Img})`,
        color: 'rgba(9,162,255,0.85)',
        minHeight: '80vh',
      }}>
      <div className="intro-text left-0 text-centerfaded p-5 rounded bg-faded text-center offset-lg-6 col-lg-5">
        <h2 className="section-heading mb-4">
          <span className="section-heading-upper">
            Koris Aviation and Consultancy
          </span>
          {/* <span className="section-heading-lower">Worth Drinking</span> */}
        </h2>
        <p className="mb-3">
          Koris Aviation and Consultancy Limited was incorporated in Nigeria in
          2013 to conduct business globally. The Company provides objective
          technical, financial and commercial guidance to aviation clients to
          navigate the complex and evolving aviation industry.
        </p>
        <div className="mx-auto intro-button">
          <a
            className="btn btn-primary d-line-block mx-auto btn-xl"
            role="button"
            href="#">
            Learn more
          </a>
        </div>
      </div>
    </section>
    <section className="clean-block clean-info ">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Info</h2>
          <p>
            We provide a range of consulting services for business and high
            network individuals who are considering or are currently operating
            or maintaining aircraft. We help aviation clients manage their
            assets and operations, mitigate risk and maximize returns on
            investments.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="img-thumbnail" src={Img2} />
          </div>
          <div className="col-md-6">
            <h3>Lorem impsum dolor sit amet</h3>
            <div className="getting-started-info">
              <p>
                Lorem impsum dolor sit amet impsum dolor sit amet impsum dolor
                sit amet
              </p>
            </div>
            <button className="btn btn-outline-primary btn-lg" type="button">
              Get Started{' '}
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
