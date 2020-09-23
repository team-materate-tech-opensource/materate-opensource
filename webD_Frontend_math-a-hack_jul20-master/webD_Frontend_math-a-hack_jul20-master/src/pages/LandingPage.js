import React from "react";
import styled from "styled-components";
import { BsChevronDown, BsChevronCompactDown } from "react-icons/bs";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
// import { motion, useViewportScroll } from "framer-motion";
import Button from "react-bootstrap/Button";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import { leftSVG } from "../components/SVG";
import { rightSVG } from "../components/SVG";
import divider from '../assets/divider.png'

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Programs from '../components/Homepage/Programs'

const Styles = styled.div`
  html {
    scroll-behavior: smooth;
  }
  .top-part{
      position: relative;
    margin-top: 75px;
    background: linear-gradient(to bottom, #0984FD, #44a0f8);
  }
  .top-part:before {
      content: "";
      position: absolute;
      bottom: -200px;
      width: 100%;
      background-image: url(${divider});
      background-repeat: no-repeat;
      background-position: center top;
      background-size: 100%;
      height: 200px ;
  }
  .down-arrow {
      position: relative;
      top: 50px;
        animation: moveupdown 2s linear infinite;
  }
  .down-arrow svg{
    transform: scaleX(1.2);
  }

  @keyframes moveupdown {
    0%,
    100% {
      transform: translateY(18%);
    }
    50% {
      transform: translateY(-18%);
    }
  }

  .section-two {
    width: 100%;
    height: 500px;
    position: relative;
  }

  .blue-bg {
    background: #0080fe33;
    height: 430px;
  }
  @media(min-width: 1000px) {
    .image-area {
        transform: scale(1.2);
    }
  }

  .image-area {
    background: #e1f0ff;
    background: transparent linear-gradient(142deg, #FFFFFF 0%, #E1F0FF 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 15px #0080FE33;
    border: none;
    border-radius: 20px;
    width: 100%;
    height: 450px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    // position: sticky;
    // top: 0;
  }
  .image-area img {
      max-width: 90%;
      max-height: 80%;
  }

  .text-container {
    overflow: hidden;
    height: 430px;
    width: 100%;
  }
  @media(max-width: 767px){
    .text-container {
        width: 100%;
      }
      .section-two {
        width: 100%;
        height: auto;
        position: relative;
      }
      .image-area {
        height: auto;
        max-height: 200px;
        padding: 35px 10px;
      }
      .image-area img {
        max-height: 200px;
      }
      .text-container {
          height: auto;
      }
      .blue-bg {
          height: auto;
      }
  }

  .text-mid-container {
      padding: 0px 20px 20px 20px;
    overflow-y: scroll;
    //scroll-snap-type: y mandatory;
    height: 350px;
    max-width: 500px;
    margin: auto;
  }

  .text-box {
    scroll-snap-align: center;
  }

  .section-two-container {
    width: 100%;
  }

  .navbar-sticky{
    background: #0984FD 0% 0% no-repeat padding-box;
  }
  .left-panel svg{
      margin-left: 40px;
    max-width: 300px;
    max-height: 400px;
  }
  .right-panel {
      text-align: right;
  }
  .right-panel svg{
    margin-right: 40px;
    max-width: 300px;
    max-height: 400px;
  }

.opening-lines{
  font-weight: bolder;
  font-size: 100px;
  opacity: 1;
  animation: spurr 0.3s ease;
  color: #ffffffb9;
}

.opening-lines-md{
  font-weight: bolder;
  font-size: 80px;
  opacity: 1;
  color: #ffffffb9;
}
.opening-lines-sm{
  font-weight: bolder;
  font-size: 60px;
  opacity: 1;
  color: #ffffffb9;
}
@media(max-width: 767px) {
    .opening-lines{
        font-size: 50px;
      }
      
      .opening-lines-md{
        font-size: 40px;
      }
      .opening-lines-sm{
        font-size: 20px;
      }
}

  .numbers-reverse-lg{
    font-weight: bolder;
    font-size: 200px;
    color: #ffffff;
   
   
    }

    .numbers-reverse-sm{
      font-weight: bolder;
      font-size: 90px;
      color: #ffffff;
     opacity: 0.9;
      
    }
  
  .headline{
      line-height: 0.93;
    font-weight: bold;
    font-size: 60px;
    color: #ffffff;
  }

  .enroll-button{
    padding: 1rem;
    margin: 1rem;
    position: absolute;
    bottom: -20px;
    margin: auto;
  }
  .enrollButton {
    padding: 0.4rem 4rem;
    background: #ffffff;
    border-radius: 40px;
    color: #0180FD;
    font-weight: 600;
    font-size: 1.4rem;
    border: 2px solid #ffffff;
    box-shadow: 0px 2px 15px 0px #13132f54;
    transition: 0.2s;
  }
  .enrollButton:hover {
    box-shadow: 0px 2px 20px 3px #13132f64;
  }
  .centerContainer {
      position: relative;
      top: -45px;
      min-height: 420px;
  }
  @keyframe fadeIn {
      0% {display: none; opacity: 0;}
      100% {display: block; opacity: 1;}
  }
  .imghide {
    position:absolute;
    opacity: 0;
  }
  .imgshow {
    position: static;
  opacity: 1;
  transition: opacity 0.5s ease;
}
    .test {
        border-radius: 13px;
    }

`;

