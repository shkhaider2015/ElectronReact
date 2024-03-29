import { Avatar } from "@material-ui/core";
import React from "react";
import { ReactComponent as Client_Tempory_Profile } from '../../RawData/Create.svg';



function ApplicationForm({ obj, formNumber }) {

    return (
        <div >
{console.log("Application : ", obj)}

            <div className="container">

                <div className="row">


                    <div className="col-12 col-sm-12  heading">

                        <h3 className="mt-5 rounded text-center bg-danger text-white p-2"><em> { formNumber === 1?"Application Form":"Nomination Form" } </em></h3>

                    </div>
                    <div className="mt-2 col-12">
                        <div className="row ">
                            {/*                             
                            <div className="offset-1 border  col-1 pl-4 text-left "><span style={{ fontSize : 12, opacity : 0.7 }} >Ref No. :</span></div>
                            <div className="col-3 text-left border pl-0  border-bottom"><span style={{ fontSize : 12, opacity : 0.7 }} >76787868</span></div>
                            <div className="col-0 border " ></div>
                            <div className="offset-1  col-2 pr-0 border text-right "><span style={{ fontSize : 12, opacity : 0.7 }} >Date :</span></div>
                            <div className="col-2 text-left pl-0 border  border-bottom"><span style={{ fontSize : 12, opacity : 0.7 }} >12-7-2020</span></div>
                        */}
                            <div className="col-6 " >

                                <div style={{ display: 'flex', marginLeft: '20%' }} >
                                    <span style={{ fontSize: 12, opacity: 0.5 }} >Ref No.:</span>
                                    <span style={{ fontSize: 12, opacity: 0.5 }} >88777878</span>
                                </div>

                            </div>
                            <div className="col-6  " >

                                <div style={{ display: 'flex', width: '100%' }} >
                                    <span style={{ marginLeft: 'auto', marginRight: '0%', fontSize: 12, opacity: 0.5 }} >Date:</span>
                                    <div style={{ marginRight: '5%', fontSize: 12, opacity: 0.5 }} ><span>12-7-2020</span></div>
                                </div>

                            </div>
                        </div >
                    </div>


                    <div className="mt-3 col-8">

                        <div className="mt-3 col-12">
                            <div className="row">
                                <div className=" col-4 text-right "><span style={{ fontSize: 12 }} >Mr./Mrs./Miss :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontSize: 10, fontWeight: 'bold' }} >{obj['personal']['name']}</span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className="   col-4 text-right "><span style={{ fontSize: 12 }} >S/o, D/o, W/o :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontSize: 10, fontWeight: 'bold' }} > {obj['personal']['fatherName']} </span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className="   col-4 text-right "><span style={{ fontSize: 12 }} >CNIC :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontSize: 10, fontWeight: 'bold' }} > {obj['personal']['cnic']} </span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className="   col-4 text-right "><span style={{ fontSize: 12 }} >Adress :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontSize: 10, fontWeight: 'bold' }} > {obj['personal']['address']} </span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className="   col-4 text-right "><span style={{ fontSize: 12 }} >Phone Office :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontSize: 10, fontWeight: 'bold' }} > {obj['personal']['phone']} </span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className=" col-4 text-right "><span style={{ fontSize: 12 }} >Cell :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontSize: 10, fontWeight: 'bold' }} >{obj['personal']['cellPhone']}</span></div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-2  col-4 pic">
                        <div className="row">
                            <div className="col-5 ml-2 mt-1 ">
                                <Avatar alt="name" variant="rounded" src={obj['personal']['imageURI']} style={{ width: '150px', height: '150px', borderColor : 'black' }} />
                            </div>
                        </div>
                    </div>



                </div>


            </div>




        </div>

    )



}


export default ApplicationForm