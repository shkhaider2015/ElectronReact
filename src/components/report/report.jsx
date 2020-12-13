import React from "react";
import './reportCSS.css'
import SearchBar from '../report/searchBar'
import { Avatar, Button, Dialog } from "@material-ui/core";
import { Edit } from '@material-ui/icons';
import zainlogo from '../../RawData/mainassociates_icon.png'
import { db } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";
import Sidecomponent from "./sidecomponent";
import { Link, useNavigate } from "react-router-dom";
import DialogueBox from "../printable/DialogueBox";


const Reports = () => {

    // const dataArrays = []
    // var initialLoad = 0;
 const navigate = useNavigate();
    const currentUser = React.useContext(AuthContext)
    const [users, setUsers] = React.useState([]);
    const [userKeys, setUserKeys] = React.useState([]);
    const [Dialogue, setDialogue] = React.useState(false);
    const [clicked, setClicked] = React.useState(0);
    const [formNumber, setFormNumber] = React.useState(1);
    const [selectedUserData, setSelectedUserData] = React.useState(null);



    const getCollection = async () => {

        const docRef = db.collection("clients");
        var dataArray = []

        docRef.get().then((querySnapshot) => {

            console.log("GetCollection : ", querySnapshot)
            querySnapshot.forEach((doc) => {
                if (doc.exists) {
                    console.log("getCollection : snapshot : doc.data() ", doc.data())
                    for (let x in doc.data()) {
                        dataArray.push(doc.data()[x])
                    }

                    setUsers(dataArray);
                    setUserKeys(Object.keys(doc.data()))
                }
            })
        }).catch((e) => console.error("getCollection", e))

    }

    const getData = async () => {
        // var dd = db.doc(`Clients/${currentUser.currentUser.email}`);
        let route = currentUser.currentUser.displayName.replace(/\s/g, "") + currentUser.currentUser.email.slice(0, 3)
        var docRef = db.collection("clients").doc(route);
        var dataArrays = []

        await docRef.get().then(function (doc) {
            if (doc.exists) {
                // console.log("OutSide", doc.data())


                for (let x in doc.data()) {
                    // console.log("In Function : ", doc.data()[x])
                    // setUsers([doc.data()[x]])
                    dataArrays.push(doc.data()[x])
                }
                // console.log("CVhecking : ", dataArrays)
                setUsers(dataArrays)
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        // setUsers(dataArrays)
    }

    React.useEffect(
        () => {
            getCollection()
        },
        []
    )

    const muClick = (e) => {
        setClicked(e)
    }

    const preview = (num) => {
        setFormNumber(num)
        setDialogue(true)
    }

    const handleEdit = () => {
        navigate('/edit', { state : { obj : users, index : clicked, key : userKeys[clicked] } } )
    }



    return (

        <div>
            {
                Dialogue
                    ? <DialogueBox setDialogue={setDialogue} formNumber={formNumber} clicked={clicked} users={users} />
                    :
                    <div className="container-fluid">
                        <div className="row ">
                            {console.log("Users state : ", users)}

                            <div className="col-3 shadow  searchBar  border-right pb-4 ">
                                <div className="col-12 mt-2 ml-5">
                                    <SearchBar />
                                </div>
                                <div className="mt-2 mb-2 col-12   client-list">


                                    {/* <div className="mt-2 pb-1 pb-1 row rounded shadow-sm clinet-hover">
    
                                    <div className="m-2 col-3     rounded-circle client-pic">
                                        <Client_Tempory_Profile height="70%" style={{ margin: "15%" }} />
                                        
    
                                    </div>
                                    <div className="col-8 mt-4 pt-1 client-Name">
                                        Sohail Khan
                                     </div>
    
                                </div> */}

                                    {
                                        // users.map((singleUser, index) => (
                                        //     singleUser.map(
                                        //         (obj, ind) => {
                                        //             // console.log(`SingleUser is ${singleUser}`)
                                        //             if(ind === 0)
                                        //             {
                                        //                 return(<div key={index} onClick={setSelectedItem()} className="mt-2 pb-1 pb-1 row rounded shadow-sm clinet-hover">

                                        //                 <div className="m-2 col-3 client-pic">
                                        //                 <Avatar alt={obj['name']} src={obj['imageURI']} style={{ height : '40px', width : '40px', margin : '15%' }} />

                                        //                 </div>
                                        //                 <div className="col-8 mt-4 pt-1 client-Name">
                                        //                     <h5>{ obj['name'] }</h5>
                                        //                  </div>

                                        //             </div>)
                                        //             }
                                        //             else
                                        //             {
                                        //                 return null
                                        //             }
                                        //         }
                                        //     )
                                        // ))
                                    }

                                    {
                                        users.map(
                                            (object, index) => (
                                                object.map(
                                                    (obj, ind) => (
                                                        ind === 0
                                                            ? <div key={index} onClick={e => muClick(index)} > <Sidecomponent obj={obj} checked={[index, clicked]} /> </div>
                                                            : console.log("some")
                                                    )
                                                )
                                            )
                                        )

                                    }

                                </div>
                            </div>
                            <div className="col-9 shadow-sm h-100 ">
                                <div className="row justify-content-center">
                                    <div className="mt-1 ml-1 shadow-sm card table-responsive offset-1 col-11">
                                        <div className=" mt-2 pt-2 col-12 ">
                                            <div className="row d-flex align-items-baseline mb-3">
                                                <div className="col-3 pb-1 ">

                                                    <div className="row">
                                                        <div className="col-12  ">

                                                            {/* <Client_Tempory_Profile height="70%" style={{ margin: "15%" }} /> */}
                                                            {
                                                                users.map(
                                                                    (object, index) => (
                                                                        clicked === index
                                                                            ? object.map(
                                                                                (obj, ind) => (
                                                                                    ind === 0
                                                                                        ? <div key={index} className="row " >
                                                                                            <div className=" col-8" >
                                                                                                <Avatar alt={obj['name']} src={obj['imageURI']} style={{ height: '60px', width: '60px', marginLeft: '15%', marginRight: 'auto' }} />

                                                                                                <span style={{ marginLeft: '3%', fontSize: '12' }} > {obj['name']} </span>
                                                                                            </div>
                                                                                            <div className="col-4 " >
                                                                                                <Button
                                                                                                className="mt-3 ml-0"
                                                                                                variant="contained"
                                                                                                color="primary"
                                                                                                startIcon={<Edit />}
                                                                                                onClick={handleEdit}
                                                                                                >
                                                                                                    Edit
                                                                                                </Button>
                                                                                            </div>

                                                                                        </div>
                                                                                        : null
                                                                                )
                                                                            )
                                                                            : null
                                                                    )
                                                                )
                                                            }

                                                        </div>

                                                    </div>
                                                </div>
                                                <h3 className="col-6  text-center ">Client Forms</h3>
                                                <h5 className="col-3 text-right">Created at 12-12-12</h5>
                                            </div>

                                            <table className="table card-body table-striped">
                                                <caption className="logo-hover text-center mt-2 pb-0 pt-2"><img src={zainlogo} height="13%" width="13%" alt="" /></caption>
                                                <tbody>
                                                    <tr className="table-hover1  mt-5 pt-5 shadow rounded" >

                                                        <td colSpan="4" className="pt-4 pl-5" >Application Form</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn text-right btn-danger">Print</button></td>
                                                        <td className="text-center  pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(1)} >Preview</button>  </td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 " > Nomination Form</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(2)} >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 " >Confirmation Letter</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(3)} >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 " >Site Plan</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(4)} >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >

                                                        <td colSpan="4" className="pt-4 pl-5 " >  Terms and Condition</td>
                                                        <td className="pl-5  pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(5)}  >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 " >Possesion Certificate</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(6)} >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 "> Alotment Order</td>
                                                        <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(7)} >Preview</button></td>
                                                    </tr>
                                                    <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                        <td colSpan="4" className="pt-4 pl-5 "> Transfer Form</td>
                                                        <td className="pl-5 text-right pt-3" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                        <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info" onClick={() => preview(8)} >Preview</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>





                            </div>

                        </div>
                    </div>

            }

        </div>
    )


}

export default Reports