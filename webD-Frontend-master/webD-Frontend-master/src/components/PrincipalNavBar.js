import React from "react";
import Buttons from "../components/Buttons";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Styles = styled.div`
  // .navbarContainer {
  //   height: 75px;
  // }

  // .btn {
  //   height: 72px;

  //   font: 24px/32px Segoe UI;
  //   color: #ffffff;
  //   // letter-spacing: 4.2px;
  //   border-radius: 52px;
  //   background: #0080fe;
  //   border: 2px solid #0080fe;
  // }
`;

class PrincipalNavBar extends React.Component {
  render() {
    const Navbar = this.props.links.map((item, index) => (
      <div className="col-12 col-md-4 text-center mb-2" key={index}>
        <NavLink to={item}>
          <Buttons text={this.props.text[index]} borderRadius="52px" />
        </NavLink>
      </div>
    ));

    return (
      <Styles>
        {/* <div className="navbarContainer">
          <Button
            variant="primary"
            style={{
              marginLeft: "3rem",
              marginRight: "0.5rem",
              width: "30%",
              textAlign: "center",
            }}
          >
            OVERALL SCHOOL PERFORMANCE
          </Button>
  
          <Button variant="primary" style={{ width: "25%", textAlign: "center" }}>
            RESULT ANALYSIS
          </Button> */}

        {/* <Button
            variant="primary"
            style={{
              marginLeft: "0.5rem",
              width: "32%",
              position: "relative",
              marginTop: "0px",
              paddingTop: "0px",
            }}
          >
            MISCONCEPTIONS, RESPONSES {"&"}
            <br /> ANSWER KEYS
          </Button>
        </div> */}

        <div className="row px-5 mb-2 justify-content-center align-items-center">
          {/* <div className="col-12 col-md-4 text-center mb-2">
            <NavLink to="/schoolperformance">
              <Buttons text="OVERALL SCHOOL PERFORMANCE" borderRadius="52px" />
            </NavLink>
          </div>
          <div className="col-12 col-md-4 text-center mb-2">
            <NavLink to="/testanalysis">
              <Buttons text="RESULT ANALYSIS" borderRadius="52px" />
            </NavLink>
          </div>
          <div className="col-12 col-md-4 text-center mb-2">
            <NavLink to="/principalresponses">
              <Buttons
                text="MISCONCEPTIONS, RESPONSES, ANSWER KEYS"
                borderRadius="52px"
              />
            </NavLink>
          </div> */}
          {Navbar}
        </div>
      </Styles>
    );
  }
}
export default PrincipalNavBar;

PrincipalNavBar.defaultProps = {
  links: ["/schoolperformance", "/testanalysis", "/principalresponses"],
  text: [
    "OVERALL SCHOOL PERFORMANCE",
    "RESULT ANALYSIS",
    "MISCONCEPTIONS, RESPONSES, ANSWER KEYS",
  ],
};
