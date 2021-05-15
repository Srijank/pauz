import "./LandingPage.css";
import Button from "../smallerComponents/Button";

// components
import Navbar from "../smallerComponents/Navbar";
import Landpage1 from "../../assets/images/Landpage1.png";
import Landpage2 from "../../assets/images/Landpage2.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="LandingPage container-1">
      <Navbar />
      <main className="container-2 main">
        <img src={Landpage1} alt="LANDING Page" className="landingimage"/>
        <p className="mainheading"><b>Pauz</b></p>
        <p className="miniheading"><b>A Private Social Media Platform So You can  connect with<span style={{ color: "orange" }}> your close ones</span>
        </b>

        </p>
        <Link to ="/Signup" ><Button className="primary"><b>Sign Up Now</b></Button></Link>
        
        <div className="content">
        <h2 className="head">Connect with only close ones</h2>
         <p className="par">We connect our users only to their close friends, family and known ones so they can post whatever they want without being judged by other people.</p>
          <br/><br/><br/><br/>
         <h2 className="head">No worries in Posting content</h2>
         <p className="par">Pauz allows you to post your pictures and by default only your connections will be able to see those, so you can post without worrying.</p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
