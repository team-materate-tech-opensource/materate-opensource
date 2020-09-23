import React from "react";
import Doughnut from '../components/DoughnutNew'
import { NavLink } from "react-router-dom";
import { MdChevronRight } from 'react-icons/md'

import styled from "styled-components";

import { axiosInstance } from "../lib/axiosAPI";

const Styles = styled.div`
    margin:0px;
    min-height: 100vh;
    background-color: #E9F3FE;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    .floatingContainer {
        
        width: 100%;
        max-width: 1400px;
        background: linear-gradient( 109deg, #ECF3FC, #C7DCF3 );
        box-shadow: 14px 8px 15px #7d8aa959, -10px -10px 15px #FFFFFF;
        border-radius: 48px;
    }
    .buttonContainer {
        width: 100%;
        max-width: 1500px;
    }
    .continueButton {
        padding: 0.8rem 5rem;
        font-size: 1.5rem;
        background: transparent linear-gradient(113deg, #EBF1F8 0%, #B4C9E1 100%) 0% 0% no-repeat padding-box;
        box-shadow: 14px 8px 15px #7d8aa959;
        border: none;
        border-radius: 40px;
        color: 0e415f;
    }
    #customDropdown2{
        height: 45px;  
        width: 175px;
        padding: 0 20px;
        text-align: center;
        border-radius:15px;
        color: black;
        font-size: 17px;
        border: 5px grey rgb(30,144,255);
        background-color:#C7DCF3;    
      }
`;

function Page2 () {
    const [ data1, setData1 ] = React.useState([
        { color: 'transparent', value: 2 },
        { color: '#fdf0da82', value: 35 },
    ])
    const [ data2, setData2 ] = React.useState([
        { color: 'transparent', value: 10 },
        { color: '#fdf0da82', value: 2 },
    ])
    const [ data3, setData3 ] = React.useState([
        { color: 'transparent', value: 6 },
        { color: '#fdf0da82', value: 4 },
    ])
    const [ data, setData ] = React.useState()
    const getData = async() => {
        try{
            await axiosInstance
                .get('/teacher/overview/')
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
            <Styles>
            
        
                <div className=" pt-5 floatingContainer">
                    <div style={{position:"relative"}} className="d-flex justify-content-center row no-gutters align-items-center py-2 px-1">
                        <div className="p-3">
                            <div style={{height: "90px", width: "90px", border: "1px solid white", borderRadius: "50%"}}>

                            </div>
                        </div>
                        <div className="p-5 " style={{position:"absolute",right:"0"}}>     
                             <select id="customDropdown2" required>
                             <option value="" disabled selected hidden >Select Class</option>
                             <option value="" >1</option>
                             <option value="" >2</option>
                             <option value="" >3</option>
                             <option value="" >4</option>
                             <option value="" >5</option>
                             <option value="" >6</option>
                             <option value="" >7</option>
                             
                           </select>  
                                   
                             </div>
                        <div  className="p-3">
                            <h1  className="text-muted font-weight-bold">Hello, Teacher!</h1>
                            
                            <h5 className="text-muted">Your class Aptitude results are here</h5>
                        </div>
                        
                    </div>

                    <hr style={{ color: "grey", height: 0.5 }} />

                    <div>
                        <div className="p-3">
                            <h3>RESULTS AT A GLANCE</h3>
                        </div>
                        <div className="row no-gutters pb-5">
                            <div className="col-12 col-lg-12 col-xl-7 p-2 row no-gutters">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-4">
                                    { data1 ? 
                                        <Doughnut data={data1} hover={true}>
                                            <div className="text-center">
                                                <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Average Marks</h6>
                                                <h2 className="m-0 font-weight-bold"><span style={{ color: "#FA704C" }}>18</span>
                                                    <span className="text-muted">/35</span></h2>
                                            </div>
                                        </Doughnut> : "" 
                                    }
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-4">
                                    { data2 ?
                                        <Doughnut data={data2} hover={true}>
                                            <div className="text-center">
                                                <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Highest Marks</h6>
                                                <h2 className="m-0 font-weight-bold"><span style={{ color: "#FA704C" }}>26</span>
                                                    <span className="text-muted">/35</span></h2>
                                            </div>
                                        </Doughnut> : ""
                                    }
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-4 mx-auto">
                                    { data3 ?
                                        <Doughnut data={data3} hover={true}>
                                            <div className="text-center">
                                                <div className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Lowest Marks</div>
                                                <h2 className="m-0 font-weight-bold"><span style={{ color: "#FA704C" }}>11</span>
                                                    <span className="text-muted">/35</span></h2>
                                            </div>
                                        </Doughnut> : ""
                                    }
                                </div>
                            </div>

                            <div className="col-12 col-lg-12 col-xl-5">
                                <div className="p-3 text-center">
                                    <p className="font-weight-regular">
                                        Percentage of students passed -
                                        <span className="font-weight-bold number1"> 93.25%</span>
                                    </p>
                                    <p className="font-weight-regular">
                                        Percentage of students failed -
                                        <span className="font-weight-bold number2"> 6.75%</span>
                                    </p>
                                    <p className="font-weight-regular">
                                        Difficulty Level of the Test -
                                        <span style={{fontSizeAdjust:"auto"}} className="font-weight-bold number3"> Moderate</span>
                                    </p>
                                    <br />
                                    <p className="font-weight-regular">
                                        Overall Performance Level:
                                    </p>
                                    <p className="font-weight-bold number4">
                                        Excellent Performance!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style jsx="true">{`
                        p {
                            font: 25px/50px Open Sans;
                            margin: 0;
                        }
                        .number1 {
                            color: #12dc04;
                            font: 32px Open Sans;
                        }
                        .number2 {
                            color: #ed4f47;
                            font: 32px Open Sans;
                        }
                        .number3 {
                            color: #f7b528;
                            font: 32px Open Sans;
                        }
                        .number4 {
                            color: #12dc04;
                            font: 32px Open Sans;
                        }
                    `}</style>
                </div>
                <div className="buttonContainer py-5 px-3 d-flex flex-row-reverse">
                    <NavLink to="/teacher/results">
                        <div className="btn continueButton font-weight-bold">
                            Continue <MdChevronRight />
                        </div>
                    </NavLink>
                </div>
            </Styles>
        );
}
export default Page2;
