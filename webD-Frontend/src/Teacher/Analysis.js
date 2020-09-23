import React, { Component } from "react";
import Doughnut from '../components/DoughnutNew'
import ResponseBox from "../components/ResponseBox";
import styled from "styled-components";
import TeacherNav from "../components/TeacherNav"
import Chart from '../components/Chart/ChartNew'
import { NavLink } from "react-router-dom";
import TableComponent from '../components/TableComponentTeacher'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { axiosInstance } from "../lib/axiosAPI";
import IndividualStudentAnalysis from "./IndividualStudent"
import StudentAnalysis from "./StudentWise"
import ChapterWiseAnalysis from "./ChapterWise"


const Styled = styled.div`
    .iconContainer {
        box-shadow: 5px 5px 13px -2px rgba(0,0,0,0.2) inset, -5px -5px 20px 0px rgba(255,255,255,0.9) inset;
        border-radius: 33px;
    }
    .floatingContainer {
        width: 90%;
        background: #f5f9fd;
        
        box-shadow: 5px 8px 20px 0px #7d8aa926, -10px -10px 15px #FFFFFF;
        border-radius: 48px;
        position:relative;
    }
    .floatingContainerInset {
        color: rgb(30, 85, 185);
       
        box-shadow: 5px 5px 13px -2px rgba(0,0,0,0.2) inset, -5px -5px 20px 0px rgba(255,255,255,0.9) inset;
        border-radius: 13px;
    }
    .centerContainer {
        max-width: 600px;
    }
    .submitButton {
        font-size: 14px;
        font-weigth: 700;
        widht:100%;
        background: transparent linear-gradient(102deg, #62B0FD 0%, #067EF5 100%) 0% 0% no-repeat padding-box;
        border-radius: 8px; 
    }
    .iconContainer {
        box-shadow: 5px 5px 13px -2px rgba(0,0,0,0.2) inset, -5px -5px 20px 0px rgba(255,255,255,0.9) inset;
        border-radius: 33px;
    }
    .dropdown{
        text-align: center;
        left: 0.8%;
        top: 30%;
        
        position: relative;
      }
      #customDropdown{
        height: 40px;  
        width: 220px;
        padding: 0 20px;
        background-color:#F1F5FC;
        
        border-radius:10px;
        border: 1.5px solid grey;
        color: black;
        font-size: 15px;        
      }
      #customDropdown2{
        height: 40px;  
        width: 250px;
        padding: 0 20px;
        text-align: center;
        border-radius:30px;
        color: black;
        font-size: 15px;
        border: 1.5px solid rgb(30,144,255);
        background-color:#F1F5FC;
        
        
        
      }
      #customDropdown3{
        height: 40px;  
        width: 250px;
        padding: 0 20px;
        text-align: center;
        border-radius:30px;
        color: black;
        font-size: 15px;
        border: 1.5px solid rgb(30,144,255);
        background-color:#F1F5FC;
        
        
        
      }
      #customDropdown4{
        height: 40px;  
        width: 250px;
        padding: 0 20px;
        text-align: center;
        border-radius:40px;
        color: black;
        font-size: 15px;
        border: 1.5px solid rgb(30,144,255);
        background-color:#F1F5FC;
        
        
        
      }
      .difficulty-container {
        background: transparent;
        box-shadow: 5px 5px 13px -2px rgba(0,0,0,0.2) inset, -5px -5px 20px 0px rgba(255,255,255,0.9) inset;
        border-radius: 16px;
        border: 0px solid transparent;
        padding-left: 2rem;
        padding-right:25px;
        font-weight: 700;
      }
      .text-container {
          border : 1.5px solid #067EF5;
      }
      .text-container :: input-placeholder {
          size : 7.5px;
          padding-left:10px;
      }
      #customDropdown4 :: input-placeholder {
          color:black;
      }
      .hr-text {
        line-height: 1em;
        position: relative;
        outline: 0;
        border: 0;
        color: black;
        text-align: center;
        height: 1.5em;
        opacity: .5;
        &:before {
          content: '';
          // use the linear-gradient for the fading effect
          // use a solid background color for a solid bar
          background: linear-gradient(to right, transparent, #818078, transparent);
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
        }
        &:after {
          content: attr(data-content);
          position: relative;
          display: inline-block;
          color: black;
      
          padding: 0 .5em;
          line-height: 1.5em;
          // this is really the only tricky part, you need to specify the background color of the container element...
          color: #818078;
          background-color: #fcfcfa;
        }
      }
      
         
      
`

