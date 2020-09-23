import React from "react"
import styled from "styled-components"
import { BsChevronDown } from "react-icons/bs"
import { motion, useAnimation } from "framer-motion"

import cloud from "../assets/cloud.png"
import blueparrot from '../assets/parrot.png'
import happy from '../assets/happykid.png'
import normal from '../assets/normalkid.png'
import sad from '../assets/sadkid.png'
import sci from "../assets/sci.png"
import engi from "../assets/engi.png"
import math from "../assets/math.png"
import tech from "../assets/tech.png"
import aboutStatic from "../assets/aboutStatic.png"

import recognition1 from '../assets/recognition1.png'
import recognition2 from '../assets/recognition2.png'
import recognition3 from '../assets/recognition3.png'
import recognition4 from '../assets/recognition4.jpg'

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import TeamCard from "../components/TeamCard"
import Awards from "../components/Awards"

import whatwedo from '../assets/whatwedo.png'
import dividerReverse from '../assets/dividerReverse.png'
import divider from '../assets/divider.png'

const Styles = styled.div`
    html {
        scroll-behavior: smooth;
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
        0%, 100% {
            transform: translateY(18%);
        }
        50% {
            transform: translateY(-18%);
        }
    }
    .leftHeading {
        font-size: 4.5rem;
        font-weight: bold;
    }
    .whatwedo {
        font-size: 1.5rem;
        max-width: 650px;
        margin: auto;
    }
    .whatwedo h1 {
        font-size: 3rem;
    }
    @media(max-width: 767px){
        .whatwedo h1 {
            font-size: 2rem;
        }
        .whatwedo {
            font-size: 1rem;
        }
        .sectionTopRow {
            align-items: flex-start;
        }
        .leftHeading {
            font-size: 2rem;
        }
    }
    .cloud {
        width: 600px;
        z-index: 10;
    }
    .floatButton {
        max-width: 70px;
        z-index: 30;
    }
    .girl {
        position: relative;
        top: 40px;
        left: 200px;
        max-height: 300px;
    }
    .parrot {
        position: relative;
        top: 70px;
        right: 200px;
        max-height: 200px;
    }
    .sectionTopRow {
        min-height: 500px;
    }
    .sectionTop {
        margin-top: 82px;
        background: linear-gradient(to bottom, #0c84fd, #42a1f8);
        color: white;
        position: relative;
    }
    .sectionTop:after {
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
    .leftMotion {
        position: absolute;
    }
    .staticimg img {
        max-width: 80%;
        margin: auto;
    }
`;

const display = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.3 }},
    shift: { scale: 0.9, x: 20, y: 20, transition: { duration: 0.9 } },
    rotate: { y: -30, transition: { duration: 0.9 } }
}
const cloudOneRotation = {
    first: { rotate: -5, transition: { duration: 0.9 } },
    second: { rotate: 5, transition: { duration: 0.9 } },
    third: { scale: 0.9, x: 20, y: 20, transition: { duration: 0.9 } },
    visible: { opacity: 1, transition: { duration: 0.3 }},
    hidden: { opacity: 0, transition: { duration: 0.3 }},
}
const cloudTwoRotation = {
    first: { rotate: -13, transition: { duration: 0.9 } },
    second: { rotate: 17, transition: { duration: 0.9 } },
    third: { scale: 0.9, x: 20, y: 20, transition: { duration: 0.9 } },
    visible: { opacity: 1, transition: { duration: 0.3 }},
    hidden: { opacity: 0, transition: { duration: 0.3 }},
}
const floatButton = {
    hidden: { opacity: 0, x: -100, y: 100},
    visible1: { opacity: 1, x: 50, y: -50 , transition: { duration: 0.9 }},
    visible2: { opacity: 1, x: -40, y: 40, transition: { duration: 0.9 }},
    visible3: { opacity: 1, x: 50, y: 50, transition: { duration: 0.9 }},
    visible4: { opacity: 1, x: -40, y: -60, transition: { duration: 0.9 }},
    shift1: { opacity: 1, x: 70, y: -30 , transition: { duration: 0.9 }},
    shift2: { opacity: 1, x: -20, y: 60, transition: { duration: 0.9 }},
    shift3: { opacity: 1, x: 70, y: 70, transition: { duration: 0.9 }},
    shift4: { opacity: 1, x: -20, y: -40, transition: { duration: 0.9 }},
}

