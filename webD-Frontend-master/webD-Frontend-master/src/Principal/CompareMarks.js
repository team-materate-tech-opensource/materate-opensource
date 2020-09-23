import React from "react";
import PrincipalTopBar from "../components/PrincipalTopBar";
import PrincipalHello from "../components/PrincipalHello";
import PrincipalNavBar from "../components/PrincipalNavBar";
import Back from "../components/Back";

// import { Row, Col } from "react-bootstrap";

class CompareMarks extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PrincipalTopBar />
        <div className="row px-3 py-3 justify-content-between align-items-center">
          <div className="col-md-auto">
            <PrincipalHello />
          </div>

          <div className="col-md-auto mr-2 align-self-right ml-auto">
            <Back />
          </div>
        </div>

        <div
          className="row px-4"
          style={{ color: "#707070", fontSize: "24px" }}
        >
          COMPARATIVE SCHOOL RANKS AT A GLANCE
        </div>

        <div className="row px-5 my-5 py-2 justify-content-center align-items-center">
          <div
            className="col-md-4 py-5 mx-2"
            style={{
              border: "1px solid #707070",
              borderRadius: "47px",
            }}
          >
            GRAPH 1
          </div>
          <div
            className="col-md-4 py-5 mx-2"
            style={{
              border: "1px solid #707070",
              borderRadius: "47px",
            }}
          >
            GRAPH 2
          </div>
        </div>
        <PrincipalNavBar />
      </React.Fragment>
    );
  }
}
export default CompareMarks;
