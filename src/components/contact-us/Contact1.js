import React from 'react';
import Img from '../../images/bg2.jpg';
import './contact.css';

const Contact = props => (
  <section id="contact" style={{ backgroundImage: `url(${Img})` }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="text-uppercase section-heading">Contact Us</h2>
          <h3 className="section-subheading text-muted">Office Address:</h3>
          <p>No. 1435, Titan Road, NAF Valley Estate,</p>
          <p>Asokoro District, Abuja - Nigeria.</p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="contactForm" noValidate>
            <div className="form-row">
              <div className="col col-md-6">
                <div className="form-group">
                  <input
                    id="name"
                    className="form-control"
                    required
                    type="text"
                    placeholder="Your Name *"
                  />
                  <small className="form-text text-danger flex-grow-1 help-block lead" />
                </div>
                <div className="form-group">
                  <input
                    id="email"
                    className="form-control"
                    required
                    type="email"
                    placeholder="Your Email *"
                  />
                  <small className="form-text text-danger help-block lead" />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    required
                    type="tel"
                    placeholder="Your Phone *"
                  />
                  <small className="form-text text-danger help-block lead" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    id="message"
                    className="form-control"
                    required
                    placeholder="Your Message *"
                  />
                  <small className="form-text text-danger help-block lead" />
                </div>
              </div>
              <div className="col">
                <div className="clearfix" />
              </div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
//   <section id="contact" className="map">
//     <iframe
//       allowFullScreen
//       frameBorder="0"
//       width="100%"
//       height="400"
//       src="www.google.com/maps/embed/v1/place?key=+&Paris%2C+France&zoom=11"
//     />
//   </section>
