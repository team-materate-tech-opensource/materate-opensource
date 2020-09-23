import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthContext } from './lib/auth'

import "bootstrap/dist/css/bootstrap.min.css";

import NoMatch from "./NoMatch";

import Login_ from "./Teacher/Login_";
import Register1 from "./Teacher/Register1";
import Register2 from "./Teacher/Register2";
import Register3 from "./Teacher/Register3";
import Register4 from "./Teacher/Register4";
import Register5 from "./Teacher/Register5";


//
// TEACHER
//
import TeacherDashboard from "./Teacher/Dashboard";
import TeacherAnswer from "./Teacher/Results";
import TeacherAnalysis from './Teacher/Analysis';
import MainPage from './Teacher/MainPage'

//
// PRINCIPAL
//
import IntroPage from "./Principal/IntroPage";
import Compare from "./Principal/Compare";
import CompareSchools from "./Principal/CompareSchools";
import CompareMarks from "./Principal/CompareMarks";
import Analysis from "./Principal/Analysis";
import SchoolPerformance from "./Principal/SchoolPerformance";
import TestAnalysis from "./Principal/TestAnalysis";
import TopperList from "./Principal/TopperList";
import AverageMarks from "./Principal/AverageMarks";
import PrincipalResponses from "./Principal/PrincipalResponses";
import SchoolResultPrincipal from "./Principal/SchoolResultPrincipal"
import Classperformance from "./Principal/Classperformance"

//
// STUDENT
//
import AnswerKey from "./Student/AnswerKey";
import StudentDashboard from "./Student/StudentDashboard";
import StudentAnalysis from "./Student/StudentAnalysis";
import StudentStudyPlan from "./Student/StudentStudyPlan";


import Chart from '../src/components/Chart/BarChart'
import ChartNew from '../src/components/Chart/ChartNew'

function App() {
    const [access, setAccess] = React.useState(localStorage.getItem('access_token'))
    const [refresh, setRefresh] = React.useState(localStorage.getItem('refresh_token'))
    const setAccessToken = (token) => {
        localStorage.setItem('access_token', token)
        setAccess(token)
    }
    const setRefreshToken = (token) => {
        localStorage.setItem('refresh_token', token)
        setRefresh(token)
    }
    return (
        <AuthContext.Provider 
            value={{
                accessToken : access,
                refreshToken : refresh,
                setAccessToken : setAccessToken,
                setRefreshToken : setRefreshToken
        }}>
            <Switch>
                <Route exact path="/" component={Login_} />
                <Route exact path="/login" component={Login_} />
                <Route path="/register1" component={Register1} />
                <Route path="/register2" component={Register2} />
                <Route path="/register3" component={Register3} />
                <Route path="/register4" component={Register4} />
                <Route path="/register5" component={Register5} />

                {/* TEACHER */}
                <Route exact path="/teacher/results" component={TeacherAnswer} />
                <Route path="/teacher/analysis" component={TeacherAnalysis} />
                <Route exact path="/teacher" component={TeacherDashboard} />
                <Route exact path="/teacher/mainpage" component={MainPage} />

                {/* PRINCIPAL */}
                <Route path="/principal/results" component={SchoolResultPrincipal} />
                <Route path="/principal/results2" component={Classperformance}/>
                <Route path="/principal/analysis" component={TestAnalysis} />
                <Route path="/principal/responses" component={PrincipalResponses} />
                <Route path="/principal/marklist" component={TopperList} />
                <Route path="/principal/compairNotice" component={Compare} />
                <Route path="/principal/compair" component={AverageMarks} />
                <Route path="/principal" component={IntroPage} />

                {/* STUDENT */}
                <Route path="/student/answerkey" component={AnswerKey} />
                <Route path="/student/analysis" component={StudentAnalysis} />
                <Route path="/student/studyplan" component={StudentStudyPlan} />
                <Route path="/student" component={StudentDashboard} />

                <Route path="/chart" component={Chart} />
                <Route path="/chartnew" component={ChartNew} />

                <Route component={NoMatch} />
            </Switch>
        </AuthContext.Provider>
    );
}

export default App;
