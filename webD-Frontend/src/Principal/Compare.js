import React from "react";
import PrincipalTopBar from "../components/PrincipalTopBar";
import styled from 'styled-components'
import Buttons from "../components/Buttons";
import { NavLink } from "react-router-dom";
import PrincipalNav from '../Principal/PrincipalNav'

const Container = styled.div`
    background: #F6F2E2;
    height: 100%;
    .floatingContainer {
        background: #F6F2E2;
        box-shadow: 5px 5px 10px 2px rgba(0,0,0,0.1), -5px -5px 10px 2px rgba(255,255,255,0.6);
        border-radius: 40px;
    }
`

function Compare(){

    return (
      <Container>
        <PrincipalNav />
        <div className="text-center py-5 px-2">
            <h2 className="font-weight-bold">COMPARATIVE SCHOOL RANKS AT A GLANCE</h2>
        </div>
            <div className="container mx-auto floatingContainer">
                <div className="py-5 px-2 px-md-5 align-self-center">
                    <div className="row mt-1 px-4 justify-content-center">
                        <div className="text-center text-primary font-weight-bold">
                            <h4 className="font-weight-bold" style={{ paddingBottom: "10px", fontSize: "2em" }} > NOTE:</h4>
                        </div>
                        <p className="text-muted">
                            Are you sure you would like to see results of how your school
                            has performed in comparison to other competing schools? By
                            clicking Agree - you allow MateRate to use the results of other
                            schools that have consented to see competitive results. You also
                            allow MateRate to use your school's results while providing
                            competitive result analysis to other schools who have requested
                            for the same.
                        </p>
                    </div>
                    <div className="row p-2 justify-content-center">
                        <div className="col-md-3 p-2">
                            <NavLink
                                to="/principal/compair"
                                style={{ textDecoration: "none" }}
                            >
                                <Buttons
                                    text="I AGREE"
                                    border="4px solid #FDB851"
                                    color="#fdb851"
                                    borderRadius="50px"
                                    background="#ffffff"
                                />
                            </NavLink>
                        </div>
                        <div className="col-md-3 p-2">
                            <NavLink
                                to="/principal"
                                style={{ textDecoration: "none" }}
                            >
                                <Buttons
                                    text="I DISAGREE"
                                    border="4px solid #878787"
                                    color="#878787"
                                    borderRadius="50px"
                                    background="#ffffff"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    )
}
export default Compare;
