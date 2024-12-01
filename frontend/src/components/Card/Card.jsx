import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

function Card() {
  const [isGetStartedClicked, setGetStartedClicked] = useState(false);

  const navigate = useNavigate();
  const updateAction = () => {
    setGetStartedClicked(true);
    navigate("/survey");
  };

  return (
    <div className="page-container d-flex align-items-center justify-content-end " >
      <div className="card-container text-center">
        <div className="card-images d-flex justify-content-center gap-3 mb-3">
          <img src="/pet_1.jpeg" alt="pet-1" />
          <img src="/pet_2.jpeg" alt="pet-2" />
          <img src="/pet_3.jpeg" alt="pet-3" />
        </div>

        <div className="card-text">
          <h1>Find your match</h1>
          <p>By filling out the questionnaire</p>
        </div>

        <div className="card-divider my-4"></div>

        <div className="card-footer d-flex justify-content-center align-items-center gap-2">
          <div className="mb-0">Get Started</div>
          <button
            className="questionnaire_arrow btn p-0"
            onClick={updateAction}
          >
            <img src="/arrow_2.jpeg" alt="arrow to questionnaire" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
