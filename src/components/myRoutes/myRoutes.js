import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../login/login";
import Signup from "../signup/signup";
import Home from "../appbar/appbar";
import CardForm from '../card/cardForm'



function MyRoutes() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} >
                        <Route path="/card" element={<CardForm />} />
                    </Route>
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </div>
    );
}

export default MyRoutes;