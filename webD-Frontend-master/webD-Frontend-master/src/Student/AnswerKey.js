import React from "react";
import { useAuth } from '../lib/auth'
import StudentNav from '../components/StudentNav'
import StudentLeftPanel from "./StudentLeftPanel";
import StudentAnswerBox from "./StudentAnswerBox";
import { axiosInstance } from "../lib/axiosAPI";

function AnswerKey () {
    const { setAccessToken, setRefreshToken } = useAuth()

    const [ easy, setEasy ] = React.useState(true)
    const [ moderate, setModerate ] = React.useState(true)
    const [ hard, setHard ] = React.useState(true)
    const [ misconception, setMisconception ] = React.useState(true)
    const [ silly, setSilly ] = React.useState(true)
    const [ unattempted, setUnattempted ] = React.useState(true)

    const handleEasy = () => {
        if(!moderate && !hard){
            setEasy(true)
            setHard(true)
            setModerate(true)
        }else{
            setEasy(true)
            setHard(false)
            setModerate(false)
        }
        setHint(false)
    }
    const handleModerate = () => {
        if(!easy && !hard){
            setEasy(true)
            setHard(true)
            setModerate(true)
        }else{
            setEasy(false)
            setHard(false)
            setModerate(true)
        }
        setHint(false)
    }
    const handleHard = () => {
        if(!easy && !moderate){
            setEasy(true)
            setModerate(true)
            setHard(true)
        }else{
            setEasy(false)
            setModerate(false)
            setHard(true)
        }
        setHint(false)
    }
    const handleMisconception = () => {
        if(!silly && !unattempted){
            setMisconception(true)
            setSilly(true)
            setUnattempted(true)
        }else{
            setMisconception(true)
            setSilly(false)
            setUnattempted(false)
        }
        setHint(false)
    }
    const handleSilly = () => {
        if(!misconception && !unattempted){
            setMisconception(true)
            setSilly(true)
            setUnattempted(true)
        }else{
            setMisconception(false)
            setSilly(true)
            setUnattempted(false)
        }
        setHint(false)
    }
    const handleUnattempted = () => {
        if(!misconception && !silly){
            setMisconception(true)
            setSilly(true)
            setUnattempted(true)
        }else{
            setMisconception(false)
            setSilly(false)
            setUnattempted(true)
        }
        setHint(false)
    }

    const [ combined, setCombined ] = React.useState(false)
    const [ hint, setHint ] = React.useState(false)
    const handleSwitch = (value) => {
        setCombined(value)
        setHint(value)
    }

    const [ data, setData ] = React.useState([])
    const [ questions, setQuestions ] = React.useState([])
    const logout = () => {
        setAccessToken("")
        setRefreshToken("")
    }
    const getData = async() => {
        try{
            await axiosInstance
                .get('/analysis/', { params: {quiz_id: 12} })
                .then((res) => {
                    setData(res.data)
                    setQuestions(res.data)
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
        <div style={{background: "#FEF6F6"}}>
            <StudentNav answerkey logout={logout} />
            <div className="row no-gutters px-2 py-4">
                <div className="col-lg-4 px-2 px-md-5">
                    <StudentLeftPanel 
                        easy={easy} moderate={moderate} hard={hard}
                        handleEasy={handleEasy} handleModerate={handleModerate} handleHard={handleHard}
                        misconception={misconception} silly={silly} unattempted={unattempted}
                        handleMisconception={handleMisconception} handleSilly={handleSilly} handleUnattempted={handleUnattempted}
                        combined={combined} handleSwitch={handleSwitch} hint={hint}
                        questions={questions}
                    />
                </div>
                <div className="col-lg-8 align-items-center px-2 px-md-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className=" pl-3 font-weight-bold">All Questions</div>
                        <div className="justify-content-center">
                            <div className="btn btn-primary" style={{
                                background: "#fef4f4 padding-box",
                                boxShadow: "0px 0px 2px #fe00002b",
                                borderRadius: "30px",
                                border: "3px solid #f84848",
                                color: "#000000",
                            }}>
                                View Response Sheet
                            </div>
                        </div>
                    </div>

                    { questions.map((question, index) => 
                        <StudentAnswerBox key={index} 
                            q_id={question.q_id}
                            no = {index+1}
                            type = {question.q_type}
                            difficulty = {question.q_difficulty}
                            qText = {question.q_text}
                            ansExp = {question.ans_expl}
                            options = {question.options}
                            d_options = {[ easy, moderate, hard ]}
                            //markedResponse = {question.marked_response.opt_text}
                            //correctResponse = {question.correct_response.opt_text}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
export default AnswerKey;
