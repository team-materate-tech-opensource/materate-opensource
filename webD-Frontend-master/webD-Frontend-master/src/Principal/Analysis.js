import React from "react";
import PrincipalTopBar from "../components/PrincipalTopBar";
import PrincipalHello from "../components/PrincipalHello";
// import Back from "../components/Back";

import SideButtons from "../components/SideButtons";
import Picker from "../components/Picker";
import PrincipalNavBar from "../components/PrincipalNavBar";

import { Button } from "react-bootstrap";

const clicked = [false, true];
const tabnames = ["CONCEPT WISE", "DIFFICULTY LEVEL WISE"];
const paths = ["", "/schoolanalysis"];

class Analysis extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PrincipalTopBar />

        <div className="row px-5 py-2 mr-3 justify-content-between align-items-center">
          <PrincipalHello />
          <Picker />
        </div>

        <div className="row p-3 no-gutters">
          <div className="col-md-3">
            <h1 className="mb-5" style={{ color: "grey" }}>
              ANALYSIS
            </h1>
            <SideButtons clicked={clicked} tabNames={tabnames} paths={paths} />
          </div>
          <div className="col-md-8 pr-3 py-3">
            <div>
              To check difficulty level of each question,{" "}
              <i style={{ color: "#0080fe" }}>CLICK HERE</i>
              {"        "} Difficulty Level of the question paper:{" "}
              <span style={{ color: "#f12222" }}>Hard</span>
            </div>
            <div
              className="p-5 justify-content-center"
              style={{ border: "2px solid #0080fe" }}
            >
              <div className="row justify-content-center">
                <Button
                  variant="primary"
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    background: "#737373",
                    border: "2px solid #737373",
                    borderRadius: "47px",
                  }}
                >
                  Question asked in each DL
                </Button>
                <Button
                  variant="primary"
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    background: "#0080fe",
                    border: "2px solid #0080fe",
                    borderRadius: "47px",
                  }}
                >
                  Success Rate in each DL
                </Button>
              </div>

              <div
                className="row p-5 my-4 justify-content-center text-center"
                style={{ border: "1px solid #000000", borderRadius: "30px" }}
              >
                GRAPH HERE
              </div>

              <div className="row justify-content-center">
                <Button
                  variant="primary"
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    background: "#737373",
                    border: "2px solid #737373",
                    borderRadius: "47px",
                  }}
                >
                  Overall
                </Button>
                <Button
                  variant="primary"
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    background: "#0080fe",
                    border: "2px solid #0080fe",
                    borderRadius: "47px",
                  }}
                >
                  Chapter Wise
                </Button>
                <Button
                  variant="primary"
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    background: "#0080fe",
                    border: "2px solid #0080fe",
                    borderRadius: "47px",
                  }}
                >
                  Student Wise
                </Button>
              </div>
            </div>
          </div>

          {/* <Col>
            <Row>ANALYSIS</Row>
            <Row>
              <SideButtons  />
            </Row>
          </Col>
          <Col>
            <Row>
              To check difficulty Level of each question, CLICK HERE{"       "}
              Difficulty Level of the question paper: HARD{" "}
            </Row>
            <Row style={{ border: "2px solid #0080fe" }}>
              <Row>
                <Button variant="primary">Questions asked in each DL</Button>
                <Button variant="primary">Success Rate in each DL</Button>
              </Row>
              <Row>GRAPH HERE</Row>
              <Row>
                <Button variant="primary">Overall</Button>
                <Button variant="primary">Chapter Wise</Button>
                <Button variant="primary">Student wise</Button>
              </Row>
            </Row>
          </Col> */}
        </div>

        <PrincipalNavBar />
      </React.Fragment>
    );
  }
}
export default Analysis;
