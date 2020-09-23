import React, { Component } from "react";
import styled from "styled-components";
// import { BsCaretDownFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";

// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";

const Picked = styled.div`
  // .form {
  //   padding: 20px;
  // }
`;

const options = [
  "Select class",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];

class Picker extends Component {
  static defaultProps = {
    options: options,
  };
  render() {
    const optionRender = this.props.options.map((item, index) => {
      return <option key={index}>{item}</option>;
    });
    return (
      <Picked>
        <Form
          style={{
            width: "160px",
            background: "#ffffff no-repeat",
            boxShadow: "1px grey",
            borderRadius: "10px",
            height: "38px",
            fontSize: "18px",
            color: "#000000",
          }}
        >
          <Form.Group controlId="class">
            <Form.Control as="select">
              {/* <option>Select class</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option> */}
              {optionRender}
            </Form.Control>
          </Form.Group>
        </Form>
      </Picked>
    );
  }
}

export default Picker;
