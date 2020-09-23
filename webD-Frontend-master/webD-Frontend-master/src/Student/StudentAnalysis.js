import React from "react";
import Doughnut from "../components/DoughnutNew";
import StudentNav from "../components/StudentNav";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { motion, useAnimation } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";
import { axiosInstance } from "../lib/axiosAPI";

function StudentAnalysis() {
    const [modalState, setModalState] = React.useState(false);
    const [ data, setData ] = React.useState()
    const [data1, setData1] = React.useState([
        { color: 'transparent', value: 3 },
        { color: '#fdf0da82', value: 2 },
    ])
    const [data2, setData2] = React.useState([
        { color: '#D9CDFF', value: 3 },
        { color: '#7851FC', value: 2 },
    ])
    const control1 = useAnimation();
    const control2 = useAnimation();
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
        if(window.innerWidth >= 1300){
            control1.start("half");
            control2.start("half");
            window.removeEventListener("scroll", handleScroll);
        }
    };
    const getData = async() => {
        try{
            await axiosInstance
                .get('/performance/')
                .then((res) => {
                    setData(res.data)
                    console.log("response: ", res)
                })
        } catch(error) {
            console.log('Error in getting data: ', error)
        }
    }

    React.useEffect( () => {
        getData()
    } ,[])

    return (
        <div onScroll={() => console.log("scroll")}>
            <StudentNav analysis />
            {/* nav-bar here */}
            <div className="row no-gutters p-2 p-md-5">
                <motion.div animate={control1}
                    variants={{
                        half: {
                            width: "30%",
                            opacity: 1,
                        },
                    }}
                    style={{
                        width: "100%",
                    }}
                >
                    <div className="p-2 px-md-5 py-3 justify-content-center align-items-center mb-3"
                        style={{
                            background: "#ffffff",
                            borderRadius: "72px",
                            boxShadow: "7px 3px 99px #0080fe26",
                        }}
                        id="upper-container"
                    >
                        <h1 className="font-weight-bold my-2">
                            Overall
                            <br />
                            Performance
                        </h1>
                        <div className="py-3 mx-auto" style={{maxWidth: "250px"}}>
                            { data1 ? 
                                <Doughnut data={data1} background="#0080FE" hover={true}>
                                    <div className="text-center">
                                        <h6 className="m-0 font-weight-bold" style={{ fontSize: "90%" }}>Attendance</h6>
                                        <h2 className="m-0 font-weight-bold"><span style={{ color: "#0080FE" }}>93%</span></h2>
                                    </div>
                                </Doughnut> : "" 
                            }
                        </div>

                        <div className="mx-auto" style={{maxWidth: "400px"}}>
                            <div className="row m-1 p-2 justify-content-center">
                                <div className="col-sm-2" style={{ background: "#0080f3", borderRadius: "10px" }}></div>
                                <div className="col-sm-8 font-weight-bold text-center" style={{ color: "#000000" }}>
                                    <h4>SUCCESS RATE</h4>
                                </div>
                            </div>
                            <div className="row m-1 p-2 justify-content-center">
                                <div className="col-sm-2" style={{ background: "#c4e1fd", borderRadius: "10px" }}></div>
                                <div className="col-sm-8 font-weight-bold text-center" style={{ color: "#000000" }}>
                                    <h4>ERROR RATE</h4>
                                </div>
                            </div>
                        </div>

                        <hr style={{ color: "", height: "1px" }} />
                        <div className="p-2 mb-3 justify-content-center text-center">
                            <Button
                                variant="primary"
                                style={{
                                    color: "#ffffff",
                                    background:
                                        "transparent linear-gradient(100deg, #0080fe 0%, #3404f3 100%) 0% 0% no-repeat padding-box",
                                    borderRadius: "30px",
                                    padding: "auto 1rem",
                                }}
                                onClick={() => setModalState(true)}
                            >
                                View Chapter Wise Ranking
                            </Button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    animate={control2}
                    variants={{
                        half: {
                            width: "69%",
                            opacity: 1,
                        },
                    }}
                    style={{
                        width: "100%",
                    }}
                >
                    <div className="col-md-12 m-1 mx-md-3 px-2 px-md-5 py-3 lower-container"
                        style={{
                            background: "#ffffff",
                            borderRadius: "72px",
                            boxShadow: "7px 3px 99px #7755fc33",
                        }}
                    >
                        <div className="row p-4">
                            <div className="col-sm-5">
                                <h1 className="font-weight-bold" style={{ color: "#000000" }}>
                                    Chapter Wise
                                <br />
                                Analysis
                                </h1>
                            </div>
                            <div className="col-sm-7 ">
                                <div className="row m-1 p-2 justify-content-center">
                                    <div
                                        className="col-sm-2"
                                        style={{ background: "#7851fc", borderRadius: "10px" }}
                                    ></div>
                                    <div
                                        className="col-sm-8 font-weight-bold text-center"
                                        style={{ color: "#000000" }}
                                    >
                                        <h4>SUCCESS RATE</h4>
                                    </div>
                                </div>
                                <div className="row m-1 p-2 justify-content-center">
                                    <div
                                        className="col-sm-2"
                                        style={{ background: "#d9cdff", borderRadius: "10px" }}
                                    ></div>
                                    <div
                                        className="col-sm-8 font-weight-bold text-center"
                                        style={{ color: "#000000" }}
                                    >
                                        <h4>ERROR RATE</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-md-4 p-2">
                                <div className="mx-auto" style={{maxWidth: "300px"}}>
                                    { data2 ? 
                                        <Doughnut data={data2} background={"#D9CDFF"} hover={true}>
                                            <div className="text-center">
                                                <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Score</h6>
                                                <h2 className="m-0"><span style={{ color: "#7851FC", fontWeight: "bold" }}>7</span>
                                                    <span className="text-muted" style={{fontSize: "1.3rem"}}>/10</span></h2>
                                            </div>
                                        </Doughnut> : "" 
                                    }
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="font-weight-bold">3-Digit Numbers</h5>
                                    <div className="btn btn-purple">
                                        Know More <BsChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-2">
                                <div className="mx-auto" style={{maxWidth: "300px"}}>
                                    { data2 ? 
                                        <Doughnut data={data2} background={"#D9CDFF"} hover={true}>
                                            <div className="text-center">
                                                <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Score</h6>
                                                <h2 className="m-0"><span style={{ color: "#7851FC", fontWeight: "bold" }}>7</span>
                                                    <span className="text-muted" style={{fontSize: "1.3rem"}}>/10</span></h2>
                                            </div>
                                        </Doughnut> : "" 
                                    }
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="font-weight-bold">3-Digit Numbers</h5>
                                    <div className="btn btn-purple">
                                        Know More <BsChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-2">
                                <div className="mx-auto" style={{maxWidth: "300px"}}>
                                    { data2 ? 
                                        <Doughnut data={data2} background={"#D9CDFF"} hover={true}>
                                            <div className="text-center">
                                                <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Score</h6>
                                                <h2 className="m-0"><span style={{ color: "#7851FC", fontWeight: "bold" }}>7</span>
                                                    <span className="text-muted" style={{fontSize: "1.3rem"}}>/10</span></h2>
                                            </div>
                                        </Doughnut> : "" 
                                    }
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="font-weight-bold">3-Digit Numbers</h5>
                                    <div className="btn btn-purple">
                                        Know More <BsChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-2">
                                <div className="mx-auto" style={{maxWidth: "300px"}}>
                                    { data2 ? 
                                        <Doughnut data={data2} background={"#D9CDFF"} hover={true}>
                                            <div className="text-center">
                                                <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Score</h6>
                                                <h2 className="m-0"><span style={{ color: "#7851FC", fontWeight: "bold" }}>7</span>
                                                    <span className="text-muted" style={{fontSize: "1.3rem"}}>/10</span></h2>
                                            </div>
                                        </Doughnut> : "" 
                                    }
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="font-weight-bold">3-Digit Numbers</h5>
                                    <div className="btn btn-purple">
                                        Know More <BsChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-2">
                                <div className="mx-auto" style={{maxWidth: "300px"}}>
                                    { data2 ? 
                                        <Doughnut data={data2} background={"#D9CDFF"} hover={true}>
                                            <div className="text-center">
                                                <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Score</h6>
                                                <h2 className="m-0"><span style={{ color: "#7851FC", fontWeight: "bold" }}>7</span>
                                                    <span className="text-muted" style={{fontSize: "1.3rem"}}>/10</span></h2>
                                            </div>
                                        </Doughnut> : "" 
                                    }
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="font-weight-bold">3-Digit Numbers</h5>
                                    <div className="btn btn-purple">
                                        Know More <BsChevronRight />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-2">
                                <div className="mx-auto" style={{maxWidth: "300px"}}>
                                    { data2 ? 
                                        <Doughnut data={data2} background={"#D9CDFF"} hover={true}>
                                            <div className="text-center">
                                                <h6 className="m-0 font-weight-bold" style={{fontSize:"90%"}}>Score</h6>
                                                <h2 className="m-0"><span style={{ color: "#7851FC", fontWeight: "bold" }}>7</span>
                                                    <span className="text-muted" style={{fontSize: "1.3rem"}}>/10</span></h2>
                                            </div>
                                        </Doughnut> : "" 
                                    }
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="font-weight-bold">3-Digit Numbers</h5>
                                    <div className="btn btn-purple">
                                        Know More <BsChevronRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  MODAL POP-UP &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/}
                <Modal
                    show={modalState}
                    onHide={() => setModalState(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1 className="font-weight-bold" style={{ color: "#000000" }}>
                                Chapter Wise Ranking
                            </h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div
                            className="row p-3 mx-5 align-items-center justify-content-center"
                            style={{
                                borderRadius: "58px",
                                boxShadow: "5px 5px 7px #7851FC33",
                                background: "#ffffff",
                            }}
                        >
                            <span className="font-weight-bold ">
                                <h3 className="d-inline" style={{ color: "#000000" }}>
                                    Overall Rank:{" "}
                                </h3>
                                <h1 className="d-inline" style={{ color: "#7851fc", fontWeight: "bold" }}>
                                    37
                                </h1>
                                <h5 className="d-inline" style={{ color: "#707070" }}>
                                    /132 &nbsp;&nbsp; &nbsp;&nbsp;
                                </h5>

                                <h3 className="d-inline" style={{ color: "#000000" }}>
                                    Marks Scored:{" "}
                                </h3>
                                <h1 className="d-inline" style={{ color: "#7851fc", fontWeight: "bold" }}>
                                    25
                                </h1>
                                <h5 className="d-inline" style={{ color: "#707070" }}>
                                    /35
                                </h5>
                            </span>
                        </div>

                        <div className="row m-2 p-3">
                            <div
                                className="col-auto p-5 justify-content-center align-items-center"
                                style={{
                                    boxShadow: "5px 5px 7px #7851FC33",
                                    borderRadius: "58px",
                                    background: "#ffffff",
                                }}
                            >
                                <div className="p-2">
                                    <h3 style={{ color: "#000000", display: "inline" }}>
                                        Highest Marks:&nbsp;{" "}
                                    </h3>
                                    <h1 style={{ color: "#7851fc", display: "inline", fontWeight: "bold" }}>34</h1>
                                    <h5 style={{ color: "#707070", display: "inline" }}>/35</h5>
                                </div>
                                <div className="p-2">
                                    <h3 style={{ color: "#000000", display: "inline" }}>
                                        Lowest Marks:&nbsp;{" "}
                                    </h3>
                                    <h1 style={{ color: "#7851fc", display: "inline", fontWeight: "bold" }}>3</h1>
                                    <h5 style={{ color: "#707070", display: "inline" }}>/35</h5>
                                </div>
                            </div>
                            <div
                                className="col-auto p-5 ml-auto justify-content-center align-items-center"
                                style={{ border: "2px solid #707070", borderRadius: "47px" }}
                            >
                                GRAPH HERE
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default StudentAnalysis;
