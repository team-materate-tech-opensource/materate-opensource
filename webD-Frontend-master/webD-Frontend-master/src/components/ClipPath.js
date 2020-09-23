import React from "react";
import styled from "styled-components";

const StylesClip = styled.div`
  .container-clip {
    background-color: white;
    margin: 0px 5px;
    position: relative;
    height: 390px;
    width: 100px;
    padding: 0px;
    z-index: 2;
  }

  .container-clip hr {
    position: absolute;
    // bottom: 34px;
    top: 354px;
    width: 100%;
    // z-index: 1;
    color: #000000 !important;
    // height: 2px !important;
    margin: 0 !important;
    padding: 0 !important;
    // border: 1px solid #7f7f84 !important;
    // background: #7f7f84 !important;
  }

  .rectangle-clip {
    // background-color: ${(props) => props.background};
    // border: 3px solid ${(props) => props.border};
    border-radius: 16px;
    color: black;
    text-align: center;
    height: 390px;
    width: 100px;
    position: absolute;
    // z-index: 1;
    color: #7f7f84;
    clip-path: inset(${(props) => props.height}px 15px 40px 13px round 16px);
    transition: clip-path 0.5s ease;
  }

  .rectangle-clip:hover {
    clip-path: inset(
      ${(props) => props.height - 60}px 10px 80px 10px round 16px
    );
    background-color: skyblue;
    border: 3px solid #0080fe;
  }
  .rectangle-clip p {
    margin: 0;
    padding: ${(props) => props.height + 20}px 9px ${(props) =>
  370 - props.height}px 9px !important;
    position: relative !important;
    color: #000000 !important;
    // z-index: 3 !important;
  }

  .x-clip {
    background-color: #f2f2f2;
    border: 1px solid #7f7f84;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 0;
    width: 100px;
    height: 390px;
    // padding-top: 1.2rem;
    // padding-left: 1.4rem;
    position: absolute;
    z-index: 2;
    clip-path: inset(332px 2px 11px 4px round 20px);
    // transition: padding 0.5s ease;
    transition: clip-path 0.5s ease;
    // border: 0px solid #000000;
  }
  .x-clip p {
    margin: 0;
    padding: 341px 9px 0px 9px !important;
    position: relative !important;
    color: #000000 !important;
    // z-index: 3 !important;
  }

  .rectangle-clip:hover ~ .x-clip {
    background-color: skyblue;
    border: 3px solid skyblue;
    color: #000000;
    clip-path: inset(320px 1px 21px 1px round 20px);
  }

  .x-clip:hover {
    background-color: skyblue;
    border: 3px solid skyblue;
    color: black;
    clip-path: inset(320px 1px 21px 1px round 20px);
  }

  // .x-clip:hover ~ .rectangle-clip {
  //   clip-path: inset(47px 10px 80px 10px round 16px);
  //   background-color: skyblue;
  //   border: 3px solid #0080fe;
  // }

  .canvas {
    // width: 100%;
    display: flex;
    justify-content: center;
    // overflow-x: scroll;
  }

  .bar-graph {
    position: relative;
    z-index: 1;
     width: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
   overflow-x: scroll;
    overflow-y: hidden;
  }

  .bar-graph hr {
    position: absolute;
    top: 354px;
    width: 100%;
    z-index: 1;
    color: #000000 !important;
    // height: 2px !important;
    margin: 0 !important;
    padding: 0 !important;
    border: 1px solid #7f7f84 !important;
    background: #7f7f84 !important;
  }

 @media screen and (max-width: 1024px){
   .wrapper{
     display: none !important;
   }
 }

  .vertical-text {
    font: Regular 18px Open Sans;
    color: #000000;
    transform: rotate(270deg);
    margin: 0;
    width: 0;
    position: absolute;
    left: 50px;
    bottom: 0;
    padding-left: 80px;
    // border-bottom: 1px solid black;
    z-index: 10;
    text-align: left;
    transform-origin: bottom;
    transform-origin: bottom left;
    
    width: inherit;
    height: 50px;
  }

  .circle {
    height: 5px;
    width: 5px;
    position: absolute;
    top: 350px;
    border: 2px solid #7f7f84;
    background: #7f7f84;
    border-radius: 50%;
  }
`;

class ClipPath extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }

  render() {
    let values = [];

    for (let a = 0; a < this.props.array.length; a++) {
      values[a] = this.props.array[a];
    }

    let max = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] > max) {
        max = values[i];
      }
    }
    if (max !== 0) {
      for (let j = 0; j < values.length; j++) {
        values[j] = values[j] / max;
        values[j] = 267 - values[j] * 200;
      }
    }

    const disp = values.map((item, index) => (
      <StylesClip
        height={item}
        key={index}
        // background={this.props.color[index]}
        // border={this.props.color[index]}
      >
        <div className="container-clip justify-content-center" id={index}>
          <div
            className="rectangle-clip justify-content-center"
            style={{
              background: this.props.color[index],
              border: `3px solid ${this.props.color[index]}`,
            }}
          >
            <p className="font-weight-bold">{this.props.array[index]}</p>
          </div>
          <div className="x-clip justify-conent-center font-weight-regular">
            <p style={{ fontSize: "11px" }}>{this.props.labels[index]}</p>
            {/* {console.log(this.props.color[index])} */}
          </div>
          {/* <div className="circle"></div> */}
          <hr />
          {/* <div className="circle"></div> */}
        </div>
      </StylesClip>
    ));

    return (
      <StylesClip>
        <div className="bar-graph justify-content-center w-100 px-2">
          <div className="canvas">
            <div className="wrapper align-items-center">
              <div className="vertical-text">Number of Students{" -->"}</div>
            </div>
            {/* <div className="vertical-text">Number of Students</div> */}
            {disp}
          </div>
          {/* <div className="circle"></div> */}
          <hr />

          {/* <div className="circle"></div> */}
        </div>
        {/* <div className="container-clip justify-content-center ">
          <div className="rectangle-clip justify-content-center">5</div>
          <div className="x-clip justify-conent-center">35</div>
        </div> */}
        {/* <hr style={{ color: "#7f7f84", height: "1px" }} /> */}
      </StylesClip>
    );
  }
}
export default ClipPath;

ClipPath.defaultProps = {
  array: [30, 40, 50, 60, 20, 80],
  color: ["efb730", "efb730", "efb730", "efb730", "efb730", "efb730"],
  labels: ["Correct", "Silly Mistakes", "Misconceptions", "Not Attempted"],
};
