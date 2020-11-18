import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel, Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React from "react";
import RefrenceDate from "./refrenceDate";


const useStyle = makeStyles(
    (theme) =>
        (
            {
                root: {
                    width: '100%',
                    paddingTop: '3%'
                },
                paper: {
                    width: '40%',
                    paddingTop: '3%',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    paddingBottom: '1%',
                    margin: '0 auto',
                    [theme.breakpoints.down("xs")]: {
                        width: '80%'
                    }
                },
                form: {
                    width: '100%'
                },
                fieldsDiv: {
                    width: '100%',
                    marginTop: '2%',
                },
                fieldElement: {
                    width: '100%'
                },
                formControlGroup: {
                    margin: '0 auto'
                },
                phoneMobDiv: {
                    width: '100%',
                    display: 'flex'
                }
            }
        )
)

function ApplicationForm() {
    const classes = useStyle();
    const [genderValue, setGenderValue] = React.useState("female")
    const [selectedFile, setSelectedFile] = React.useState({ name : "No file choose" })


    const handleChange = (e) => {
        setGenderValue(e.target.value)
    }

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

    const handleFile = (e) => {
        console.log("File : ", e.target.files[0])
        setSelectedFile(e.target.files[0])
        
    }

    return (
        <div className={classes.root} >
            <Paper className={classes.paper} elevation={2} >
                <form className={classes.form} >
                    <div style={{ textAlign: 'center' }} >
                        <h3> Application Form </h3>
                    </div>
                    <RefrenceDate />
                    <div style={{ width: '100%', display: 'flex' }} >
                        <div className={classes.fieldsDiv} style={{ width: '45%' }} >
                            <TextField
                                id="name"
                                label="Full Name"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                        <div className={classes.fieldsDiv} style={{ width: '45%', marginLeft: 'auto', marginRight: 0 }} >
                            <TextField
                                id="guardians"
                                label="Parent/Guardians"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                    </div>
                    <div className={classes.fieldsDiv} >
                        <RadioGroup row aria-label="gender" name="gender" value={genderValue} onChange={handleChange} >
                            <FormControlLabel value="female" control={<Radio style={{ color: '#EF3729' }} />} label="Female" />
                            <FormControlLabel value="male" control={<Radio style={{ color: '#EF3729' }} />} label="Male" />
                        </RadioGroup>
                    </div>
                    <div className={classes.fieldsDiv} >
                        <label htmlFor="upload-photo" >
                            <input
                                style={{ display: "none" }}
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                                onChange={handleFile}
                            />
                            <Fab
                                color="primary"
                                size="small"
                                component="span"
                                aria-label="add"
                                variant="extended"
                            >
                                <AddIcon /> Upload photo
                        </Fab>
                        
                        </label>
                        <span> {selectedFile.name} </span>
                    </div>
                    <div className={classes.fieldsDiv} >
                        <TextField
                            id="cnic"
                            label="CNIC No."
                            type="text"
                            required
                            className={classes.fieldElement}
                            onChange={handleCnic}
                        />
                    </div>
                    <div className={classes.fieldsDiv} >
                        <TextField
                            id="address"
                            label="Address No."
                            type="text"
                            required
                            className={classes.fieldElement}
                        />
                    </div>
                    <div className={classes.phoneMobDiv} >
                        <div className={classes.fieldsDiv} style={{ width: '40%' }} >
                            <TextField
                                id="cellPhone"
                                label="Cell Phone"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                        <div className={classes.fieldsDiv} style={{ width: '40%', marginLeft: 'auto', marginRight: 0 }} >
                            <TextField
                                id="offcePhone"
                                label="Phone Office"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                    </div>
                    <div className={classes.fieldsDiv} >
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.fieldElement}
                            style={{ marginTop: '1%' }}
                        >
                            Save
                            </Button>
                    </div>

                </form>
            </Paper>

        </div>
    )
}


export default ApplicationForm;