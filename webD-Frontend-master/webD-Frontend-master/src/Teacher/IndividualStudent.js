import React , {Component} from 'react';
import Chart from '../components/Chart/ChartNew'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DropdownDivider } from 'react-bootstrap/Dropdown';
import Button from "../components/Buttons"





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


class IndividualStudentAnalysis extends Component {
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
           return <div className="justify-content-center row no-gutters px-1">
                        
           <div className="col-12 col-lg-12  p-lg-5">
               <div className="m-auto floatingContainer d-flex align-items-center justify-content-center py-5 px-2">
                   <div className="px-5">
                       
                       <div className="p-1" style={{fontSize: "22px"}}>
                       <div style={{alignContent:"center"}}>
                          <h3 style={{textAlign:"center",fontWeight:"bold"}}>ENTER DETAILS</h3>
                          <div className="p-4">
                          <input placeholder="Student ID" className="text-container" type="text" id="Student-Id" name="" required
                             size="30"></input>
                          </div>
                          <hr class="hr-text" data-content="OR"></hr>
                          
                          <div className="p-4">
                          <input placeholder="Name" className="text-container"  type="text" id="Name" name="" required
                          size="30"></input>
                       </div>
                          <div style={{paddingBottom:"40px",display:"flex",position:"relative"}}>
                          <div style={{position:"absolute",left:"27.5px"}}>
                                  <input placeholder="Class" className="text-container"  type="text" id="Student-Id" name="" required
                                    size="12.5"></input>
                          </div>
                          <div style={{position:"absolute",right:"27.5px"}}>
                                  <input placeholder="Division" className="text-container"  type="text" id="Student-Id" name="" required
                                    size="12.5"></input>
                          </div>
                          </div>
                          </div>
                          
                          
                           <div className="d-flex justify-content-center py-5">
                              
                               
                                   <div onClick={this.handleOnClick} className="submitButton py-2 px-4 text-white">
                                    <div  style={{textDecoration:"none",color:"white"}}>
                                       CONTINUE
                                       </div>
                                   
                               </div>
                           </div>
                       </div>
                   </div>
               </div>  
           </div>
       </div>
        }
        else{
              return<div className="pt-3 m-auto floatingContainer">
              <div className="p-4" ><h3 className="text-center font-weight-bold text-muted">STUDENT A'S CHAPTER WISE MARKS OBTAINED</h3></div>
              <div className="difficulty-container mx-auto pt-3 pr-3 " style={{position:"absolute",right:"75px"}} >
                              
                              <div className="mx-auto" style={{maxWidth: "400px"}}>
                                
                                <div className="row ">
                                 
                                 <div className="col-sm-8 font-weight-bold" style={{ display:"flex",color: "#000000" }}>
                                 <div><h4 className="text-muted">Marks:</h4></div>
                                 <div><h4 className="font-weight-bold">25</h4></div>
                                 <div><h4 className="text-muted">/35</h4></div>
                                </div>
                              </div>
                              <div className="row">
                                
                                 <div className="col-sm-8 font-weight-bold text-center" style={{ display:"flex",color: "#000000" }}>
                                 <div><h4 className="text-muted">Percentage:</h4></div>
                                 <div><h4 className="font-weight-bold">71.4%</h4></div>
                                 
                               </div>
                               </div>
                               <div className="row ">
                           
                                 <div className="col-sm-8 font-weight-bold text-center" style={{ display:"flex",color: "#000000" }}>
                                 <div><h4 className="text-muted">Rank:</h4></div>
                                 <div><h4 className="font-weight-bold">37</h4></div>
                                 <div><h4 className="text-muted">/132</h4></div>
                               </div>
                               </div>
                             </div>
                          </div>
                          <div className=" mx-auto pt-3 pr-3 " style={{position:"absolute",left:"75px"}} >
                           
                        
                                
                        <input  id="customDropdown4" type="text" placeholder="Search Student"></input>
                               
                          </div>
                          <div className="py-1 text-center">
                 <div style={{paddingTop:"200px"}} className="chart-box">
                     <Chart data={[10,5,4,3,7,5]} />
                 </div>
                 </div>
                          
                           
                 </div>
        }
        // return(
            
        // )
    }
}

export default IndividualStudentAnalysis;