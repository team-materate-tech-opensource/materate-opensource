import React, { Component } from "react";
// import AnalysisHeader from "../components/AnalysisHeader";
// import SubHeader from "../components/SubHeader";
import PrincipalTopBar from "../components/PrincipalTopBar";
import StudentDots from '../Student/StudentDots'
import ResponseBox from "../components/ResponseBox";
import styled from 'styled-components'
import PrincipalNav from '../Principal/PrincipalNav'

const Styled = styled.div`
    background: #EEF5FE;
    .floatingContainer {
        background: #F1F6FC;
        box-shadow: 5px 8px 15px 3px #7d8aa930, -5px -5px 13px 2px #FFFFFF;
        border-radius: 48px;
    }
    .chart-box {
        max-width: 100%;
        overflow-x: scroll;
    }
    .floatingContainerInset {
        background: #F1F6FC;
        box-shadow: 5px 8px 7px 3px #7d8aa930 inset, -5px -5px 13px 2px #FFFFFF inset;
        border-radius: 18px;
    }
`

// const arr = [false, false, false, true, false];
function Responses() {
    const [ dots, setDots ] = React.useState([])
    React.useEffect( () => {
        var questionDots = [];
        for(var i=0; i<25; i++){
            questionDots.push(
                <StudentDots 
                    text={i+1} 
                    radius={"5px"} 
                    background={"linear-gradient(136deg, #66E56A 0%, #0FC213 100%)"} 
                    color="white"
                    size="38px"
                />
            )
        }
        setDots(questionDots)
    } ,[])
    return (
        <Styled>
            <PrincipalNav responses />
            <div className="py-4 px-1 text-center text-muted font-weight-bold" style={{ fontSize: "30px" }}>
                RESPONSES AND ANSWER KEYS
            </div>
            <div className="row no-gutters">
                <div className="col-12 col-lg-3 p-2 p-md-5 text-center">
                    <h4 className="font-weight-bold mb-3">
                        Question Selector
                    </h4>
                    <div className="floatingContainerInset p-3 p-md-5 d-flex justify-content-center flex-wrap">
                        {dots.map((item, index) => 
                            <>
                                {item}
                            </>
                        )}
                    </div>
                </div>
                <div className="col-12 col-lg-9 p-3 p-md-5">
                    <div className="floatingContainer p-2 p-md-4 mb-5">
                        <ResponseBox />
                    </div>
                    <div className="floatingContainer p-2 p-md-4 mb-5">
                        <ResponseBox />
                    </div>
                    <div className="floatingContainer p-2 p-md-4 mb-5">
                        <ResponseBox />
                    </div>
                    <div className="floatingContainer p-2 p-md-4 mb-5">
                        <ResponseBox />
                    </div>
                </div>
            </div>
        </Styled>
    )
}

export default Responses;
