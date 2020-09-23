import React from "react";
import Button from 'react-bootstrap/Button'
import styled from "styled-components";




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
       height:650px;
        max-width: 1400px;
        background: linear-gradient( 109deg, #ECF3FC, #C7DCF3 );
        box-shadow: 14px 8px 15px #7d8aa959, -10px -10px 15px #FFFFFF;
        border-radius: 48px;
    }

   
`;

function MainPage () {
    

    React.useEffect( () => {
        
    } ,[])

        return (
            <Styles>
            
                <div className="  pt-5 floatingContainer">
                    
                      
                       <div style={{paddingTop:"175px"}} > 
                        <div   className="p-2">
                            <h1 style={{textAlign:"center"}}  className="text-muted font-weight-bold">Hello, Teacher!</h1>
                            
                            <h5 style={{textAlign:"center"}}  className="text-muted">Your class Aptitude results are here</h5>
                        </div>
                        <div   className="pb-1">
                            
                            <h4 style={{textAlign:"center"}}  className="text-muted">Select Class</h4>
                        </div>
                        
                       <div className="d-flex justify-content-center flex-wrap px-5" >
                        
                        {Class.map((item) => 
                           <div className=" pt-4 ">
                            <TeacherClass Class={item}/> 
                            </div>
                            
                        )}
                        
                      
                        </div>
                        
                        
                        
                    </div>

                   

                   
                    </div>
                    
              
               
            </Styles>
        );
}
export default MainPage;
const Class =["I","II","III","IV","V","VI","VII"]
const TeacherClass = (props) => {
    
    
    return (
       
        <div className="pr-3"><Button style={{width:"120px",background:"#ADD8E6",color:"black"}}>Class {props.Class}</Button></div>
            
        
   
    )
}