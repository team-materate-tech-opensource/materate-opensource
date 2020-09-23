import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .stepper-container-horizontal {
    display: flex;
    margin: auto;
    padding: 30px;
    width: 60%;
  }

  .stepper-wrapper-horizontal {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .step-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
  }

  .step-number {
    border-radius: 80%;
    width: 30px;
    height: 30px;
    text-align: center;
    margin-bottom: 2px;
    position: relative;
    z-index: 1;
  }

  .step-number-active {
    color: white;
    background-color: #0080fe;
    border: 3px solid #0080fe;
  }

  .step-number-disabled {
    color: #0080fe;
    background-color: white;
    border: 3px solid #0080fe;
  }

  .step-number-completed {
    /* check mark */
    border: 3px solid #23ca4a;
  }

  .divider-line-active {
    position: fixed;
    z-index: 0;
    height: 2px;
    background-color: #0080fe;
    position: relative;
    left: 50.01%;
    top: -50%;
    width: 188px;
  }

  .divider-line-disabled {
    position: fixed;
    z-index: 0;
    height: 2px;
    background-color: grey;
    position: relative;
    left: 50.01%;
    top: -50%;
    width: 188px;
  }

  .check-mark {
    position: relative;
    z-index: 1;
    color: white;
    background-color: #23ca4a;
    border: 3px solid #23ca4a;
    font-weight: bolder;
    margin-top: -4px;
    padding-top: 2px;
    border-radius: 80%;
    width: 32px;
    margin-left: -4px;
    height: 32px;
  }
`;

class StepProgress extends React.Component {
  constructor() {
    super();
    this.state = {
      steps: [],
    };
  }

  componentDidMount() {
    const display = this.props.display;
    this.setState({
      steps: display.map((step, index) => {
        const stepObj = {};
        stepObj.completed = index + 1 < this.props.currentStep ? true : false;
        stepObj.selected = index + 1 === this.props.currentStep ? true : false;
        stepObj.divider_disabled =
          index + 1 < this.props.currentStep ? false : true;
        return stepObj;
      }),
    });
  }

  render() {
    const { display } = this.props;
    const steps = this.state.steps;
    const StepDisplay = steps.map((disp, index) => {
      return (
        <div className="step-wrapper" key={index}>
          <div
            className={`step-number ${
              disp.selected ? "step-number-active" : "step-number-disabled"
            }`}
          >
            {disp.completed ? (
              <div className={`check-mark`}>&#10003;</div>
            ) : (
              display[index]
            )}
          </div>
          <div
            className={`${
              index !== display.length - 1 && disp.divider_disabled
                ? "divider-line-disabled"
                : ""
            } 
            ${
              index !== display.length - 1 && disp.divider_disabled === false
                ? "divider-line-active"
                : ""
            }`}
          ></div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <Styles>
          <div className="stepper-container-horizontal">
            <div className="stepper-wrapper-horizontal">{StepDisplay}</div>
          </div>
        </Styles>
      </React.Fragment>
    );
  }
}
export default StepProgress;
