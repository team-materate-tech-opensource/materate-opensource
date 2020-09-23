import React from "react";
import styled from "styled-components";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom"

import StepProgress from "../components/StepProgress";
import background from "../assets/login.png";
import { FaChevronRight } from "react-icons/fa";

const Styles = styled.div`
min-height: 100%;
padding-top: 80px;
background: linear-gradient(to bottom, #0984fd,#0984fd);
  .container-register {
    font-size: 1rem;
    
    background-size: 90% 100%;
       
    background-repeat: no-repeat;
    background-position: center;
}
@media(min-width: 768px){
  .container-register {
      background-image: url(${background});
      background-color: transparent;
      padding: 50px 100px 100px 100px;
  }
}
  @media (max-width: 768px) {
    background-image: none;
  }
  .labels {
    font: Medium 20px/24px Montserrat;
    letter-spacing: 0px;
    color: #0032ad;
    padding: 0 !important;
  }
`;

const display = [1, 2, 3, 4];
class Register1 extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
    };
  }

  render() {
    return (
      <Styles>
        <div className="container-register minh-100 d-flex align-items-center justify-content-center flex-column">
          <div className="line">
            <StepProgress
              display={display}
              currentStep={this.state.currentStep}
            />
          </div>
          <div className="container">
            <div className="heading">Register Here</div>
            <div className="sub-heading">Academic Details</div>
            <div className="sub-sub-heading">Enter Details</div>
            <div>
              <form className="w-100 py-3">
                <div className="row no-gutters">
                  <div className="col-12 col-md-6 px-3">
                    <div class="form-group">
                      <label className="labels">
                        Name<div className="text-danger d-inline">*</div>
                      </label>
                      <input className="form-control" type="text" name="name" />
                    </div>
                    <div class="form-group">
                      <label className="labels">
                        Class<div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="class"
                      />
                    </div>
                    <div class="form-group">
                      <label className="labels">
                        Registration Number at School
                        <div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="regNum"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-3">
                    <div class="form-group">
                      <label className="labels">
                        Date of Birth
                        <div className="text-danger d-inline">*</div>
                      </label>
                      <input className="form-control" type="text" name="dob" />
                    </div>
                    <div class="form-group">
                      <label className="labels">
                        School<div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="school"
                      />
                    </div>
                    <div class="form-group">
                      <label className="labels">
                        Student Email-ID
                        <div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-3">
              <div className="next text-center">
                <NavLink
                  to="/register2"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                >
                  <Button variant="primary" className="py-2">
                    Next <FaChevronRight />
                  </Button>{" "}
                </NavLink>
              </div>
              <div className="already-acc pt-3">
                Already have an account?
                <NavLink
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#0032ad",
                    display: "inline",
                  }}
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}
export default Register1;