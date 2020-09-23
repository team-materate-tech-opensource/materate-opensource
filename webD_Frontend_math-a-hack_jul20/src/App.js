import React, {useEffect} from "react";
import ReactGA from 'react-ga';

import { Switch, Route, Redirect } from "react-router-dom";
import { redirectToLogin } from './util/redirects'
import PrivateRoute from './PrivateRoute'
import { AuthContext } from './lib/auth'
import Dashboard from "./pages/Dashboard";
import Result from "./pages/Result";
import Login from "./pages/Login";
import LandingPage from "./pages/NewLanding";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Programs from "./pages/Programs";

import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
    {/* %%%%%%%%%%%%%%% Google Analytics Integration %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
	useEffect(() => {
    	ReactGA.initialize('UA-176746372-1');
    	// To Report Page View 
    	ReactGA.pageview(window.location.pathname + window.location.search);
  	}, [])





    const [ access, setAccess ] = React.useState(localStorage.getItem('access_token'))
    const [ refresh, setRefresh ] = React.useState(localStorage.getItem('refresh_token'))
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
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/programs" component={Programs} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/result" component={Result} />
            </Switch>
        </AuthContext.Provider>
    );
}

export default App;
