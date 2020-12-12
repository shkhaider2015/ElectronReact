import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel, Avatar } from "@material-ui/core";
import { BorderBottom } from "@material-ui/icons";
import React ,{useState} from "react";
import { ReactComponent as Client_Tempory_Profile } from '../../RawData/Create.svg';
import boxTermsAndConditoon from '../../RawData/terms_andcondition.JPG'



function PrintTermsandCondition({ obj }) {

    const [CNIC  , func_CNIC] = useState("CNIC")
    return (
        <div>


            <div className="container">

                <div className="row">


                    <div className="col-12  heading">

                        <h3 className="mt-5 rounded text-center bg-danger text-white p-2"><em>TERMS & CONDITIONS </em></h3>

                    </div>

                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-7 col-2 pl-4 text-right ">Date :</div>
                            <div className="col-2 text-left pl-4  border-bottom">12-12-12</div>
                        </div>
                    </div>


                    <div className="mt-4 offset-1 col-10">

                        <ol>
                            <li className="mt-2 pl-2">All payments to be paid by applicant according to agreed schedule. </li>
                            <li className="mt-2 pl-2">Contact information provided by the applicant should only be modified / changed with prior
                                information to company otherwise company shall not be responsible for any delay in 
                                communication & subsequent late charges.  </li>
                            <li className="mt-2 pl-2">Possession & ownership of property shall remain with the company until 
                                full payment with service, documentation charges etc paid by applicant. </li>
                            <li className="mt-2 pl-2"> No sell / transfer activity to be carried out by allottee prior to taking over possession of the 
                                property, subject to written consent of company that to be made after receiving all 
                                outstanding dues & transfer fee.  </li>
                            <li className="mt-2 pl-2">In case of late payment after decided time a late payment charge will be levied for 
                                    outstanding dues. Failure to pay late charges & dues after final notice the allocation will be 
                                    liable to cancellation. Deposited amount shall be refunded after 6 months of cancellation and 
                                    resale of property with 10% deduction from refundable amount </li>

                            <li className="mt-2 pl-2">In case of surrender by applicant, the deduction would be same as per clause no. 5 of this 
                                document. The deduction to be made in account of service & establishment charges.  </li>
                            <li className="mt-2 pl-2"> lease expanses, documentation charges, outer development charges & all other ancillary & 
                                miscellaneous expenses & formalities of various departments I agencies as & when asked by 
                                company to be paid by applicant within the given time. Expanses / charges stated above 
                                (where applicable) does not include in cost of property. </li>
                            <li className="mt-2 pl-2">Project maintenance charges to be paid by applicant on 10"' of every month after booking of 
                                property. </li>
                            <li className="mt-2 pl-2">Company will make every effort to obtain utility services for project but accepts no 
                                responsibility in case of any delay from respective departments.  </li>
                            <li className="mt-2 pl-2">The applicant will not misuse the amenities provided by the company.  </li>
                            <li className="mt-2 pl-2">Booking of property is provisional unit final payment is cleared.  </li>
                            <li className="mt-2 pl-2">Use of exterior walls, front & common area is reserved by company for any commercial or 
                                other use at discretion of company.   </li>
                            <li className="mt-2 pl-2">Numbering & identification I marking in layout plans & or allocation letter are ad hoc, 
                                temporary & company reserves the rights to amend.    </li>
                            <li className="mt-2 pl-2">No construction work to be carded out without company NOC & a copy of such document to 
                                be submitted at project main gate for allowance of construction material, labor & vehicles.    </li>
                            <li className="mt-2 pl-2">Illegal activities / activist are strictly prohibited in project area. In case of any complaint 
                                regarding such activity / person, company reserves the rights of cancellation of allotment.    </li>
                            <li className="mt-2 pl-2">I confirm that I have fully read, understood the terms & conditions and do hereby 
                                agree to abide by the same.    </li>
 

                        </ol>

                    </div>
                    <div className="mt-4 col-12">
                        <div className=" row ">
                        <div style={{border:"3px solid black" ,height:"5rem"}} className="offset-2 col-2 col-2 mb-2 text-left pl-4"></div>
                        <div  className="offset-1 col-2  text-left pl-4 border-bottom"></div>
                         <div className="offset-2 col-1 border-pic shadow-sm">
                             <Avatar variant="rounded" alt="pic" src={obj[0]['imageURI']} />
                            </div>
                       
                        </div>
                        <div className="row ">
                        <div className="offset-2 col-2 text-left "> Read & Understood </div>
                        <div className="offset-1  col-2 text-center  ">CNIC : {obj[0]['cnic']} </div> 
                     
                       
                        </div>
                        </div>


                    </div>
                    <div className="mt-5 col-12 ">
                        <div className="row">
                        <div className=" col-2 text-center ">CALL US:</div>
                       
                        </div>
                        <div className="row">
                        <div className="col-2 text-center ">+92-</div>
                       
                        </div>
                        </div>





            </div>

        </div>

    )
}


export default PrintTermsandCondition


