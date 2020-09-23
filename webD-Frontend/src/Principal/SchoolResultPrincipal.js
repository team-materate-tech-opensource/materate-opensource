import React from "react";
import PrincipalTopBar from "../components/PrincipalTopBar";
import PrincipalHello from "../components/PrincipalHello";
// import Back from "../components/Back";
import Buttons from "../components/Buttons";
import PrincipalNavBar from "../components/PrincipalNavBar";
import Doughnut from '../components/DoughnutNew'
import Chart from '../components/Chart/ChartNew'
import styled from "styled-components";
import TableComponent from "../components/TableComponent";
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
];
const array2 = [
    ["Highest", "Lowest", "Mean", "Median", "Standard Deviation"],
    ["34", "1", "17.14", "17.5", "6.92"],
];
const arr = [5, 10, 5, 4];
const data = [
    { color: 'transparent', value: 9 },
    { color: '#fdf0da82', value: 2 },
]

const Styles = styled.div`
    .floatingContainer {
        width: 100%;
        background: #f5f9fd;
        box-shadow: 5px 8px 20px 0px #7d8aa926, -10px -10px 15px #FFFFFF;
        border-radius: 48px;
    }
`;

class SchoolResultPrincipal extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ minHeight: "100vh", background: "#F1F5FC" }}>
                    <Styles>
                        <PrincipalNav results />
                        <div className="row no-gutters mt-3">
                            <div className="col-12 col-lg-4">
                                <div className="p-3">
                                    <button className="w-100" style={{ borderColor: "#0080FE", background: "#F1F5FC", borderRadius: "15px", height: "36px" }}>Compare Sections</button>
                                </div>
                                <div className="p-4">
                                    <div className="floatingContainer row no-gutters py-5">
                                        <div className="col-12">
                                            <h3 className="text-center">ATTENDANCE</h3>
                                        </div>
                                        <div className="col-12 p-4">
                                            <div style={{ maxWidth: "330px" }} className="m-auto">
                                                {data ?
                                                    <Doughnut data={data} background="#0080FE" hover={true}>
                                                        <div className="text-center">
                                                            <h6 className="m-0 font-weight-bold" style={{ fontSize: "90%" }}>Attendance</h6>
                                                            <h2 className="m-0 font-weight-bold"><span style={{ color: "#0080FE" }}>93%</span></h2>
                                                        </div>
                                                    </Doughnut> : ""
                                                }
                                            </div>
                                            <div className="p-5 mx-auto" style={{ maxWidth: "400px" }}>
                                                <div className="row m-1 p-2 justify-content-center">
                                                    <div className="col-sm-4" style={{ background: "#0080f3", borderRadius: "10px" }}></div>
                                                    <div className="col-sm-8 font-weight-bold text-center" style={{ color: "#000000" }}>
                                                        <h4>Present</h4>
                                                    </div>
                                                </div>
                                                <div className="row m-1 p-2 justify-content-center">
                                                    <div className="col-sm-4" style={{ background: "#c4e1fd", borderRadius: "10px" }}></div>
                                                    <div className="col-sm-8 font-weight-bold text-center" style={{ color: "#000000" }}>
                                                        <h4>Absent</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 row no-gutters">
                                <div className="col-12 row no-gutters">
                                    <div className="col-lg-12 col-xl-7 justify-content-center bar-graph p-0">
                                        <div className="p-4 h-100">
                                            <div className="floatingContainer p-3 h-100">
                                                <div className="text-center">
                                                    <h3>
                                                        Marks Distribution
                                                    </h3>
                                                </div>
                                                <div>
                                                    <div className="chart-box">
                                                        <Chart data={arr} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-5 p-2">
                                        <div className="p-4">

                                            <div className="p-4">
                                                <button className="m-auto w-100" style={{ borderColor: "#ADD8E6", background: "#F1F5FC", borderRadius: "15px", height: "36px" }}>View Mark-list of III-D</button>
                                            </div>

                                            <div className="floatingContainer px-2 pb-4">

                                                <div className="row no-gutters px-5 py-3 justify-content-center text-align-center">

                                                </div>
                                                <TableComponent data={array} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="p-3">
                                        <div className="text-align-left" style={{ fontSize: "18px", margin: "0" }}>
                                            <h3>Performance Attributes</h3>
                                        </div>
                                        <div className="px-2 py-3">
                                            <TableComponent data={array2} type={"blue"} />
                                        </div>
                                        <div className="px-2 py-3 text-center">
                                            <p style={{ fontSize: "12px", margin: "0" }}>
                                                Performance Attributes define the class performance by
                                                providing teacher with - Highest Marks, Lowest Marks
                                            </p>
                                            <p style={{ fontSize: "12px", margin: "0" }}>
                                                Average Marks, Standard Deviation, and Median of Marks
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Styles>
                </div>
            </React.Fragment>
        );
    }
}
export default SchoolResultPrincipal;