export const images = [one, two, three, four];

// const step= 30;
export const text1 = (
  <div className="text-box p-2 m-1 my-2">
    <h1 className="font-weight-bold">Who we are?</h1>
    <p>
      MateRate constitutes a team of leading social entrepreneurs from IIT
      Delhi. We provide a friendly environment where students can openly clear
      their doubts and encounter an impeccable way of learning.
    </p>
  </div>
);

export const text2 = (
  <div className="text-box p-2 m-1 my-2">
    <h1 className="font-weight-bold">What we do?</h1>
    <p>
        We strive to enhance students’ skills in Mathematics, a subject that demands problem solving 
        and critical thinking capabilities by identifying their misconceptions and helping them gain 
        greater insight into their conceptual difficulties.
    </p>
  </div>
);

export const text3 = (
  <div className="text-box p-2 m-1 my-2">
    <h1 className="font-weight-bold">How we do it?</h1>
    <p>
    We analyse and understand the unique learning level of each child and form resolution plans 
    according to their needs. We show them a path to the solution so that they learn how to 
    navigate through their conceptual challenges in their own way!
    </p>
  </div>
);

export const text4 = (
  <div className="text-box p-2 m-1 my-2">
    <h1 className="font-weight-bold">Why we're different?</h1>
    <p>
    One search gives us a ton of data and learning platforms to choose from. That's where MateRate 
    makes a difference! We help students with a targeted approach to enhance their skills by 
    learning those concepts selectively which they feel less confident in and gives them a 
    much simpler way to excel in life!
    </p>
  </div>
);

// const openingLines = [
//   "ARE",
//   "YOU",
//   "READY",
//   "TO",
//   "TAKE",
//   "A",
//   "CHALLENGE?",
//   "IN",
//   "3",
//   "2",
//   "1",
//   "DIAGNOSE",
//   "UNDERSTAND",
//   "LEARN",
//   "UPGRADE",
// ];
// const headline = ["Your", "Only", "Competition", "Is", "You"];

// var timer = 3000; //300ms as the timer for headlines' display..

