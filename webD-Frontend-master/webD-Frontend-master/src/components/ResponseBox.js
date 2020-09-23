import React from "react";
import Chart from "../components/Chart/ChartNew";
import styled from "styled-components";
import ClipPath from "./ClipPath";

const array = [9, 18, 14, 10];
const color = ["#06dc5c", "#efd630", "#f1480b", "#0080ff"];

const Styles = styled.div`
`;

class ResponseBox extends React.Component {
  render() {
    return (
        <Styles>
            <div className="row no-gutters p-3 mt-4">
                <div className="col-md-2 font-weight-bold row no-gutters flex-column">
                    <div className="py-3">
                        Question. {this.props.number}
                    </div>
                    <div>
                        <div> Difficulty Level: </div>
                        <h3 className="m-0 text-danger font-weight-bold"> Hard </h3>
                    </div>
                    <div>
                        <div>Error rate: </div>
                        <h3 className="m-0 text-danger font-weight-bold"> 75% </h3>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="row px-2 pb-4 pt-2">
                        dolor nullam curabitur irure aliquet anim magna labore orci. sed
                        consectetur mauris. nisl, amet, elit, ut mauris. ea nulla ut
                        habitasse aenean ullamco dolore
                    </div>
                    <div className="py-4">
                        <Chart data={array} />
                    </div>
                </div>
            </div>
          <div className="col-md-10">
            <div className="row px-2 pb-4 pt-2">
              dolor nullam curabitur irure aliquet anim magna labore orci. sed
              consectetur mauris. nisl, amet, elit, ut mauris. ea nulla ut
              habitasse aenean ullamco dolore
            </div>
            <div className="chart-box">
                <Chart data={array} />
            </div>
          </div>
        
      </Styles>
    );
  }
}
export default ResponseBox;

const BorderedButton = (props) => {
    const type = props.type || "CORRECT"
    var borderColor, background
    if ( type == "CORRECT" ){
        borderColor = "#54FF00"
        background = "#54FF0033"
    } else if ( type == "MISCONCEPT" ) {
        borderColor = "#EFB730"
        background = "#EFB73033"
    } else if ( type == "WRONG" ) {
        borderColor = "#FF0000"
        background = "#FF000033"
    }
    borderColor = props.borderColor ? props.borderColor : borderColor
    background = props.background ? props.background : background
    return (
        <div
            className="mx-2 p-2 text-center col"
            style={{
                background: `${background}`,
                border: `3px solid ${borderColor}`,
                borderRadius: "26px",
                overflow: "hidden",
            }}
        >
            { props.children }
        </div>
    )
}