const Responses = () => {
    const questions = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
        20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35
    ]
    const data1 = [
        { color: '#05BE4F', value: 1 },
        { color: '#FCCD37', value: 2 },
        { color: '#F12222', value: 1 },
    ]
    const [ data, setData ] = React.useState()
    const getData = async() => {
        try{
            await axiosInstance
                .get('/analysis/')
                .then((res) => {
                    setData(res.data)
                    console.log("response: ", res)
                })
        } catch(error) {
            console.log('Error in getting data: ', error)
        }
    }
    

    React.useEffect( () => {
        getData()
    } ,[])
    return (
        <div style={{ minHeight: "100vh", background: "#F1F5FC" }}>
            <Styled>
                <TeacherNav  />

                <div className="align-items-center">
                    <div className="py-4 px-1 text-center font-weight-bold" style={{fontSize: "30px"}}>
                        QUESTION WISE ANALYSIS
                    </div>
                    <div className="row no-gutters py-1">
                        <div className="col-12 col-md-5 text-center p-3 p-lg-4">
                            <div className="floatingContainer">
                                <div className="font-weight-bold p-4">
                                    <div style={{fontSize: "23px"}}>
                                        DIFFICULTY LEVEL WISE WEIGHTAGE
                                    </div>
                                    <div style={{maxWidth: "300px"}} className="mx-auto py-5 px-1">
                                        { data1 ? 
                                            <Doughnut data={data1}>
                                                <div className="text-center">
                                                </div>
                                            </Doughnut> : "" 
                                        }
                                    </div>
                                </div>
                                <div className="px-1 py-5 text-center" style={{borderTop: "2px solid #0b7aff4f"}}>
                                    Click on a difficulty level to see the Success Rate
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 p-3 p-lg-4">
                            <div className="floatingContainer py-5 px-2">
                                <div className="row no-gutters">
                                    <div className="p-1 mb-4 text-muted col-12 col-md-5 px-4" style={{fontSize: "30px"}}>
                                        DIFFICULTY LEVEL WISE WEIGHTAGE
                                    </div>
                                    
                                    <div className="difficulty-container mx-auto pt-3" style={{maxWidth: "400px"}}>
                                      <h4 className="font-weight-bold text-muted">Difficulty Levels</h4>
                                      <div className="row m-1 p-2 justify-content-center">
                                       <div className="col-sm-4" style={{ background: "#05BE4F", borderRadius: "10px" }}></div>
                                       <div className="col-sm-8 font-weight-bold text-center" style={{ color: "#000000" }}>
                                       <h4>Easy</h4>
                                      </div>
                                    </div>
                                    <div className="row m-1 p-2 justify-content-center">
                                      <div className="col-sm-4" style={{ background: "#FCCD37", borderRadius: "10px" }}></div>
                                       <div className="col-sm-8 font-weight-bold text-center" style={{ color: "#000000" }}>
                                        <h4>Moderate</h4>
                                     </div>
                                     </div>
                                     <div className="row m-1 p-2 justify-content-center">
                                      <div className="col-sm-4" style={{ background: "#F12222", borderRadius: "10px" }}></div>
                                       <div className="col-sm-8 font-weight-bold text-center" style={{ color: "#000000" }}>
                                        <h4>Tough</h4>
                                     </div>
                                     </div>
                                   </div>
                                </div>
                                <div className="p-1 text-center">
                                    <div className="chart-box">
                                        <Chart data={[10,5,4,3,7,5]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div>
                   <div style={{padding:"40px",display:"flex",justifyContent:"center",position:"relative"}}>
                       <div className="text-muted text-center font-weight-bold" style={{fontSize:"30px"}}>
                            STUDENT  WISE ANALYSIS
                       </div>
                       
                   </div>
                   
                  <StudentAnalysis></StudentAnalysis>
                </div>
                
                 <ChapterWiseAnalysis></ChapterWiseAnalysis>
                
                <div > 
                    <div className="pt-3 pb-3 px-1 text-muted text-center font-weight-bold" style={{fontSize: "40px"}}>
                       INDIVIDUAL STUDENT ANALYSIS
                    </div>
                 
                       
                   <IndividualStudentAnalysis></IndividualStudentAnalysis>
                    
                </div>

                <div>
                    <div className="d-flex flex-row-reverse px-1">
                        <div children="p-2">
                            <div>
                                <div>Filter By:</div>
                                <div>[ INPUT FIELD ]</div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12 col-md-3 text-center p-3 p-md-4">
                            <div className="font-weight-bold p-2 mb-2" style={{fontSize: "23px"}}>
                                Question Selector
                            </div>
                            <div className="py-4 px-3 d-flex justify-content-center flex-wrap iconContainer">
                                {questions.map((item,index) => 
                                    <div className="p-2">
                                        <QuestionIcon questionNo={item} key={index} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-12 col-md-9 p-3 p-md-5">
                            <div className="floatingContainer mt-3 py-5">
                                <div className="text-center p-1 mb-4 font-weight-bold" style={{fontSize: "30px"}}>
                                    RESPONSES AND ANSWER KEYS
                                </div>
                                <div className="p-1">
                                    <ResponseBox number="1" />
                                    <ResponseBox number="2" />
                                    <ResponseBox number="3" />
                                    <ResponseBox number="4" />
                                </div>
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
    :hover {
        background #05BE4F;
     }
     :active {
      background-color #05BE4F;
      box-shadow 0 5px #666;
      transform translateY(4px);
    }
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
        <NavLink style={{textDecoration:"none"}} to="">
        <Icon>
            {props.questionNo}
        </Icon>
        </NavLink>
    )
}

