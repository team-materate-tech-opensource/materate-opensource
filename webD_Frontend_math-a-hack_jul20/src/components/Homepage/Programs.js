import React from 'react'
import styled from 'styled-components'
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa'
import program1 from '../../assets/program3.png'
import program2 from '../../assets/program2.png'

const Outer = styled.div`
    .item {
        border-radius: 49px;
        background: linear-gradient(45deg, #e1f0ff, #e4f0ff);
        box-shadow: 0px 0px 10px 2px #e4f0ff;
        height: 100%;
        position: relative;
        color: rgba(0,0,0,0.6);
    }
    .item:hover .imageContainer img {
        transform: scale(1.08);
    }
    .itemheading {
        top: 13px;
        text-shadow: 0px 0px 14px #8f9da5bf;
        z-index: 10;
    }
    .itemheading>div {
        margin: 0px 30px;
        border-bottom: 2px solid rgba(255,255,255,0.5);
    }
    .imageContainer {
        height: 650px;
        text-align: center;
        overflow: hidden;
        border-radius: 49px;
    }
    .imageContainer img {
        max-width: 100%;
        border-radius: 49px;
        transition: 0.5s;
    }
    .leftimg {
        width: 60%;
    }
    @media(max-width: 767px){
        .imageContainer img {
            max-width: 100%;
            border-radius: 49px;
            transition: 0.5s;
        }
        .leftimg {
            width: 78%;
        }
    }
    .itemcontent {
       top: 270px;
    }
`

export default function Programs() {
    return (
        <Outer>
            <div className="container py-5">
                <div className="text-center py-3 pb-5">
                    <h1>PROGRAMS</h1>
                </div>
                <div className="row no-gutters">
                    <div className="col-12 col-md-6 p-2 px-lg-5">
                        <div className="item">
                            <div className="itemheading position-absolute w-100 text-primary pt-1">
                                <div>
                                    <h3 className="font-weight-bold text-center mb-2">Math-a-Hack</h3>
                                </div>
                            </div>
                            <div className="imageContainer">
                                <img src={program1} className="mx-auto mt-5 leftimg" />
                            </div>
                            <div className="py-5 px-4 position-absolute itemcontent">
                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Diagnostic test that enables students to gauge their understanding in Maths</div>
                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Clear identification of the root cause of the problems</div>
                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Merit certificates and exciting discounts on Math-a-month for Top 1% students</div>
                           </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-2 px-lg-5">
                        <div className="item">
                            <div className="itemheading position-absolute text-white w-100">
                                <div>
                                    <h3 className="font-weight-bold text-center mb-2">Math-a-Month</h3>
                                </div>
                            </div>
                            <div className="imageContainer">
                                <img src={program2} />
                            </div>
                            <div className="py-5 px-4  position-absolute itemcontent">
                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Focused on improving problem-solving and critical thinking skills in Maths</div>
                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Evaluation through 5 diagnostic assessments</div>
                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Access to Master Classes</div>
                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  One on one Academic Consulting Calls</div>
                                <div className="py-1 d-flex"><div className="pr-2"><FaCheckCircle color="#0581FA" /> </div>  Top 1% scorers will be awarded academic mentorship, exciting prizes along with Merit Certificates!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="btn buttonBordered mt-5">
                        KNOW MORE <FaChevronRight className="mb-1" />
                    </div>
                </div>
            </div>
        </Outer>
    )
}