import React from "react";
import styled from "styled-components";
// import DoughnutChart from "../components/DoughnutChart";

const Styles = styled.div`
  .outer-circle {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background: transparent
      linear-gradient(
        180deg,
        ${(props) => props.secondary} 0%,
        ${(props) => props.primary} 100%
      );
  }

  .inner-circle {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
`;

// const data = [5, 8];

class StudentDoughnuts extends React.Component {
    render() {
        return (
            <Styles primary={this.props.primary} secondary={this.props.secondary}>
                <div className="btn btn-primary shadow bg-white p-3 text-center align-items-center 
                justify-content-center"
                    style={{
                        borderRadius: "50%",
                        color: "#000000",
                        boxShadow: "0px 3px 15px #0000004D",
                        background: "#ffffff padding-box",
                        border: "none",
                    }}>
                    <div className="outer-circle d-flex justify-content-center align-items-center text-center">
                        <div className="inner-circle d-flex justify-content-center align-items-center text-center bg-white">
                            <div>
                                <h3 className="d-inline" style={{ color: `${this.props.primary}` }}>
                                    {this.props.score}
                                </h3>
                                <h5 style={{ color: "#000000", display: "inline" }}>
                                    /{this.props.total}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Styles>
        );
    }
}
export default StudentDoughnuts;

StudentDoughnuts.defaultProps = {
    primary: "#D91E5C",
    secondary: "#FE5A5A",
    score: "10",
    total: "35",
};
