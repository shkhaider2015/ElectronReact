import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../login/login";
import Signup from "../signup/signup";
import Home from "../appbar/appbar";
import FormList from "../HomePageForms/formsList";
import ApplicationForm from "../forms/applicationForm";
import NominationForm from '../forms/nominationForm'
import ConfirmationForm from '../forms/confirmationForm'



function MyRoutes() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} >
                        <Route path="/" element={ <FormList /> } />
                        <Route path="/application" element={ <ApplicationForm /> } />
                        <Route path="/nomination" element={ <NominationForm /> } />
                        <Route path="/confirmation" element={ <ConfirmationForm /> } />
                    </Route>
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </div>
    );
}

export default MyRoutes;