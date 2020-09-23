import React from "react";
import Doughnut from '../components/DoughnutNew'
import { NavLink } from "react-router-dom";
import { MdChevronRight } from 'react-icons/md'
import styled from "styled-components";
import { axiosInstance } from "../lib/axiosAPI";
//import { LoadingScreen } from '../util/preLoad'

export default function Dashboard() {
    const [ loading, setLoading ] = React.useState(false)
    const [ data, setData ] = React.useState({})

    const [ data1, setData1 ] = React.useState([
            { color: 'transparent', value: 3 },
            { color: '#fdf0da82', value: 2 },
    ])
    const [ data2, setData2 ] = React.useState([
        { color: 'transparent', value: 35 },
        { color: '#fdf0da82', value: 2 },
    ])

    const getData = async() => {
        try{
            setTimeout( () => {
                setLoading(false)
            } ,3200)
            await axiosInstance
                .get('/overview/')
                .then((res) => {
                    setData(res.data)
                    setData1([
                        { color: 'transparent', value: res.data.marks_obtained },
                        { color: '#fdf0da82', value: 35 - res.data.marks_obtained },
                    ])
                    console.log("response: ", res)
                })
        } catch(error) {
            console.log('Error in getting data: ', error)
        }
    }

    React.useEffect( () => {
        getData()
    } ,[])

    const dashboardContent = (
        <Styles>
            <div className="floatingContainer">
                <div className="d-flex justify-content-center row no-gutters align-items-center py-2 px-1">
                    <div className="p-3">
                        <div style={{height: "90px", width: "90px", border: "1px solid white", borderRadius: "50%"}}>

                        </div>
                    </div>
                    <div className="p-3">
                        <h1 className="text-muted font-weight-bold">Hello, {data.name}!</h1>
                        <h5 className="text-muted">Your Aptitude Test results are here</h5>
                    </div>
                </div>

                <hr style={{ color: "grey", height: 0.5 }} />

                <div>
                    <div className="p-3">
                        <h3 className="text-muted text-highlight p-0 pl-md-4">
                            RESULTS AT A GLANCE
                        </h3>
                    </div>
                    <div className="row no-gutters pb-5 align-items-center">
                        <div className="col-12 col-lg-12 col-xl-6 p-2 row no-gutters justify-content-center">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 p-4" style={{maxWidth: "320px"}}>
                                { data1 ? 
                                    <Doughnut data={data1} hover={true}>
                                        <div className="text-center">
                                            <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Total Marks</h6>
                                            <h2 className="m-0"><span style={{ color: "#FA704C", fontWeight: "bold" }}>{data.marks_obtained}</span>
                                                <span className="text-muted" style={{fontSize: "1.3rem"}}>/35</span></h2>
                                            <h5 className="m-0 text-muted">(71.63%)</h5>
                                        </div>
                                    </Doughnut> : "" 
                                }
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 p-4" style={{maxWidth: "320px"}}>
                                { data2 ?
                                    <Doughnut data={data2} hover={true}>
                                        <div className="text-center">
                                            <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Percentile</h6>
                                            <h2 className="m-0 font-weight-bold" style={{ color: "#FA704C" }}>73%</h2>
                                        </div>
                                    </Doughnut> : ""
                                }
                            </div>
                        </div>

                        <div className="col-12 col-lg-12 col-xl-6">
                            <div className="px-2 py-3 text-center text-muted" style={{fontSize: "1.7rem"}}>
                                <div className="font-weight-regular mx-auto" style={{maxWidth: "500px"}}>
                                    <div className="row no-gutters">
                                        <div className="col-6 text-center">
                                            <div>Overall Rank</div>
                                            <div>
                                                <span style={{fontSize: "2.2rem"}} className="font-weight-bold">{data.rank}</span><span className="text-muted">/132</span>
                                            </div>
                                        </div>
                                        <div className="col-6 text-center">
                                            <div>Highest Marks</div>
                                            <div>
                                                <span style={{fontSize: "2.2rem"}} className="font-weight-bold">{data.highest_mark}</span><span className="text-muted">/35</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="font-weight-regular">
                                    Difficulty Level of the Test was- 
                                    <span className="font-weight-bold number3"> Moderate</span>
                                </div>
                                <br />
                                <div className="font-weight-regular">
                                    Your Overall Performance:
                                </div>
                                <div className="font-weight-bold number4 text-highlight">
                                    Excellent Performance!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    .number4 {
                        color: #12dc04;
                        font-size: 2.3rem;
                    }
                    .text-highlight {
                        text-shadow: 2px 2px 7px rgba(0,0,0,0.1), -2px -2px 4px white;
                    }
                `}</style>
            </div>
            <div className="buttonContainer py-5 px-3 d-flex flex-row-reverse">
                <NavLink to="student/analysis">
                    <div className="btn continueButton font-weight-bold">
                        Continue <MdChevronRight />
                    </div>
                </NavLink>
            </div>
        </Styles>
    )

    return (
        <>
            { loading ? <> </> : dashboardContent }
        </>
    );
}

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
`;
