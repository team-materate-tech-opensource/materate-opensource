import React from "react";
import PrincipalTopBar from "../components/PrincipalTopBar";
import PrincipalHello from "../components/PrincipalHello";

import Picker from "../components/Picker";
import SideButtons from "../components/SideButtons";
import PrincipalNavBar from "../components/PrincipalNavBar";
import TableComponent from "../components/TableComponent";

// import { Row, Col } from "react-bootstrap";

const clicked = [true, false, false]; //prop for SideButtons component
const tabNames = [
  "% OF STUDENTS SCORING ABOVE q%",
  "AVERAGE MARKS",
  "TOP 100 STUDENTS OVERALL",
]; //prop for SideButtons component
const paths = ["/compareschools", "/averagemarks", "/topperlist"]; //props for SideButtons component
const data = [
  ["Rank", "% Students", "School"],
  ["1", "90", "ABC"],
  ["2", "90", "ABC"],
  ["3", "80", "ABC"],
  ["4", "50", "XYZ"],
]; //prop for TableComponent

class CompareSchools extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PrincipalTopBar />
        <div className="row px-5 py-2 mr-3 justify-content-between align-items-center">
          <PrincipalHello />
          <Picker />
        </div>

        {/* <Row
          style={{
            color: "#707070",
            fontSize: "24px",
            paddingLeft: "20px",
            marginTop: "10px",
          }}
        >
          COMPARATIVE SCHOOL RANKS AT A GLANCE
        </Row> */}

        <div className="row px-5 py-3" style={{ color: "#707070" }}>
          COMPARATIVE SCHOOL RANKS AT A GLANCE
        </div>
        <div className="row my-4 px-4 no-gutters">
          <div className="col-md-3 pl-2">
            <SideButtons clicked={clicked} tabNames={tabNames} paths={paths} />
          </div>
          <div
            className="col-md-4 justify-content-center align-items-center text-center"
            style={{ border: "3px solid #0090ff" }}
          >
            Graph here
            {/* <div
              className="row m-2 p-2"
              style={{
                border: "1px solid #000000",
                borderRadius: "20px",
                background: "green",
              }}
            ></div> */}
          </div>

          <div
            className="col-md-4 justify-content-center align-items-center"
            style={{ border: "3px solid #0090ff" }}
          >
            <div className="text-center">RANKING</div>

            <div className="container-fluid">
              <TableComponent data={data} />
            </div>
            <div className="text-center">
              You are ranked number:{" "}
              <span style={{ color: "#eeb52c" }}>TWO</span>
            </div>
          </div>
        </div>
        <PrincipalNavBar />
      </React.Fragment>
    );
  }
}
export default CompareSchools;
