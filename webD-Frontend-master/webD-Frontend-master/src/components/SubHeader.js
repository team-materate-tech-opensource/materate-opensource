import React from "react";
import Picker from "./Picker";

class SubHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row pt-0 align-items-center">
          <div className="col-md-6 pl-4">
            <h6 style={{ color: "#0080fe", marginBottom: "0px" }}>
              {"< "}BACK
            </h6>
            <h1
              style={{
                marginBottom: "0px",
                font: "Bold 43px/50px Open Sans",
                color: "#000000",
              }}
            >
              {this.props.subheading}
            </h1>
          </div>

          <div
            className="col-md-auto ml-auto px-5"
            style={
              {
                // position: "absolute",
                // paddingLeft: "85%",
                // paddingRight: "0.2rem",
              }
            }
          >
            <Picker />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SubHeader;
