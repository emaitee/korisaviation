import React from 'react';
require('./nav-jquery')
// import './nav-jquery.js';

const Nav = props => (
  <nav
    id="mainNav"
    className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">
        Brand
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        data-toggle="collapse"
        datatype="#navbarResponsive"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle Navigation">
        <i className="fa fa-bars">open</i>
      </button>
      <div id="navbarResponsive" className="collapse navbar-collapse">
        <ul className="nav navbar-nav ml-auto text-uppercase">
          <li className="nav-item" role="presentation">
            <a className="nav-link js-scroll-trigger" href="#">
              Services
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link js-scroll-trigger" href="#">
              Services
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link js-scroll-trigger" href="#">
              Services
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link js-scroll-trigger" href="#">
              Services
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
