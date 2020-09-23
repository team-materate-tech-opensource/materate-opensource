import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Styles = styled.div`
  @media all and (max-width: 480px) {
    .btn {
      display: block;
      width: 100%;
      margin-bottom: 0.5rem;
      border-radius: 10px;
      font-size: 12px;
    }
  }
`;

const Buttons = (props) => {
  return (
    <Styles>
      <Button
        variant="primary"
        style={{
          color: `${props.color}`,
          background: `${props.background}`,
          borderRadius: `${props.borderRadius}`,
          border: `${props.border}`,
          width: "100%",
          height: "100%",
          padding: "0.5rem",
        }}
      >
        {props.text}
      </Button>
    </Styles>
  );
};
export default Buttons;

Buttons.defaultProps = {
  color: "#ffffff",
  background: "#0080fe",
  text: "button",
  borderRadius: "40px",
  border: "",
};
