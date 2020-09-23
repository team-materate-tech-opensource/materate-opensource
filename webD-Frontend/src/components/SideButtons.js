import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom"

class SideButtons extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       clicked: [false, false, false, false],
  //     };
  //     // this.handleClick = this.handleClick.bind(this);
  //   }

  //   handleClick = (index) => {
  //     let new_state = { clicked: [false, false, false, false] };
  //     if (this.state.clicked[index] === false) {
  //       new_state.clicked[index] = true;
  //       //   console.log(() => "the state has been changed!");
  //     }
  //     this.setState(new_state);
  //     // console.log(() => "hurray!!");
  //   };

  static defaultProps = {
    clicked: [true, false, false],
    tabNames: [
      "CONCEPT WISE",
      "DIFFICULTY LEVEL WISE",
      "CLUSTER WISE",
      "STUDENT WISE",
    ],
    paths: ["/analysis", "/analysis2", "/analysis3", "/analysis4"],
  };

  render() {
    const output = this.props.tabNames.map((item, index) => (
      <div className="button" key={item}>
        <NavLink
          to={`${this.props.paths[index]}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="primary"
            //   onClick={() => this.handleClick(index)}
            style={{
              border: "2px solid #0080fe",
              borderRadius: `${
                this.props.clicked[index] ? "53px 0px 0px 53px" : "59px"
              }`,
              height: "104px",
              background: `${
                this.props.clicked[index] ? "#0080fe" : "#ffffff"
              }`,
              color: `${this.props.clicked[index] ? "#ffffff" : "#0080fe"}`,
              font: "Bold 25px/34px Open Sans",
              textAlign: "center",
              width: `${this.props.clicked[index] ? "100%" : "95%"}`,
              marginBottom: "0.3rem",
            }}
          >
            {item}
          </Button>
        </NavLink>
      </div>
    ));

    return (
      <React.Fragment>
        <div className="main-wrapper">{output}</div>
      </React.Fragment>
    );
  }
}

export default SideButtons;
