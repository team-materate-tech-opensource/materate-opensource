import React from "react";
import styled from "styled-components";

import Award from "../assets/award.png";

const Styles = styled.div`
    .award-logo {
        height: 150px;
        text-align: center;
    }
    .award-logo img {
        max-width: 95%;
    }
`;

function Awards(props) {
    return (
      <Styles>
        <div className="award-container p-2 p-md-4 d-flex flex-column justify-content-center">
          <div className="award-logo mb-3 d-flex align-items-center justify-content-center">
            <img src={props.image} alt="award logo" />
          </div>
          <div className="award-name text-center">
            <h3 style={{ color: "#1967B3" }} className="font-weight-bold">
              {props.title}
            </h3>
            {/* <h4 style={{ color: "#1967B3" }}>{props.title}</h4> */}
          </div>
        </div>
      </Styles>
    )
}
export default Awards;
