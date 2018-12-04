import React from 'react';
import Img from '../../images/sample-bg10.jpg';
import Img3 from '../../images/bg1.jpg';
import Img2 from '../../images/card1.jpg';
import Img4 from '../../images/card2.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './about.css';

const About = props => (
  <>
    <section
      className="clean-block about-us"
      style={{
        backgroundImage: `url(${Img})`,
        color: 'rgba(9,162,255,0.85)',
        minHeight: '70vh',
      }}>
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">About Us</h2>
          <p>
            Koris Aviation and Consultancy Limited was incorporated in Nigeria
            in 2013 to conduct business globally. The Company provides objective
            technical, financial and commercial guidance to aviation clients to
            navigate the complex and evolving aviation industry.
          </p>
          <p>
            It ensures that clients receive the best value for their investment
            when it comes to corporate, private, military, commercial, cargo,
            air ambulance, surveillance and agricultural (crop dusters)
            aircraft. We provide a range of consulting services for business and
            high network individuals who are considering or are currently
            operating or maintaining aircraft. We help aviation clients manage
            their assets and operations, mitigate risk and maximize returns on
            investments.
          </p>
        </div>
      </div>
    </section>
    <section
      className="clean-block dark"
      >
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Our Team</h2>
          <br/>
          <div className="row justify-content-center">
            {[
              {
                name: 'Hajja Kaltum Muhammed',
                text:
                  'Loren impsusKoris Aviation and Consultancy Limited was incorporated in Nigeria in',
                image: Img2,
              },
              {
                name: 'Shettima Mohammed Mairami, Esq.',
                text:
                  'Loren impsusKoris Aviation and Consultancy Limited was incorporated in Nigeria in',
                image: Img4,
              },
            ].map((member, i) => (
              <TeamMember
                key={i}
                img={member.image}
                name={member.name}
                text={member.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;

const TeamMember = ({ img, name, text }) => (
  <div className="col-sm-6 col-lg-4">
    <div className="card clean-card text-center">
      <img className="card-img-top w-100 d-block" src={img} />
      <div className="card-body-info">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{text}</p>
        <div className="icons">
          <a href="#">
            <FaFacebook size={30} />
          </a>
          <a href="#">
            <FaInstagram size={30} />
          </a>
          <a href="#">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  </div>
);
