import React from "react";
import PrincipalTopBar from "../components/PrincipalTopBar";
import PrincipalHello from "../components/PrincipalHello";
// import Back from "../components/Back";
import Buttons from "../components/Buttons";
import PrincipalNavBar from "../components/PrincipalNavBar";

import DoughnutChart from "../components/DoughnutChart";
import styled from "styled-components";
import ClipPath from "../components/ClipPath";
import TableComponent from "../components/TableComponent";

const array = [
  ["   Range   ", "Percentage of students"],
  ["   0-5   ", "6.818182"],
  ["   6-10   ", "9.090909"],
  ["11-15", "22.727273"],
  ["16-20", "28.787879"],
  ["21-25", "22.727273"],
  ["26-30", "6.060606"],
  ["31-35", "3.787879"],
]; //prop for TableComponent

const array2 = [
  ["Highest", "Lowest", "Mean", "Median", "Standard Deviation"],
  ["34", "1", "17.14", "17.5", "6.92"],
]; //prop for TableComponent
const arr = [5, 10, 35, 25, 40, 15, 10]; //prop for ClipPath(bar graph display)

const Styles = styled.div`
  .bar-graph {
    overflow: hidden;
  }
`;

class SchoolPerformance extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Styles style={{background:"linear-gradient( 109deg,#ECF3FC,#C7DCF3 )"}}>
          <PrincipalTopBar />
          

          <div style={{background:"linear-gradient( 109deg,#ECF3FC,#C7DCF3 )"}} className="row m-3 ">
          
            <div style={{margin:"20px",borderRadius: "40px",boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.1), -5px -5px 10px 2px rgba(255,255,255,0.6"}} className="col-lg-3 pl-4 pr-2 py-2 row no-gutters">
            <div style={{width:"100%!important",borderRadius: "20px"}} className="row pt-3 justify-content-center text-align-center">
            <button style={{width:"100%!important",borderRadius: "20px"}}>
            View Mark-list Of III-D
            </button>
            </div>
              
                 <h2 style={{margin:"auto",fontSize:"2.5em"}} className="text-muted ">ATTENDANCE</h2>

              <div className="col-12">
              
                <DoughnutChart data={[93, 7]}></DoughnutChart>
              </div>
              <div style={{display:"inline!important"}} className="col-12">
              <div className="row">
              <div style={{ borderRadius:"10px", height:"1.5em",width:"3em",backgroundColor:"blue"}} className="col-lg-6" ></div>
              <h4  className="col-lg-6">Present</h4>
              </div>
              </div>
              <div style={{display:"inline!important"}} className="col-12">
              <div  className="row">
              <div style={{borderRadius:"10px", height:"1.5em",width:"3em",backgroundColor:"rgb(0, 128, 254)"}} className="col-lg-6" ></div>
              <h4  className="col-lg-6">Absent</h4>
              </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row">
                <div
                  className="col-lg-7 border border-dark justify-content-left bar-graph"
                  style={{
                    height: "480px",
                    backgroundColor: "white",
                    borderRadius: "60px",
                  }}
                >
                  <p className="text-center">Marks Distribution</p>
                  <br />
                  <ClipPath array={arr} />
                </div>

                <div style={{marginLeft:"20px",borderRadius: "40px",boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.1), -5px -5px 10px 2px rgba(255,255,255,0.6"}} className=" justify-content-right col-lg-4">
                 <div style={{alignContent:"center",width:"100%!important",borderRadius: "20px"}} className="pt-3 justify-content-center text-align-center">
                 <button style={{borderRadius: "20px"}}>
                 View Mark-list Of III-D
                 </button>
                 </div>
                  <div style={{width:"100%!important"}} className=" pt-4 pb-0 justify-content-center text-align-center">
                  <TableComponent data={array} />
                  </div>
                 
                </div>
              </div>

              <div style={{margin:"20px",borderRadius: "40px",boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.1), -5px -5px 10px 2px rgba(255,255,255,0.6"}} className="wrap-content p-3">
                <div style={{display:"none!important"}} >
                <div className="col-lg-12">
                <p 
                  
                  style={{ fontSize: "18px", margin: "10px" }}
                >
                  Performance Attributes
                </p>

                </div>
                </div>
                <div style={{display:"none!important"}} >
                <div className="col-lg-12">
                <TableComponent data={array2} />
                </div>
                </div>
                <p style={{ fontSize: "12px", marginLeft: "1em" }}>
                  Performance Attributes define the class performance by
                  providing teacher with - Highest Marks, Lowest Marks
                </p>
                <p style={{ fontSize: "12px", marginLeft: "1em" }}>
                  Average Marks, Standard Deviation, and Median of Marks
                </p>
              
              </div>
            </div>
          </div>
          
        </Styles>
      </React.Fragment>
    );
  }
}
export default SchoolPerformance;


             
