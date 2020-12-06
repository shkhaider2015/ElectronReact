import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel } from "@material-ui/core";
import React ,{useState} from "react";
import { ReactComponent as Client_Tempory_Profile } from '../RawData/Create.svg';



function Printconfirmation() {

    const [RefNo , func_RefNo] = useState("RefNo")
    const [Date , func_Date ]   = useState("Date")
    const [Mr_Mrs_Miss  , func_Mr_Mrs_Miss] = useState("Mr_Mrs_Miss")
    const [So_Do_Wo  , func_So_Do_Wo] = useState("So_Do_Wo")
    const [CNIC  , func_CNIC] = useState("CNIC")
    const [Phone_Office  , func_Phone_Office] = useState("Phone_Office")
    const [PlotNo  , func_PlotNo] = useState("PlotNo")
    const [Measurement  , func_Measurement] = useState("Measurement")
    const [SqYds  , func_SqYds] = useState("SqYds")
    const [Category  , func_Category] = useState("Category")
    const [Nature  , func_Nature] = useState("Nature")
    const [Ordinary  , func_Ordinary] = useState("Ordinary")
    const [Corner  , func_Corner] = useState("Corner")
    const [West_Open  , func_West_Open] = useState("West_Open")
    const [Road_Facing  , func_Road_Facing] = useState("Road_Facing")


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
                            <div className="col-3 text-left pl-4  border-bottom">{Phone_Office}</div>
                            <div className="offset-1 col-2 pl-5 text-center ">Plot:</div>
                            <div className="col-2 text-left pl-4  border-bottom">{PlotNo}</div>
                        </div>
                    </div>
                    <div className="mt-4 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">Measurement :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{Measurement}</div>
                            <div className="offset-1 col-2 pl-5 text-center ">Sq. Yds, Block:</div>
                          <div className="col-2 text-left pl-4  border-bottom">{SqYds}</div>
                        </div>
                    </div>

                    <div className="mt-3 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">Category:</div>
                            <div className="col-3 text-left pl-4  border-bottom">{Category}</div>
                            <div className="offset-1 col-2 pl-5 text-center ">Nature:</div>
                            <div className="col-2 text-left pl-4  border-bottom">{Nature}</div>
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
                        <div style={{height:"30px"}} className="ml-5 border rounded shadow-sm col-2 text-center mt-2 p-1 ">{Ordinary}</div>
                        <div className="offset-1 col-2 border rounded shadow-sm  text-center mt-2 p-1 ">{Corner}</div>
                        <div className=" offset-1 col-2 border rounded shadow-smp text-center mt-2 p-1 ">{West_Open}</div>
                        <div className=" offset-1 col-2 border rounded shadow-smp text-center mt-2 p-1 ">{Road_Facing}</div>
                            
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