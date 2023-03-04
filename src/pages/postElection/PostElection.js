
import './postElection.css';
import Navbarhead from '../../components/navbarhead/Navbarhead';

import Footer from '../../components/footerPost/Footer';
import Data from '../../components/data/Data';


function PostElection() {
  return (
    <div className="postelection" id="postelection">
      
     <Navbarhead/>
     <Data/>
     <Footer/>
    </div>
  );
}

export default PostElection;
