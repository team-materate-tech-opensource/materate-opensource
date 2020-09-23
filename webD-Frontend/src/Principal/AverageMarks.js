import React, { Component } from "react";
import styled from "styled-components";
import Chart from '../components/Chart/ChartNew'
import TableComponent from '../components/TableComponentTeacher'
import PrincipalNav from '../Principal/PrincipalNav'

const array = [
    ["Range", "Percentage of students"],
    ["0-5", "6.818182"],
    ["6-10", "9.090909"],
    ["11-15", "22.727273"],
    ["16-20", "28.787879"],
    ["21-25", "22.727273"],
    ["26-30", "6.060606"],
    ["31-35", "3.787879"],
]; //prop for TableComponent

const array2 = [
    ["Range", "% of students", "Name of the School"],
    ["0-5", "6.818182", "ABC School"],
    ["6-10", "9.090909", "ABC School"],
    ["11-15", "22.727273", "ABC School"],
    ["16-20", "28.787879", "ABC School"],
    ["21-25", "22.727273", "ABC School"],
    ["26-30", "6.060606", "ABC School"],
    ["31-35", "3.787879", "ABC School"],
]; //prop for TableComponent

const array3 = [
    ["Rank", "Student ID", "Name", "School", "Marks"],
    ["1", "6.818182", "PQR", "ABC School", "31"],
    ["2", "9.090909", "PQR", "ABC School", "31"],
    ["3", "22.727273", "PQR", "ABC School", "36"],
    ["4", "28.787879", "PQR", "ABC School", "41"],
    ["5", "22.727273", "PQR", "ABC School", "31"],
    ["6", "6.060606", "PQR", "ABC School", "37"],
    ["7", "3.787879", "PQR", "ABC School", "21"],
]; //prop for TableComponent

const Styled = styled.div`
    body {
        background: #F6F2E2 !important;
    }
    .iconContainer {
        box-shadow: 5px 5px 13px -2px rgba(0,0,0,0.2) inset, -5px -5px 20px 0px rgba(255,255,255,0.9) inset;
        border-radius: 33px;
    }
    .floatingContainer {
        width: 100%;
        background: #F6F2E2;
        box-shadow: 5px 8px 20px 0px #7d8aa926, -10px -10px 15px #FFFFFF;
        border-radius: 48px;
    }
    .chart-box {
        max-width: 100%;
        overflow-x: scroll;
    }
`

const data = [10,20,15,10]

const Responses = () => {
    return (
        <div style={{ minHeight: "100vh", background: "#F1F5FC" }}>
            <Styled>
                <PrincipalNav />
                <div>
                    <div className="py-4 px-1 text-center font-weight-bold" style={{fontSize: "30px"}}>
                        AVERAGE MARKS
                    </div>
                    <div className="row no-gutters py-1">
                        <div className="col-12 col-md-5 text-center p-3 p-lg-4">
                            <div className="floatingContainer">
                                <div className="font-weight-light text-muted p-4">
                                    <div style={{fontSize: "2rem"}}>
                                        Average marks grade III
                                    </div>
                                    <div className="chart-box py-5 px-2 text-center">
                                        <Chart data={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 p-3 p-lg-4">
                            <div className="floatingContainer py-5 px-2">
                                <div className="row no-gutters align-items-center">
                                    <div className="text-muted col-12 col-md-8 text-center" style={{fontSize: "30px"}}>
                                        DIFFICULTY LEVEL WISE WEIGHTAGE
                                    </div>
                                    <div className="text-muted col-12 col-md-4 text-center">
                                        YOU ARE RANKED TWO
                                    </div>
                                </div>
                                <div className="p-3 p-md-5">
                                    <TableComponent data={array} type={"blue"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="py-4 px-1 text-center font-weight-bold" style={{fontSize: "30px"}}>
                        % OF STUDENTS SCORING ABOVE q%
                    </div>
                    <div className="row no-gutters py-1">
                        <div className="col-12 col-md-5 text-center p-3 p-lg-4">
                            <div className="floatingContainer">
                                <div className="font-weight-light text-muted p-4">
                                    <div style={{fontSize: "2rem"}}>
                                        % of students scoring &gt; (q) %
                                    </div>
                                    <div className="chart-box py-5 px-2 text-center">
                                        <Chart data={data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 p-3 p-lg-4">
                            <div className="floatingContainer py-5 px-2">
                                <div className="row no-gutters align-items-center">
                                    <div className="text-muted col-12 col-md-8 text-center" style={{fontSize: "30px"}}>
                                        RANKING OF SCHOOLS
                                    </div>
                                    <div className="text-muted col-12 col-md-4 text-center">
                                        YOU ARE RANKED TWO
                                    </div>
                                </div>
                                <div className="p-3 p-md-5">
                                    <TableComponent data={array2} type={"blue"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="py-4 px-1 text-center font-weight-bold" style={{fontSize: "30px"}}>
                        TOP 100 STUDENTS OVERALL
                    </div>
                    <div className="container p-3 p-lg-4">
                        <div className="floatingContainer py-5 px-2">
                            <div className="text-muted text-center" style={{fontSize: "30px"}}>
                            LIST OF GRADE III STUDENTS
                            </div>
                            <div className="p-3 p-md-5">
                                <TableComponent data={array3} type={"blue"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Styled>
        </div>
    )
}

export default Responses;

const QuestionIcon = (props) => {
    const background = props.background || "linear-gradient(136deg, #66E56A, #0FC213)"
    const color = props.color || "white"
    const Icon = styled.div`
        height: 45px;
        width: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.3rem;
        font-weight: bold;
        border-radius: 5px;
        background: ${background};
        color: ${color};
    `
    return (
        <Icon>
            {props.questionNo}
        </Icon>
    )
}
