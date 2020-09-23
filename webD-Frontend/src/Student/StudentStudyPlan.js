import React from "react";

import StudentNav from "../components/StudentNav";
import studyLeft from "../assets/study-plan-left.png";
import studyRight from "../assets/study-plan-right.png";

import StudyTopic from "../components/StudyTopic";

class StudentStudyPlan extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StudentNav studyplan />
        <div
          className="row p-3 mx-3 my-3"
          style={{
            background: "#ffffff",
            boxShadow: "7px 3px 99px #00FE8826",
            borderRadius: "72px",
          }}
        >
          <div className="col-md-12 justify-content-center">
            <h1
              className="font-weight-bold text-center"
              style={{ color: "#000000" }}
            >
              Study Plan
            </h1>
          </div>

          <div className="col-md-auto">
            <img src={studyLeft} alt="left img" />
            <br /> <br />
            PRIORITY INDICATOR
            <br />
            <div className="row p-1 mt-auto">
              <div className="col" style={{ background: "#26ec96" }}></div>
              <div className="col">Easy</div>
            </div>
            <div className="row p-1 mt-auto">
              <div className="col" style={{ background: "#eeb832" }}></div>
              <div className="col">Moderate</div>
            </div>
            <div className="row p-1 mt-auto">
              <div className="col" style={{ background: "#ee0934" }}></div>
              <div className="col">Tough</div>
            </div>
          </div>
          <div className="col-md-9">
            <StudyTopic />
          </div>
          <div className="col-md-auto ml-auto mt-auto">
            <img src={studyRight} alt="right img" />
          </div>

          {/* <div className="w-100"></div>
          <div className="col-md-4">
            <div className="font-weight-bold">
              Priority Indicator:
              <div
                className="row"
                style={{
                  borderRadius: "31px",
                  background:
                    "transparent linear-gradient(270deg, #05EC5A 0%, #F6EE0C 50%, #FF0000 100%) 0% 0% no-repeat padding-box",
                  height: "34px",
                }}
              ></div>
              Start Working Immediately! &nbsp; &nbsp; &nbsp; You have
              understood these!
            </div>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}
export default StudentStudyPlan;