// const displayText = openingLines.map((item, index) => (
//   <div className="opening-lines p-2" key={index}>
//     {setTimeout(() => item, timer)}
//   </div>
// ));

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      showtext1: true,
      showtext2: false,
      showtext3: false,
      showtext4: false,
      showtext5: false,
      showtext6: false,
      showtext7: false,
      showtext8: false,
      showtext9: false,
      showtext10: false,
      showtext11: false,
      showtext12: false,
      showtext13: false,
      showtext14: false,
      showtext15: false,
      showtext16: false,
      showtext17: false,
      showtext18: false,
      showtext19: false,
      showtext20: false,
      showtext21: false,
      showtext22: false,
      showtext23: false,
      showtext24: false,
      showtext25: false,
      showtext26: false,
      showtext27: false,
      showtext28: false,
      showtext29: false,
      showtext30: false,
      displayLine: false,
    };
  }
  arrowScroll = () => {
    window.scrollTo({
        top: 550,
        behavior: 'smooth'
      });
  }
  handleScroll = () => {
    var scrolled = document.getElementById("text-mid-container");
    // console.log("total height: " + scrolled.scrollHeight);
    if (scrolled.scrollTop < 250) {
      this.setState({ show1: true, show2: false, show3: false, show4: false });
    } else if (scrolled.scrollTop > 270 && scrolled.scrollTop <= 500) {
      this.setState({ show1: false, show2: true, show3: false, show4: false });
    } else if (scrolled.scrollTop > 570 && scrolled.scrollTop <= 750) {
      this.setState({ show1: false, show2: false, show3: true, show4: false });
    } else if (scrolled.scrollTop > 840) {
      this.setState({ show1: false, show2: false, show3: false, show4: true });
    }
  };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showtext1: false, showtext2: true });
          }, 400);
      
          setTimeout(() => {
            this.setState({ showtext2: false, showtext3: true });
          }, 800);
      
          setTimeout(() => {
            this.setState({
              showtext3: false,
              showtext4: true,
            });
          }, 1200);
      
          setTimeout(() => {
            this.setState({
              showtext4: false,
              showtext5: true,
            });
          }, 1600);
      
          setTimeout(() => {
            this.setState({
              showtext5: false,
              showtext6: true,
            });
          }, 2000);
          setTimeout(() => {
            this.setState({
              showtext6: false,
              showtext7: true,
            });
          }, 2400);
          setTimeout(() => {
            this.setState({
              showtext7: false,
              showtext8: true,
            });
          }, 2800);
          setTimeout(() => {
            this.setState({
              showtext8: false,
              showtext9: true,
            });
          }, 3200);
          setTimeout(() => {
            this.setState({
              showtext9: false,
              showtext10: true,
            });
          }, 3600);
          setTimeout(() => {
            this.setState({
              showtext10: false,
              showtext11: true,
            });
          }, 4000);
          setTimeout(() => {
            this.setState({
              showtext11: false,
              showtext12: true,
            });
          }, 4400);
          setTimeout(() => {
            this.setState({
              showtext12: false,
              showtext13: true,
            });
          }, 4800);
          setTimeout(() => {
            this.setState({
              showtext13: false,
              showtext14: true,
            });
          }, 5200);
          // setTimeout(() => {
          //   this.setState({
          //     showtext13: false,
          //     showtext14: true,
          //   });
          // }, 8800);
          setTimeout(() => {
            this.setState({
              showtext14: false,
              showtext15: true,
            });
          }, 5600);
          setTimeout(() => {
            this.setState({
              showtext15: false,
              showtext16: true,
            });
          }, 6000);
          setTimeout(() => {
            this.setState({
              showtext16: false,
              showtext17: true,
            });
          }, 6400);
          setTimeout(() => {
            this.setState({
              showtext17: false,
              showtext18: true,
            });
          }, 6800);
          setTimeout(() => {
            this.setState({
              showtext18: false,
              showtext19: true,
            });
          }, 7200);
          setTimeout(() => {
            this.setState({
              showtext19: false,
              showtext20: true,
            });
          }, 7600);
          setTimeout(() => {
            this.setState({
              showtext20: false,
              showtext21: true,
            });
          }, 8000);
          setTimeout(() => {
            this.setState({
              showtext21: false,
              showtext22: true,
            });
          }, 8400);
          setTimeout(() => {
            this.setState({
              showtext22: false,
              showtext23: true,
            });
          }, 8800);
          setTimeout(() => {
            this.setState({
              showtext23: false,
              showtext24: true,
            });
          }, 9200);
          setTimeout(() => {
            this.setState({
              showtext24: false,
              showtext25: true,
            });
          }, 9600);
      
          setTimeout(() => {
            this.setState({
              showtext25: false,
              showtext26: true,
            });
          }, 10000);
          setTimeout(() => {
            this.setState({
              showtext27: true,
            });
          }, 10400);
          setTimeout(() => {
            this.setState({
              showtext28: true,
            });
          }, 10800);
          setTimeout(() => {
            this.setState({
              showtext29: true,
            });
          }, 11200);
          setTimeout(() => {
            this.setState({
              showtext30: true,
              displayLine: true,
            });
          }, 11600);
      
          // setTimeout(() => {
          //   this.setState({
      
          //     showtext4: false,
          //     showtext5: true,
          //   });
          // }, 1600);
        const _this = this
        this.interval = setInterval( function() {
            setTimeout(() => {
                _this.setState({ showtext1: true, showtext26: false, showtext27: false, showtext28: false, showtext29: false, showtext30: false, displayLine: false });
              }, 0);
            setTimeout(() => {
                _this.setState({ showtext1: false, showtext2: true });
              }, 400);
          
              setTimeout(() => {
                _this.setState({ showtext2: false, showtext3: true });
              }, 800);
          
              setTimeout(() => {
                _this.setState({
                  showtext3: false,
                  showtext4: true,
                });
              }, 1200);
          
              setTimeout(() => {
                _this.setState({
                  showtext4: false,
                  showtext5: true,
                });
              }, 1600);
          
              setTimeout(() => {
                _this.setState({
                  showtext5: false,
                  showtext6: true,
                });
              }, 2000);
              setTimeout(() => {
                _this.setState({
                  showtext6: false,
                  showtext7: true,
                });
              }, 2400);
              setTimeout(() => {
                _this.setState({
                  showtext7: false,
                  showtext8: true,
                });
              }, 2800);
              setTimeout(() => {
                _this.setState({
                  showtext8: false,
                  showtext9: true,
                });
              }, 3200);
              setTimeout(() => {
                _this.setState({
                  showtext9: false,
                  showtext10: true,
                });
              }, 3600);
              setTimeout(() => {
                _this.setState({
                  showtext10: false,
                  showtext11: true,
                });
              }, 4000);
              setTimeout(() => {
                _this.setState({
                  showtext11: false,
                  showtext12: true,
                });
              }, 4400);
              setTimeout(() => {
                _this.setState({
                  showtext12: false,
                  showtext13: true,
                });
              }, 4800);
              setTimeout(() => {
                _this.setState({
                  showtext13: false,
                  showtext14: true,
                });
              }, 5200);
              // setTimeout(() => {
              //   _this.setState({
              //     showtext13: false,
              //     showtext14: true,
              //   });
              // }, 8800);
              setTimeout(() => {
                _this.setState({
                  showtext14: false,
                  showtext15: true,
                });
              }, 5600);
              setTimeout(() => {
                _this.setState({
                  showtext15: false,
                  showtext16: true,
                });
              }, 6000);
              setTimeout(() => {
                _this.setState({
                  showtext16: false,
                  showtext17: true,
                });
              }, 6400);
              setTimeout(() => {
                _this.setState({
                  showtext17: false,
                  showtext18: true,
                });
              }, 6800);
              setTimeout(() => {
                _this.setState({
                  showtext18: false,
                  showtext19: true,
                });
              }, 7200);
              setTimeout(() => {
                _this.setState({
                  showtext19: false,
                  showtext20: true,
                });
              }, 7600);
              setTimeout(() => {
                _this.setState({
                  showtext20: false,
                  showtext21: true,
                });
              }, 8000);
              setTimeout(() => {
                _this.setState({
                  showtext21: false,
                  showtext22: true,
                });
              }, 8400);
              setTimeout(() => {
                _this.setState({
                  showtext22: false,
                  showtext23: true,
                });
              }, 8800);
              setTimeout(() => {
                _this.setState({
                  showtext23: false,
                  showtext24: true,
                });
              }, 9200);
              setTimeout(() => {
                _this.setState({
                  showtext24: false,
                  showtext25: true,
                });
              }, 9600);
          
              setTimeout(() => {
                _this.setState({
                  showtext25: false,
                  showtext26: true,
                });
              }, 10000);
              setTimeout(() => {
                _this.setState({
                  showtext27: true,
                });
              }, 10400);
              setTimeout(() => {
                _this.setState({
                  showtext28: true,
                });
              }, 10800);
              setTimeout(() => {
                _this.setState({
                  showtext29: true,
                });
              }, 11200);
              setTimeout(() => {
                _this.setState({
                  showtext30: true,
                  displayLine: true,
                });
              }, 11600);
          
              // setTimeout(() => {
              //   _this.setState({
          
              //     showtext4: false,
              //     showtext5: true,
              //   });
              // }, 1600);
        } ,14500)
    }

  render() {
    return (
      <Styles>
        <NavBar props={{...this.props}} />

        <div className="row no-gutters p-3 mb-5 top-part justify-content-center">
          <div className="col-lg-3 left-panel d-none d-lg-block">
            {/* <img src={left} alt="left portion" /> */}
            {leftSVG}
          </div>

          <div className="col-lg-6 p-3 d-flex flex-column justify-content-center align-items-center centerContainer">
            {/* this.state.showAre? display */}
            {(
              <div className="opening-lines ">
                {this.state.showtext1 ? "ARE" : null}
                {this.state.showtext2 ? "YOU" : null}
                {this.state.showtext3 ? "READY" : null}
                {this.state.showtext4 ? "TO" : null}
                {this.state.showtext5 ? "TAKE" : null}
                {this.state.showtext6 ? "THE" : null}
                {this.state.showtext7 ? "CHALLENGE?" : null}
              </div>
            ) || null}
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&DIAGNOSE &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            {(
              <div className="opening-lines" style={{ opacity: "1" }}>
                {this.state.showtext14 ? "DIAGNOSE" : null}
              </div>
            ) || null}
            {(
              <div className="opening-lines-sm">
                {this.state.showtext15 ? "DIAGNOSE" : null}
              </div>
            ) || null}
            {(
              <div className="opening-lines-md">
                {this.state.showtext16 ? "DIAGNOSE" : null}
              </div>
            ) || null}
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&UNDERSTAND&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            {(
              <div className="opening-lines" style={{ opacity: "1" }}>
                {this.state.showtext17 ? "ANALYSE" : null}
              </div>
            ) || null}
            {(
              <div className="opening-lines-sm">
                {this.state.showtext18 ? "ANALYSE" : null}
              </div>
            ) || null}
            {(
              <div className="opening-lines-md">
                {this.state.showtext19 ? "ANALYSE" : null}
              </div>
            ) || null}
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&LEARN &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            {(
              <div className="opening-lines" style={{ opacity: "1" }}>
                {this.state.showtext20 ? "LEARN" : null}
              </div>
            ) || null}
            {(
              <div className="opening-lines-sm">
                {this.state.showtext21 ? "LEARN" : null}
              </div>
            ) || null}
            {(
              <div className="opening-lines-md">
                {this.state.showtext22 ? "LEARN" : null}
              </div>
            ) || null}
            {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&UPGRADE&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
            {(
              <div className="opening-lines" style={{ opacity: "1" }}>
                {this.state.showtext23 ? "ENHANCE" : null}
              </div>
            ) || null}
            {(
              <div className="opening-lines-sm">
                {this.state.showtext24 ? "ENHANCE" : null}
              </div>
            ) || null}
            {(
              <div className="opening-lines-md">
                {this.state.showtext25 ? "ENHANCE" : null}
              </div>
            ) || null}
            {(
              <div className="numbers-reverse-lg ">
                {this.state.showtext8 ? "3" : null}
              </div>
            ) || null}
            {(
              <div className="numbers-reverse-sm ">
                {this.state.showtext9 ? "3" : null}
              </div>
            ) || null}
            {(
              <div className="numbers-reverse-lg ">
                {this.state.showtext10 ? "2" : null}
              </div>
            ) || null}
            {(
              <div className="numbers-reverse-sm ">
                {this.state.showtext11 ? "2" : null}
              </div>
            ) || null}
            {(
              <div className="numbers-reverse-lg ">
                {this.state.showtext12 ? "1" : null}
              </div>
            ) || null}
            {(
              <div className="numbers-reverse-sm ">
                {this.state.showtext13 ? "1" : null}
              </div>
            ) || null}
            {(
              <div className="headline text-center" style={{ opacity: "1" }}>
                {this.state.showtext26 ? "Your " : null}
                {this.state.showtext27 ? "Only " : null}
                {this.state.showtext28 ? <>Competition<br /></> : null}
                {this.state.showtext29 ? <span style={{color: "#ffffffa9", fontSize: "45px"}}>IS<br /></span> : null}
                {this.state.showtext30 ? <span className="opening-lines text-white">YOU</span> : null}
              </div>
            ) || null}
            <br />
            <div className="enroll-button">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScmEe30V3JWswLCF8ULctFY6ZAxG4NXXom4zxVjjDokpFKakQ/viewform?usp=sf_link">
                    <div class="btn enrollButton">
                        ENROLL NOW
                    </div>
                </a>
            </div>
          </div>

          <div className="col-lg-3  ml-auto right-panel d-none d-lg-block">
            {/* <img src={right} alt="right portion" /> */}
            {rightSVG}
          </div>
        </div>

        {/* downward arrow */}
        <div className="row no-gutters justify-content-center align-items-center" style={{ height: "60px" }}>
          <div className="down-arrow mx-auto cursor-pointer" onClick={this.arrowScroll}>
              <BsChevronDown size="60" color="#0c84fd" />
          </div>
        </div>

        {/* story animations */}
        <div className="section-two-container mt-5 py-5">
          <div className="row mt-5 no-gutters align-items-center section-two">
            <div className="col-md-1 my-2 blue-bg d-none d-md-block">
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </div>

            <div
              id="scroll-images"
              className="col-md-5 image-area d-flex justify-content-center image-area"
            >
                <img src={two} alt="materate" style={{maxWidth: "80%"}} className={`test ${ this.state.show1 ? "imgshow" : "imghide" }`} />
                <img src={three} alt="materate" className={`test ${ this.state.show2 ? "imgshow" : "imghide" }`} />
                <img src={four} alt="materate" className={`test ${ this.state.show3 ? "imgshow" : "imghide" }`} />
            </div>


            <div className="col-md-6 pb-4 pt-0 pt-md-4 pl-4 pr-0 my-2 blue-bg text-container">
              {/* {textDisplay} */}
              <div
                className="text-mid-container"
                id="text-mid-container"
                onScroll={this.handleScroll}
              >
                <br />
                <br />
                <br />
                {text2}
                <br />
                <br />
                <br />
                <br />
                {text3} 
                <br />
                <br />
                <br />
                <br />
                {text4} 
              </div>
            </div>
          </div>
        </div>

        <Programs />

        <Footer />
      </Styles>
    );
  }
}

export default LandingPage;
