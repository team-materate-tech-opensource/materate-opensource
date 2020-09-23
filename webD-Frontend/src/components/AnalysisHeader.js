import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

// const ids = ['abc','def', 'ghij', 'knvkf', 'hgughti'];
const Styles = styled.div`
  .custom-class {
    flex-grow: 1;
  }
  @media all and (max-width: 480px) {
    .custom-class {
      width: 100%;
      display: block;
      margin-bottom: 0.5rem;
    }
  }
`;

class AnalysisHeader extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     clicked: [false, false, false, false, false],
  //   };
  // }
  componentDidMount() {
    document.body.style.fontFamily = "Open Sans";
  }

  // handleClick = (index) => {
  //   let newState = {
  //     clicked: [false, false, false, false, false],
  //   };
  //   if (this.state.clicked[index] === false) {
  //     newState.clicked[index] = true;
  //   }

  //   this.setState(newState);
  // };

  render() {
    return (
      <Styles>
        <div
          className="row no-gutters"
          style={{
            height: "52px",
            background:
              "transparent linear-gradient(270deg, #0032AD 0%, #0080fe 100%) 0% 0% no-repeat padding-box",
            padding: "0px",
          }}
        ></div>

        <div
          className="row p-2 no-gutters"
          style={{
            // height: "80px",
            backgroundColor: "whitesmoke",
            alignItems: "center",
            padding: "0px",
            margin: "0px",
            width: "100%",
          }}
        >
          <div className="col-sm-12 col-md-auto px-2 custom-class text-center">Image</div>
          <div className="col-sm-12 col-md-auto px-2 pt-2 custom-class">
            <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#FDA50F",
                  border: "5px solid #fda50f",
                  color: "#ffffff",
                  borderRadius: "46px",
                  // height: "58px",
                  font: "Bold 18px/24px Open Sans",
                  textShadow: "0px 3px 6px #00000029",
                  letterSpacing: "0px",
                  textAlign: "center",
                  opacity: "1",
                  width: "100%",
                }}
              >
                Dashboard
              </Button>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-auto px-2 pt-2 custom-class">
            <NavLink to="/performance" style={{ textDecoration: "none" }}>
              <Button
                variant="primary"
                style={{
                  border: "3px solid #0080fe",
                  borderRadius: "47px",
                  font: "Bold 18px/24px Open Sans",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: `${this.props.clicked[1] ? "#ffffff" : "#0080fe"}`,
                  background: `${
                    this.props.clicked[1] ? "#0080fe" : "#ffffff"
                  }`,
                  boxShadow: "0px 2px 6px #00000040",
                  // height: "58px",
                  opacity: "1",
                  width: "100%",
                }}
                // onClick={() => this.handleClick(1)}
              >
                Overall Class Performance
              </Button>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-auto px-2 pt-2 custom-class">
            <NavLink to="/analysis" style={{ textDecoration: "none" }}>
              <Button
                variant="primary"
                style={{
                  border: "3px solid #0080fe",
                  borderRadius: "47px",
                  font: "Bold 18px/24px Open Sans",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: `${this.props.clicked[2] ? "#ffffff" : "#0080fe"}`,
                  background: `${
                    this.props.clicked[2] ? "#0080fe" : "#ffffff"
                  }`,
                  boxShadow: "0px 2px 6px #00000040",
                  // height: "58px",
                  opacity: "1",
                  width: "100%",
                }}
              >
                Analysis
              </Button>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-auto px-2 pt-2 custom-class">
            <NavLink to="/responses" style={{ textDecoration: "none" }}>
              <Button
                variant="primary"
                style={{
                  border: "3px solid #0080fe",
                  borderRadius: "47px",
                  font: "Bold 18px/24px Open Sans",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: `${this.props.clicked[3] ? "#ffffff" : "#0080fe"}`,
                  background: `${
                    this.props.clicked[3] ? "#0080fe" : "#ffffff"
                  }`,
                  boxShadow: "0px 2px 6px #00000040",
                  // height: "58px",
                  opacity: "1",
                  width: "100%",
                }}
                // onClick={() => this.handleClick(3)}
              >
                Responses {"&"} Answer Keys
              </Button>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-auto px-2 pt-2 custom-class">
            <NavLink to="/ordertofollow" style={{ textDecoration: "none" }}>
              <Button
                variant="primary"
                style={{
                  border: "3px solid #0080fe",
                  borderRadius: "47px",
                  font: "Bold 18px/24px Open Sans",
                  letterSpacing: "0px",
                  textAlign: "center",
                  color: `${this.props.clicked[4] ? "#ffffff" : "#0080fe"}`,
                  background: `${
                    this.props.clicked[4] ? "#0080fe" : "#ffffff"
                  }`,
                  boxShadow: "0px 2px 6px #00000040",
                  // height: "58px",
                  opacity: "1",
                  width: "100%",
                }}
                // onClick={() => this.handleClick(4)}
              >
                Order To Follow
              </Button>
            </NavLink>
          </div>
        </div>
      </Styles>
    );
  }
}

export default AnalysisHeader;
