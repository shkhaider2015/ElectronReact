import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../login/login";
import Signup from "../signup/signup";
import ApplicationForm from "../forms/applicationForm";
import NominationForm from '../forms/nominationForm'
import ConfirmationForm from '../forms/confirmationForm'
import SitePlan from "../forms/sitePlan";
import Application from "../applicationform";
import Home from "../HomePageForms/HomePage.jsx"




function MyRoutes() {
    return (< div >
        <
        Router >
            <
        Routes >
                <
        Route path="/" >
                    <
                        Route path="/"
                        element={< Home />}
                    /> <
                        Route path="/home"
                        element={< Application />}
                    /> <
                        Route path="/application"
                        element={< ApplicationForm />}
                    /> <
                        Route path="/nomination"
                        element={< NominationForm />}
                    /> <
                        Route path="/confirmation"
                        element={< ConfirmationForm />}
                    /> <
                        Route path="/siteplane"
                        element={< SitePlan />}
                    /> < /
        Route >

        <
                        Route path="login"
                        element={< Login />}
                    /> <
                        Route path="signup"
                        element={< Signup />}
                    /> < /
        Routes > <
        /Router> < /
        div >
    );
}

export default MyRoutes;