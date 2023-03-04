import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import moment from 'moment/moment'
import './footer.css';

function Footer () {
  const m = moment()
    return (
      <section className='footer' id='brochure'>
        <Container>
          <Row className='align-items-center justify-content-center row1'>
            <Col size={12} md={4} className='col1'>
            <img src={logo} alt="Logo" />
            <p> &copy; {`${m.format("YYYY")} Hernalytics`}</p>
            </Col>
            <Col size={12} md={2} className='col'>
              <h3>About</h3>
              <h2>Our Story</h2>
              <h2>Blog</h2>
              <h2>About Hernalytics</h2>
              <h2>Videos</h2>
            </Col>
            <Col size={12} md={2} className='col'>
               <h3>Support</h3>
              <h2>FAQs</h2>
              <h2>Privacy Policy</h2>
              <h2>Terms of Service</h2>
              <br/>
            </Col>
            <Col size={12} md={2} className='col'>
              <h3>Lets Chat!</h3>
              <h2>hernalytics@gmail.com</h2>
              <br/><br/><br/>
            </Col>
            
          </Row>
          <hr />
          
        </Container>
      </section>
    )
  }


export default Footer
