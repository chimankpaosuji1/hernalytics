
import './landing.css';
import Banner from '../../components/banner/Banner';
import Navbarhead from '../../components/navbarhead/Navbarhead';
import Election from '../../components/election/Election';
import Footer from '../../components/footer/Footer';


function Landing() {
  return (
    <div className="landing">
     <Navbarhead/>
     <Banner/>
     <Election/>
     <Footer/>
    </div>
  );
}

export default Landing;
