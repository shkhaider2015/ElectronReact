import React from "react";
import './reportCSS.css'
import { Avatar, IconButton } from "@material-ui/core";
import { KeyboardBackspace } from '@material-ui/icons';
import zainlogo from '../../RawData/mainassociates_icon.png'
import { db } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { UserListContext } from "../../context/dataContext";
import UserProfile from "../profile/userProfile";
import { Offline } from "react-detect-offline";

const UserList = (props) => {

    const navigate = useNavigate();
    const currentUser = React.useContext(AuthContext)
    const users = React.useContext(UserListContext)

    const [open, setOpen] = React.useState(false)
    const [propsObject, setPropsObject] = React.useState(null)

    React.useEffect(
        () => {
            // getAllUsers()
        },
        []
    )

    const approve = (obj) => {
        var date = Date.now();
        console.log("Clicked ", obj)
        db.collection('users')
            .doc(obj['id'])
            .update({
                "personal.isAccepted": true,
                "personal.acceptedAt": date,
            })
            .then((e) => console.log("Update : ", e))
            .catch((e) => console.error("Error : ", e))
    }

    const deleteUser = (obj) => {

        if(!window.confirm("Are you sure you want to delete this User ?"))
        {
            return;
        }

        db.collection('users')
            .doc(obj['id'])
            .update({
                "personal.isDeleted": true,
                "personal.isAccepted": false
            })
            .then(() => console.log("user deleted succesfully"))
            .catch((e) => console.error("Error deleteding user : ", e))
    }

    const handleOpen = (obj) => {
        console.log("Tr Clicked ....")
        setOpen(true)
        setPropsObject(obj)
    }
    const handleClose = () => {
        setOpen(false)
    }


    return (

        <div>
            <div className="logo-hover d-flex flex-row justify-content-between text-center mt-2 pt-2"  >
                <div style={{ marginLeft: '2%' }} >

                    <IconButton
                        color="inherit"
                        onClick={() => navigate(-1)}
                    >
                        <KeyboardBackspace fontSize="large" color="primary" />
                    </IconButton>
                </div>
                <img src={zainlogo} height="13%" width="13%" alt="hjh" />
                <span>  </span>
            </div>
            <div className="container" >


                <div style={{
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'red',
                    textAlign: 'center',
                    color: 'white'
                }} >
                    <Offline >Check Your Internet Connection</Offline>
                </div>

                {/* <div className="logo-hover d-flex flex-row justify-content-between text-center mt-2 pt-2" style={{ border : '1px solid black' }} >
                <div  >

                    <IconButton
                        color="inherit"
                        onClick={() => navigate(-1)}
                    >
                        <KeyboardBackspace fontSize="large" color="primary" />
                    </IconButton>
                </div>
                <img src={zainlogo} height="13%" width="13%" alt="hjh" />
                <span></span>
            </div> */}

                {
                    open
                        ? <UserProfile obj={propsObject} handleClose={handleClose} open={open} />
                        :
                        <table className="table card-body mt-5 ">

                            {/* <caption className="logo-hover text-center mt-2 pt-2"><img src={zainlogo} height="13%" width="13%" alt="hjh" /></caption> */}
                            <tbody>
                                {users[0].length > 1 ? users[0].map(
                                    (obj, ind) => (
                                        obj['isDeleted'] || obj['id'] === currentUser.currentUser.uid
                                            ? null
                                            : <tr className="table-hover1  mt-5 pt-5 shadow rounded" key={ind} >
                                                <td colSpan="4" className="pt-4 pl-5" onClick={() => handleOpen(obj)} >
                                                    <div style={{ display: 'flex' }} >
                                                        <Avatar atl="ss" src={obj['imageURI']} />
                                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '3%' }}>
                                                            <span style={{ fontWeight: 'bold' }} > {obj['name']} </span>
                                                            <span style={{ opacity: 0.8 }} > {obj['email']} </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="pl-5 pt-3 text-right" colSpan="1">
                                                    {
                                                        obj['isAccepted']
                                                            ? <button className="btn text-right btn-succes disable " disabled >Approved</button>
                                                            : <button className="btn text-right btn-info" onClick={() => approve(obj)} >Approve</button>
                                                    }

                                                </td>
                                                <td className="text-center  pt-3" colSpan="1">
                                                    <button className="btn btn-danger" onClick={() => deleteUser(obj)} >Delete</button>
                                                </td>
                                            </tr>
                                    )
                                ) : <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }} >
                                        <h4 style={{ paddingLeft : '8%' }} >Empty List</h4>
                                    </div>
                                }

                            </tbody>
                        </table>


                }


            </div>
        
        </div>
    )


}

export default UserList