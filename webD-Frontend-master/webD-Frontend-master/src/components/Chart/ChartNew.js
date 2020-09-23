import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 30px;
    .outer-container {
        border-bottom: 2px solid #6C6C6C;
        width: fit-content;
        margin: 0px auto;
    }
    @media(max-width: ${ props => props.width }px){
        .outer-container {
            width: fit-content;
        }
    }
    .bar-item-container {
        position: relative;
        padding: 0px 15px;
        margin: 0px 10px;
    }
    .bar-item-label-container {
        position: absolute;
        bottom: -16px;
        left: 0;
        right: 0;
        text-align: center;
        transition: 0.3s;
    }
    .bar-item-label {
        background: rgba(245,245,245);
        border: 2px solid #6C6C6C;
        color: #6C6C6C;
        border-radius: 100px;
        white-space: nowrap;
        font-size: 0.8rem;
        font-weight: 500;
        padding: 5px;
    }
    .bar-item {
        position: relative;
        width: 45px;
        background: linear-gradient(to bottom, #FFA000, #F53595);
        border: 2px solid #F6F2E2;
        border-radius: 10px;
        transition: 0.3s;
    }
    .bar-item-content {
        position: absolute;
        top: -25px;
        left: 0;
        right: 0;
        text-align: center;
    }
    .bar-item-container:hover .bar-item {
        transform: scaleX(1.1) translateY(-25px);
        border: 2px solid white;
        background: #f3bb1499;
    }
    .bar-item-container:hover .bar-item-label-container {
        transform: scale(1.13);
    }
    .bar-item-container:hover .bar-item-label {
        border-radius: 10px;
        background: #f3bb14;
        color: white;
        border: 2px solid white;
    }
    .bottom-dot {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: #6C6C6C;
        position: absolute;
        bottom: -5px;
    }
    .dot-left{left:-5px}
    .dot-right{right:-5px}
`

export default function Chart(props){
    return(
        <Container width={props.data.length*85 + 300}>
            <div className="position-relative outer-container px-1 px-lg-5 d-flex justify-content-center align-items-baseline">
                {props.data.map((item,index) => 
                    <div className="bar-item-container">
                        <div key={index} className="bar-item" style={{height: item*20+"px"}}>
                            <div className="bar-item-content">
                                {item}
                            </div>
                        </div>
                        <div key={index} className="bar-item-label-container">
                            <div className="bar-item-label">
                                School {index+1}
                            </div>
                        </div>
                    </div>
                )}
                <div className="bottom-dot dot-left"> </div>
                <div className="bottom-dot dot-right"> </div>
            </div>
        </Container>
    )
} 

