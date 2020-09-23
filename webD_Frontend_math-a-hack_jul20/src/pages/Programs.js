import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PaymentApp from "../components/PaymentApp";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"

import bcg from '../assets/bcg.png'
import divider from '../assets/divider.png'
import program from  '../assets/program.png'
import program4 from '../assets/program4.png'
import program3 from '../assets/program3.png'
import payment from '../assets/payment.png'

const Styles = styled.div`
    a, a:hover {
        text-decoration: none;
    }
    .heading {
        font-size: 3rem;
        color: #0080FE;
        font-weight: bold;
    }
    .section {
        padding: 50px 0px;
    }
    .customcontainer {
        max-width: 1400px;
        margin: auto;
    }
    .sectionTop {
        color: white;
        text-shadow: 0px 0px 10px rgba(0,0,0,0.45);
        //background: linear-gradient(to bottom, #0c84fd,#42a1f8);
        background-image: url(${program});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center bottom;
        min-height: 730px;
        position: relative;
    }
    .sectionTop>div {
        min-height: 500px;
    }
    .mainHeading {
        font-size: 4rem;
    }
    @media(max-width: 767px){
        .sectionTop {
            background-color: #0080fd;
            background-size: 150%;
            background-position: right bottom;
            min-height: 460px;
        }
        .mainHeading {
            font-size: 2.7rem;
        }
    }
    // .sectionTop:after {
    //     content: "";
    //     position: absolute;
    //     bottom: -200px;
    //     width: 100%;
    //     background-image: url(${divider});
    //     background-repeat: no-repeat;
    //     background-position: center top;
    //     background-size: 100%;
    //     height: 200px ;
    // }
    .sectionBlurry {
        background-image: url(${bcg});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        text-align: center;
    }
    .floatContainer {
        border-radius: 28px;
        box-shadow: 0px 0px 25px -3px #073c754d;
        background: #EDF6FF 0% 0% no-repeat padding-box;
        box-shadow: -2px 11px 11px #06060636;
    }
    .floatContainer img {
        max-width: 100%;
        max-height: 400px;
        border-radius: 20px;
    }
    @media(min-width: 1000px){
        .imgcard {
            transform: scale(1.4);
        }
    }
    .buyfloat {
        margin: 0px 20px 100px 20px;
        padding: 50px 0px;
        box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.1);
        border-radius: 30px;
    }
    .item {
        border-radius: 49px;
        background: linear-gradient(45deg, #e1f0ff30, #e4f0ff);
        box-shadow: 0px 0px 10px 2px #b4d1f5;
        height: 100%;
        position: relative;
        color: rgba(0,0,0,0.6);
    }
    .item:hover .imageContainer img {
        transform: scale(1.08);
    }
    .itemheading {
        top: 13px;
        text-shadow: 0px 0px 14px #8f9da5bf;
        z-index: 10;
    }
    .itemheading>div {
        margin: 0px 30px;
        border-bottom: 2px solid rgba(255,255,255,0.5);
    }
    .itemfooter{
        margin: 0px 30px;
        border-top: 2px solid rgba(255,255,255,0.5);
    }
    .motion-heading {
        position: absolute;
        font-size: 4.9rem;
        font-weight: bold;
    }
    @media(max-width: 767px){
        .motion-heading {
            position: absolute;
            font-size: 3.5rem;
            font-weight: bold;
        }
    }
`;

const display = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, transition: { duration: 0.3 }},
}

