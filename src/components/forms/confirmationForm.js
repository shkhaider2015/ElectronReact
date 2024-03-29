import { makeStyles, TextField, RadioGroup, Paper, Radio, FormControlLabel} from "@material-ui/core";
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
                twoField: {
                    width: '100%',
                    display: 'flex'
                },
                smallFieldsDiv: {
                    width: '45%'
                },
                fieldElement: {
                    width: '100%'
                },
                formControlGroup: {
                    margin: '0 auto'
                }
            }
        )
)

function ConfirmationLetter() {
    const classes = useStyle();
    const [ordinary, setOrdinary] = React.useState(false)
    const [corner, setCorner] = React.useState(false)
    const [westOpen, setWestOpen] = React.useState(false)
    const [roadFacing, setRoadFacing] = React.useState(false)


    const handleOrdinary = () => {
        setOrdinary(ordinary => !ordinary)
    }
    const handleCorner = () => {
        setCorner(corner => !corner)
    }
    const handleWestOpen = () => {
        setWestOpen(westOpen => !westOpen)
    }
    const handleRoadFacing = () => {
        setRoadFacing(roadFacing => !roadFacing)
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

    return (
        <div className={classes.root} >
            <Paper className={classes.paper} elevation={2} >
                <form className={classes.form} >
                    <div style={{ textAlign: 'center' }} >
                        <h3> Confirmation Letter </h3>
                    </div>
                    <div>
                        <h2>Client Details</h2>
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
                    {/* <div className={classes.fieldsDiv} >
                        <RadioGroup  aria-label="gender" name="gender" value={genderValue} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio style={{ color : '#EF3729' }} />} label="Female" />
                            <FormControlLabel value="male"  control={<Radio style={{ color : '#EF3729' }} />} label="Male" />
                        </RadioGroup>
                    </div> */}
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
                    {/* <div className={classes.fieldsDiv} >
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
                    </div> */}
                    <div>
                        <h2>Plot Details</h2>
                        <p>
                            With refrence to your application and ACCEPTANCE
                            of terms and condition for allotment of a Residential
                            Plot no our subject Mian Town.
                        </p>
                    </div>
                    <div className={classes.fieldsDiv} >
                        <TextField
                            id="cnic"
                            label="Plot"
                            type="text"
                            required
                            className={classes.fieldElement}
                        />
                    </div>
                    <div className={classes.twoField} >
                        <div className={classes.smallFieldsDiv} >
                            <TextField
                                id="cnic"
                                label="Measurment"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                        <div className={classes.smallFieldsDiv}
                            style={{ marginLeft: 'auto', marginRight: 0 }} >
                            <TextField
                                id="cnic"
                                label="Square yd, block"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                    </div>

                    <div className={classes.twoField} >
                        <div className={classes.smallFieldsDiv} >
                            <TextField
                                id="cnic"
                                label="Category"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                        <div className={classes.smallFieldsDiv}
                            style={{ marginLeft: 'auto', marginRight: 0 }} >
                            <TextField
                                id="cnic"
                                label="Nature"
                                type="text"
                                required
                                className={classes.fieldElement}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ marginTop: '2%' }} >
                            {/* <div>Ordinary</div> */}
                            <div style={{ marginLeft: '2%', width: '100%' }} >
                                <RadioGroup row aria-label="ordinary" name="ordinary" value={ordinary} onChange={handleOrdinary} >
                                    <FormControlLabel label="Ordinary  " control={ <span></span> } />
                                    <FormControlLabel value={true} control={<Radio style={{ color: '#EF3729' }} />} label="Yes" />
                                    <FormControlLabel value={false} control={<Radio style={{ color: '#EF3729' }} />} label="No" />
                                </RadioGroup>
                            </div>
                            <div style={{ marginLeft: '2%', width: '100%' }} >
                                <RadioGroup row aria-label="corner    " name="corner" value={corner} onChange={handleCorner} >
                                    <FormControlLabel label="Corner" control={ <span></span> } />
                                    <FormControlLabel value={true} control={<Radio style={{ color: '#EF3729' }} />} label="Yes" />
                                    <FormControlLabel value={false} control={<Radio style={{ color: '#EF3729' }} />} label="No" />
                                </RadioGroup>
                            </div>
                            <div style={{ marginLeft: '2%', width: '100%' }} >
                                <RadioGroup row aria-label="westOpen  " name="westOpen" value={westOpen} onChange={handleWestOpen} >
                                    <FormControlLabel label="West Open" control={ <span></span> } />
                                    <FormControlLabel value={true}  control={<Radio style={{ color: '#EF3729' }} />} label="Yes" />
                                    <FormControlLabel value={false}  control={<Radio style={{ color: '#EF3729' }} />} label="No" />
                                </RadioGroup>
                            </div>
                            <div style={{ marginLeft: '2%', width: '100%' }} >
                                <RadioGroup row aria-label="roadFacing" name="roadFacing" value={roadFacing} onChange={handleRoadFacing} >
                                    <FormControlLabel label="Road Facing" control={ <span></span> } />
                                    <FormControlLabel value={true} control={<Radio style={{ color: '#EF3729' }} />} label="Yes" />
                                    <FormControlLabel value={false} control={<Radio style={{ color: '#EF3729' }} />} label="No" />
                                </RadioGroup>
                            </div>

                        </div>
                    </div>

                </form>
            </Paper>

        </div>
    )
}


export default ConfirmationLetter;