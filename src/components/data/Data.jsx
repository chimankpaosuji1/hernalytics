/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import map from "../../assets/img/map.png";
import read from "../../assets/img/read.png";
import "./data.css";

const Data = () => {
  return (
    <section className="data" id="data">
      <Container>
        <Row className='align-items-center justify-content-center'>
          <Col size={12} className='col1'>
            <h1>Post Election Data <span>PRESIDENTIAL / 2023</span></h1>
          </Col>         

        </Row>   

        <Row className='align-items-center justify-content-center'>
          <Col size={12} className="col2">
            <h2>Presidential Race</h2>
            <div>
                <span>Election</span>
                <span>Presidential</span>
                <span>2023</span>
            </div>
          </Col>
          </Row>  

           <Row className='align-items-center justify-content-center'>
          <Col size={12} className="col2">
           <img src={map} alt="map"/>
          </Col>
          </Row>
          <Row className='align-items-center justify-content-center'>
          <Col size={12} className="col2">
           <img src={read} alt="read"/>
          </Col>
          </Row>
      </Container>
    </section>
  );
};

export default Data;
