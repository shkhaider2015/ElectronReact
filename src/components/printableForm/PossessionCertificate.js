import React from "react";
import { getDate } from "../../utility/utils";



function PrintPossessionCertificate({obj}) {

    return (
        <div>


            <div className="mt-5 container">

                <div className="mt-5 row">


                    <div className="mt-5 mb-5 col-12  heading">

                        <h3 className="mt-5 mb-5 rounded text-center bg-danger text-white p-2"><em>CONFIRMATION LETTER</em></h3>

                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left "><span style={{fontSize: 12, opacity: 0.5 }} >RefNo:</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{fontSize: 12, opacity: 0.5 }} >8787</span></div>
                            <div className="offset-1 col-2 pl-5 text-left "><span style={{fontSize: 12, opacity: 0.5 }} >Date:</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{fontSize: 12, opacity: 0.5 }} >{getDate()}</span></div>
                        </div>
                    </div>
                    <div className="mt-5  ml-5  col-12">
                        <p className="mt-3 ml-5">
                        As per order physical possession of Plot situated at <span className="text-danger">Mian Town</span>. 
                        </p>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Plot:</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['plotName']}</span></div>
                            <div className="offset-1 col-2 pl-5 text-left "><span style={{ fontSize: 12 }} >Measurement:</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['measurement']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Sq. Yds, Block:</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['square']}, Block {obj['asset']['block']} </span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1 col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Category:</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['category']}</span></div>
                            <div className="offset-1 col-2 pl-5 text-left "><span style={{ fontSize: 12 }} >Nature:</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['asset']['nature']}</span></div>
                        </div>
                    </div>
                   
                    <div className="mt-5  ml-5  col-12">
                        <p className=" ml-5 ">
               <em>    At site is handed over to:  </em>
                        </p>
                    </div>
                    <div className="mt-5  col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Mr./Mrs./Miss :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['personal']['name']}</span></div>
                        </div>
                    </div>
                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >S/o, D/o, W/o :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['personal']['fatherName']}</span> </div>
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
                            <div className="offset-1  col-2 pl-4 text-left "><span style={{ fontSize: 12 }} >Adress :</span></div>
                            <div className="col-3 text-left pl-4  border-bottom"><span style={{ fontSize: 12, fontWeight: 'bold' }} >{obj['personal']['address']}</span></div>
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