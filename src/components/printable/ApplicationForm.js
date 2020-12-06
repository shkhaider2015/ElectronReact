import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel } from "@material-ui/core";
import React ,{useState} from "react";
import { ReactComponent as Client_Tempory_Profile } from '../RawData/Create.svg';



function ApplicationForm() {
    const [RefNo , func_RefNo] = useState("RefNo")
    const [Date , func_Date ]   = useState("Date")
    const [Mr_Mrs_Miss  , func_Mr_Mrs_Miss] = useState("Mr_Mrs_Miss")
    const [So_Do_Wo  , func_So_Do_Wo] = useState("So_Do_Wo")
    const [CNIC  , func_CNIC] = useState("CNIC")
    const [Adress  , func_Adress] = useState("Adress")
    const [Phone_Office  , func_Phone_Office] = useState("Phone_Office")
    const [Cell  , func_Cell] = useState("Cell")  

    return (
        <div>


            <div className="container">

                <div className="row">


                    <div className="col-12  heading">

                        <h3 className="mt-5 rounded text-center bg-danger text-white p-2"><em>APPLICATION FORM</em></h3>

                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">Ref No. :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{RefNo}</div>
                            <div className="offset-1  col-2 pl-4 text-right ">Date :</div>
                            <div className="col-2 text-left pl-4  border-bottom">{Date}</div>
                        </div>
                    </div>

                 
                      <div className="mt-3 col-8">

                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className=" col-4 text-right ">Mr./Mrs./Miss :</div>
                            <div className="col-4 ml-5 text-left pl-4  border-bottom">{Mr_Mrs_Miss}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="   col-4 text-right ">S/o, D/o, W/o :</div>
                            <div className="col-4 ml-5 text-left pl-4  border-bottom">{So_Do_Wo}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="   col-4 text-right ">CNIC :</div>
                            <div className="col-4 ml-5 text-left pl-4  border-bottom">{CNIC}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="   col-4 text-right ">Adress :</div>
                            <div className="col-4 ml-5 text-left pl-4  border-bottom">{Adress}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="   col-4 text-right ">Phone Office :</div>
                            <div className="col-4 ml-5 text-left pl-4  border-bottom">{Phone_Office}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className=" col-4 text-right ">Cell :</div>
                            <div className="col-4 ml-5 text-left pl-4  border-bottom">{Cell}</div>
                        </div>
                    </div>

                    </div>

             <div className="mt-4 col-4 pic">
                        <div className="mt-5 ml-2 row">
                            <div className="col-5 ml-5 border-pic border rounded shadow-sm">
                             <Client_Tempory_Profile height="80%" className="pt-2 pb-2 pl-1" style={{ margin: "10%" ,padding:0  }} />
                            </div>
                        </div>
                    </div>



                </div>


            </div>




        </div>

    )



}


export default ApplicationForm