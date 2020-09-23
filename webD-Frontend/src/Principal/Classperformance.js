import React from "react";
import PrincipalTopBar from "../components/PrincipalTopBar";
import styled from 'styled-components'
import Chart from '../components/Chart/ChartNew'
import TableComponent from "../components/TableComponent";
import Buttons from "../components/Buttons";
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
    .boxcontainer {
        box-shadow: 5px 8px 15px 3px #7d8aa930, -5px -5px 13px 2px #FFFFFF;
        border-radius: 48px;
        
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
const data1 = [
    ["Class", "Average", "Highest", "Lowest", "Excellent Performers","Good Performers", "Satisfactory Performers","Need Improvement"],
    ["1", "77467", "XYZ", "ABX", "34","34","34","34"],
    ["1", "77467", "XYZ", "ABX", "34","34","34","34"],
    ["1", "77467", "XYZ", "ABX", "34","34","34","34"],
    ["1", "77467", "XYZ", "ABX", "34","34","34","34"],
    
  ]; //prop for TableComponent
  

function Classperformance() {
    return (
      <Styled>
        <PrincipalNav results />
        <div className="row m-0">
            
            <div className="col-lg-4 p-3 h-100">
            <div className="pl-2 py-4">
            <div className=" w-80 py-2  " style={{textAlign:"center",boxShadow:" 5px 8px 15px 3px #7d8aa930, -5px -5px 13px 2px #FFFFFF",
                borderRadius:" 15px"}}>
                    
                    
                        Compare Sections
                    
                    
                    </div>
            </div>
            <div className="w-100 pt-4 pb-4  container m-0 ">
                    
                    
                        <button className="w-100 border border-primary " style={{background: "#F1F6FC",height:"40px",disply:"block",borderRadius: "15px"}}>
                           View Mark-list Of III-D
                        </button>
                    
                    
                    </div>
            <div className="p-4">
               <div className="pl-3 boxcontainer  ">
                 <div className="w-100 px-2 py-4 ">
                  <div className="w-100"  style={{textAlign:"center"}}>
                  <h3 className=" text-muted p-3 " style={{width:"100%"}}>
                  GRADING PARAMETERS
                  </h3>
                  </div>
                  <h4 className="text-muted  py-3 justify-content-center">
                  Excellent Performance:
                  </h4>
                  <h4 className=" text-muted py-3 justify-content-center">
                  Good Performance:
                  </h4>
                  <h4 className=" text-muted  py-3 justify-content-center">
                  Satisfactory Performance:
                  </h4>
                  <div className="w-100 py-5 align-items-center" style={{margin:"auto"}}>
                  <button className="w-75 p-2" style={{borderStyle:"none",color:"white",background:"linear-gradient(to right, #65C7F7 , #0052D4)",borderRadius: "5px"}} >
                  CHANGE PARAMETERS
                  </button>
                  </div>
                  
                  </div>
               </div>
               </div>
            </div>
            <div className="p-2 col-lg-8">
              <div className="p-4">
               <div className="floatingContainer">
                    
                    <div className="p-2">
                    <div style={{margin:"auto",padding:"10px"}}  className="w-100 ">
          
                    <TableComponent className="w-80" style={{fontSize:"1em"}} data={data1} />
                  </div>
                    </div>
                </div>
                </div>
                <div className="p-4">
                <div className="floatingContainer">
                    
                    <div className="pr-3">
                        <div className="chart-box px-5 py-5 text-center">
                            <Chart data={data} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
            
      </Styled>
    )
}
export default Classperformance;
