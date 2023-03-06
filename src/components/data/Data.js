
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
          <Col size={12} md={6} className="col2">
            <h2>Presidential Race</h2>
            </Col> 
            <Col size={12} md={6} className="col2"> 
            <form className="div">
              <select className="span" name="Election Data">
                <option value="election">Election Data</option>
                <option value="election">Pre-Election</option>
                <option value="data">Election Day Live Update</option>
                <option value="election">Post-Election Analysis</option>
              </select>
              <select className="span" name="Presidential">
                <option value="election">Presidential</option>
                <option value="election">Gubanatorial</option>
                <option value="data">Senate</option>
                <option value="election">House of Representatives</option>
              </select>
              <select className="span" name="2023">
                <option value="election">2023</option>
                <option value="election">2019</option>
                <option value="data">2015</option>
                <option value="election">2011</option>
                <option value="election">2007</option>
                <option value="election">2003</option>
                <option value="election">1999</option>
                <option value="election">1995</option>
                <option value="election">1991</option>
                <option value="election">1987</option>
              </select>
            </form>
          </Col>
        </Row>

        <Row className='align-items-center justify-content-center'>
          <Col size={12} className="col2">
            <img src={map} alt="map" />
          </Col>
        </Row>
        <Row className='align-items-center justify-content-center'>
          <Col size={12} className="col2">
            <img src={read} alt="read" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Data;
