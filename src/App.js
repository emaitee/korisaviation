import React, { Component, lazy, Suspense } from 'react';
import logo from './images/logo-blue2.png';
import { Route, NavLink } from 'react-router-dom';
// import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavButton,
} from 'reactstrap';
import Footer from './components/footer/Footer';
// import NavB from './components/home/Nav';
const Home = lazy(() => import('./components/home/Home1'));
const About = lazy(() => import('./components/about-us/About1'));
const Contact = lazy(() => import('./components/contact-us/Contact1'));
const Services = lazy(() => import('./components/services/Services'));
const Partners = lazy(() => import('./components/partners/Partners'));
const Team = lazy(() => import('./components/team/Team'));

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="App-header">
        {/* <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container">
          <a className="navbar-brand logo" href="#">Brand</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navcol-1" className="collapse navbar-collapse">
            <ul className="nav navbar-nav ml-auto" >
              <li className="nav-item" role="presentation">
                <a className="nav-link" active href="#">Home</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" active href="#">Home</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" active href="#">Home</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav> */}
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img src={logo} style={{ height: '4em', width: '4.25em' }} />
              KORIS AVIATION
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavButton onClick={this.toggle}>
                    <NavLink
                      to="/home"
                      className="nav"
                      style={{ padding: '.5em .5em' }}>
                      Home
                    </NavLink>
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavButton onClick={this.toggle}>
                    <NavLink
                      to="/about"
                      className="nav"
                      style={{ padding: '.5em .5em' }}>
                      About Us
                    </NavLink>
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavButton onClick={this.toggle}>
                    <NavLink
                      to="/services"
                      className="nav"
                      style={{ padding: '.5em .5em' }}>
                      Our Services
                    </NavLink>
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavButton onClick={this.toggle}>
                    <NavLink
                      to="/partners"
                      className="nav"
                      style={{ padding: '.5em .5em' }}>
                      Our Partners
                    </NavLink>
                  </NavButton>
                </NavItem>

                <NavItem>
                  <NavButton onClick={this.toggle}>
                    <NavLink
                      to="/contact"
                      className="nav"
                      style={{ padding: '.5em .5em' }}>
                      Contact Us
                    </NavLink>
                  </NavButton>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        {/* <NavB /> */}
        <Suspense fallback={<i>please wait ...</i>}>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/services" exact component={() => <Services />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/partners" exact component={() => <Partners />} />
          <Route path="/team" exact component={() => <Team />} />
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
