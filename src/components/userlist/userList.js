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

const UserList = (props) => {

    const navigate = useNavigate();
    const currentUser = React.useContext(AuthContext)
    const [userList, setUserList] = React.useState([])

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
            getAllUsers()
        },
        []
    )



    return (

        <div className="container" >
            {/* {  userList.length !== 0 ? userList.map(
                (obj, ind) => {
                    console.log("Object : ", obj['personal']['email'])
                }
            ) : null} */}
    {console.log("histor : ", props) }

            <div className="logo-hover text-center mt-2 pt-2"><img src={zainlogo} height="13%" width="13%" alt="hjh" onClick={()=> navigate(-1)} /></div>

            <table className="table card-body mt-4 ">
                {/* <caption className="logo-hover text-center mt-2 pt-2"><img src={zainlogo} height="13%" width="13%" alt="hjh" /></caption> */}
                <tbody>
                    {userList.length !== 0 ? userList.map(
                        (obj, ind) => (
                            <tr className="table-hover1  mt-5 pt-5 shadow rounded" >

                        <td colSpan="4" className="pt-4 pl-5" >
                            <div style={{ display: 'flex' }} >
                                <Avatar atl="ss" src={obj['personal']['imageURI']} />
                                <span style={{ marginTop : '2%', marginLeft : '3%' }} > {obj['personal']['name']} </span>
                            </div>
                        </td>
                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn text-right btn-danger" >Approve</button> </td>
                        <td className="text-center  pt-3" colSpan="1"> <button className="btn btn-info" >Delete</button>  </td>
                    </tr>
                        )
                    ) : null}

                </tbody>
            </table>
        </div>
    )


}

export default UserList