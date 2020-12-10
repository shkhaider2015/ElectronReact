import React from "react";
import './reportCSS.css'
import SearchBar from '../report/searchBar'
import { ReactComponent as Client_Tempory_Profile } from '../../RawData/Create.svg';
import { Avatar } from "@material-ui/core";

import zainlogo from '../../RawData/mainassociates_icon.png'

import { db } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";
import { useCollection } from 'react-firebase-hooks/firestore';



const Reports = () => {

    const currentUser = React.useContext(AuthContext)
    const [users, setUsers] = React.useState([])

    React.useEffect(
        () => {
            // console.log("User is : ", currentUser.currentUser.email)
            const getData = async () => {
                // var dd = db.doc(`Clients/${currentUser.currentUser.email}`);
                var docRef = db.collection("clients").doc("ShakeelHaidershk");

                await docRef.get().then(function (doc) {
                    if (doc.exists) {
                        console.log(doc.data())
                        for (let x in doc.data()) {
                            setUsers([doc.data()[x]])
                        }

                    }
                }).catch(function (error) {
                    console.log("Error getting document:", error);
                });

            }
            getData()
        },
        []
    )

    console.log("common : ", users)



    return (

        <div>
            <div className="container-fluid">
                <div className="row ">

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
                                users.map((singleUser, index) => (
                                    singleUser.map(
                                        (obj, ind) => {
                                            if(ind === 0)
                                            {
                                                return(<div key={index} className="mt-2 pb-1 pb-1 row rounded shadow-sm clinet-hover">

                                                <div className="m-2 col-3 client-pic">
                                                <Avatar alt={obj['name']} src={obj['imageURI']} style={{ height : '40px', width : '40px', margin : '15%' }} />
                
                                                </div>
                                                <div className="col-8 mt-3 pt-1 client-Name">
                                                    { obj['name'] }
                                                 </div>
                
                                            </div>)
                                            }
                                            else
                                            {
                                                return ""
                                            }
                                        }
                                    )
                                ))
                            }
                            

                            
                            
                            


                            


                            


                           
                        </div>
                    </div>
                    <div className="col-9  shadow-sm h-100 ">
                        <div className="row justify-content-center">
                            <div className="mt-1 ml-1   shadow-sm card table-responsive  offset-1 col-11">
                                <div className=" mt-2 pt-2 col-12 ">
                                    <div className="row d-flex align-items-baseline mb-3">
                                        <div className="col-3 pb-1 ">

                                            <div className="row">
                                                <div className=" col-4  border rounded-circle client-pic">
                                                    <Client_Tempory_Profile height="70%" style={{ margin: "15%" }} />

                                                </div>
                                                <div className="col-7 mt-3 pt-1 client-Name">
                                                    Sohail Khan
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

                                                <td colSpan="4" className="pt-4 pl-5" >Confirmation Letter</td>
                                                <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn text-right btn-danger">Print</button></td>
                                                <td className="text-center  pt-3" colSpan="1"> <button className="btn btn-info">Preview</button></td>
                                            </tr>
                                            <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                <td colSpan="4" className="pt-4 pl-5 " > Possession Cirtificate</td>
                                                <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info">Preview</button></td>
                                            </tr>
                                            <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                <td colSpan="4" className="pt-4 pl-5 " >Allotment Order</td>
                                                <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info">Preview</button></td>
                                            </tr>
                                            <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                <td colSpan="4" className="pt-4 pl-5 " >  Nomination Form</td>
                                                <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info">Preview</button></td>
                                            </tr>
                                            <tr className="mt-5 pt-5 table-hover1 shadow rounded" >

                                                <td colSpan="4" className="pt-4 pl-5 " >  Terms and Condition</td>
                                                <td className="pl-5  pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info">Preview</button></td>
                                            </tr>
                                            <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                <td colSpan="4" className="pt-4 pl-5 " >  NOC for Construction</td>
                                                <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info">Preview</button></td>
                                            </tr>
                                            <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                <td colSpan="4" className="pt-4 pl-5 "> Site Plan</td>
                                                <td className="pl-5 pt-3 text-right" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info">Preview</button></td>
                                            </tr>
                                            <tr className="mt-5 pt-5 table-hover1 shadow rounded" >
                                                <td colSpan="4" className="pt-4 pl-5 "> Client Card</td>
                                                <td className="pl-5 text-right pt-3" colSpan="1"> <button className="btn btn-danger">Print</button></td>
                                                <td className="text-center pt-3" colSpan="1"> <button className="btn btn-info">Preview</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>
            </div>
        </div>
    )


}

export default Reports