import React from "react";
import './reportCSS.css'
import SearchBar from '../report/searchBar'
import { Avatar, Button, Dialog } from "@material-ui/core";
import { Edit } from '@material-ui/icons';
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

    const [userList, setUserList] = React.useState([])
    const [open, setOpen] = React.useState(false)
    const [propsObject, setPropsObject] = React.useState(null)

    const getAllUsers = () => {
        db.collection('users').get()
            .then((ref) => {
                console.log("All users", ref.docs)
                var usersArray = []
                for (let x in ref.docs) {
                    console.log("Single : ", ref.docs[x])
                    if (ref.docs[x].exists) {
                        console.log(ref.docs[x].data())
                        usersArray.push(ref.docs[x].data())
                    }
                }
                setUserList(usersArray)
            })
            .catch(e => console.log(e))
    }

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

            <div className="logo-hover text-center mt-2 pt-2"><img src={zainlogo} height="13%" width="13%" alt="hjh" onClick={() => navigate(-1)} /></div>

            {
                open
                ? <UserProfile obj={propsObject} handleClose={handleClose} open={open} />
                :  
                <table className="table card-body mt-4 ">
                    {/* <caption className="logo-hover text-center mt-2 pt-2"><img src={zainlogo} height="13%" width="13%" alt="hjh" /></caption> */}
                    <tbody>
                        {users[0].length !== 0 ? users[0].map(
                            (obj, ind) => (
                                obj['isDeleted']
                                ? null
                                : <tr className="table-hover1  mt-5 pt-5 shadow rounded" key={ind}  >
    
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