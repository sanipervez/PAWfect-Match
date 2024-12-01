import React from "react";
import "./LandingSection.scss"; 
import Card from "../../components/Card/Card"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const LandingSection = () => {
  return (
    <div className="landing-container d-flex align-items-center justify-content-start p-4" style={{ height: "70vh" }}>
      <div className="text-section ms-3" style={{ color: "white" }}>
        <h1 className="heading text-white fw-bold" style={{ fontSize: "60px" }}>Your PAWfect pet awaits</h1>
        <div className="sub-text text-white" style={{ fontSize: "24px" }}>
          We aim to create lifelong bonds between pets and their owners by
          providing a personalized matchmaking service.
        </div>
      </div>
      <Card className="card ms-4" /> {/* Push the card to the left */}
    </div>
  );
};

export default LandingSection;




