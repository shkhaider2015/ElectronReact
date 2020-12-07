import { makeStyles, IconButton, MenuItem, Menu } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import './style.css'

import { ReactComponent as SVG_Create } from '../../../RawData/Create.svg';
import { ReactComponent as SVG_Report } from '../../../RawData/Report.svg';
import { ReactComponent as SVG_Query } from '../../../RawData/QUERY.svg';
import { ReactComponent as ScanQR } from '../../../RawData/SCAN.svg';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

import zainlogo from '../../../RawData/mainassociates_icon.png'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { AuthContext } from "../../../context/authContext";
import { AdminContext } from "../../../context/adminContext";
import { db } from "../../../config/firebase";

const useStyle = makeStyles(
    (theme) => ({
        link: {
            textDecoration: 'none'
        },
        icon: {
            width: '50px',
            height: '50px',
            color: theme.palette.primary.main
        }
    })
)




const  Homepage2 = () => {

    const classes = useStyle()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const currentUser = React.useContext(AuthContext);
    const isAdmin = React.useContext(AdminContext)

    const navigate = useNavigate()
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        setAnchorEl(null);
        auth.signOut()
            .then(() => {
                console.log("Signout succesfully")
            })
            .catch((err) => {
                console.error("Signout Error : ", err)
            })
    }

    React.useEffect(
        () => {
            console.log("Checking Admin : ", isAdmin[0])
            if (!currentUser.currentUser) {
                navigate("/login")
            }
        },
        [currentUser, navigate]
    )

    const chekAdmin = (email) =>
    {
            db.collection("Users").doc(email).collection("personal").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    isAdmin[1](doc.data().adminRight)

                    // console.log("Login   : ", doc.data().adminRight)
                } )
            })
            .catch((error) => 
            {
                console.log("error", error)
            })
    }

    chekAdmin(currentUser.currentUser.email)


    return (
        <div className="container-fluid " >


            <div className="row">

                <div className=" offset-1 col-10 justify-content-center text-center shape">

                    <div className="container-fluid">
                        <div className="d-flex flex-row mt-4 ">
                            <div className="col-11" ><img src={zainlogo} height="100%" width="25%" /></div>

                            {/* Profile Menu */}
                            <div className="col-1" >
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={handleMenu}
                                >
                                    <AccountCircle className={classes.icon} />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleLogout}>logout</MenuItem>
                                </Menu>

                            </div>




                        </div>
                        <div className="row justify-content-center text-center">
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <Link to="/create" className="myLink"  >
                                    <div className="box">
                                        <div className="our-services settings">
                                            <div className="icon icon-create"> <SVG_Create className="" fill="white" style={{ height: "70%", width: "70%", color: "whitesmoke" }} /> </div>
                                            <h4>CREATE</h4>
                                            <p>Create Client Profile</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <Link to="/report" className="myLink" >
                                    <div className="box">
                                        <div className="our-services speedup">
                                            <div className="icon icon-report"> <SVG_Report className="" fill="white" style={{ height: "70%", width: "70%", color: "whitesmoke" }} /> </div>
                                            <h4>REPORTS</h4>
                                            <p>Client Report (Admin Only) </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="box">
                                    <div className="our-services privacy">
                                        <div className="icon icon-query"> <SVG_Query className="" fill="white" style={{ height: "70%", width: "70%", color: "whitesmoke" }} /></div>
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
                                        <div className="icon icon-payment " > <AttachMoneyOutlinedIcon className="" style={{ height: "70%", width: "70%", color: "whitesmoke" }} /> </div>
                                        <h4>Payment</h4>
                                        <p>Payment Information</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <div className="box">
                                    <div className="our-services database">
                                        <div className="icon icon-scanQR"> <ScanQR className="" fill="white" style={{ height: "70%", width: "70%", color: "whitesmoke" }} /> </div>
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