import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../login/login";
import Signup from "../signup/signup";
import ApplicationForm from "../forms/applicationForm";
import NominationForm from '../forms/nominationForm'
import ConfirmationForm from '../forms/confirmationForm'
import SitePlan from "../forms/sitePlan";
import CreateApp from "../applicationform";
import Home from "../HomePageForms/HomePageForms/HomePage.jsx"
import Report from "../report/report";
import Payment from "../forms/paymentInfo";




function MyRoutes() {
    return (
    < div >
        <Router >
            <Routes >
                <Route path="/" >
                    <Route path="/" element={< Home />} /> 
                    <Route path="/report" element={< Report />}/> 
                    <Route path="/create" element={< CreateApp />}/> 
                    <Route path="/nomination" element={< NominationForm />}/> 
                    <Route path="/confirmation"element={< ConfirmationForm />}/> 
                    <Route path="/siteplane"element={< SitePlan />}/> 
                </Route >

        <       Route path="login"element={< Login />}/> 
                <Route path="signup"element={< Signup />}/> 
            </Routes > 
        </Router> 
        
        </div >
    );
}

export default MyRoutes;