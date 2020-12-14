import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel } from "@material-ui/core";
import React ,{useState} from "react";
import { ReactComponent as Client_Tempory_Profile } from '../../RawData/Create.svg';



function PrintPossessionCertificate({obj}) {

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


            <div className="mt-5 container">

                <div className="mt-5 row">


                    <div className="mt-5 mb-5 col-12  heading">

                        <h3 className="mt-5 mb-5 rounded text-center bg-danger text-white p-2"><em>CONFIRMATION LETTER</em></h3>

                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">RefNo:</div>
                            <div className="col-3 text-left pl-4  border-bottom">{RefNo}</div>
                            <div className="offset-1 col-2 pl-5 text-left ">Date:</div>
                            <div className="col-2 text-left pl-4  border-bottom">{Date}</div>
                        </div>
                    </div>
                    <div className="mt-5  ml-5  col-12">
                        <p className="mt-3 ml-5">
                        As per order physical possession of Plot situated at <span className="text-danger">Mian Town</span>. 
                        </p>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">Plot:</div>
                            <div className="col-3 text-left pl-4  border-bottom">{obj[1]['plotName']}</div>
                            <div className="offset-1 col-2 pl-5 text-left ">Measurement:</div>
                            <div className="col-2 text-left pl-4  border-bottom">{obj[1]['measurement']}</div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">Sq. Yds, Block:</div>
                            <div className="col-3 text-left pl-4  border-bottom">{obj[1]['square']}, {obj[1]['block']} </div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left ">Category:</div>
                            <div className="col-3 text-left pl-4  border-bottom">{obj[1]['category']}</div>
                            <div className="offset-1 col-2 pl-5 text-left ">Nature:</div>
                            <div className="col-2 text-left pl-4  border-bottom">{obj[1]['nature']}</div>
                        </div>
                    </div>
                   
                    <div className="mt-5  ml-5  col-12">
                        <p className=" ml-5 ">
               <em>    At site is handed over to:  </em>
                        </p>
                    </div>
                    <div className="mt-5  col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">Mr./Mrs./Miss :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{obj[0]['name']}</div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">S/o, D/o, W/o :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{obj[0]['fatherName']}</div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">CNIC :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{obj[0]['cnic']}</div>
                        </div>
                    </div>
                  
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left ">Adress :</div>
                            <div className="col-3 text-left pl-4  border-bottom">{obj[0]['address']}</div>
                        </div>
                    </div>
            


                    <footer style={{marginTop:"20%"}} className="col-12 page-footer font-small blue">
                   
                   <div className="mt-5 col-12">
                   <div className="mt-5 row justify-content-around">
                   <div style={{borderBottom:"1px solid black"}} className="col-2 col-2 mb-2 text-left pl-4"></div>
                   <div style={{borderBottom:"1px solid black"}} className=" col-2 mb-2 text-left pl-4"></div>
                  
                   </div>
                   <div className="row justify-content-around">
                   <div className=" col-2 text-center ">Managing Director </div>
                   <div className="  col-2 text-center ">Applicant</div>
                
                  
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




        </div>

    )



}


export default PrintPossessionCertificate