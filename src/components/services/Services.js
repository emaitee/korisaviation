import React from 'react';
import styled from 'styled-components';
import data from './data.json';
import './services.css';
import { IoIosAirplane, IoIosCellular } from "react-icons/io"
import { FaPlane, FaTruck } from 'react-icons/fa';
import { GoBroadcast, GoLocation, GoGraph } from "react-icons/go"
import { FiTrendingUp } from "react-icons/fi";
import { TiSpanner } from "react-icons/ti";


// import { MdFlight } from 'react-icons/md';

const Wrapper = styled.div`
  background-color: #bdc9d4;
  padding: 2em;
  margin: 1em;
`;

const Span = styled.span`
  color: blue;
  cursor: pointer;

  :hover {
    color: brown;
  }
`;

const Services = props => (
  <section className="clean-block features dark">
    <div className="container">
      <div className="block-heading">
        <h2 className="text-info">Our Services</h2>
        <p>
          We work with clients to help identify the opportunities/risks, new
          strategy, business plan, optimal fleet types and network design;
          airline business model, growth rates and airline performance targets
          that can be easily followed and implemented. We provide ongoing
          support to new and transforming aviation organizations. Our services
          include:
        </p>
      </div>
      <div className="row justify-content-center">
        {data.map((item, i) => (
          <Service key={i} data={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = { truncated: true };
  }
  render() {
    const { title, text, icon } = this.props.data;
    return (
      <div className="col-md-5 feature-box">
        <i className="icon-pencil icon">
          {icon === 'plane' && <IoIosAirplane size={30} />}
          {icon === 'truck' && <FaTruck size={30} />}
          {icon === 'location' && <GoLocation size={30} />}
          {icon === 'cellular' && <GoBroadcast size={30} />}
          {icon === 'analysis' && <GoGraph size={30}/>}
          {icon === 'trending' && <FiTrendingUp size={30}/>}
          {icon === 'spanner' && <TiSpanner />}
          {/* {icon === 'cellular' && <IoIosCellular size={30} />} */}
          {/* <MdFlight size={30} /> */}
        </i>

        <h4>{title}</h4>
        {this.state.truncated ? (
          <p>
            {text.slice(0, 100)}...{' '}
            <Span onClick={() => this.setState({ truncated: false })}>
              Read more
            </Span>
          </p>
        ) : (
          <p>{text}</p>
        )}
      </div>
    );
  }
}