function Programs(props) {
    const diagnose = useAnimation()
    const analyse = useAnimation()
    const learn = useAnimation()
    const enhance = useAnimation()

    React.useEffect( () => {
        setTimeout( () => {
            diagnose.start("visible")
        } , 100)
        setTimeout( () => {
            diagnose.start("hidden")
            analyse.start("visible")
        } , 1000)
        setTimeout( () => {
            analyse.start("hidden")
            learn.start("visible")
        } , 1900)
        setTimeout( () => {
            learn.start("hidden")
            enhance.start("visible")
        } , 2800)
        setInterval( () => {
            enhance.start("hidden")
            setTimeout( () => {
                diagnose.start("visible")
            } , 100)
            setTimeout( () => {
                diagnose.start("hidden")
                analyse.start("visible")
            } , 1000)
            setTimeout( () => {
                analyse.start("hidden")
                learn.start("visible")
            } , 1900)
            setTimeout( () => {
                learn.start("hidden")
                enhance.start("visible")
            } , 2800)
        } ,5000)
    } ,[])
    return (
      <Styles>
        <NavBar props={{...props}} />
            <div style={{marginTop: "40px"}}>
                <div className="sectionTop">
                    <div className="row no-gutters m-auto py-5">
                        <div className="col-md-12 col-lg-6 pl-0 pl-md-5 py-5">
                            <div className="text-left px-5 pb-3 pt-md-5 d-flex flex-column w-100 h-100 justify-content-center align-items-center">
                                {/* <div className="text-white font-weight-bold mainHeading">Programs</div>
                                <p>Intrigued! Wanna know more about us? Send in your queries here or reach out to us.</p> */}
                                <motion.div className="motion-heading" animate={diagnose} variants={display} initial={"hidden"}>
                                    Diagnose
                                </motion.div>
                                <motion.div className="motion-heading" animate={analyse} variants={display} initial={"hidden"}>
                                    Analyse
                                </motion.div>
                                <motion.div className="motion-heading" animate={learn} variants={display} initial={"hidden"}>
                                    Learn
                                </motion.div>
                                <motion.div className="motion-heading" animate={enhance} variants={display} initial={"hidden"}>
                                    Enhance
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 align-self-top">
                            {/* <img src={program} /> */}
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="sectionBlurry">
                        <div className="row no-gutters customcontainer p-3">
                            <div className="col-12 col-md-7 d-flex align-items-center justify-content-center">
                                <div className="floatContainer w-100">
                                    <img src={program4} />
                                </div>
                            </div>
                            <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
                                <div className="px-3 py-5 text-center">
                                    <div className="heading pb-3">Math-a-Month</div>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScmEe30V3JWswLCF8ULctFY6ZAxG4NXXom4zxVjjDokpFKakQ/viewform?usp=sf_link">
                                        <div className="buttonBordered" style={{fontSize: "1.4rem"}}>REGISTER <FaChevronRight className="mb-1" /> </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customcontainer text-muted p-3">
                    <div className="floatContainer p-3 p-md-5">
                        <div>
                            To know where we lack to gain knowledge, we first need to have a clear vision to aim at 
                            and overcome those deficits. Students love challenges, so here we come with a 4-week 
                            Transformation Challenge in Mathematics. This challenge aims to make you better than yourself 
                            in mathematical problem- solving abilities. This will constitute: 
                        </div>
                        <div className="py-3 px-4">
                            <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  5 diagnostic assessments </div>
                            <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Access to Master Classes</div>
                            <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  One on one Academic Consulting Calls</div>                        </div>
                        <div>
                            The top 1% of winners will get exclusive mentorship from our academic experts, merit certificates and exciting prizes
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="sectionBlurry">
                        <div className="row no-gutters customcontainer p-3">
                            <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
                                <div className="px-3 py-5 text-center">
                                    <div className="heading pb-3">Math-a-Hack</div>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf97ztsUQ529N2N0b31LMWevdUdGxUHStKF_OT2tmx5huM2kg/viewform?usp=sf_link">
                                        <div className="buttonBordered" style={{fontSize: "1.4rem"}}>REGISTER <FaChevronRight className="mb-1" /> </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 d-flex align-items-center justify-content-center">
                                <div className="floatContainer w-100">
                                    <img src={program3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customcontainer text-muted p-3">
                    <div className="floatContainer p-3 p-md-5">
                        <div>
                            Math-a-Hack is a diagnostic test that enables students to gauge their understanding in Maths 
                            and clearly identify the root cause of the problems they are facing. Their errors are systematically 
                            recognized and categorized for resolution of gaps in understanding. Since this a full syllabus 
                            diagnostic assessment, students also learn about their strengths and weakness in various concepts. 
                            This constitutes:
                        </div>
                        <div className="py-3 px-4">
                            <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  A Diagnostic assessment</div>
                            <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Detailed performance analysis</div>
                            <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Merit certificates and exciting discounts on Math-a-month for Top 1% students</div>
                        </div>
                    </div>
                </div>
                <div className="py-5 mt-0 mt-md-3 text-muted text-center">
                    <h1 className="font-weight-bold">Hurry up!</h1>
                    <h2 className="ont-weight-bold">
                        Grab the opportunity to be a part of the new-era learning experience!
                    </h2>
                </div>
                <div className="sectionBuy">
                    <div class="heading p-2 p-md-5 text-center">
                        Buy Plan
                    </div>
                    <div className="buyfloat">
                        <div className="row no-gutters">
                            <div className="col-12 col-lg-7 text-center">
                                <h2 class="font-weight-bold">
                                    Good Thought!
                                </h2>
                                <div className="text-muted">Select from the available package</div>
                                <div className="row no-gutters py-3 px-3">
                                    <div className="col-12 col-sm-6 p-3">
                                        <div className="item d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="itemheading w-100 text-primary p-4">
                                                    <div>
                                                        <h3 className="font-weight-bold text-center mb-2">Math-a-Month</h3>
                                                    </div>
                                                </div>
                                                <div className="font-weight-bold py-2">
                                                </div>
                                                <div className="py-3 px-4 text-left">
                                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Focused on improving problem-solving and critical thinking skills in Maths</div>
                                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Evaluation through 5 diagnostic assessments</div>
                                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Access to Master Classes</div>
                                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  One on one Academic Consulting Calls</div>
                                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Top 1% scorers will be awarded academic mentorship, exciting prizes along with Merit Certificates!</div>
                                                </div>
                                            </div>
                                            <div class="itemfooter  px-5 py-4 font-weight-bold">
                                                <PaymentApp initial="1" package="2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 p-3">
                                        <div className="item d-flex flex-column justify-content-between">
                                            <div>
                                                <div className="itemheading w-100 text-primary p-4">
                                                    <div>
                                                        <h3 className="font-weight-bold text-center mb-2">Math-a-Hack</h3>
                                                    </div>
                                                </div>
                                                <div className="font-weight-bold py-2">
                                                </div>
                                                <div className="py-3 px-4 text-left">
                                                    <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Diagnostic test that enables students to gauge their understanding in Maths</div>
                                                    <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Clear identification of the root cause of the problems</div>
                                                    <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Merit certificates and exciting discounts on Math-a-month for Top 1% students</div>
                                                </div>
                                            </div>
                                            <div class="itemfooter px-5 py-4 font-weight-bold">
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf97ztsUQ529N2N0b31LMWevdUdGxUHStKF_OT2tmx5huM2kg/viewform?usp=sf_link">
                                                    <div className="btn buttonBordered text-center mx-auto" style={{maxWidth: "400px"}}>
                                                        Register Now
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center p-2">
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 text-center p-2 d-flex align-items-center justify-content-center">
                                <img src={payment} className="w-75" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
      </Styles>
    )
}
export default Programs;
