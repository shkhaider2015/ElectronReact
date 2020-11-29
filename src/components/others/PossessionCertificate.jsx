import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel, Fab } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Add as AddIcon } from "@material-ui/icons";
import React from "react";
import RefrenceDate from "./refrenceDate";


const useStyle = makeStyles(
    (theme) =>
        (
            {
                contaienr1: {
                    width: '35%'
                }

            }
        ))
function Possession_certificate() {
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


        <div className="container">

            <div className="container">

                <div className="mt-5 row shadow-sm round border ">

                    <div className="col-12 ">


                        <div className="mt-4 row heading">
                            <div className="col-12 text-center">
                            <h2><strong> POSSESSION CERTIFICATE </strong></h2>
                            </div>
                        </div>


                        <div className="row body">
                            <div className="mt-5 col-12 pl-5">
                                As per order physical possession of Plot situated at  <span style={{ color: "red" }} > "MIAN TOWN”</span>.
                         </div>

                            <div className="mt-2 col-6 text-center"  >
                                <TextField
                                    id="cnic"
                                    label="Plot"
                                    type="text"
                                    required
                                    className="col-6"
                                />
                            </div>
                            <div className="mt-2 col-6 text-center"  >
                                <TextField
                                    id="cnic"
                                    label="Measurment"
                                    type="text"
                                    required
                                    className="col-6"
                                />
                            </div>
                            <div className="mt-2 col-6 text-center"  >
                                <TextField
                                    id="cnic"
                                    label="Square yd, block"
                                    type="text"
                                    required
                                    className="col-6"
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
                            <div className="mt-2 col-6 text-center"  >
                                <TextField
                                    id="cnic"
                                    label="Nature"
                                    type="text"
                                    required
                                    className="col-6"
                                />
                            </div>
                            <div className="col-12 pl-5 mt-4">
                                At site is handed over to:
                            </div>
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
                            <div className="mb-5 mt-2 col-6 text-center"  >
                        <TextField
                            id="address"
                            label="Address No."
                            type="text"
                            required
                            className="col-6"
                        />
                    </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )

}

export default Possession_certificate