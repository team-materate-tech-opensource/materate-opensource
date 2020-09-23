import React from "react";
import styled from "styled-components";

import { BsBoxArrowLeft } from "react-icons/bs";
// import { MdArrowDropDown } from "react-icons/md";
import logo from "../assets/FinalLogo.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

// 

const Styles = styled.div`
    .react-icons {
        color: white;
    }
    .header {
        background: transparent linear-gradient(273deg, #0032AD 0%, #0080FE 100%) 0% 0% no-repeat padding-box;
        padding: 10px 0px;
    }
    .clicked {
        background: transparent;
        box-shadow: -5px -5px 10px #0366cf inset, 5px 5px 10px #102650e0 inset;
        border-radius: 16px;
        border: 0px solid transparent;
        padding: 0.9rem 2rem;
        font-weight: 700;
    }
    .unclicked {
        background: #004abfe0 0% 0% no-repeat padding-box;
        box-shadow: -5px -5px 10px #0366cf, 5px 5px 10px #102650e0;
        border-radius: 16px;
        border: 0px solid transparent;
        padding: 0.9rem 2rem;
        font-weight: 700;
    }
    .logo-container img{
        max-height: 75px;
    }
`;

class StudentNav extends React.Component {
    render() {
        return (
            <Styles>
                <div className="header row no-gutters align-items-center" style={{ color: "white" }}>
                    <div className="col-md-1 font-weight-bold text-center">
                        <BsBoxArrowLeft size="32" />
                        &nbsp; EXIT
                    </div>
                    <div className="col-md-auto logo-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="col-md-2 text-center">
                        <h1 style={{ color: "white", fontWeight: "800" }}> MATERATE</h1>
                    </div>
                    <div className="col-md-auto font-weight-bold text-center">
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
                    <div className="col-md-auto px-3 ml-auto text-center">
                        <NavLink to="/teacher/results" style={{ textDecoration: "none" }}>
                            <Button className={this.props.answerkey ? "clicked" : "unclicked"}>
                                DETAILED RESULTS
                            </Button>
                        </NavLink>
                    </div>
                    <div className="col-md-auto px-3 text-center">
                        <NavLink to="/teacher/analysis" style={{ textDecoration: "none" }}>
                            <Button className={this.props.analysis ? "clicked" : "unclicked"}>
                                TEST ANALYSIS
                            </Button>
                        </NavLink>
                    </div>
                    
                </div>
            </Styles>
        );
    }
}
export default StudentNav;

StudentNav.defaultProps = {
    clicked: [false, true, false],
    //answer key> analysis> plan
};