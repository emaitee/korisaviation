import React from 'react';
import './footer.css';
import { FaQuestionCircle, FaHome,FaReadme } from 'react-icons/fa'
import { GoLaw } from "react-icons/go";

const Footer = props => (
  <footer className="page-footer dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <h5>Get Started</h5>
          <ul>
            <li>
              <a href="#"><FaHome/>Home</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>About Us</h5>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>Support</h5>
          <ul>
            <li>
              <a href="#"><FaQuestionCircle  />FAQ</a>
            </li>
            <li>
              <a href="#">Help desk</a>
            </li>
            <li>
              <a href="#">Forums</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>Legal</h5>
          <ul>
            <li>
              <a href="#"><FaReadme />Terms of Service</a>
            </li>
            <li>
              <a href="#"><GoLaw/>Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <p>&copy 2018 DI HUB</p>
    </div>
  </footer>
);

export default Footer;
