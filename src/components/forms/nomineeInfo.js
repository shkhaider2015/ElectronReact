import { Avatar, Grid, makeStyles, Paper, TextField, InputAdornment, Fab, LinearProgress, Button } from '@material-ui/core'
import {
    Email, PermIdentity as Name, PhotoCamera,
    CreditCard as CNIC, Phone, AddPhotoAlternate as AddPhotoAlternateIcon, Smartphone, LocationOn
} from "@material-ui/icons";
import React from 'react'


const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                marginTop: '0%',
                height : '80%',
            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                padding: '0%',
                paddingTop: '2%',
                paddingLeft: '1%',
                paddingRight: '1%',
                paddingBottom: '3%',
                width: '60%',
                background: 'rgba(255, 255, 255, 0.98)',
                [theme.breakpoints.down('md')]: {
                    width: '70%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('sm')]: {
                    width: '80%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('xs')]: {
                    width: '90%',
                    marginTop: '10%',
                    textAlign: 'center'

                },
                margin: '0 auto',
            },
            myText: {
                marginTop: '2%'
            },
            myButton: {
                marginTop: '10%',
                textAlign: 'center'
            },
            myElements: {
                width: '100%',
            },
            phoneCnicDiv: {
                display: 'flex',
                width: '100%',
                marginTop: '2%',
            },
            cnicDiv: {
                width: '45%',
                marginLeft: '0',
            },
            phoneDiv: {
                width: '45%',
                marginLeft: 'auto',
                marginRight: "0",
            },
            loginLink: {
                textDecoration: 'none',
                fontWeight: 'bold',
                color: theme.palette.primary.main
            },
            imageDiv: {
                width: '100%',
                textAlign: 'center'
            },
            avatar: {
                margin: '0 auto',
                width: theme.spacing(13),
                height: theme.spacing(13),
                background: 'linear-gradient(to top left, #c74081, #ef3729)',
                boxShadow: '0 0 30px 0 rgba(20, 27, 202, .17)'

            },
            pairElement: {
                width: '100%'
            },
            myImage: {
                width: theme.spacing(13),
                height: theme.spacing(13)
            },
            imageIcon: {
                color: 'white',
                width: '50%',
                height: '50%'
            },
            iconColor: {
                color: theme.palette.secondary.main
            },
            input: {
                display: 'none',

            }
        }
    )
)

const NomineeInfo = ({ model }) => {

    const classes = useStyle();


    const handleSelectImage = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        try
        {
            if(file)
            {
                reader.onloadend = () => {
                    model.setNomineeImageFile(file)
                    model.setNomineeSelectedImage(reader.result)
                }
        
                reader.readAsDataURL(file)
            }
        }
        catch(e)
        {
            console.error(e)
        }
        
    }



const validateEmail = (email) => {
    let val = false;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        console.log("Email Validation : Cirrect")
        val = true
    }
    else {
        console.log("Email Validation : Incorrect")
    }

    return val
}
const handleCnic = (e) => {
    var a = e.target.value
    // a = a.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3")
    if (a.length > 15) {
        a = a.slice(0, -1)
    }
    if (a.length === 6 && a.charAt(5) !== "-" || a.length === 14 && a.charAt(13) !== "-") 
    {
        a = a.slice(0, -1) + "-" + a.slice(-1)
    }

    // e.target.value = a
    model.setNomineeCNIC(a)
}




