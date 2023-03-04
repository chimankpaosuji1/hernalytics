
import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
    return (
        <section className="banner" id="banner">           
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col size={12} className='left'>
                    <h1>Get Real-Time updates on the Nigeria 2023 Elections</h1>
                    <p>
                    Become a more informed and active citizen by accessing and engaging on just the information you need on the coming elections.
                    </p>
                    <div className="button">
                        <a href="#" target="_blank" >
                            <button type="submit" className="but1">SIGN UP</button>
                        </a>
                        <a href="#" target="_blank" >
                            <button type="submit" className="but2">GET ELECTION UPDATE</button>
                        </a>
                    </div>
                    
                    </Col>
                    
                </Row>
            </Container>            
        </section>
    );
};

export default Banner;
