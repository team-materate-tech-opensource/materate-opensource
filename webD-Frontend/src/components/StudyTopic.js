import React from "react";

import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaExclamation } from "react-icons/fa";
// import { AiOutlineExclamation } from "react-icons/ai";

//props.chapters = list of chapter names that need to be worked on by the student..
//props.colors = list of color for the chapters based on extent of work needs to be done..

class StudyTopic extends React.Component {
  render() {
    var h_start = 0;
    var v_start = 20;
    const studypath = this.props.chapters.map((item, index) => {
      return (
        <div key={index}>
          {/* <svg><path d="M0 0 h20" /> */}
          {/* </svg> */}
          {/* <div>
            <IconContext.Provider
              value={{ color: `${this.props.colors[index]}`, size: "100px" }}
            >
              <MdLocationOn />
            </IconContext.Provider>

            <IconContext.Provider value={{ color: "#ee0934", size: "50px" }}>
              {this.props.colors[index] === "#ee0934" ? (
                <FaExclamation />
              ) : null}
            </IconContext.Provider>

            {item}
          </div> */}

          {/* {
 var x = h_start+(120*index);
var y = v_start+(30*index);
               } */}

          <svg>
            <line
              x1={h_start + index * 120}
              y1={v_start + index * 30}
              x2={h_start + index * 120 + 120}
              y2={v_start + index * 30}
              style={{
                stroke: "#26ec96",
                fill: "none",
                strokeWidth: "6px",
                strokeDasharray: "15 8",
              }}
            />
            <line
              x1={h_start + index * 120 - 2}
              y1={v_start + index * 30 - 2}
              x2={h_start + index * 120}
              y2={v_start + index * 30 + 30}
              style={{
                stroke: "#26ec96",
                fill: "none",
                strokeWidth: "6px",
                strokeDasharray: "15 8",
              }}
            />

            {/* <path d="M0 0 v10" /> */}
          </svg>
        </div>
      );
    });
    return <React.Fragment>{studypath}</React.Fragment>;
  }
}
export default StudyTopic;

StudyTopic.defaultProps = {
  colors: ["#ee0934", "#ee0934", "#26ec96", "#26ec96", "#eeb832", "#eeb832"],
  chapters: [
    "Estimates & Measures",
    "Patterns",
    "Data Handling",
    "Volume & Capacity",
    "Weight Calculations",
    "2D Shapes",
  ],
};
