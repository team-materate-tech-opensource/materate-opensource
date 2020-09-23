import React from "react";
import StudentDoughnuts from "./StudentDoughnuts";
import StudentDots from "./StudentDots";

const questions = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
];

const questionDots = questions.map((item, index) => (
  <StudentDots text={item} id={index} />
));

const redContainer = {
  background: "#ffffff",
  borderRadius: "48px",
  boxShadow: "0px 3px 50px #FD8AA933",
};

class StudentLeftPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row no-gutters py-1 my-2 align-items-center justify-content-between">
          <div className="font-weight-bold">Question Selector</div>
          <div className="row no-gutters align-items-center">
            <div>
              <StudentDots />
            </div>
            <div>Right</div>
            <div>
              <StudentDots background="#fd5a5a" />
            </div>
            <div>Wrong</div>
          </div>
        </div>
        <div
          className="row no-gutters px-2 py-4 my-2 justify-content-center"
          style={redContainer}
        >
          <div className="font-weight-bold">Questions 1 to 35</div>
          <div className="col-12 px-2 py-4 d-flex flex-wrap">
            {questionDots}
          </div>
        </div>
        <div
          className="px-3 py-2 my-2 justify-content-center font-weight-bold"
          style={{
            ...redContainer,
            border: "2px solid #E00606",
            margin: "auto",
          }}
        >
          Combined Mode
        </div>
        <div
          className="row no-gutters px-2 py-4 my-2 justify-content-center"
          style={redContainer}
        >
          <div className="col-md-12">
            <div className="row justify-content-center font-weight-bold mb-3">
              Difficulty Level:
            </div>
          </div>
          <div className="col-4 text-center">
            <StudentDoughnuts primary="#01D008" secondary="#5DFE83" />
            Easy Questions
          </div>
          <div className="col-4 text-center">
            <StudentDoughnuts primary="#DACB0C" secondary="#F4FE5D" />
            Moderate Questions
          </div>
          <div className="col-4 text-center">
            <StudentDoughnuts />
            Tough Questions
          </div>
        </div>
        <div
          className="row no-gutters px-2 py-4 my-2 justify-content-center"
          style={redContainer}
        >
          <div className="col-md-12">
            <div className="row justify-content-center font-weight-bold mb-3d">
              Response Type:
            </div>
          </div>
          <div className="col-4 text-center">
            <StudentDoughnuts primary="#F58010" secondary="#FDA50F" />
            Misconceptions
          </div>
          <div className="col-4 text-center">
            <StudentDoughnuts primary="#59BDE7" secondary="#35D9DC" />
            Silly Mistakes
          </div>
          <div className="col-4 text-center">
            <StudentDoughnuts primary="grey" secondary="grey" />
            Unattempted
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default StudentLeftPanel;
