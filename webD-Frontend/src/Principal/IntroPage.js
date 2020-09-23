import React from "react";
import Doughnut from '../components/DoughnutNew'
import { NavLink } from "react-router-dom";
import { MdChevronRight } from 'react-icons/md'
import Buttons from "../components/Buttons";
import styled from "styled-components";

const Styles = styled.div`
    min-height: 100vh;
    background-color: #E9F3FE;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    .floatingContainer {
        width: 100%;
        max-width: 1500px;
        position:relative;
        background: linear-gradient( 109deg, #ECF3FC, #C7DCF3 );
        box-shadow: 14px 8px 15px #7d8aa959, -10px -10px 15px #FFFFFF;
        border-radius: 48px;
    }
    .buttonContainer {
        width: 100%;
        max-width: 1500px;
    }
    @media(min-width: 1200px){
        .continueButtonContainer{
            position: absolute;
            right: 0;
        }
        .border-right {
            border-right: 1px solid rgba(0,0,0,0.14) !important;
        }
    }
    .continueButton {
        padding: 0.6rem 3rem;
        font-size: 1.2rem;
        background: transparent linear-gradient(113deg, #EBF1F8 0%, #B4C9E1 100%) 0% 0% no-repeat padding-box;
        box-shadow: 14px 8px 15px #7d8aa959;
        border: none;
        border-radius: 15px;
        color: 0e415f;
        max-width: 340px;
    }
    .doughnutContainer {
        max-width: 300px;
        margin: 0px auto;
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

        return (
            <Styles>
                <div className="floatingContainer">
                    <div className="row no-gutters justify-content-center align-items-center py-2 position-relative">
                        <div className="p-3">
                            <h1 style={{display:"inline"}} className="text-muted font-weight-bold">Hello, Principal!</h1>
                            <h5  className="text-muted">Your class Aptitude results are here</h5>
                        </div>     
                        <div className="p-3 px-4 continueButtonContainer">
                            <NavLink to="/principal/compairNotice">
                                <div className="btn text-muted continueButton font-weight-bold">
                                    <div>
                                        See Results Of
                                        Competitive Schools
                                    </div>
                                </div>
                            </NavLink>
                        </div>    
                    </div>
                    <hr style={{ color: "grey", height: 0.5 }} />              
                <div>
                    <div className="p-3 px-md-5">
                        <h3 className="m-0 text-muted font-weight-bold" style={{fontSize:"1.75em"}}>RESULTS AT A GLANCE</h3>
                    </div>
                    <div className="p-2 px-md-5">
                        <div className="row no-gutters">                       
                            <div className="col-12 col-md-6 col-xl-4 p-4 border-right">
                                <div className="doughnutContainer">
                                    { data1 ? 
                                        <Doughnut data={data1} hover={true}>
                                            <div className="text-center">
                                                <h2 className="m-0 text-muted font-weight-bold" style={{fontSize:"90%"}}>School Pass </h2>
                                                <h2 className="m-0 text-muted font-weight-bold" style={{fontSize:"90%"}}>Percentage </h2>
                                                <h2 className="m-0 font-weight-bold"><span style={{ fontSize:"0.75em",color: "#FA704C" }}>52.00%</span>
                                                    </h2>
                                            </div>
                                        </Doughnut> : "" 
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-5 p-4">
                                <div className="doughnutContainer">
                                    { data2 ?
                                        <Doughnut style={{margin:"auto"}} data={data2} hover={true}>
                                            <div  className="text-center">
                                            <h2 className="m-0 font-weight-bold"><span style={{ fontSize:"0.75em",color: "#FA704C" }}>X-D</span>
                                                    </h2>
                                            <h2 className="m-0 text-muted font-weight-bold" style={{fontSize:"90%"}}>Class Average </h2>
                                            <h2 className="m-0 text-muted font-weight-bold" style={{fontSize:"90%"}}>Percentage: </h2>
                                            <h2 className="m-0 font-weight-bold"><span style={{fontSize:"0.75em", color: "#FA704C" }}>97.14%</span>
                                            </h2>
                                            </div>
                                        </Doughnut> : ""
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-xl-3 py-4">
                                <div className="doughnutContainer">
                                    { data2 ?
                                        <Doughnut style={{margin:"auto"}} data={data2} hover={true}>
                                            <div  className="text-center">
                                            <h2 className="m-0 font-weight-bold"><span style={{ fontSize:"0.75em",color: "#FA704C" }}>IX-A</span>
                                                    </h2>
                                            <h2 className="m-0 text-muted font-weight-bold" style={{fontSize:"90%"}}>Class Average </h2>
                                            <h2 className="m-0 text-muted font-weight-bold" style={{fontSize:"90%"}}>Percentage: </h2>
                                            <h2 className="m-0 font-weight-bold"><span style={{fontSize:"80%", color: "#FA704C" }}>87.14%</span>
                                            </h2>
                                            </div>
                                        </Doughnut> : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center py-5">
                        <p style={{margin:"0",display:"inline"}} className="font-weight-regular">
                            Overall Performance Level Of School:
                        </p>
                        <p style={{margin:"0",display:"inline"}} className="font-weight-bold number4">
                            Excellent Performance!
                        </p>
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
                    @media(max-width: 576px){
                        .number1 {
                            font: 22px Open Sans;
                        }
                        .number2 {
                            font: 22px Open Sans;
                        }
                        .number3 {
                            font: 22px Open Sans;
                        }
                        .number4 {
                            font: 22px Open Sans;
                        }
                    }
                `}</style>
                </div>
                <div className="buttonContainer py-5 px-3 d-flex flex-row-reverse">
                    <NavLink to="/principal/results">
                        <div className="btn continueButton font-weight-bold">
                            Continue <MdChevronRight />
                        </div>
                    </NavLink>
                </div>
            </Styles>
        );
}
export default Page2;
