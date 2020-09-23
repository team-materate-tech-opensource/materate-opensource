import React from 'react'
import logo from '../assets/Logo-lg.png'
//import { motion } from "framer-motion"

export const LoadingScreen = () => {
    return (
        <div className="outerContainer w-100 h-100 position-absolute d-flex align-items-center justify-content-center">
            <div>
                <img src={logo} alt="" height="55" />
            </div>
            <div className="titleContent mx-2">
                MATERATE
            </div>
            <style jsx>{`
                @keyframes init {
                    0% { width: 0px }
                    70% { width: 0px }
                    100% { width: 188px }
                }
                .outerContainer {
                    background: linear-gradient(to bottom , #0984fd, #4ba4fa);
                }
                .titleContent{
                    font-size: 2.3rem;
                    font-weight: bold;
                    color: white;
                    overflow: hidden;
                    animation: init 1.8s cubic-bezier(1, 0.71, 0.26, 1.24);
                }
            `}</style>
        </div>
    )
}