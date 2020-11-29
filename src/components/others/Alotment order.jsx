import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel, Fab } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Add as AddIcon } from "@material-ui/icons";
import React from "react";
import RefrenceDate from "./refrenceDate";
import BackgroundImage from "../../RawData/Group2.png";
import zainlogo from '../../RawData/Mian Asso-01.png'


const useStyle = makeStyles(
    (theme) =>
        (
            {
                contaienr1: {
                    width: '35%'
                }

            }
        ))
function Alotment_order() {
    const classes = useStyle();

    const handleCnic = (e) => {
        var a = e.target.value
        // a = a.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3")
        if (a.length > 15) {
            a = a.slice(0, -1)
        }
        if (a.length === 5 || a.length === 13) {
            a += "-"
        }

        e.target.value = a
    }

    return (


        <div style={{ backgroundImage : `url(${BackgroundImage})`,backgroundRepeat : 'repeat-y',backgroundSize : '100% 100%',backgroundPosition : '0% 0%', height:"46.2rem"}} className="container-fluid ">

            <div style={{position:"relative" , top:"5rem"}} className=" container shadow-lg rounded border">

                <div className="mt-5 row ">

                    <div className="col-12 ">


                        <div className=" row heading">
                            <div className="col-12 text-center">
                                <h2><strong> ALLOTMENT ORDER </strong></h2>
                            </div>
                        </div>


                        <div className="mt-4 row body justify">

                            <div className="mt-3 col-6 text-center"  >
                                <TextField
                                    id="name"
                                    label="Full Name"
                                    type="text"
                                    required
                                    className="col-6 text-center"
                                />
                            </div>

                            <div className="mt-2 col-6 text-center"  >
                                <TextField
                                    id="guardians"
                                    label="Parent/Guardians"
                                    type="text"
                                    required
                                    className="col-6 text-center"
                                />
                            </div>
                            <div className="mt-2 col-6 text-center"  >
                                <TextField
                                    id="cnic"
                                    label="CNIC No."
                                    type="text"
                                    required
                                    className="col-6 text-center"
                                    onChange={handleCnic}
                                />
                            </div>

                            <div className="mt-2 col-6 text-center"  >
                                <TextField
                                    id="plotnum"
                                    label="Alloted Plot No."
                                    type="number"
                                    required
                                    className="col-6 text-center"
                                />
                            </div>
                            <div className="mt-2 col-6 text-center"  >
                                <TextField
                                    id="size"
                                    label="Size"
                                    type="text"
                                    required
                                    className="col-6 text-center"
                                />
                            </div>
                            <div className="mt-2 col-6 text-center"  >
                                <TextField
                                    id="cnic"
                                    label="Category"
                                    type="text"
                                    required
                                    className="col-6"
                                />
                            </div>
                            <div className="mb-4 mt-5 col-12 pl-5">
                            <span style={{ color: "red" }} > "MIAN TOWN”</span> allotted this <em>Residential/Commercial</em> plot on the terms and conditions mentioned in the application form.
                         </div>







</div>
</div>

</div>
<div className="mb-3 row">
                        <div className="col-12 text-right">

                            <Button style={{marginRight:"5%"}} variant="outlined" color="secondary">
                                Save & Continue </Button>
                        </div>
                    </div>

                    
</div>
<div style={{position:"relative",top:"9rem"}} className="row ">
             <div className="col-12">
                 
                 <img  className="ml-5" src={zainlogo} alt="" height="100rem"/>
                 </div></div>
</div>
    )
}


export default Alotment_order