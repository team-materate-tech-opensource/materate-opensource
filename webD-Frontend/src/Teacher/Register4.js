import React from "react";
// import styled from "styled-components";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom"
import styled from "styled-components";

import StepProgress from "../components/StepProgress";

import "./Register.css";
import background from "../assets/login.png";
import { FaChevronRight } from "react-icons/fa";

const display = [1, 2, 3, 4];

const Styles = styled.div`
min-height: 100%;
padding-top: 80px;
background: linear-gradient(to bottom, #0984fd,#0984fd);
  .container-register {
    font-size: 1rem;
    padding: 20px 10px 0px 10px;
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
`;

class Register4 extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStep: 4,
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
                        Student's Username
                        <div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                      />
                    </div>
                    <div class="form-group">
                      <label className="labels">
                        Password<div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="password"
                      />
                    </div>
                    <div class="form-group">
                      <label className="labels">
                        Re-Enter Password
                        <div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="password2"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-3">
                    <div class="form-group">
                      <label className="labels">
                        Parent's Username
                        <div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="parentusername"
                      />
                    </div>
                    <div class="form-group">
                      <label className="labels">
                        Password<div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="parentpassword"
                      />
                    </div>
                    <div class="form-group">
                      <label className="labels">
                        Re-Enter Password
                        <div className="text-danger d-inline">*</div>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="parentpassword2"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-3">
              <div className="next text-center">
                <NavLink
                  to="/register5"
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
export default Register4;
