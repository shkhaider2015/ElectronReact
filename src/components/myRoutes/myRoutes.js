import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../login/login";
import Signup from "../signup/signup";
import CreateApp from "../applicationform";
import Home from "../HomePageForms/HomePageForms/HomePage.jsx"
import Report from "../report/report";
import PrintApplicationForm from "../printable/ApplicationForm";
import EditComp from '../edit/edit';
import UserList from "../userlist/userList";
import Payment from "../payment/payment";
import CPP from "../profile/clientPaymentProfile";
import IdCardGenrator from "../idCard/idCardGenrator";
import SearchByBarcode from '../searcByBarcode/serchByBarcode';
import CompleteProfile from "../profile/CompleteProfile";




function MyRoutes() {
    return (
    < div >
        <Router >
            <Routes >
                <Route path="/" >
                    <Route path="/" element={< Home />} /> 
                    <Route path="/report" element={< Report />}/> 
                    <Route path="/edit" element={<EditComp />} />
                    <Route path="/idcard" element={<IdCardGenrator />} />
                    <Route path="/create" element={< CreateApp />}/> 
                    <Route path="/payment" element={ <Payment /> }  />
                    <Route path="/cpp/:cnic" element={ <CPP /> } />
                    <Route path="/print/application" element={< PrintApplicationForm />}/> 
                    <Route path="/userlist" element={< UserList />}/> 
                    <Route path="/search" element={<SearchByBarcode />} />
                    <Route path="/completeprofile" element={<CompleteProfile />} />

                </Route >

        <       Route path="login"element={< Login />}/> 
                <Route path="signup"element={< Signup />}/> 
               
            </Routes > 
        </Router> 
        
        </div >
    );
}

export default MyRoutes;