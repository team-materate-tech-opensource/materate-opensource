import React from "react";
import styled from "styled-components";

// import { BsBoxArrowLeft } from "react-icons/bs";
// import { MdArrowDropDown } from "react-icons/md";
import logo from "../assets/Logo-sm.png";
import { NavLink } from "react-router-dom";

const Styles = styled.div`
  background: transparent linear-gradient(273deg, #0032ad 0%, #0080fe 100%) 0%
    0% no-repeat padding-box;
  .clicked {
    background: #0080fe;
    box-shadow: inset 5px 5px 10px #0032ad;
    border-radius: 16px;
    border: 2px solid #0032ad;
  }

  .unclicked {
    background: #0049c5 0% 0% no-repeat padding-box;
    box-shadow: -5px -5px 10px #0366cf;
    border-radius: 16px;
    border: 2px solid #0049c5;
  }
  .btn-logout {
      background: white;
      color: #0032ad;
      border: 1px solid transparent;
      transition: 0.3s;
  }
  .btn-logout:hover {
      background: transparent;
      color: white;
      border: 1px solid white;
  }
`;

function StudentNav(props) {
    return (
        <Styles>
            <div className="p-2 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center p-2">
                    <div>
                        <img height="50" src={logo} alt="logo" />
                    </div>
                    <div className="font-weight-bold p-1">
                        <h1 className="text-white m-0"> MATERATE</h1>
                    </div>
                </div>
                <div className="text-white d-flex align-items-center pr-4 mb-2">
                    <a href="">
                        <div className="btn btn-logout" onClick={props.logout}>Logout</div>
                    </a>
                </div>
            </div>
        </Styles>
    )
}
export default StudentNav;