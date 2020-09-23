import React from "react";
import PrincipalTopBar from "../components/PrincipalTopBar";
import PrincipalHello from "../components/PrincipalHello";
import Picker from "../components/Picker";
import PrincipalNavBar from "../components/PrincipalNavBar";
import Buttons from "../components/Buttons";
import TableComponent from "../components/TableComponent";
import PrincipalNav from '../Principal/PrincipalNav'

// import { Row, Col, Container } from "react-bootstrap";

const data = [
  ["Rank", "StudentID", "Name", "Marks", "Percentage","Percentile"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
  ["1", "77467", "XYZ", "ABX", "34","34"],
]; //prop for TableComponent

class TopperList extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div style={{background:"linear-gradient( 109deg,#ECF3FC,#C7DCF3 )"}}>
        <PrincipalNav />
        
        <div styl className="row px-4 py-2 align-items-center justify-content-between">
          <div className="col-md-auto">
            <PrincipalHello />
          </div>
          
          <div className="px-10" style={{widht:"8em!important"}}>
            <Buttons  ></Buttons>
          </div>
        </div>

        <div style={{paddingTop:"50px",paddingBottom:"50px"}}>
        <div className="w-75 h75" style={{margin:"auto",borderRadius: "40px",boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.1), -5px -5px 10px 2px rgba(255,255,255,0.6"}}>
        <h3 className="py-3 font-weight-bold text-muted w-20" style={{textAlign:"center"}}>MARKLIST FOR GRADE III</h3>
        <div style={{margin:"auto",padding:"40px"}}  className="w-100 py-3 ">
          
            <TableComponent data={data} />
          </div>
        </div>
        </div>

        
        </div>
      </React.Fragment>
    );
  }
}
export default TopperList;
