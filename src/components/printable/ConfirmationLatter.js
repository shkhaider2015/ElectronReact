import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel } from "@material-ui/core";
import React ,{useState} from "react";



function Printconfirmation({ obj }) {

    const [RefNo , func_RefNo] = useState("RefNo")
    const [Date , func_Date ]   = useState("Date")


    return (
        <div>


            <div className="container">

                <div className="row">


                    <div className="col-12  heading">

                        <h3 className="mt-5 rounded text-center bg-danger text-white p-2"><em>CONFIRMATION LETTER</em></h3>

                    </div>


                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">Ref No. :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{RefNo}</div>
                            <div className="offset-1  col-2 pl-4 text-right ">Date :</div>
                            <div className="col-2 text-left pl-4  border-bottom">{Date}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">Mr./Mrs./Miss :</div>
                            <div className="col-3 text-left pl-4  border-bottom"><span> {obj[0]['name']} </span></div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">S/o, D/o, W/o :</div>
                            <div className="col-3 text-left pl-4  border-bottom"><span> {obj[0]['fathername']} </span></div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">CNIC :</div>
                            <div className="col-3 text-left pl-4  border-bottom"><span> {obj[0]['cnic']} </span></div>
                        </div>
                    </div>
                    <div className="mt-4  ml-5  col-12">
                        <p>
                           With refrence to your application and ACCEPTANCE of terms and condition for 
                        allotment of a Residential Plot no our subject <span className="text-danger">Mian Town</span>. 
                        </p>
                        <p className="">
                        Hereby confirm that: 
                        </p>
                    
                    </div>
                    <div className="mt-2 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">Phone Office :</div>
                            <div className="col-3 text-left pl-4  border-bottom"><span> {obj[0]['phone']} </span></div>
                            <div className="offset-1 col-2 pl-5 text-center ">Plot:</div>
                            <div className="col-2 text-left pl-4  border-bottom"><span> {obj[1]['plotName']} </span></div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">Measurement :</div>
                            <div className="col-3 text-left pl-4  border-bottom"><span> {obj[1]['measurement']} </span></div>
                            <div className="offset-1 col-2 pl-5 text-center ">Sq. Yds, Block:</div>
                          <div className="col-2 text-left pl-4  border-bottom"><span> {obj[1]['square']}, {obj[1]['block']} </span></div>
                        </div>
                    </div>

                    <div className="mt-3 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">Category:</div>
                            <div className="col-3 text-left pl-4  border-bottom"><span> {obj[1]['category']} </span></div>
                            <div className="offset-1 col-2 pl-5 text-center ">Nature:</div>
                            <div className="col-2 text-left pl-4  border-bottom"><span> {obj[1]['nature']} </span></div>
                        </div>
                    </div>
                   
                   
                    <div className="mt-4 col-12">
                        <div className="row">
                        <div className="ml-5 col-2 text-center mt-2  p-1 ">Ordinary</div>
                        <div className="offset-1 col-2  text-center mt-2   p-1 ">Corner</div>
                        <div className=" offset-1 col-2  text-center mt-2   p-1 ">West Open</div>
                        <div className=" offset-1 col-2  text-center mt-2   p-1 ">Road Facing</div>
                        </div>
                        <div className="row">
                        <div style={{height:"30px"}} className="ml-5 border rounded shadow-sm col-2 text-center mt-2 p-1 "><span>  </span></div>
                        <div className="offset-1 col-2 border rounded shadow-sm  text-center mt-2 p-1 "><span>  </span></div>
                        <div className=" offset-1 col-2 border rounded shadow-smp text-center mt-2 p-1 "><span>  </span></div>
                        <div className=" offset-1 col-2 border rounded shadow-smp text-center mt-2 p-1 "><span>  </span></div>
                            
                        </div>
                        </div>

                        <div className="mt-5  ml-5  col-12">
                        <p>
                        Have been allotted on the terms and conditions already accepted by you. 
                        </p>
                      
                    
                    </div>

                    <div className="mt-5 col-12">
                        <div className="mt-4 row">
                        <div style={{borderBottom:"1px solid black"}} className="offset-9 col-2 mb-2 text-left pl-4"></div>
                       
                        </div>
                        <div className="row">
                        <div className="offset-9 col-2 text-center ">Sign. Stamp</div>
                       
                        </div>
                        </div>



                        <div className="mt-3 col-12 ">
                        <div className="row">
                        <div className=" col-2 text-center ">CALL US:</div>
                       
                        </div>
                        <div className="row">
                        <div className="col-2 text-center ">+92-</div>
                       
                        </div>
                        </div>





                </div>


            </div>




        </div>

    )



}


export default Printconfirmation