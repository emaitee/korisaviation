import React, { Component } from 'react';
import { Container, Card, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1em;
  background-color: #0277BD
  margin: 1em 2em;
  background-image: linear-gradient(to left, #0277BD, #ffff8F);
`;

const About = props => (
  <div>
    <div>
      <h1>KORIS AVIATION AND CONSULTING COMPANY</h1>
      <p className="lead">
        Koris Aviation and Consultancy Limited was incorporated in Nigeria in
        2013 to conduct business globally. The Company provides objective
        technical, financial and commercial guidance to aviation clients to
        navigate the complex and evolving aviation industry. It ensures that
        clients receive the best value for their investment when it comes to
        corporate, private, military, commercial, cargo, air ambulance,
        surveillance and agricultural (crop dusters) aircraft. We provide a
        range of consulting services for business and high network individuals
        who are considering or are currently operating or maintaining aircraft.
        We help aviation clients manage their assets and operations, mitigate
        risk and maximize returns on investments.
      </p>
      <hr className="my-2" />
      <p>
        We work with clients to help identify the opportunities/risks, new
        strategy, business plan, optimal fleet types and network design; airline
        business model, growth rates and airline performance targets that can be
        easily followed and implemented. We provide ongoing support to new and
        transforming aviation organizations
      </p>
      <p className="lead">
        <Link color="primary" to="/services">
          Our Services
        </Link>
      </p>
    </div>
  </div>
);

export default About;
