import React from "react"
import styled from 'styled-components'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'

const DIFFICULTY = [ "Easy", "Medium", "Hard" ]
const DIFFUCULTY_COLOR = {
    0: "#22e135",
    1: "#dab624",
    2: "#fe5b59"
}
const Q_TYPE = [ "Single Correct Type", "Integer Type", "One word Type" ]
const ERROR_CLASS = [ "Correct", "Unclassified", "Silly mistake", "Misconception" ]
const PERFORMANCE = [ "Needs improvement", "Good", "Excellent" ]
const ABCD =  ["A", "B", "C", "D"]

const renderHTML = (html) => {
    return {
        __html: html
    }
}

const Style = styled.div`
    .option-box {
        padding: 5px 0px;
        align-items: center;
        justify-content: start;
    }
    .option{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }
    .option-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        border-radius: 50px;
        border: 2px solid transparent;
    }
    .option-text{
        flex: 13;
    }
    .option-text p {
        margin: 0;
    }
    .marked {
        border-radius: 50px;
        border: 2px dashed orange;
    }
    .correct {
        border-radius: 50px;
        border: 2px solid #3fe366;
    }
`

function StudentAnswerBox(props) {
     
    return (
        <Style>
            <div className={`row no-gutters px-2 py-5 p-md-3 my-4 ${ props.d_options[props.difficulty] ? "" : "d-none" }`}
                id={`question`+props.q_id}
                style={{
                    background: "#ffffff padding-box",
                    boxShadow: "0px 3px 50px 0px #FD8AA933, 0px 3px 30px 5px #FD8AA950",
                    borderRadius: "48px",
                }}
            >
                <div className="col-1 text-center font-weight-bold" style={{ fontSize: "22px" }}>
                    {props.no}.
                </div>
                <div className="col-11 col-md-8 pr-2 pr-md-4">
                    <div dangerouslySetInnerHTML={renderHTML(props.qText)}></div>
                    <div className="mt-2 p-2">
                        {props.options.map((option, index) => 
                            <div className="d-flex option-box">
                                <div className="option">
                                    <div className="option-circle">
                                        { option.opt_err_label == 0 && option.marked ? <IoIosCheckmarkCircle color="#3fe366" size="33" /> : <></> }
                                        { option.opt_err_label != 0 && option.marked ? <IoIosCloseCircle color="red" size="33" /> : <></> }
                                    </div>
                                </div>
                                <div className="option"> 
                                    <div className={`option-circle font-weight-bold ${option.opt_err_label == 0 ? "correct" : ""} ${option.marked ? "marked" : ""}`}>
                                        {ABCD[index]} 
                                    </div>
                                </div> 
                                <div className="option-text" dangerouslySetInnerHTML={renderHTML(option.opt_text)}></div>
                            </div>
                        )}
                    </div>
                    { props.ansExp && 
                        <div className="row no-gutters p-2">
                            <div style={{ color: "#FDA50F" }}>
                                Explanation:
                                <div dangerouslySetInnerHTML={renderHTML(props.ansExp)}></div>
                            </div>
                        </div> 
                    }
                    
                </div>

                <div className="col-12 col-md-3 px-3 row no-gutters">
                    <div className="col-6 col-md-12">
                        Difficulty Level:
                        <div className="mb-2 font-weight-bold" style={{ color: DIFFUCULTY_COLOR[props.difficulty] }}>
                            {DIFFICULTY[props.difficulty]}
                        </div>
                    </div>
                    <div className="col-6 col-md-12">
                        Response Type:
                        <div className="mb-2 font-weight-bold" style={{ color: "#40E366" }}>
                            Correct
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}
export default StudentAnswerBox;