return (
    <div className={classes.root}>
        <Grid container>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >
                <Paper elevation={0} className={classes.myPaper}>
                    <div className={classes.imageDiv}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="myinput"
                            multiple
                            type="file"
                            onChange={handleSelectImage}
                        />
                        <label htmlFor="myinput"  >

                            <Fab component="span" className={classes.avatar} >
                                {/* {!model.selectedImage ? <PhotoCamera className={classes.imageIcon} color="primary" /> : <Avatar alt="shakeel haider" src={model.selectedImage} variant="circle" className={classes.myImage} />} */}
                                {
                                    model.nomineeSelectedImage
                                    ? <Avatar alt="name" src={model.nomineeSelectedImage} variant="circle" className={classes.myImage} />
                                    : model.nomineeImageURI !== "" ? <Avatar alt="shakeel haider" src={model.nomineeImageURI} variant="circle" className={classes.myImage} />
                                    : <PhotoCamera className={classes.imageIcon} color="primary" />
                                }

                            </Fab>
                        </label>
                    </div>

                    <div className={classes.phoneCnicDiv} >

                        <div className={classes.cnicDiv} >

                            <TextField
                                className={classes.pairElement}
                                id="name"
                                label="Name"
                                variant="outlined"
                                type="text"
                                color="primary"
                                value={model.nomineeName}
                                onChange={(e) => model.setNomineeName(e.target.value)}
                                helperText={model.nomineeName === "" ? <span>Required</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Name className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className={classes.phoneDiv} >
                            <TextField
                                className={classes.pairElement}
                                id="fatherName"
                                label="Father/Husband name"
                                variant="outlined"
                                type="text"
                                color="primary"
                                value={model.nomineeFatherName}
                                onChange={(e) => model.setNomineeFatherName(e.target.value)}
                                helperText={model.nomineeFatherName === "" ? <span>Required</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Name className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.phoneCnicDiv} >
                        <div className={classes.cnicDiv} >
                            <TextField
                                className={classes.pairElement}
                                id="cell"
                                label="Cell Phone"
                                variant="outlined"
                                type="text"
                                color="primary"
                                value={model.nomineeCellPhone}
                                onChange={(e) => model.setNomineeCellPhone(e.target.value)}
                                helperText={model.nomineeCellPhone === "" ? <span style={{}} >e.g: 03465776567</span> : model.nomineeCellPhone.length < 11 ? <span style={{ color: 'red' }} >Incorrect Phone Number</span> : Number(model.nomineeCellPhone) === NaN ? <span style={{ color: 'red' }} >Numbers only</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Smartphone className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        </div>
                        <div className={classes.phoneDiv} >
                            <TextField
                                className={classes.pairElement}
                                id="phone"
                                label="Phone No. "
                                variant="outlined"
                                type="text"
                                color="primary"
                                value={model.nomineePhone}
                                onChange={(e) => model.setNomineePhone(e.target.value)}
                                helperText={"Optional"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Phone className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        </div>
                    </div>

                    <div className={classes.phoneCnicDiv} >
                        <div className={classes.cnicDiv} >
                            <TextField
                                className={classes.pairElement}
                                id="email"
                                label="Email"
                                variant="outlined"
                                type="email"
                                color="primary"
                                value={model.nomineeEmail}
                                onChange={(e) => model.setNomineeEmail(e.target.value)}
                                helperText={model.nomineeEmail === "" ? <span >Required</span> : !validateEmail(model.nomineeEmail) ? <span style={{ color: 'red' }} >Incorrect email</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Email className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        </div>
                        <div className={classes.phoneDiv} >
                            <TextField
                                className={classes.pairElement}
                                id="cnic"
                                label="CNIC"
                                variant="outlined"
                                type="text"
                                color="primary"
                                value={model.nomineeCNIC}
                                onChange={handleCnic}
                                helperText={model.nomineeCNIC === "" ? <span>Required</span> : model.nomineeCNIC.length !== 15 ? <span style={{ color: 'red' }} >Incorrect</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <CNIC className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        </div>
                    </div>
                    <div className={classes.myText}>
                        <TextField
                            id="address"
                            label="Address"
                            variant="outlined"
                            type="text"
                            color="primary"
                            value={model.nomineeAddress}
                            className={classes.myElements}
                            onChange={(e) => model.setNomineeAddress(e.target.value)}
                            helperText={model.nomineeAddress === "" ? <span>Required</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <LocationOn className={classes.iconColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>





                </Paper>

            </Grid>
        </Grid>
    </div>
)
}

export default NomineeInfo;