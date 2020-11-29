import { makeStyles, TextField, Paper, Button} from "@material-ui/core";
import React from "react";


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
                        <h3> Site Plan </h3>
                    </div>
                    <div style={{ width: '100%', display: 'flex' }} >
                        <div className={classes.fieldsDiv} style={{ width: '45%' }} >
                            <TextField
                                id="plot"
                                label="Site plan for plot no."
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                        <div className={classes.fieldsDiv} style={{ width: '45%', marginLeft: 'auto', marginRight: 0 }} >
                            <TextField
                                id="type"
                                label="type"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex' }} >
                        <div className={classes.fieldsDiv} style={{ width: '45%' }} >
                            <TextField
                                id="purpose"
                                label="Purpose only of"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                        <div className={classes.fieldsDiv} style={{ width: '45%', marginLeft: 'auto', marginRight: 0 }} >
                            <TextField
                                id="square"
                                label="Sq. Yds."
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                    </div>
                    <div className={classes.fieldsDiv} >
                        <TextField
                            id="name"
                            label="Name of Allotment"
                            type="text"
                            required
                            className={classes.fieldElement}
                            onChange={handleCnic}
                        />
                    </div>
                    <div className={classes.fieldsDiv} >
                        <TextField
                            id="guardian"
                            label="Guardian Name"
                            type="text"
                            required
                            className={classes.fieldElement}
                        />
                    </div>
                    <div className={classes.phoneMobDiv} >
                        <div className={classes.fieldsDiv} style={{ width: '40%' }} >
                            <TextField
                                id="east"
                                label="East"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                        <div className={classes.fieldsDiv} style={{ width: '40%', marginLeft: 'auto', marginRight: 0 }} >
                            <TextField
                                id="west"
                                label="West"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                    </div>
                    <div className={classes.phoneMobDiv} >
                        <div className={classes.fieldsDiv} style={{ width: '40%' }} >
                            <TextField
                                id="north"
                                label="North"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                        <div className={classes.fieldsDiv} style={{ width: '40%', marginLeft: 'auto', marginRight: 0 }} >
                            <TextField
                                id="southe"
                                label="South"
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