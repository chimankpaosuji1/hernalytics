
import { Col, Container, Row } from "react-bootstrap";
import countdown from "../../assets/img/countdown.png";
import election from "../../assets/img/election.png"
import "./election.css";

const Election = () => {
  return (
    <section className="election" id="election">
      <Container>
        <Row className='align-items-center justify-content-center'>
          <Col size={12} className='col1'>
            <img src={countdown} alt="countdown" />
          </Col>

        </Row>

        <Row className='align-items-center justify-content-center'>
          <Col size={12} md={4} className='col2'>
            <h5>Election</h5>
            <p>Get Information on the Nigeria
              2023 Elections</p>
            <h4>Explore the data;</h4>

            <div className="button">
              <button className="but1">Election Day Live Updates</button>
              <button className="but2">Post-Election Information</button>
            </div>

          </Col>

          <Col size={12} md={8} className='col3'>
            <img src={election} alt="election" />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Election;
