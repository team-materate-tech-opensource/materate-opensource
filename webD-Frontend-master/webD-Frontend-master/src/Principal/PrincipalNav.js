import React from "react";
import styled from "styled-components";

import { BsBoxArrowLeft } from "react-icons/bs";
// import { MdArrowDropDown } from "react-icons/md";
import logo from "../assets/FinalLogo.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Styles = styled.div`
  .react-icons {
    color: white;
  }
  .btn-custom {
      color: white;
      paddgin: 0.5rem 1.3rem;
  }
  .header {
    background: #042348;
  }
  .clicked {
    background: #042348;
    box-shadow: -3px -3px 10px #03376b inset, 3px 3px 10px #000000 inset;
    border-radius: 12px;
    padding: 0.9rem 2rem;
    font-weight: 700;
  }
  .unclicked {
    background: #042348;
    box-shadow: -3px -3px 10px #03376b, 3px 3px 10px #000000;
    border-radius: 12px;
    padding: 0.9rem 2rem;
    font-weight: 700;
  }
  .logo-container img {
      max-height: 70px;
  }
`;

class StudentNav extends React.Component {
    render() {
        return (
            <Styles>
                <div className="header row no-gutters p-1 align-items-center" style={{ color: "white" }}>
                    <div className="p-2 logo-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="text-center px-2">
                        <BsBoxArrowLeft size="30" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-white m-0" style={{ fontWeight: "700" }}> RESULTS PORTAL FOR</h2>
                    </div>
                    <div className="font-weight-bold px-3 px-lg-5">
                        CLASS :&nbsp; &nbsp;{" "}
                        <select className="select-small">
                            <option> I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                            <option>VI</option>
                            <option>VII</option>
                            <option>VIII</option>
                            <option>IX</option>
                            <option>X</option>
                            <option>XI</option>
                            <option>XII</option>
                        </select>
                        {/* <MdArrowDropDown /> */}
                        &nbsp; &nbsp; DIV:&nbsp; &nbsp;
                        <select className="select-small">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                        {/* <MdArrowDropDown /> */}
                    </div>
                    <div className="px-3 ml-auto text-center">
                        <NavLink to="/principal/results" style={{ textDecoration: "none" }}>
                            <div className={`${this.props.results ? "clicked" : "unclicked"} btn btn-custom`}>
                                DETAILED RESULTS
                            </div>
                        </NavLink>
                    </div>
                    <div className="px-3 text-center">
                        <NavLink to="/principal/analysis" style={{ textDecoration: "none" }}>
                            <div className={`${this.props.analysis ? "clicked" : "unclicked"} btn btn-custom`} >
                                TEST ANALYSIS
                            </div>
                        </NavLink>
                    </div>
                    <div className="px-3 text-center">
                        <NavLink to="/principal/responses" style={{ textDecoration: "none" }}>
                            <div className={`${this.props.responses ? "clicked" : "unclicked"} btn btn-custom`}>
                                ANSWER KEY
                            </div>
                        </NavLink>
                    </div>
                </div>
            </Styles>
        );
    }
}
export default StudentNav;