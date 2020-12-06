import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel } from "@material-ui/core";
import React ,{useState} from "react";
import { ReactComponent as Client_Tempory_Profile } from '../RawData/Create.svg';



function PrintPossessionCertificate() {

    const [RefNo , func_RefNo] = useState("RefNo")
    const [Date , func_Date ]   = useState("Date")
    const [Mr_Mrs_Miss  , func_Mr_Mrs_Miss] = useState("Mr_Mrs_Miss")
    const [So_Do_Wo  , func_So_Do_Wo] = useState("So_Do_Wo")
    const [CNIC  , func_CNIC] = useState("CNIC")
    const [PlotNo  , func_PlotNo] = useState("PlotNo")
    const [Measurement  , func_Measurement] = useState("Measurement")
    const [SqYds  , func_SqYds] = useState("SqYds")
    const [Category  , func_Category] = useState("Category")
    const [Nature  , func_Nature] = useState("Nature")
    const [Adress  , func_Adress] = useState("Adress")



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
                            <div className="col-2 text-left pl-4  border-bottom">{RefNo}</div>
                            <div className="offset-3  col-2 pl-4 text-right ">Date :</div>
                            <div className="col-1 text-left pl-4  border-bottom">{Date}</div>
                        </div>
                    </div>
                    <div className="mt-4  ml-5  col-12">
                        <p>
                        As per order physical possession of Plot situated at <span className="text-danger">Mian Town</span>. 
                        </p>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">Plot :</div>
                            <div className="col-1 text-left pl-4  border-bottom">{PlotNo}</div>
                            <div className="col-2 pl-4 text-right ">Measurement :</div>
                            <div className="col-1 text-left pl-4  border-bottom">{Measurement}</div>
                            <div className="offset-1 col-2 pl-5 text-left ">Sq. Yds, Block:</div>
                          <div className="col-1 text-left pl-4  border-bottom">{SqYds}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">Category:</div>
                            <div className="col-3 text-left pl-4  border-bottom">{Category}</div>
                            <div className="col-2 pl-5 text-center ">Nature:</div>
                            <div className="col-2 text-left pl-4  border-bottom">{Nature}</div>
                        </div>
                    </div>
                   
                    <div className="mt-4  ml-5  col-12">
                        <p>
                        At site is handed over to: 
                        </p>
                    </div>
                    <div className="mt-2  col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">Mr./Mrs./Miss :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{Mr_Mrs_Miss}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">S/o, D/o, W/o :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{So_Do_Wo}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">CNIC :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{CNIC}</div>
                        </div>
                    </div>
                  
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">Adress :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{Adress}</div>
                        </div>
                    </div>
                  
                    <div className="mt-5 col-12">
                        <div className="mt-5 row justify-content-around">
                        <div style={{borderBottom:"1px solid black"}} className="col-2 col-2 mb-2 text-left pl-4"></div>
                        <div style={{borderBottom:"1px solid black"}} className=" col-2 mb-2 text-left pl-4"></div>
                       
                        </div>
                        <div className="row justify-content-around">
                        <div className=" col-2 text-center ">  Managing Director </div>
                        <div className="  col-2 text-center ">Applicant</div>
                     
                       
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


export default PrintPossessionCertificate