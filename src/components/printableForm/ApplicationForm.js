import { Avatar } from "@material-ui/core";
import React from "react";
import { getDate, getReferenceNumber } from "../../utility/utils";



function ApplicationForm({ obj, formNumber }) {

    return (
        <div style={{ marginBottom: '2%' }} >


            <div className="container">

                <div className="row">


                    <div className="col-12 col-sm-12  heading">

                        <h3 className="mt-5 rounded text-center bg-danger text-white p-2"><span style={{ fontSize: 44, fontWeight: 'bold' }} > {formNumber === 1 ? "Application Form" : "Nomination Form"} </span></h3>

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
                                    <span style={{ fontSize: 12, opacity: 0.7 }} >Ref No.:</span>
                                    <span style={{ fontSize: 12, opacity: 0.7 }} > {getReferenceNumber(obj['personal']['cnic'])} </span>
                                </div>

                            </div>
                            <div className="col-6  " >

                                <div style={{ display: 'flex', width: '100%' }} >
                                    <span style={{ marginLeft: 'auto', marginRight: '0%', fontSize: 12, opacity: 0.7 }} >Date:</span>
                                    <div style={{ marginRight: '5%', fontSize: 12, opacity: 0.7 }} ><span>{getDate()}</span></div>
                                </div>

                            </div>
                        </div >
                    </div>


                    <div className="mt-3 col-8">

                        <div className="mt-3 col-12">
                            <div className="row">
                                <div className=" col-4 text-right "><span style={{ fontSize: 20 }} >Mr./Mrs./Miss :</span></div>
                                <div className="col-4 ml-2 text-left pl-4 w-100  border-bottom"><span style={{ fontWeight: 'bold' }} >{obj['personal']['name']}</span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className="   col-4 text-right "><span style={{ fontSize: 20 }} >S/o, D/o, W/o :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontWeight: 'bold' }} > {obj['personal']['fatherName']} </span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className="   col-4 text-right "><span style={{ fontSize: 20 }} >CNIC :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontWeight: 'bold' }} > {obj['personal']['cnic']} </span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className="   col-4 text-right "><span style={{ fontSize: 20 }} >Cell Phone :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontWeight: 'bold' }} > {obj['personal']['cellPhone']} </span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className="   col-4 text-right "><span style={{ fontSize: 20 }} >Phone Office :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontWeight: 'bold' }} > {obj['personal']['phone']} </span></div>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="row">
                                <div className=" col-4 text-right "><span style={{ fontSize: 20 }} >Address :</span></div>
                                <div className="col-4 ml-2 text-left pl-4  border-bottom"><span style={{ fontWeight: 'bold' }} >{obj['personal']['address']}</span></div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-2  col-4 pic">
                        <div className="row">
                            <div className="col-5 ml-2 mt-1 ">
                                <Avatar alt="name" variant="rounded" src={obj['personal']['imageURI']} style={{ width: '150px', height: '150px', borderColor: 'black', marginTop: 'auto', marginBottom: 'auto' }} />
                            </div>
                        </div>
                    </div>



                </div>


            </div>



            <div style={{ display: 'flex', flexDirection: 'column', bottom: '50px', left: '50px', position: 'fixed', textAlign : 'center' }} >
                <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >Powered By <b>HESOGENS</b> </span>
                <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >Digital Service Provider</span>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }} >
                    <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >www.hesogens.com&nbsp;|&nbsp;+92-312-2027770</span>
                </div>
            </div>
        </div>

    )



}


export default ApplicationForm