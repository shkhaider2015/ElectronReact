import { makeStyles, IconButton, MenuItem, Menu, Avatar, Popper, Grow, Paper, MenuList, ClickAwayListener } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import './style.css'

import QueryIcon from "../../../RawData/iconapplication.png";
import BarcodeIcon from "../../../RawData/iconbarcode.png";
import PaymentIcon from "../../../RawData/iconmoney.png";
import ClientIcon from "../../../RawData/iconuser.png";

import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

import zainlogo from '../../../RawData/mainassociates_icon.png'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { AuthContext } from "../../../context/authContext";
import { AdminContext } from "../../../context/adminContext";
import { UserListContext, ClientsListContext } from "../../../context/dataContext";
import { db } from "../../../config/firebase";
import UserProfile from "../../profile/userProfile";
import { Offline } from "react-detect-offline";

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




const Homepage2 = () => {

    const classes = useStyle()
    const anchorRef = React.useRef(null);
    const currentUser = React.useContext(AuthContext);
    const isAdmin = React.useContext(AdminContext)
    const [isDeleted, setIsDeleted] = React.useState(false)
    const clients = React.useContext(ClientsListContext)
    const users = React.useContext(UserListContext)
    const [profilePic, setProfilePic] = React.useState(null)
    const [profileOpen, setProfileOpen] = React.useState(false)
    const [objectForProfile, setObjectForProfile] = React.useState(null);
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false)
    // const prevOpen = React.useRef(open);


    const handleLogout = () => {
        setOpen(false)
        auth.signOut()
            .then(() => {
                console.log("Signout succesfully")
            })
            .catch((err) => {
                console.error("Signout Error : ", err)
            })
    }
    const userList = () => {
        navigate("/userlist")
    }

    const getClientsData = () => {
        db
            .collection('clients')
            .onSnapshot((querySnapshot) => {
                var docs = []
                querySnapshot.forEach((doc) => {
                    // console.log("Clients Data : ", doc.data())
                    if (doc.exists) {
                        docs.push(doc.data())
                    }
                })

                clients[1](docs)

            })
    }
    const getUserData = () => {
        db
            .collection('users')
            .onSnapshot((querySnapshot) => {
                var docs = []
                querySnapshot.forEach((doc) => {
                    if (doc.exists) {
                        for (let x in doc.data()) {
                            if (doc.data()[x]['id'] === currentUser.currentUser.uid) {
                                // isAdmin[1](true)
                                isAdmin[1](doc.data()[x]['adminRight'])
                                setIsDeleted(doc.data()[x]['isDeleted'])
                                setObjectForProfile(doc.data()[x])
                            }
                            docs.push(doc.data()[x])
                        }
                    }
                })

                users[1](docs)
            })
    }

    React.useEffect(
        () => {
            if (!currentUser.currentUser) {
                navigate("/login")
            }
        },
        [currentUser, navigate]
    )

    React.useEffect(
        () => {
            if (currentUser.currentUser) {
                getClientsData()
                getUserData()
                setProfilePic(currentUser.currentUser.photoURL)
            }
        },
        []
    )

    React.useEffect(
        () => {
            if (isDeleted) {
                auth.signOut();
            }
        },
        [isDeleted]
    )



    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleMenuClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    const handleProfileOpen = () => {
        setOpen(false)
        setProfileOpen(true)
    }
    const handleProfileClose = () => {
        setProfileOpen(false)
    }

    return (
        <div className="container-fluid myContainer" >


            <div className="row">

                <div className="offset-1  col-11 justify-content-center text-center shape">

                    <div className="container-fluid">
                        <div className="d-flex flex-row mt-4 ">
                            <div className="col-11" ><img alt="logo" src={zainlogo} height="100%" width="25%" /></div>

                            {/* Profile Menu */}

                            <div style={{ zIndex: 1 }} >
                                <IconButton
                                    ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={() => handleToggle()}
                                >
                                    {profilePic
                                        ? <Avatar alt="name" src={profilePic} />
                                        : <AccountCircle className={classes.icon} />
                                    }
                                </IconButton>
                                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleMenuClose}>
                                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                        <MenuItem onClick={handleProfileOpen}>Profile</MenuItem>
                                                        {isAdmin[0] ? <MenuItem onClick={() => userList()}>Users</MenuItem> : null}
                                                        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>

                        </div>

                        {
                            profileOpen && objectForProfile
                                ? <div> <UserProfile open={profileOpen} handleClose={handleProfileClose} obj={objectForProfile} /> </div>
                                : <div>

                                    <div className="row justify-content-center text-center">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <Link to="/create" className="myLink"  >
                                                <div className="box">
                                                    <div className="our-services settings">
                                                        <div className="icon icon-create"> <img alt="pp" src={ClientIcon} className="svgIcons"   /> </div>
                                                        <h4 style={{ fontFamily : '' }} >CREATE</h4>
                                                        <p style={{ fontFamily : '' }} >Create Client Profile</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        {
                                            isAdmin[0]
                                                ?
                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <Link to="/report" className="myLink" >
                                                        <div className="box">
                                                            <div className="our-services privacy">
                                                                <div className="icon icon-query"> <img alt="pp" src={QueryIcon} className="svgIcons"  /></div>
                                                                <h4>QUERY</h4>
                                                                <p>Client Report</p>
                                                            </div>
                                                        </div> </Link>
                                                </div>
                                                : <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <Link to="/report" className="myLink" >
                                                        <div className="box">
                                                            <div className="our-services speedup">
                                                                <div className="icon icon-report"> <img alt="pp" src={QueryIcon} className="svgIcons"  /> </div>
                                                                <h4>REPORTS</h4>
                                                                <p>Client Report </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                        }

                                    </div>
                                    <div className="row  mb-3 justify-content-center">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <Link to="/payment" className="myLink" >
                                                <div className="box">
                                                    <div className="our-services ssl">
                                                        <div className="icon icon-payment "  > <img alt="pp" src={PaymentIcon} className="svgIcons"  style={{  }} /> </div>
                                                        <h4>PAYMENT</h4>
                                                        <p>Payment Information</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <Link to="/search" className="myLink" >
                                                <div className="box">
                                                    <div className="our-services database">
                                                        <div className="icon icon-scanQR"> <img alt="pp" src={BarcodeIcon} className="svgIcons"  style={{  }} /> </div>
                                                        <h4>SCAN BARCODE</h4>
                                                        <p>Search By Scaning</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                        }




                    </div>




                </div>


            </div>



            {/* <div style={{ display: 'flex', width : '100%', flexDirection: 'column', bottom: 0, left: 'auto', right: 'auto' }} >
                <span style={{ fontSize: '8%', color: 'black', opacity: '0.7' }} >Developed By <b>HESOGENS</b> Digital Service Provider</span>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }} >
                    <span style={{ fontSize: '8%', color: 'black', opacity: '0.7' }} >www.hesogens.com&nbsp;|&nbsp;+92-312-2027770</span>
                </div>
            </div> */}

            <div className="row bottomText" >

            <div className="col-12" >
            <div style={{ width : '100%', display : 'grid', placeItems : 'center' }} >
                        <span style={{ fontSize : '60%', color : 'white' }} >Powered By <b>HASOGENS</b></span>
                    <div style={{  display : 'flex', flexDirection : 'column', textAlign : 'center' }} >
                        <span style={{ fontSize : '60%', color : 'white' }} >Digital Service Provider</span>
                        <span style={{ fontSize : '60%', color : 'white' }} >www.hesogens.com&nbsp;|&nbsp;+92-312-2027770</span>
                    </div>
            </div>
            </div>

            </div>

            <div style={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                backgroundColor: 'red',
                textAlign: 'center',
                color: 'white',
                zIndex: 1
            }} >
                <Offline >Check Your Internet Connection</Offline>
            </div>

        </div >

    )
}

export default Homepage2