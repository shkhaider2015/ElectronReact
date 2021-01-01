import React from "react";
import { getDate } from "../../utility/utils";



function Printconfirmation({ obj }) {

   

    


    return (
        <div>


            <div className="mt-5 container">

                <div className="row">


                    <div className="mt-5 col-12  heading">

                        <h2 className="mt-5 mb-5 rounded text-center bg-danger text-white p-2"><em>CONFIRMATION LETTER</em></h2>

                    </div>


                    <div className="mt-5 col-12">
                        <div className="mt-5 row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{fontSize: 12, opacity: 0.5 }} >Ref No. :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{fontSize: 12, opacity: 0.5 }} >76766877</span></div>
                            <div className="offset-1  col-2 pl-4 text-right "><span style={{fontSize: 12, opacity: 0.5 }} >Date :</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{fontSize: 12, opacity: 0.5 }} >{getDate()}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Mr./Mrs./Miss :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12,  fontWeight: 'bold'  }} >{obj['personal']['name']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >S/o, D/o, W/o :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12,  fontWeight: 'bold'  }} >{obj['personal']['fatherName']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >CNIC :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12,  fontWeight: 'bold'  }} >{obj['personal']['cnic']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5  ml-5 pl-5 offset-2 col-10">
                        <p>
                            With refrence to your application and ACCEPTANCE of terms and condition for
                        allotment of a Residential Plot no our subject <span className="text-danger">Mian Town</span>.
                        </p>
                        <p className="mt-5">
                            Hereby confirm that:
                        </p>

                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Phone Office :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12,  fontWeight: 'bold'  }} >{obj['personal']['phone']}</span></div>
                            <div className="offset-1 col-2 pl-5 text-center "><span style={{ fontSize: 12 }} >Plot:</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{ fontSize: 12,  fontWeight: 'bold'  }} >{obj['asset']['plotNumber']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Measurement :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12,  fontWeight: 'bold'  }} >{obj['asset']['measurement']}</span></div>
                            <div className="offset-1 col-2 pl-5 text-center "><span style={{ fontSize: 12 }} >Sq. Yds, Block:</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{ fontSize: 12,  fontWeight: 'bold'  }} >{obj['asset']['square']}, Block {obj['asset']['block']} </span></div>
                        </div>
                    </div>

                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Category:</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['category']}</span></div>
                            <div className="offset-1 col-2 pl-5 text-center "><span style={{ fontSize: 12 }} >Nature:</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['nature']}</span></div>
                        </div>
                    </div>


                    <div className="mt-5 col-12">
                        <div className="ml-2 row">
                            <div className="offset-1 col-2 text-center mt-2  p-1 ">Ordinary</div>
                            <div className="ml-5 col-2  text-center mt-2   p-1 ">Corner</div>
                            <div className="ml-5 pl-3 col-2  text-center mt-2   p-1 ">West Open</div>
                            <div className=" ml-5 pl-3 col-2  text-center mt-2   p-1 ">Road Facing</div>
                        </div>
                        <div className="row">
                            <div style={{ height: "30px", marginLeft: "10%" }} className=" border rounded shadow-sm col-2 text-center mt-2 p-1 "></div>
                            <div className="ml-5  col-2 border rounded shadow-sm  text-center mt-2 p-1 "></div>
                            <div className=" ml-5   col-2 border rounded shadow-smp text-center mt-2 p-1 "></div>
                            <div className=" ml-5  col-2 border rounded shadow-smp text-center mt-2 p-1 "></div>

                        </div>
                    </div>

                    <div className="mt-5 offset-1  col-11">
                        <p className="mt-4">
                            Have been allotted on the terms and conditions already accepted by you.
                        </p>


                    </div>

                

                
                    <footer className="mt-5 col-12 page-footer font-small blue">
                    <div className="mt-5 col-12">
                        <div className="mt-5 row">
                            <div style={{ borderBottom: "1px solid black" }} className="mt-5 offset-9 col-2 mb-2 text-left pl-4"></div>

                        </div>
                        <div className="row">
                            <div className="offset-9 col-2 text-center ">Sign. Stamp</div>

                        </div>
                    </div>
                    </footer>


                    <footer className="mt-3 col-12 page-footer font-small blue">
                    <div className="mt-3 col-12 ">
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


            <div  style={{ display : 'flex', flexDirection : 'column', bottom : 0, left : 0, position : 'fixed' }} >
                        <span style={{ fontSize : 8, color : 'black', opacity : '0.7' }} >Developed By <b>HESOGENS</b> Digital Service Provider</span>
                        <div style={{ display : 'flex', flexDirection : 'row', marginLeft : 'auto', marginRight : 'auto' }} >
                            <span style={{ fontSize : 8, color : 'black', opacity : '0.7' }} >www.hesogens.com&nbsp;|&nbsp;+92-312-2027770</span>
                        </div>
                </div>

        </div>

    )



}


export default Printconfirmation