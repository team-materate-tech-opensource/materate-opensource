import React from "react";
import PrincipalTopBar from "../components/PrincipalTopBar";
import styled from 'styled-components'
import Chart from '../components/Chart/ChartNew'
import PrincipalNav from '../Principal/PrincipalNav'

const Styled = styled.div`
    background: #EEF5FE;
    .floatingContainer {
        width: 100%;
        background: #F1F6FC;
        box-shadow: 5px 8px 15px 3px #7d8aa930, -5px -5px 13px 2px #FFFFFF;
        border-radius: 48px;
    }
    .chart-box {
        max-width: 100%;
        overflow-x: scroll;
    }
    .floatBox {
        background: #F1F6FC;
        box-shadow: 5px 8px 7px 3px #7d8aa930 inset, -5px -5px 13px 2px #FFFFFF inset;
        border-radius: 18px;
        padding: 20px;
        top: 0;
        right: 0;
    }
    @media(min-width: 1000px){
        .floatBox {
            position: absolute;
        }
    }
    .colorBox {
        height: 20px;
        width: 50px;
        border-radius: 2px;
    }
    .easy {background: #26EC96}
    .moderate {background: #EEB832}
    .difficult {background: #F50A41}
    .customContainer {
        max-width: 1400px;
        margin: 0px auto;
    }
`
const data = [8,14,11,6,2,4,8,3,1]

function TestAnalysis() {
    return (
      <Styled>
        <PrincipalNav analysis />
        <div>
            <div className="py-4 px-1 text-center text-muted font-weight-bold" style={{fontSize: "30px"}}>
                QUESTION PAPER ANALYSIS
            </div>
            <div className="customContainer p-3 p-lg-4">
                <div className="floatingContainer py-5 px-2">
                    <div className="text-muted text-center" style={{fontSize: "30px"}}>
                    WEIGHTAGE IF EACH CHAPTER
                    </div>
                    <div className="p-3 p-md-5">
                        <div className="chart-box px-2 py-5 text-center">
                            <Chart data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-5">
            <div className="py-4 px-1 text-center text-muted font-weight-bold" style={{fontSize: "30px"}}>
                CHAPTER WISE ANALYSIS
            </div>
            <div className="customContainer p-3 p-lg-4">
                <div className="floatingContainer py-5 px-2 position-relative">
                    <div className="text-muted text-center" style={{fontSize: "30px"}}>
                        CHAPTER WISE MARKS OBTAINED
                    </div>
                    <div className="floatBox m-3 m-md-4">
                        <h6>Difficulty Levels</h6>
                        <div>
                            <div className="d-flex align-items-center">
                                <div className="colorBox easy"></div>
                                <div className="p-2">Easy</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="colorBox moderate"></div>
                                <div className="p-2">Moderate</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="colorBox difficult"></div>
                                <div className="p-2">Difficult</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 p-md-5">
                        <div className="chart-box px-2 py-5 text-center">
                            <Chart data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Styled>
    )
}
export default TestAnalysis;
