import "./Navbar.scss";
import Login from "../../components/Login/Login";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import leftPaw from '/Users/saniapervez/PAWfect-Match/frontend/src/assets/leftPaw.png';

const Navbar = () => {
    return (
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#fffaf0" }}
      >
        <div className="container">
          <Link
            to="/" // Home or landing page link
            className="navbar-brand"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "35px",
              color: "#390510",
              backgroundImage: `url(${leftPaw})`, 
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center left",
              zIndex: 1,
              paddingLeft: "50px",
            }}
          >
            PAWfect Match
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="/about" // Link to the About page
                  className="nav-link"
                  style={{ color: "#390510" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/SurveyPage" // Link to the Questionnaire page
                  className="nav-link"
                  style={{ color: "#390510" }}
                >
                  Questionnaire
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/budget" // Link to the Budget page
                  className="nav-link"
                  style={{ color: "#390510" }}
                >
                  Budget
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/petedu" // Link to the Pet EDU page
                  className="nav-link"
                  style={{ color: "#390510" }}
                >
                  Pet EDU
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-dark ms-lg-3"
              style={{ color: "#390510" }}
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  