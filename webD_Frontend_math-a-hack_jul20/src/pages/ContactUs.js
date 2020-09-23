import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { FaChevronRight } from 'react-icons/fa'
import { axiosInstance } from "../lib/axiosAPI";

import NavBar from "../components/NavBar";

import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import citymap from '../assets/citymap.png'
import divider from '../assets/divider.png'


const Styles = styled.div`
    .contact-us {
        margin-top: 170px;
    }
    .footerContainer {
        margin-top: 200px;
    }
    @media(max-width:576px){
        .footerContainer {
            margin-top: 330px;
        }
    }
`;

function ContactUs(props) {
    const [ msg, setMsg ] = React.useState("")
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [preffered, setPreffered] = React.useState('');

    const handleSubmit = async (event) => {
        setMsg("")
        event.preventDefault();
        try{
            const response = await axiosInstance
                .post("contact/", {
                    name: name,
                    email: email,
                    phone: phone,
                    preffered_mode: preffered,
                    message: message
                })
                .then((response) => {
                    setName("")
                    setEmail("")
                    setPhone("")
                    setMessage("")
                    setPreffered("")
                    setMsg("Thank you for contacting us, we will get back to you as soon as possible!")
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
            <NavBar props={{...props}} />
            <section className="section-default section-contact my-5 pt-5 mx-0">
                <div className="row no-gutters m-auto py-5">
                    <div className="col-md-12 col-lg-6 order-2 align-self-top">
                        <div className="bg-white bordered formContainer m-auto">
                            <div className="mb-4">
                                <h3 className="font-weight-bold">How can we help</h3>
                            </div>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group"><TextField required label="Name" fullWidth={true} value={name} onChange={(event) => setName(event.target.value)} /></div>
                                <div className="form-group"><TextField required type="email" label="Email" fullWidth={true} value={email} onChange={(event) => setEmail(event.target.value)} /></div>
                                <div className="form-group"><TextField required label="Phone" fullWidth={true} value={phone} onChange={(event) => setPhone(event.target.value)} /></div>
                                <div className="form-group pt-3 m-0">
                                    <FormLabel component="legend">Preffered method of communication</FormLabel>
                                    <RadioGroup required row aria-label="gender" value={preffered} onChange={(event) => setPreffered(event.target.value)}>
                                        <FormControlLabel value="email" control={<Radio color="primary" />} label="Email" />
                                        <FormControlLabel value="phone" control={<Radio color="primary" />} label="Phone" />
                                    </RadioGroup>
                                </div>
                                <div className="form-group"><TextField required label="Message" fullWidth={true} value={message} onChange={(event) => setMessage(event.target.value)} /></div>
                                <div className="pt-4 text-center">
                                    <div className="pb-2 text-info">
                                        {msg}
                                    </div>
                                    <button type="submit" className="btn buttonBordered font-weight-bold">Submit <FaChevronRight className="mb-1" /> </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 pl-0 pl-md-5">
                        <div className="text-left px-5 pb-3">
                            <h1 className="text-white font-weight-bold">Contact Us</h1>
                            <p className="subheading">Intrigued! Wanna know more about us? Send in your queries here to reach out to us.</p>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                .section-contact{
                    background: url(${citymap}), linear-gradient(to bottom, #0080fd,#0080fd,#0080fd, white);
                    background-size: cover;
                    background-repeat: repeat-x;
                    background-size: 110%;
                    background-position: center bottom;
                    max-height: 600px;
                    position: relative;
                }
                .contact-form {
                    z-index: 10;
                }
                .subheading{
                    font-size: 1.4rem;
                    color: white;
                    max-width: 500px;
                }
                .formContainer {
                    max-width: 600px;
                    padding: 70px 50px;
                    border-radius: 30px;
                    box-shadow: 0 5px 30px rgba(0, 121, 243, 0.19);
                }
            `}</style>
            </section>
            <div className="footerContainer">
                <Footer />
            </div>
        </Styles>
    )
}
export default ContactUs;
