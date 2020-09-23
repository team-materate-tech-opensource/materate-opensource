import React from "react";
import styled from "styled-components";

import logo from "../assets/Logo-lg.png";

const Styles = styled.div`
  .card-container {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 0px 48px 48px 0px;
  }
  .image-container {
      text-align: center;
    background: #fda81a 0% 0% no-repeat padding-box;
    border-radius: 0px 32px 32px 0px;
  }
  .image-container img {
      max-width: 95%
  }

  .text-holder {
    text-align: center;
    font-style: "Roboto", sans-serif;
    letter-spacing: 0px;
    color: #757575;
  }
`;

class TeamCard extends React.Component {
  render() {
    return (
      <Styles>
        <div className="card-container d-flex flex-column justify-content-center p-3 my-2">
          <div className="image-container">
            <img src={logo} alt="person here" />
          </div>
          <div className="text-holder my-1 font-weight-bold">
            {this.props.name || null} <br />
            {this.props.designation || null}
          </div>
        </div>
      </Styles>
    );
  }
}
export default TeamCard;

TeamCard.defaultProps = {
  name: "Lorem Ipsum",
  designation: "XXX",
};
