import { makeStyles, IconButton, MenuItem, Menu, Avatar } from "@material-ui/core";
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
import { UserListContext, ClientsListContext } from "../../../context/dataContext";
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




const Homepage2 = () => {

    const classes = useStyle()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const currentUser = React.useContext(AuthContext);
    const isAdmin = React.useContext(AdminContext)
    const clients = React.useContext(ClientsListContext)
    const users = React.useContext(UserListContext)
    const navigate = useNavigate()
    const open = Boolean(anchorEl);

    // const [clients, setClients] = React.useState([])
    // const [users, setUsers] = React.useState([])

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
    const userList = () => {
        navigate("/userlist")
    }

    // const chekAdmin = (email) =>
    // {
    //         db.collection("users").doc(currentUser.currentUser.uid).get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 isAdmin[1](doc.data().adminRight)
    //                 console.log("Admin Checked")
    //             } )
    //         })
    //         .catch((error) => 
    //         {
    //             console.log("error", error)
    //         })
    // }
    const checkAdmin = () => {
        db.collection("users").doc(currentUser.currentUser.uid).get().then((doc) => {
            if (doc.exists) {
                var tr = doc.data()['personal']['adminRight']
                isAdmin[1](tr)
                console.log("Admin Right : ", tr)

            } else {
                console.log("doc not exists")
            }
        }).catch(e => console.error(e))
    }

    const getClientsData = () =>
    {
        db
        .collection('clients')
        .onSnapshot((querySnapshot) => {
            var docs = []
            querySnapshot.forEach((doc) =>
            {
                // console.log("Clients Data : ", doc.data())
                if(doc.exists)
                {
                    for(let x in doc.data())
                    {
                        docs.push(doc.data()[x])
                    }
                }
            })
            
            clients[1](docs)
            console.log("Clients : ", clients)

        })
    }
    const getUserData = () =>
    {
        db
        .collection('users')
        .onSnapshot((querySnapshot) => {
            var docs = []
            querySnapshot.forEach((doc) => {
                if(doc.exists)
                {
                    for(let x in doc.data())
                    {
                        docs.push(doc.data()[x])
                    }
                }
            })

            users[1](docs)
            console.log("UserList : ", users)
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

    React.useEffect(
        () => {
            checkAdmin()
            getClientsData()
            getUserData()
        },
        []
    )

    const getProfilePicture = () => {
        if (currentUser.currentUser.photoURL) {
            console.log("Photo avaliable")
        }
        console.log(currentUser.currentUser)
    }

    return (
        <div className="container-fluid " >

            {getProfilePicture()}

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
                                    {currentUser.currentUser.photoURL
                                        ? <Avatar alt="name" src={currentUser.currentUser.photoURL} />
                                        : <AccountCircle className={classes.icon} />
                                    }

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
                                    {isAdmin[0] ? <MenuItem onClick={userList}>User List</MenuItem> : null}
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

                            {
                                isAdmin[0]
                                    ?
                                    <div className="col-sm-6 col-md-4 col-lg-4">
                                        <Link to="/report" className="myLink" >
                                        <div className="box">
                                            <div className="our-services privacy">
                                                <div className="icon icon-query"> <SVG_Query className="" fill="white" style={{ height: "70%", width: "70%", color: "whitesmoke" }} /></div>
                                                <h4>QUERY</h4>
                                                <p>Client Report (Admin Only)</p>
                                            </div>
                                        </div> </Link>
                                    </div>
                                    : <div className="col-sm-6 col-md-4 col-lg-4">
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
                            }
                        </div>
                    <div className="row  mb-3 justify-content-center">
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <Link to="/payment" className="myLink" >
                            <div className="box">
                                <div className="our-services ssl">
                                    <div className="icon icon-payment " > <AttachMoneyOutlinedIcon className="" style={{ height: "70%", width: "70%", color: "whitesmoke" }} /> </div>
                                    <h4>Payment</h4>
                                    <p>Payment Information</p>
                                </div>
                            </div>
                            </Link>
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




        </div >

    )
}

export default Homepage2