import React from "react";
// import styled from "styled-components";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const Styles = styled.div`
//   // .hello {
//   //   width: 395px;
//   //   height: 130px;
//   //   color: #707070;
//   //   text-align: left;
//   // }
//   // .boldText {
//   //   font-size: 34px;
//   // }
//   // .lightText {
//   //   font-size: 18px;
//   // }

//   .hello-principal {
//     color: #3c4041;
//   }
// `;

class PrincipalHello extends React.Component {
  // static defaultProps = {
  //   color: "#3C4041",
  // };

  componentDidMount() {
    document.body.style.fontFamily = "Open Sans";
  }
  render() {
    return (
       //<Container>
      //   <Row style={{ width: "600px" }}>
      //     <Col style={{ textAlign: "right", width: "125px" }}>icon</Col>
      //     <Col style={{ width: "475px" }}>
      //       <Row style={{ fontSize: "35px", color: `${this.props.color}` }}>
      //         Hello, Mr. Sharma
      //       </Row>
      //       <Row style={{ fontSize: "18px", color: `${this.props.color}` }}>
      //         Your School Aptitude Results are here
      //       </Row>
      //     </Col>
      //   </Row>
       //</Container>
      // <Styles>
      //<div
      //  className="hello-principal "
       // style={{ color: `${this.props.color}` }}
      //>
      //  <div className="display-4">Hello, Mr. Sharma</div>
      //  Your School Aptitude Results are here
      //</div>
      // </Styles>
      <div></div>
    );
  }
}
export default PrincipalHello;

PrincipalHello.defaultProps = {
  color: "#3c4041",
};
