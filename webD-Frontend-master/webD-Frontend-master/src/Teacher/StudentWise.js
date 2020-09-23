import React, { Component } from "react";
import Doughnut from '../components/DoughnutNew'
import ResponseBox from "../components/ResponseBox";
import styled from "styled-components";
import TeacherNav from "../components/TeacherNav"
import Chart from '../components/Chart/ChartNew'
import { NavLink } from "react-router-dom";
import TableComponent from '../components/TableComponentTeacher'
import DropdownButton from 'react-bootstrap/DropdownButton'

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

class StudentAnalysis extends Component {
    constructor(props){
        super(props);
        this.handleOnClick=this.handleOnClick.bind(this);
        this.state={
         isSelected:false
        }

    }
    handleOnClick() {
        this.setState({isSelected: true});
      }

    
    
    render() {

        if(this.state.isSelected==false){
           return <div  className="m-auto floatingContainer d-flex align-items-center justify-content-center py-5 px-2">
           <div className="py-5 container-fluid centerContainer">
               <div className="mb-3">
                   <h4 className="font-weight-bold">SET PARAMETERS BEFORE YOU PROCCED</h4>
               </div>
               <div className="p-1" style={{fontSize: "22px"}}>
                   <div className="row no-gutters py-2 px-1">
                       <div className="col-8">Excellent Performance Above: </div>
                       <div className="col-4"></div>
                   </div>
                   <div className="row no-gutters py-2 px-1">
                       <div className="col-8">Good Performance Above: </div>
                       <div className="col-4"></div>
                   </div>
                   <div className="row no-gutters py-2 px-1">
                       <div className="col-8">Satisfactory Performance Above: </div>
                       <div className="col-4"></div>
                   </div>
                   <div className="d-flex justify-content-center py-3">
                       <div className="px-2">
                           Set as default
                       </div>
                       <div className="px-2">
                           <div onClick={this.handleOnClick} className="submitButton py-2 px-4 text-white">
                               PROCEED
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           </div>
           
        }
        else{
              return <div style={{paddingBottom:"20px",paddingLeft:"20px",paddingRight:"20px",maxWidth:"90%",margin:"auto",borderRadius:"40px",boxShadow:" 5px 5px 10px 2px rgba(0,0,0,0.1), -5px -5px 10px 2px rgba(255,255,255,0.6"}}>
                  <div id="2" style={{padding:"20px",display:"flex",justifyContent:"center",position:"relative"}}>
                        <div className="text-muted text-center font-weight-bold" style={{fontSize:"30px"}}>
                             <h3 className="text-muted" style={{textAlign:"center"}}>MARKLIST III-A</h3> 
                        </div>
                        <div style={{position:"absolute",left:"10px"}}>     
                        <select id="customDropdown2" required>
                        <option value="" disabled selected hidden>Set Parameters Again</option>
                        <option value="" >1</option>
                        <option value="" >2</option>
                        <option value="" >3</option>
                        <option value="" >4</option>
                        <option value="" >5</option>
                        <option value="" >6</option>
                        <option value="" >7</option>
                        
                      </select>  
                              
                        </div>
                        <div  style={{background:"#F1F5FC",position:"absolute",right:"10px"}}>
                          <select id="customDropdown2" required>
                          <option value="" disabled selected hidden>Sort By Marks Scored</option>
                          <option value="" >1</option>
                        <option value="" >2</option>
                        <option value="" >3</option>
                        <option value="" >4</option>
                        <option value="" >5</option>
                        <option value="" >6</option>
                        <option value="" >7</option>
                  
                </select>
                
                  </div>
                  </div>
                  <TableComponent/>
              </div>
        }
        // return(
            
        // )
    }
}

export default StudentAnalysis;