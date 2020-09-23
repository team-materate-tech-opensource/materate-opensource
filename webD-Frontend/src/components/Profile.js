import React from "react";
import "./Login.css";
import { NavLink, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: ""
        }
        this.handleprofile = this.handleusername.bind(this);
    }
    handleusername = (data) => this.setState({ 'username': data })

    componentDidMount() {
        let response;
        try {
            response = Axios.get('http://localhost:8000/student/profile').catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }

            });
        } catch (error) {
            console.log(error);
        }
        console.log(response);
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.profile}
                </div>
            </React.Fragment>
        );
    }
}
export default Login;
