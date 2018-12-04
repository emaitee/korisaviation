import React, { Component } from 'react';
import {
  Card,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardTitle,
  CardText,
} from 'reactstrap';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      message: null,
    };
  }

  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  onFormSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { name, message } = this.state;
    const { onInputChange, onFormSubmit } = this;
    return (
      <div className="row" style={{ paddingTop: '.5em' }}>
        <div className="col-xs-12 col-sm-12 offset-md-1 col-md-5 col-lg-1 col-lg-5">
          {/* <Card body style={{backgroundColor:"#b1def3",border:'transparent',color:'black'}}>
            <CardTitle>Company Information</CardTitle>
            <CardText>
            <p className="lead">Office Address:</p>
                <p> No. 1435,</p>
                <p> Titan Road,</p>
                <p> NAF Valley Estate, </p>
                <p> Asokoro District, </p>
                <p>Abuja - Nigeria.</p>
            </CardText>
            {/* <Button color="primary">Button</Button>
          </Card> */}
          <Jumbotron
            className="text-muted"
            style={{ backgroudColor: 'transparent' }}>
            <CardTitle>Company Information</CardTitle>
            <div className="row" style={{ padding: '1em' }}>
              <section className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p className="lead">Office Address:</p>
                <p> No. 1435,</p>
                <p> Titan Road,</p>
                <p> NAF Valley Estate, </p>
                <p> Asokoro District, </p>
                <p>Abuja - Nigeria.</p>
              </section>
             
              <section className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p className="lead">Contact:</p>
                <p> Website: korisaviation.com </p>
                <p>Email: info@korisaviation.com </p>
                <p>Tel: +2348059866799</p>
              </section>
            </div>
          </Jumbotron>
        </div>

{/* <Jumbotron
            className="text-muted"
            style={{ backgroudColor: 'transparent' }}>
            <h1 className="display-6">Company Information</h1>
            <div className="row" style={{ padding: '1em' }}>
              <section className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p className="lead">Office Address:</p>
                <p> No. 1435,</p>
                <p> Titan Road,</p>
                <p> NAF Valley Estate, </p>
                <p> Asokoro District, </p>
                <p>Abuja - Nigeria.</p>
              </section>
             
              <section className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <p className="lead">Contact:</p>
                <p> Website: korisaviation.com </p>
                <p>Email: info@korisaviation.com </p>
                <p>Tel: +2348059866799</p>
              </section>
            </div>
          </Jumbotron> */}

        <div className="col-xs-12 col-sm-12  col-md-5  col-lg-5">
          <Jumbotron className="text-muted">
            <CardTitle>Message Us</CardTitle>
           
            <Form onSubmit={onFormSubmit}>
              <FormGroup row>
                <Label
                  for="name"
                  className="col-xs-2 col-sm-2 col-md-3 col-lg-3">
                  Full name:{' '}
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control col-xs-7 col-sm-7 col-md-7 col-lg-7"
                  placeholder="fullname"
                  onChange={onInputChange}
                  value={name}
                />
              </FormGroup>
              <FormGroup row>
                <Label
                  for="name"
                  className="col-xs-2 col-sm-2 col-md-3 col-lg-3">
                  Email:{' '}
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control col-xs-7 col-sm-7 col-md-7 col-lg-7"
                  placeholder="email"
                  onChange={onInputChange}
                  value={name}
                />
              </FormGroup>
              <FormGroup row>
                <Label
                  for="message"
                  className="col-xs-2 col-sm-2 col-md-3 col-lg-3">
                  Message:{' '}
                </Label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  className="form-control col-xs-7 col-sm-7 col-md-7 col-lg-7"
                  placeholder="your message"
                  onChange={onInputChange}
                  value={message}
                />
              </FormGroup>
              <br />
              <hr className="my-2" />

              <button
                type="submit"
                className="btn btn-primary offset-xs-4 offset-sm-4 offset-md-5 offset-lg-5">
                Submit
              </button>
            </Form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
