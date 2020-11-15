import { makeStyles, TextField, RadioGroup, Paper, Radio, Button, FormControlLabel } from "@material-ui/core";
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
                    paddingLeft : '5%',
                    paddingRight : '5%',
                    paddingBottom : '1%',
                    margin: '0 auto',
                    [theme.breakpoints.down("xs")] : {
                        width : '80%'
                    }
                },
                form: {
                    width: '100%'
                },
                fieldsDiv: {
                    width: '100%',
                    marginTop: '2%',
                },
                fieldElement : {
                    width : '100%'
                },
                formControlGroup : {
                    margin : '0 auto'
                }
            }
        )
)

function ApplicationForm() {
    const classes = useStyle();
    const [ genderValue, setGenderValue ] = React.useState("female")


    const handleChange = (e) =>
    {
        setGenderValue(e.target.value)
    }

    const handleCnic = (e) =>
    {
        var a = e.target.value
        // a = a.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3")
        if(a.length > 15)
        {
            a = a.slice(0, -1)
        }
        if(a.length === 5 ||a.length === 13)
        {
            a += "-"
        }
        
        e.target.value = a
    }

    return (
        <div className={classes.root} >
            <Paper className={classes.paper} elevation={2} >
                <form className={classes.form} >
                    <div style={{ textAlign : 'center' }} >
                    <h3> Application Form </h3>
                    </div>
                    <div className={classes.fieldsDiv} >
                        <TextField
                            id="name"
                            label="Full Name"
                            type="text"
                            required
                            className={classes.fieldElement}
                        />
                    </div>
                    <div className={classes.fieldsDiv} >
                        <TextField
                            id="guardians"
                            label="Parent/Guardians"
                            type="text"
                            required
                            className={classes.fieldElement}
                        />
                    </div>
                    <div className={classes.fieldsDiv} >
                        <RadioGroup  aria-label="gender" name="gender" value={genderValue} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio style={{ color : '#EF3729' }} />} label="Female" />
                            <FormControlLabel value="male"  control={<Radio style={{ color : '#EF3729' }} />} label="Male" />
                        </RadioGroup>
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
                    <div className={classes.fieldsDiv} >
                        <TextField
                            id="cellPhone"
                            label="Cell Phone"
                            type="text"
                            required
                            className={classes.fieldElement}
                        />
                    </div>
                    <div className={classes.fieldsDiv} >
                        <TextField
                            id="offcePhone"
                            label="Phone Office"
                            type="text"
                            required
                            className={classes.fieldElement}
                        />
                    </div>
                    <div className={classes.fieldsDiv} >
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.fieldElement}
                            style={{ marginTop : '1%' }}
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