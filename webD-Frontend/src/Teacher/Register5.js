import React from "react";
import styled from "styled-components";
// import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom"

import StepProgress from "../components/StepProgress";

import "./Register.css";
import background from "../assets/login.png";
import { FaChevronRight } from "react-icons/fa";

const Content = styled.div`
min-height: 100%;
padding-top: 80px;
background: linear-gradient(to bottom, #0984fd,#0984fd);
  .container {
    font-size: 1rem;
    padding: 20px 10px 0px 10px;
    background-size: 90% 100%;
    
    background-repeat: no-repeat;
    background-position: center;
}
@media(min-width: 768px){
  .container {
      background-image: url(${background});
      background-color: transparent;
      padding: 50px 100px 100px 100px;
  }
}
  @media (max-width: 768px) {
    background-image: none;
  }
  .welcome {
    font-size: 90px;
    font-weight: 600;
    color: #0080fe;
    opacity: 1;
    letter-spacing: 0px;
  }
  @media (max-width: 576px) {
    .welcome {
      font-size: 30px;
    }
  }
  .sub-text {
    font: Medium 27px/33px Montserrat;
    color: #3c4041;
    opacity: 1;
    letter-spacing: 0px;
  }
  .btn {
    color: white;
    text-decoration: none;
    background-color: #0080fe 0% 0% no-repeat padding-box;
    border-radius: 17px;
    max-width: 400px;
  }
`;

const display = [1, 2, 3, 4];

class Register5 extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 5,
    };
  }
  componentDidMount() {
    document.body.style.fontFamily = "Montserrat";
  }
  componentWillUnmount() {
    document.body.style.background = "whitesmoke";
  }

  render() {
    return (
      <Content>
        <div className="container minh-100 d-flex align-items-center justify-content-center flex-column">
          <div className="line">
            <StepProgress
              display={display}
              currentStep={this.state.currentStep}
            />
          </div>
          <div className="welcome text-center mx-1">Welcome Aboard!</div>
          <div className="sub-text text-center mb-5">
            You have successfully completed your registration!
          </div>
          <div className="text-center w-100">
            <NavLink
              to="/dashboard"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <div className="btn btn-primary form-control">
                Continue Learning <FaChevronRight />
              </div>
            </NavLink>
          </div>
        </div>
      </Content>
    );
  }
}
export default Register5;
