import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel, Dialog, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import './userProfile.css'
import { ReactComponent as Client_Tempory_Profile } from '../../RawData/Create.svg';
import { getDateFromMillis } from "../../utility/utils";

const UserProfilee = ({ obj, handleClose, open }) => {


    return (
        <div>
            <div className="mt-4 page-content page-container" id="page-content">
                <div className="ml-4 mt-5 padding">
                    <div className=" row  container-fluid d-flex justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="card shadow-sm user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-3 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25"> <Client_Tempory_Profile height="70%" width="70%" className="mt-4 img-radius " style={{ padding: 0 }} /> </div>
                                            <h6 className="f-w-600">Sohail Khan</h6>
                                            {/* <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" /> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-9   ">
                                        <div className="card-block">
                                            <div className="row ">
                                                <h6 className="m-b-20 pr-5 p-b-5 b-b-default f-w-600">Information</h6>
                                                <h6 style={{ marginLeft: "61%", marginTop: "-3%" }} className="  text-right"></h6>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-7">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">Sohailkhan2k22@Gmail.com</h6>
                                                </div>
                                                <div className="col-sm-5">
                                                    <p className="m-b-10 f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">0301-2211009</h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                            <div className="row">
                                                <div className="col-sm-7">
                                                    <p className="m-b-10 f-w-600">Passord</p>
                                                    <h6 className="text-muted f-w-400">xxxxxx</h6>
                                                </div>
                                                <div className="col-sm-5">
                                                    <p className="m-b-10 f-w-600">CNIC</p>
                                                    <h6 className="text-muted f-w-400">42301-XXXXXXX-X</h6>
                                                </div>
                                            </div>
                                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true" /></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true" /></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}



const UserProfile = ({ obj, handleClose, open }) => {

    return (<Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
    >
        <div>

            <div className="card shadow-sm user-card-full">
                <div className="row m-l-0 m-r-0">
                    <div className="col-sm-3 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                            <div className="m-b-25"> <Avatar alt="name" src={obj['imageURI']} variant="rounded" style={{ height : '80px', width : '80px' }}  /> </div>
                            <h6 className="f-w-600">{obj['name']}</h6>
                            {/* <p>Web Designer</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" /> */}
                        </div>
                    </div>
                    <div className="col-sm-9   ">
                        <div className="card-block">
                            <div className="row ">
                                <h6 className="m-b-20 pr-5 p-b-5 b-b-default f-w-600">Information</h6>
                                <h6 style={{ marginLeft: "61%", marginTop: "-3%" }} className="  text-right"></h6>
                            </div>
                            <div className="row">
                                <div className="col-sm-7">
                                    <p className="m-b-10 f-w-600">Email</p>
                                    <h6 className="text-muted f-w-400"> {obj['email']} </h6>
                                </div>
                                <div className="col-sm-5">
                                    <p className="m-b-10 f-w-600">Phone</p>
                                    <h6 className="text-muted f-w-400"> {obj['cellPhone']} </h6>
                                </div>
                            </div>
                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                            <div className="row">
                                <div className="col-sm-7">
                                    <p className="m-b-10 f-w-600">Created At</p>
                                    <h6 className="text-muted f-w-400"> {getDateFromMillis(obj['createdAt'])} </h6>
                                </div>
                                <div className="col-sm-5">
                                    <p className="m-b-10 f-w-600">CNIC</p>
                                    <h6 className="text-muted f-w-400">{obj['cnic']}</h6>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>



        </div>


    </Dialog>)
}

export default UserProfile;