function AboutUs(props){
    const transform = useAnimation()
    const evolve = useAnimation()
    const upgrade = useAnimation()
    const wwd = useAnimation()

    const cloud1 = useAnimation()
    const cloud2 = useAnimation()

    const girlsad = useAnimation()
    const girlnormal = useAnimation()
    const girlhappy = useAnimation()

    const parrot = useAnimation()
    const button1 = useAnimation()
    const button2 = useAnimation()
    const button3 = useAnimation()
    const button4 = useAnimation()
    
    React.useEffect(() => {
        setTimeout(function() {
            transform.start("visible")
        } ,0)
        setTimeout(function() {
            cloud1.start("first")
            cloud2.start("first")
            girlsad.start("hidden")
            girlnormal.start("visible")
            parrot.start("visible")
            transform.start("hidden")
            evolve.start("visible")
        } ,1400)
        setTimeout(function() {
            cloud1.start("second")
            cloud2.start("second")
            girlnormal.start("hidden")
            girlhappy.start("visible")
            parrot.start("rotate")
            button1.start("visible1")
            button2.start("visible2")
            button3.start("visible3")
            button4.start("visible4")
            evolve.start("hidden")
            upgrade.start("visible")
        } ,2800)
        setTimeout(function() {
            cloud1.start("third")
            cloud2.start("third")
            girlhappy.start("shift")
            parrot.start("shift")
            button1.start("shift1")
            button2.start("shift2")
            button3.start("shift3")
            button4.start("shift4")
            upgrade.start("hidden")
            wwd.start("visible")
        } ,4200)
        setInterval(function() {
            setTimeout(function() {
                transform.start("visible")
                cloud1.start("visible")
                cloud2.start("visible")
                girlnormal.start("hidden")
                girlsad.start("visible")
                girlhappy.start("hidden")
                parrot.start("hidden")
                button1.start("hidden")
                button2.start("hidden")
                button3.start("hidden")
                button4.start("hidden")
                evolve.start("hidden")
                upgrade.start("hidden")
                wwd.start("hidden")
            } ,0)
            setTimeout(function() {
                cloud1.start("first")
                cloud2.start("first")
                girlsad.start("hidden")
                girlnormal.start("visible")
                parrot.start("visible")
                transform.start("hidden")
                evolve.start("visible")
            } ,1400)
            setTimeout(function() {
                cloud1.start("second")
                cloud2.start("second")
                girlnormal.start("hidden")
                girlhappy.start("visible")
                parrot.start("rotate")
                button1.start("visible1")
                button2.start("visible2")
                button3.start("visible3")
                button4.start("visible4")
                evolve.start("hidden")
                upgrade.start("visible")
            } ,2800)
            setTimeout(function() {
                cloud1.start("third")
                cloud2.start("third")
                girlhappy.start("shift")
                parrot.start("shift")
                button1.start("shift1")
                button2.start("shift2")
                button3.start("shift3")
                button4.start("shift4")
                upgrade.start("hidden")
                wwd.start("visible")
            } ,4200)
        } ,9000)

        // controls.start(i => ({
        //   opacity: 1,
        //   transition: { delay: i * 0.5 },
        // }))
        // controls2.start(i => ({
        //     opacity: 1,
        //     transition: { delay: i * 0.5 },
        // }))
    }, [])

    const arrowScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: 'smooth'
          });
    }
  
    return (
      <Styles>
        <NavBar props={{...props}} />

        <div className="sectionTop">
            <div className="row no-gutters mx-auto pb-5 pt-2 pt-md-5 sectionTopRow">
                <div className="d-block d-md-none staticimg text-center">
                    <div>
                        <img src={aboutStatic} />
                    </div>
                </div>
                <div className="col-12 col-md-5 d-flex justify-content-center align-items-center flex-column">
                    <motion.div className="leftMotion" animate={transform} initial="hidden" variants={display}>
                        <div class="leftHeading">DIAGNOSE</div>
                    </motion.div>
                    <motion.div className="leftMotion" animate={evolve} initial="hidden" variants={display}>
                        <div class="leftHeading">ANALYZE</div>
                    </motion.div>
                    <motion.div className="leftMotion" animate={upgrade} initial="hidden" variants={display}>
                        <div class="leftHeading">LEARN</div>
                    </motion.div>
                    <motion.div className="leftMotion" animate={wwd} initial="hidden" variants={display}>
                        <div className="whatwedo pr-3 pl-5">
                            <h1 className="font-weight-bold mb-3">Our Vision is to ‘Transform school students’ learning journey in STEM’</h1>
                        </div>
                    </motion.div>
                </div>
                <div className="col-12 col-md-7 d-none d-md-flex justify-content-center align-items-center flex-column">
                    <motion.div className="position-absolute text-center w-100" animate={cloud1} variants={cloudOneRotation}>
                        <img src={cloud} className="cloud" />
                    </motion.div>
                    <motion.div className="position-absolute text-center w-100" initial={{x: 10, rotate: 10}} animate={cloud2} variants={cloudTwoRotation}>
                        <img src={cloud} className="cloud" />
                    </motion.div>
                    <motion.div className="position-absolute text-center w-100" animate={girlsad} variants={display}>
                        <img src={sad} className="girl" />
                    </motion.div>
                    <motion.div className="position-absolute text-center w-100" animate={girlnormal} variants={display} initial="hidden">
                        <img src={normal} className="girl" />
                    </motion.div>
                    <motion.div className="position-absolute text-center w-100" animate={girlhappy} variants={display} initial="hidden">
                        <img src={happy} className="girl" />
                    </motion.div>
                    <motion.div className="position-absolute text-center w-100" animate={parrot} variants={display} initial="hidden">
                        <img src={blueparrot} className="parrot" />
                    </motion.div>
                    <motion.div className="position-absolute text-center w-100" animate={button1} variants={floatButton} initial="hidden">
                        <img src={tech} className="floatButton" />
                    </motion.div>
                    <motion.div className="position-absolute text-center w-100" animate={button2} variants={floatButton} initial="hidden">
                        <img src={sci} className="floatButton" />
                    </motion.div>
                    <motion.div className="position-absolute text-center w-100" animate={button3} variants={floatButton} initial="hidden">
                        <img src={engi} className="floatButton" />
                    </motion.div>
                    <motion.div className="position-absolute text-center w-100" animate={button4} variants={floatButton} initial="hidden">
                        <img src={math} className="floatButton" />
                    </motion.div>
                </div>
            </div>
        </div>

        <div className="row no-gutters justify-content-center align-items-center py-5">
            <div className="down-arrow mx-auto cursor-pointer" onClick={arrowScroll}>
                <BsChevronDown size="60" color="#0c84fd" />
            </div>
        </div>

        <div className="teamaward">
            {/* <div className="row justify-content-center align-items-center">
            <div className="our-team d-flex flex-column text-center py-5">
                <div
                className="text px-5"
                style={{
                    background: "#ffffff",
                    color: "#1967B3",
                    fontWeight: "bold",
                }}
                >
                    <h1 className="m-0"> OUR TEAM</h1>{" "}
                </div>
                <div
                className="3D"
                style={{
                    background: "#C8E3FD",
                    borderRadius: "0px 0px 20px 20px",
                    height: "10px",
                }}
                ></div>
            </div>
            </div>

            <div className="row no-gutters p-3 justify-content-around align-items-center">
            <div className="col-6 col-md-4">
                <TeamCard />
            </div>
            <div className="col-6 col-md-4">
                <TeamCard />
            </div>
            <div className="col-6 col-md-4">
                <TeamCard />
            </div>
            <div className="col-6 col-md-4">
                <TeamCard />
            </div>
            <div className="col-6 col-md-4">
                <TeamCard />
            </div>
            <div className="col-6 col-md-4">
                <TeamCard />
            </div>
            <div className="col-6 col-md-4">
                <TeamCard />
            </div>
            <div className="col-6 col-md-4">
                <TeamCard />
            </div>
            </div> */}

            {/* %%%%%%%%%%%%%%%%%%% AWARDS SECTION %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%               */}
            <div className="row justify-content-center align-items-center pt-5">
                <div className="our-awards d-flex flex-column text-center">
                    <div
                    className="text px-5"
                    style={{
                        background: "#ffffff",
                        color: "#1967B3",
                        fontWeight: "bold",
                    }}
                    >
                    <h2 className="m-0">AWARDS AND RECOGNITIONS</h2>
                    </div>
                    <div
                    className="3D"
                    style={{
                        background: "#C8E3FD",
                        borderRadius: "0px 0px 20px 20px",
                        height: "10px",
                    }}
                    ></div>
                </div>
            </div>

            <div className="row no-gutters px-3 py-5 justify-content-center container mx-auto">
                <div className="col-6 col-md-3">
                    <Awards image={recognition1} title={"WEE"} />
                </div>
                <div className="col-6 col-md-3">
                    <Awards image={recognition2} title={"DST"} />
                </div>
                <div className="col-6 col-md-3">
                    <Awards image={recognition3} title={"SIF"} />
                </div>
                <div className="col-6 col-md-3">
                    <Awards image={recognition4} title={"GDC"} />
                </div>
            </div>
        </div>
        
        <Footer />
      </Styles>
    )
}

export default AboutUs;
