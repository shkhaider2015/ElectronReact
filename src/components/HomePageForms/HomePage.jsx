import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel, Fab, colors } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Add as AddIcon, CallMissedSharp } from "@material-ui/icons";
import React from "react";
import './style.css'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';

import zainlogo from '../../RawData/mainassociates_icon.png'
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    link : {
        textDecoration : 'none'
    }
})




function Homepage2() {

    const classes = useStyle()

    return (
        <div className="container-fluid " >


            <div className="row">
                <div className="col-0">



                </div>

                <div className=" offset-1 col-10 justify-content-center text-center shape">

                    <div className="container-fluid">
                        <div className="text-center mt-4">
                            <img src={zainlogo} height="25%" width="25%" />
                        </div>
                        <div className="row justify-content-center text-center">
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <Link to="/home" className="myLink"  >
                                    <div className="box">
                                        <div className="our-services settings">
                                            <div className="icon icon-create"> <CreateOutlinedIcon style={{ height: "70%", width: "70%", color: "whitesmoke" }} /> </div>
                                            <h4>CREATE</h4>
                                            <p>Create Client Profile</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="box">
                                    <div className="our-services speedup">
                                        <div className="icon icon-speedUp"> <ReceiptOutlinedIcon style={{ height: "70%", width: "70%", color: "whitesmoke" }} /> </div>
                                        <h4>REPORTS</h4>
                                        <p>Client Report (Admin Only) </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="box">
                                    <div className="our-services privacy">
                                        <div className="icon"> <img src="https://i.imgur.com/AgyneKA.png" /> </div>
                                        <h4>QUERY</h4>
                                        <p>Client Report (Admin Only)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row  mb-3 justify-content-center">
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="box">
                                    <div className="our-services ssl">
                                        <div className="icon"> <img src="https://i.imgur.com/v6OnUqu.png" /> </div>
                                        <h4>Payment</h4>
                                        <p>Payment Information</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="box">
                                    <div className="our-services database">
                                        <div className="icon"> <img src="https://i.imgur.com/VzjZw9M.png" /> </div>
                                        <h4>SCAN QR</h4>
                                        <p>Search By Scaning</p>
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

export default Homepage2