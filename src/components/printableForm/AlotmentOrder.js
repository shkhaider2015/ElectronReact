import React from "react";
import { getDate, getReferenceNumber } from "../../utility/utils";



function PrintAllotmentOrder({ obj, print }) {



    return (
        <div>


            <div className="mt-5 container">

                <div className="mt-5 row">


                    <div className="mt-5 col-12  heading">

                        <h3 className="mt-5 mb-5 rounded text-center bg-danger text-white p-2"><em>ALLOTMENT ORDER</em></h3>

                    </div>
                    <div className="mt-5 col-12">
                        <div className="mt-5 row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12, opacity: 0.5 }} >Ref No.:</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{ fontSize: 12, opacity: 0.5 }} > {getReferenceNumber(obj['personal']['cnic'])} </span></div>
                            <div className="offset-2  col-2 pl-4 text-right "><span style={{ fontSize: 12, opacity: 0.5 }} >Date:</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"> <span style={{ fontSize: 12, opacity: 0.5 }} >{getDate()}</span> </div>
                        </div>
                    </div>

                    <div className="mt-5  col-12">
                        <div className="mt-2 row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Mr./Mrs./Miss :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['personal']['name']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >S/o, D/o, W/o :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['personal']['fatherName']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >CNIC :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['personal']['cnic']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Alloted Plot No. :</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['plotName']}</span></div>
                            <div className="offset-2  col-2 pl-4 text-right "><span style={{ fontSize: 12 }} >Size :</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['square']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Category :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['category']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5  ml-5  col-12">
                        <p className="mt-5 ml-5 ">
                            <span className="text-danger"><strong> Mian Town </strong></span> allotted this Residential/Commercial
                       plot on the terms and conditions mentioned in the application form.
                        </p>
                    </div>





                    <footer style={{ marginTop: "20%" }} className="col-12 page-footer font-small blue">

                        <div className="mt-5 col-12">
                            <div className="mt-5 row justify-content-around">
                                <div style={{ borderBottom: "1px solid black" }} className="col-2 col-2 mb-2 text-left pl-4"></div>
                                <div style={{ borderBottom: "1px solid black" }} className=" col-2 mb-2 text-left pl-4"></div>

                            </div>
                            <div className="row justify-content-around">
                                <div className=" col-2 text-center ">  Allottee </div>
                                <div className="  col-2 text-center ">For <span className="text-danger"><strong>Mian Town</strong></span></div>


                            </div>
                        </div>
                    </footer>


                    <footer className="mt-5 col-12 page-footer font-small blue">
                        <div className="mt-4 col-12 ">
                            <div className="row">
                                <div className=" col-2 text-center ">CALL US:</div>

                            </div>
                            <div className="row">
                                <div className="col-2 text-center ">+92-</div>

                            </div>
                        </div>
                    </footer>




                </div>


            </div>

            {
                print
                    ? <div style={{ display: 'flex', flexDirection: 'column', bottom: '50px', width: '100%', position: 'fixed', textAlign: 'center' }} >
                        <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >Powered By <b>HESOGENS</b> </span>
                        <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >Digital Service Provider</span>
                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }} >
                            <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >www.hesogens.com&nbsp;|&nbsp;+92-312-2027770</span>
                        </div>
                    </div>
                    : null
            }


        </div>

    )



}


export default PrintAllotmentOrder