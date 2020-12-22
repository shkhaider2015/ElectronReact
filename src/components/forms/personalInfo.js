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
                // backgroundImage: `url(${BackgroundImage})`,
                // backgroundRepeat: 'repeat-y',
                // backgroundSize: '100% 100%',
                // backgroundPosition: '0% 0%',
                marginTop: '0%',
            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                padding: '0%',
                paddingTop: '2%',
                paddingLeft: '4%',
                paddingRight: '4%',
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
                color: theme.palette.primary.main
            },
            input: {
                display: 'none',

            }
        }
    )
)

const PersonalInformation = ({ model }) => {

    const classes = useStyle();


    const handleSelectImage = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        try
        {
            if(file)
            {
                reader.onloadend = () => {
                    model.setImageFile(file)
                    model.setSelectedImage(reader.result)
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
    model.setCNIC(a)
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
                                    model.selectedImage
                                    ? <Avatar alt="name" src={model.selectedImage} variant="circle" className={classes.myImage} />
                                    : model.imageURI !== "" ? <Avatar alt="shakeel haider" src={model.imageURI} variant="circle" className={classes.myImage} />
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
                                value={model.name}
                                onChange={(e) => model.setName(e.target.value)}
                                helperText={model.name === "" ? <span style={{ color: 'red' }} >Required</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
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
                                value={model.fatherName}
                                onChange={(e) => model.setFatherName(e.target.value)}
                                helperText={model.fatherName === "" ? <span style={{ color: 'red' }} >Required</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
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
                                value={model.cellPhone}
                                onChange={(e) => model.setCellPhone(e.target.value)}
                                helperText={model.cellPhone === "" ? <span style={{}} >e.g: 03465776567</span> : model.cellPhone.length < 11 ? <span style={{ color: 'red' }} >Incorrect Phone Number</span> : Number(model.cellPhone) === NaN ? <span style={{ color: 'red' }} >Numbers only</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
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
                                value={model.phone}
                                onChange={(e) => model.setPhone(e.target.value)}
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
                                value={model.email}
                                onChange={(e) => model.setEmail(e.target.value)}
                                helperText={model.email === "" ? <span style={{ color: 'red' }} >Required</span> : !validateEmail(model.email) ? <span style={{ color: 'red' }} >Incorrect email</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
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
                                value={model.cNIC}
                                onChange={handleCnic}
                                helperText={model.cNIC === "" ? <span style={{ color: 'red' }} >Required</span> : model.cNIC.length !== 15 ? <span style={{ color: 'red' }} >Incorrect</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
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
                            value={model.address}
                            className={classes.myElements}
                            onChange={(e) => model.setAddress(e.target.value)}
                            helperText={model.address === "" ? <span style={{ color: 'red' }} >Required</span> : <span style={{ color: 'lightgreen' }} >Correct</span>}
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

export default PersonalInformation;