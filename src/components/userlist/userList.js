import React from "react";
import './reportCSS.css'
import SearchBar from '../report/searchBar'
import { Avatar, Button, Dialog, IconButton } from "@material-ui/core";
import { Edit, KeyboardBackspace } from '@material-ui/icons';
import zainlogo from '../../RawData/mainassociates_icon.png'
import { db } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import DialogueBox from "../printable/DialogueBox";
import { UserListContext } from "../../context/dataContext";
import  UserProfile from "../profile/userProfile";

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
                "personal.isAccepted" : true,
                "personal.acceptedAt" : date,
            })
            .then((e) => console.log("Update : ", e))
            .catch((e) => console.error("Error : ", e))
    }

    const deleteUser = (obj) => {
        db.collection('users')
        .doc(obj['id'])
        .update({
            "personal.isDeleted" : true
        })
        .then(() => console.log("user deleted succesfully"))
        .catch((e) => console.error("Error deleteding user : ", e))
    }

    const handleOpen = (obj) =>
    {
        console.log("Tr Clicked ....")
        setOpen(true)
        setPropsObject(obj)
    }
    const handleClose = () =>
    {
        setOpen(false)
    }


    return (

        <div className="container" >

            <div className="logo-hover d-flex flex-row justify-content-between text-center mt-2 pt-2">
                <div style={{ left : 0 }} > 
                
                    <IconButton
                     color="inherit"
                     onClick={() => navigate(-1)}
                    >
                        <KeyboardBackspace fontSize="large" color="primary" />
                    </IconButton>
                 </div>
                <img className src={zainlogo} height="13%" width="13%" alt="hjh" />
                <span></span>
                </div>

            {
                open
                ? <UserProfile obj={propsObject} handleClose={handleClose} open={open} />
                :  
                <table className="table card-body mt-4 ">
                    {/* <caption className="logo-hover text-center mt-2 pt-2"><img src={zainlogo} height="13%" width="13%" alt="hjh" /></caption> */}
                    <tbody>
                        {users[0].length !== 0 ? users[0].map(
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
                        ) : null}
    
                    </tbody>
                </table>
            
            
            }
           
        
        </div>
    )


}

export default UserList