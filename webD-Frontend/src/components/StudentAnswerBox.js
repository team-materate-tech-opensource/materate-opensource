import React from "react";

class StudentAnswerBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="row no-gutters p-3 mx-2 my-3"
          style={{
            background: "#ffffff padding-box",
            boxShadow: "0px 3px 50px #FD8AA933",
            borderRadius: "48px",
          }}
        >
          <div className="col-sm-1 font-weight-bold">
            {this.props.quesnumber}.
          </div>
          <div className="col-sm-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <div className="row">
              <div className="col-sm-5">
                Your Response: <span style={{ color: "#FDA50F" }}>A</span>
              </div>
              <div className="col-sm-5">
                Correct Response: <span style={{ color: "#FDA50F" }}>A</span>
              </div>
            </div>
            <div className="row p-1">
              <span style={{ color: "#FDA50F" }}>Explanation: </span>
            </div>
          </div>

          <div className="col-sm-3">
            Chapter:
            <div className="font-weight-bold mb-2">3 Digit Numbers</div>
            Difficulty Level:
            <div className="mb-2" style={{ color: "#DAB624" }}>
              Moderate
            </div>
            Response Type:
            <div className="mb-2" style={{ color: "#40E366" }}>
              Correct
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default StudentAnswerBox;
