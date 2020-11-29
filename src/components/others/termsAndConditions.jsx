import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel, Fab } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Add as AddIcon } from "@material-ui/icons";
import React from "react";
import RefrenceDate from "./refrenceDate";




function TermAndCondition() {
    return (

        <div className="container">


            <div className="mt-5 row shadow-sm card">



                <div className="col card-header">


                    <div className="mt-3 row">
                        <div className="col-12 text-center">
                        <h2><strong> TERMS AND CONDITION</strong></h2>
                        </div>
                    </div>


                    <div className="mt-5 row ">
                        <div className="col-12">

                            <ul>
                                <li className="mt-2">
                                    This project has been launched by the name of <span style={{ color: "red" }} > "MIAN TOWN”</span> and all the papers are attributed with the same name.
                             </li>
                                <li className="mt-2">
                                    The project Owners have received the total amount and given the complete documents of the property mentioned to the buyers of the property rights.
                             </li>
                                <li className="mt-2">
                                    The demarcation fee will be given to the engineer appointed by the buyer.
                             </li>
                                <li className="mt-2">
                                    The Buyer will pay for each of both, the charges of maintenance project will be given at any cost.
                             </li>

                                <li className="mt-2"> The development of this project, etc. Electricity, Gas, Water and Sewerage. Those people will be responsible. How have included in this project. The cost of all documents will be divided to the Members.</li>

                                <p className="mt-4">I/We confirm that  I/We have fully read, understood the above mentioned terms and conditions and do here agree to abide by the same. I/We further declare that I/We shall abide the existing rules,
                                regulations, terms and conditions, requirements its laid down by the company.
                                I/We shall become a member of association soon which be formed to look after the common
                                and general service of the Project and pay the charges/ fee etc. Which may be decided by the
                             association/society.</p>


                            </ul>


                        </div>



                    </div>


                    <div className="mb-2 row">
                        <div className="col-12 text-right">

                            <Button style={{marginRight:"5%"}} variant="outlined" color="secondary">
                                Accept & Continue </Button>
                        </div>
                    </div>





                </div>















            </div>






















        </div>



    )
}

export default TermAndCondition