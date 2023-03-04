import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
// import lunchpad from '../../assests/svg/dropdown/lunchpad.svg';
// import credit from '../../assests/svg/dropdown/credit.svg';
// import airdrop from '../../assests/svg/dropdown/airdrop.svg';
import './navbarhead.css';

function Navbarhead() {

  const [activeLink, setActiveLink] = useState('overview');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container >
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/#whoweare" className={activeLink === 'whoweare' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('whoweare')}>ABOUT US</Nav.Link>          

            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic" className="wealth">OUR COMMUNITIES
              </Dropdown.Toggle>
              
            </Dropdown>

          
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic" className="wealth">ELECTION DATA
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/lunchpad" className={activeLink === 'whoweare' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('whoweare')}>
                  <div className='drop'>                    
                    <div className='drops'>Election Day Live Updates</div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="/postelection" className={activeLink === 'whoweare' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('whoweare')}>
                  <div className='drop'>                    
                    <div className='drops'>Post- Election Analysis</div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>



            <Nav.Link href="/#crypto" className={activeLink === 'crypto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('crypto')}>E-BUDDY
            </Nav.Link>
            <Nav.Link href="/#crypto" className={activeLink === 'crypto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('crypto')}>VEO PLATFORM
            </Nav.Link>
            <Nav.Link href="/#crypto" className={activeLink === 'crypto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('crypto')}>LOGIN
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <a href='https://ultainfinityairdropandbounty.com/' target="_blank">
              <button className="vvd"><span>SIGN UP</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbarhead;