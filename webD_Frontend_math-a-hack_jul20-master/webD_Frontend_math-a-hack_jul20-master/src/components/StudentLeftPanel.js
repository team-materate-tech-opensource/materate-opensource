import React from "react";
import StudentDots from "./StudentDots";
import Doughnut from './DoughnutMini'
import Switch from 'react-switch'
import { FaChevronLeft } from "react-icons/fa";

const questions = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
    20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,
];

const questionDots = questions.map((item, index) => (
    <StudentDots text={item} id={index} />
));

const redContainer = {
    background: "#ffffff",
    borderRadius: "48px",
    boxShadow: "0px 3px 50px 0px #FD8AA933, 0px 3px 30px 5px #FD8AA950",
};

function StudentLeftPanel(props) {
    return (
        <div>
            <div className="row no-gutters px-2 pb-4 my-4 justify-content-center"
                style={{
                    ...redContainer,
                    background: "#FEF3F4"
                }}
            >
                <div className="col-12 pt-3 pr-4 align-items-center justify-content-between">
                    <div className="row no-gutters align-items-center justify-content-end">
                        <div>
                            <StudentDots />
                        </div>
                        <div>Correct</div>
                        <div>
                            <StudentDots background="#fd5a5a" />
                        </div>
                        <div>Incorrect</div>
                    </div>
                </div>
                {/* <div className="font-weight-bold">Questions 1 to 35</div> */}
                <div className="col-12 px-2 py-2 d-flex flex-wrap justify-content-center">
                    {props.questions.map((item,index) => 
                        <StudentDots text={index + 1} id={item.q_id} />
                    )}
                </div>
            </div>
            <div className="px-3 py-2 my-4 d-flex align-items-center justify-content-center font-weight-bold"
                style={{
                    ...redContainer,
                    border: "2px solid #E00606",
                    margin: "auto",
                }}
            >
                <div>Combined Mode </div>
                <div className="px-2">
                    <Switch
                        onChange={props.handleSwitch}
                        checked={props.combined}
                        uncheckedIcon={<></>}
                        checkedIcon={<></>}
                        className="react-switch"
                        height={20}
                        width={40}
                        offColor={"#fff"}
                        onColor={"#F9BCBC"}
                        onHandleColor={"#fff"}
                        offHandleColor={"#F9BCBC"}
                        activeBoxShadow={'0 0 2px 3px #f9bcbc'}
                    />
                </div>
            </div>
            <div className="position-relative">
                <div className={`hint position-absolute w-75 p-4 ${props.hint ? "visible" : "hidden"}`} >
                    <div className="bg-white d-flex flex-column align-items-center justify-content-around">
                        <div>
                            <FaChevronLeft /> Select Any one option
                        </div>
                        <div>
                            <FaChevronLeft /> Select Any one option
                        </div>
                    </div>
                </div>
                <div className="row no-gutters px-2 py-4 my-4 justify-content-center" style={redContainer} >
                    <div className="col-md-12">
                        <div className="row no-gutters justify-content-center font-weight-bold mb-3">
                            Difficulty Level:
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div className={`mx-auto cursor-pointer ${ props.easy ? "opaque" : "blured" }`} style={{ maxWidth: "100px" }} onClick={props.handleEasy}>
                            <Doughnut data={[
                                { color: '#22E135', value: 9 },
                                { color: '#d1ffe6', value: 2 }
                            ]} border="1px solid #22E135" background="white">
                                <div className="text-center">
                                    <h6 className="m-0 font-weight-bold"><span style={{ color: "#22E135", fontSize: "1.5rem" }}>10</span>
                                        <span className="text-muted">/25</span></h6>
                                </div>
                            </Doughnut>
                        </div>
                        Easy
                    </div>
                    <div className="col-4 text-center">
                        <div className={`mx-auto cursor-pointer ${ props.moderate ? "opaque" : "blured" }`} style={{ maxWidth: "100px" }} onClick={props.handleModerate}>
                            <Doughnut data={[
                                { color: '#E8E738', value: 9 },
                                { color: '#FAFDCE', value: 2 }
                            ]} border="1px solid #E8E738" background="white" active={props.moderate}>
                                <div className="text-center">
                                    <h6 className="m-0 font-weight-bold"><span style={{ color: "#E8E738", fontSize: "1.5rem" }}>10</span>
                                        <span className="text-muted">/25</span></h6>
                                </div>
                            </Doughnut>
                        </div>
                        Moderate
                    </div>
                    <div className="col-4 text-center">
                        <div className={`mx-auto cursor-pointer ${ props.hard ? "opaque" : "blured" }`} style={{ maxWidth: "100px" }} onClick={props.handleHard}>
                            <Doughnut data={[
                                { color: '#FE5A5A', value: 9 },
                                { color: '#FED9D9', value: 2 }
                            ]} border="1px solid #FE5A5A" background="white" active={props.hard}>
                                <div className="text-center">
                                    <h6 className="m-0 font-weight-bold"><span style={{ color: "#FE5A5A", fontSize: "1.5rem" }}>10</span>
                                        <span className="text-muted">/25</span></h6>
                                </div>
                            </Doughnut>
                        </div>
                        Tough
                    </div>
                </div>
                <div className="row no-gutters px-2 py-4 my-4 justify-content-center" style={redContainer} >
                    <div className="col-md-12">
                        <div className="row justify-content-center font-weight-bold mb-3">
                            Response Type:
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <div className={`mx-auto cursor-pointer ${ props.misconception ? "opaque" : "blured"}`} style={{ maxWidth: "100px" }} onClick={props.handleMisconception}>
                            <Doughnut data={[
                                { color: '#FDA50F', value: 9 },
                                { color: '#FFEDCF', value: 2 }
                            ]} border="1px solid #FDA50F" background="white">
                                <div className="text-center">
                                    <h6 className="m-0 font-weight-bold"><span style={{ color: "#FDA50F", fontSize: "1.5rem" }}>10</span>
                                        <span className="text-muted">/25</span></h6>
                                </div>
                            </Doughnut>
                        </div>
                        Misconceptions
                    </div>
                    <div className="col-4 text-center">
                        <div className={`mx-auto cursor-pointer ${ props.silly ? "opaque" : "blured" }`} style={{ maxWidth: "100px" }} onClick={props.handleSilly}>
                            <Doughnut data={[
                                { color: '#59BDE7', value: 9 },
                                { color: '#D8F4F8', value: 2 }
                            ]} border="1px solid #59BDE7" background="white">
                                <div className="text-center">
                                    <h6 className="m-0 font-weight-bold"><span style={{ color: "#59BDE7", fontSize: "1.5rem" }}>10</span>
                                        <span className="text-muted">/25</span></h6>
                                </div>
                            </Doughnut>
                        </div>
                        Silly Mistakes
                    </div>
                    <div className="col-4 text-center">
                        <div className={`mx-auto cursor-pointer ${ props.unattempted ? "opaque" : "blured" }`} style={{ maxWidth: "100px" }} onClick={props.handleUnattempted}>
                            <Doughnut data={[
                                { color: '#FE5A5A', value: 9 },
                                { color: '#FED9D9', value: 2 }
                            ]} border="1px solid #FE5A5A" background="white">
                                <div className="text-center">
                                    <h6 className="m-0 font-weight-bold"><span style={{ color: "#FE5A5A", fontSize: "1.5rem" }}>10</span>
                                        <span className="text-muted">/25</span></h6>
                                </div>
                            </Doughnut>
                        </div>
                        Unattempted
                    </div>
                </div>
            </div>
            <style>{`
                .react-switch {
                    display: block !important;
                    border: 1px solid #F9BCBC;
                }
                .hint {
                    transition: 0.5s;
                }
                .visible{
                    left: 110%;
                    z-index: 10000;
                    opacity: 1;
                }
                .hidden {
                    left: 0;
                    z-index: -100;
                    opacity: 0;
                }
                .hint svg {
                    position: relative;
                }
                .hint>div {
                    box-shadow: 0px 0px 20px -5px rgba(150,0,0,0.4);
                    min-height: 430px;
                    border-radius: 30px;
                }
                .opaque {
                    border-radius: 50px;
                    transition: 0.3s;
                    opacity: 1;
                    transform: scale(1.05);
                    box-shadow: 0px 2px 7px 1px rgba(0,0,0,0.2);
                }
                .blured {
                    opacity: 0.4;
                    border-radius: 50px;
                    transition: 0.3s;
                }
            `}</style>
        </div>
    )
}
export default StudentLeftPanel;
