import React from 'react'
import styled from "styled-components";
import PieChart from 'react-simple-pie-chart'

function Doughnut(props){
    const animation_time = "0.7s";
    
    return (
            <>
                <div className="outerContainer">
                    <div className="outerCircle">
                        <div className="pieCircle" style={{background: `${props.background}`}}>
                            <PieChart
                                slices={props.data}
                            />
                            <div className="contentCircle">
                                <div className="content">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .outerContainer{
                        width: 100%;
                    }
                    .outerContainer .outerCircle {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        padding-top: 100%;
                        border-radius: 50%;
                        background: white;
                        ${ !props.bordered ? 
                            `box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.29), -15px -15px 20px -10px #FFFFFF;` :
                            `border: ${props.border}`
                        }
                        
                    }
                    .outerContainer .pieCircle {
                        top: 5%;
                        position: absolute;
                        display: flex;
                        justify-content: center;
                        width: 90%;
                        padding-top: 90%;
                        border-radius: 50%;
                        background: linear-gradient(to bottom, #FFA000, #F53595);
                        animation-name: piehover-reverse;
                        animation-duration: ${animation_time};
                    }
                    .outerContainer .contentCircle {
                        display: flex;
                        justify-content: center;
                        position: absolute;
                        top: 12.5%;
                        width: 75%;
                        padding-top: 75%;
                        border-radius: 50%;
                        margin: auto;
                        background: white;
                        box-shadow: 0px 0px 1px -1px rgba(0,0,0,0.2);
                        vertical-align: middle;
                        transform-origin: 50% 50%;
                    }
                    .outerContainer .content {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        animation-name: content-reverse;
                        animation-duration: ${animation_time};
                    }
                    .outerContainer svg {
                        margin: 0;
                        padding: 0;
                        display: inline-block;
                        position: absolute;
                        top: 0;
                        vertical-align: middle;
                        transform-origin: 50% 50%;
                        transform: scale(1.03);
                        animation-name: svghover-reverse;
                        animation-duration: ${animation_time};
                    }
                    @keyframes svghover {
                        0% { transform: scale(1.03) rotate(0); }
                        50% { transform: scale(0.7) rotate(0); }
                        100% { transform: scale(1.03) rotate(90deg); }
                    }
                    @keyframes svghover-reverse {
                        0% { transform: scale(1.03) rotate(90deg); }
                        50% { transform: scale(0.7) rotate(0); }
                        1000% { transform: scale(1.03) rotate(0); }
                    }
                    @keyframes piehover {
                        0% { transform: scale(1) rotate(0); }
                        100% { transform: scale(1.15) rotate(90deg); }
                    }
                    @keyframes piehover-reverse {
                        0% { transform: scale(1.15) rotate(90deg); }
                        100% { transform: scale(1) rotate(0); }
                    }
                    @keyframes content {
                        0% { transform: scale(1) rotate(0); }
                        100% { transform: scale(1) rotate(-90deg); }
                    }
                    @keyframes content-reverse {
                        0% { transform: scale(1) rotate(-90deg); }
                        100% { transform: scale(1) rotate(0); }
                    }
                    ${ props.hover ?
                    `.outerContainer:hover svg{
                        transform: scale(1.03) rotate(90deg);
                        animation-name: svghover;
                        animation-duration: ${animation_time};
                    }
                    .outerContainer:hover .pieCircle{
                        transform: scale(1.15) rotate(90deg);
                        animation-name: piehover;
                        animation-duration: ${animation_time};
                    }
                    .outerContainer:hover .content {
                        transform: scale(1) rotate(-90deg);
                        animation-name: content;
                        animation-duration: ${animation_time};
                    }` : "" }
                `}</style>
            </>
    )
}

export default Doughnut