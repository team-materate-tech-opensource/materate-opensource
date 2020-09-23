import React from "react";
import Header from '../components/NavBar'
import { NavLink, Redirect } from "react-router-dom";
import { useAuth } from '../lib/auth'
import styled from "styled-components";
import { axiosInstance } from "../lib/axiosAPI";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from 'react-icons/fa'

import bground from "../assets/loginillustration.png";
import background from "../assets/login.png";

const Global = styled.div`
    min-height: 100%;
    padding-top: 80px;
    background: linear-gradient(to bottom, #0984fd,#0984fd);
    .outer-container {
        
    }
    .login-container {
        font-size: 0.85rem;
        padding: 20px 10px 0px 10px;
        background-size: 100% 100%;
        background-color: white;
        background-repeat: no-repeat;
        background-position: center;
    }
    @media(min-width: 576px){
        .login-container{
            background-image: url(${background});
            background-color: transparent;
            padding: 40px 90px 90px 90px;
        }
    }
    .login-container label {
        color: rgba(0, 0, 255, 0.795);
        font-weight: 500;
    }
    .login-container input:active,
    .login-container input:focus {
        border: 1px solid rgba(150, 150, 255, 0.949);
        box-shadow: none;
    }
    .left-container {
        color: skyblue;
        font-size: 1.6rem;
        font-style: italic;
    }
    .left-img {
        text-align: center;
    }
    .left-img img {
        max-width: 100%;
        position: relative;
        right: 18px;
    }
    .google {
        border: 1px solid rgba(206, 21, 21, 0.767);
    }
    .facebook {
        border: 1px solid rgba(15, 2, 77, 0.767);
    }
`;

function Login_ (props) {
    const [ isLoggedIn, setLoggedIn ] = React.useState(false)
    const [ username, setUsername ]  = React.useState("")
    const [ password, setPassword ] = React.useState("")
    const [ error, setError ] = React.useState("")
    const { setAccessToken, setRefreshToken } = useAuth()

    const handleSubmit = async (event) => {
        setError("")
        event.preventDefault();
        try{
            delete axiosInstance.defaults.headers["Authorization"]
            setAccessToken("")
            setRefreshToken("")
            const response = await axiosInstance
                .post("login/", {
                    username: username,
                    password: password,
                })
                .then((response) => {
                    console.log("Login Response :", response)
                    axiosInstance.defaults.headers["Authorization"] = "MTRT " + response.data.access;
                    setAccessToken(response.data.access)
                    setRefreshToken(response.data.refresh)
                    setLoggedIn(true)
                    //props.history.push("/");
                })
            console.log('response: ', response)
        } catch (error){
            if ( error.response && error.response.status === 403){
                console.log(error.response.data.detail)
                setError(error.response.data.detail)
                return
            }
            console.log(error)
            if( error.message ) setError(error.message)
            else setError(error.toString())
        }
    }

    if( isLoggedIn ){
        return <Redirect to="/dashboard" />
    }

    return (
        <Global>
            <Header props={{...props}} />
            <div className="d-flex align-items-center justify-content-center outer-container">
                <div className="login-container container row no-gutters">
                    <div className="col-lg-6 py-5 px-2 d-none d-sm-none d-xs-none d-md-none d-lg-flex d-xl-flex left-container align-items-center flex-column justify-content-center">
                        <div className="left-img">
                            <img src={bground} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 py-5 px-2 d-flex align-items-center flex-column justify-content-center">
                        <div className="w-100">
                            <h1>
                                <b>Welcome</b>
                            </h1>

                            <h6>Login as a Student</h6>
                            <h6 className="text-muted">Enter Details</h6>
                        </div>
                        <div className="form-right w-100">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control"
                                        name="username"
                                        type="text"
                                        onChange={(event) => setUsername(event.target.value)}
                                        value={username}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control"
                                        name="password"
                                        type="password"
                                        onChange={(event) => setPassword(event.target.value)}
                                        value={password}
                                        required
                                    />
                                </div>
                                <p className="text-right">
                                    <NavLink to="/" style={{ textDecoration: "none" }}>
                                        Forgot Password?
                                    </NavLink>
                                </p>
                                <p style={{ color: "red" }}>{error}</p>
                                    <button className="btn btn-primary w-100" type="submit">
                                        Login
                                    </button>
                            </form>

                            <div className="pt-3">
                                New here?{" "}
                                <NavLink to="/register1" style={{ textDecoration: "none" }}>
                                    Sign up
                                </NavLink>
                            </div>
                            <hr
                                style={{
                                    color: "grey",
                                    height: 0.5,
                                }}
                            />
                            <p className="text-center text-muted">Or login using</p>
                            <div className="row justify-content-center">
                                <div className="col-5 text-center px-3">
                                    <div className="google p-1 rounded h-100">
                                        <FcGoogle size="22" />
                                    </div>
                                </div>
                                <div className="col-5 text-center px-3">
                                    <div className="facebook p-1 rounded h-100">
                                        <FaFacebookF size="20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Global>
    )
}
export default Login_;
