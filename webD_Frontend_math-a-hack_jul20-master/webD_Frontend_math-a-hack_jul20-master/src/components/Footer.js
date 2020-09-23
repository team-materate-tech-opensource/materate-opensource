import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "../lib/axiosAPI";

import { IconContext } from "react-icons";

import Logo from "../assets/Logo-lg.png";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Styles = styled.div`
  .outer-container {
    background: #3488da 0% 0% no-repeat padding-box;
  }
  a, a:hover {
      text-decoration: none
  }
  a {
      color: white;
      transition: 0.1s;
  }
  a:hover {
      color: rgba(255,255,255,0.8);
  }
  .logo img {
      max-width: 100px;
  }
  .title {
    font-weight: bolder;
    font-size: 40px;
    color: #ffffff;
  }

  .bottom-most {
    background: #036cd3 0% 0% no-repeat padding-box;
    color: #ffffff;
  }

  .social-media-container {
      height: 40px;
      width: 40px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .customcontainer {
      max-width: 1300px;
      margin: auto;
  }
  button {
      border: none;
  }
  button:active {
      outline: none;
  }
`;

const Footer = () => {
    const [ email, setEmail ] = React.useState("")
    const [ msg, setMsg ] = React.useState("")

    const handleSubmit = async(event) => {
        setMsg("")
        event.preventDefault();
        try{
            const response = await axiosInstance
                .post("subscriber/", {
                    email: email
                })
                .then((response) => {
                    console.log(response)
                    setEmail("")
                    setMsg("Successfully Subscribed")
                })
        } catch (error){
            if ( error.response && error.response.status === 403){
                console.log(error.response.data.detail)
                setMsg(error.response.data.detail)
                return
            }
            console.log(error)
            if( error.message ) setMsg(error.message)
            else setMsg(error.toString())
        }
    }

    return (
        <Styles>
            <div class="outer-container">
                <div className="row no-gutters customcontainer align-items-center px-3 py-5">
                    <div className="w-100">
                        <hr style={{ color: "#ffffff", background: "#ffffff", opacity: "0.5" }} />
                    </div>

                    <div className="col-md-6">
                        <div className="d-flex">
                            <div className="logo mx-1 p-2">
                                <NavLink to="/">
                                    <img src={Logo} alt="materate logo" />
                                </NavLink>
                            </div>
                            <div className="materate d-flex flex-column p-2 mx-1">
                                <NavLink to="/">
                                    <div className="title">MateRate</div>
                                </NavLink>
                                <div className="subtitle" style={{ color: "#ffffff" }}>
                                    YOUR ONLY COMPETITION IS YOU
                                </div>
                            </div>
                        </div>
                        <div className="text-white pl-5">
                            <div className="phone-number my-1 pl-5">
                                &nbsp;&nbsp;&nbsp;<MdCall /> &nbsp; +91-9868256700
                            </div>
                            <div className="email-address my-1 pl-5">
                                &nbsp;&nbsp;&nbsp;<MdEmail /> &nbsp; info@mathmaterate.com
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex flex-column" style={{ color: "#ffffff" }}>
                        <NavLink to="/aboutus">
                            <div className="my-1 font-weight-bold">About Us</div>
                        </NavLink>
                        <NavLink to="/programs">
                            <div className="my-1 font-weight-bold">Programs</div>
                        </NavLink>
                        <NavLink to="/contactus">
                            <div className="my-1 font-weight-bold">Contact Us</div>
                        </NavLink>
                        <br />
                    </div>

                    <div className="col-md-3 d-flex flex-column" style={{ color: "#ffffff" }}>
                        <div className="font-weight-bold">
                            Subscribe to the mailing list:
                        </div>
                        <form onSubmit={handleSubmit} className="d-flex">
                            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required /> 
                            <button type="submit" style={{borderRadius: "6px"}} className="mx-2 px-2 font-weight-bold text-primary bg-white d-flex align-items-center justify-content-center">GO</button>
                        </form>
                        <div className="pt-1 text-white">
                            {msg}
                        </div>
                        <br />
                        <div className="font-weight-bold">
                            Follow Us
                        </div>
                        <div className="social-media d-flex my-2">
                            <IconContext.Provider value={{ color: "#0080FE" }}>
                                <a className="mb-1" href="https://www.facebook.com/materateeducation">
                                    <div className="social-media-container mx-1 facebook ">
                                        <FaFacebookF />
                                    </div>
                                </a>
                                <a className="mb-1" href="https://www.instagram.com/materate_education/">
                                    <div className="social-media-container mx-1 instagram ">
                                        <FiInstagram />
                                    </div>
                                </a>
                                <a className="mb-1" href="https://www.linkedin.com/company/materate-learning">
                                    <div className="social-media-container mx-1 linkedin">
                                        <FaLinkedinIn />     
                                    </div>
                                </a>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom-most row */}
            <div className="bottom-most p-3">
                <div className="customcontainer d-flex justify-content-between">
                    <div className="left-part d-flex">
                        <div className="copyright-symbol">&copy;</div>
                        <div className="copyright-text">MateRate Education Pvt. Ltd.</div>
                    </div>
                    <div className="terms-of-use">Terms of Use | Privacy Policy</div>
                </div>
            </div>
        </Styles>
    );
};
export default Footer;
