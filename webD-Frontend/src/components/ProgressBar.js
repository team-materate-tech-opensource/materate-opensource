import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .progress-bar {
    background: whitesmoke;
    position: relative;
    height: 20px;
    border-radius: 50px;
    border: 1px solid grey;
    box-shadow: whitesmoke;
  }

  .filler {
    background: rgb(61, 190, 61);
    height: 100%;

    border-radius: inherit;
    transition: width 0.5s ease-in;
  }
`;

class ProgressBar extends React.Component {
  static defaultProps = {
    color: "rgb(61, 190, 61)",
  };
  render() {
    return (
      <Styles>
        <div className="progress-bar">
          <div
            className="filler"
            style={{ width: `${this.props.width}%` }}
          ></div>
        </div>
      </Styles>
    );
  }
}
export default ProgressBar;
