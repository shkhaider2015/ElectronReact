import {
    Avatar, Button, Grid, makeStyles, Paper, TextField, Typography,
    InputAdornment, Fab, LinearProgress, Select, InputLabel, FormControl, MenuItem
} from '@material-ui/core'
import {
    Email, VpnKey as Password, PermIdentity as Name,
    CreditCard as CNIC, Phone, AddPhotoAlternate as AddPhotoAlternateIcon, Smartphone, LocationOn
} from "@material-ui/icons";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../../RawData/jj2.png";
import { UserModel } from "../../models/userModels";
import { firebase, storage, auth, db } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";


const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                // backgroundImage: `url(${BackgroundImage})`,
                // backgroundRepeat: 'repeat-y',
                // backgroundSize: '100% 100%',
                // backgroundPosition: '0% 0%',
                marginTop: '6.55%',
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
                marginLeft: '0'
            },
            phoneDiv: {
                width: '45%',
                marginLeft: 'auto',
                marginRight: "0"
            },
            pairElement: {
                width: '100%'
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
            iconColor: {
                color: theme.palette.primary.main
            },
            input: {
                display: 'none',

            }
        }
    )
)
var ImageFile = null;

const PlotInformation = () => {

    const classes = useStyle();
    const navigate = useNavigate()

    const currentUser = React.useContext(AuthContext)
    const [selectedImage, setSelectedImage] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)

    // React.useEffect(
    //     () => {
    //         if(currentUser.currentUser)
    //         {
    //             navigate("/")
    //         }
    //     },
    //     [currentUser, navigate]
    // )

    const createProfile = () => {
        db
            .collection("Users")
            .add(UserModel)
            .then(function (docRef) {
                console.log("Docement written with ID : ", docRef)
                setIsLoading(false)
            })
            .catch(function (error) {
                console.error("erro adding document : ", error)
                setIsLoading(false)
            })


    }

    const updateProfile = () => {
        auth.currentUser.updateProfile(
            {
                displayName: UserModel.name,
                photoURL: UserModel.imageUri,
                phoneNumber: UserModel.phoneNumber,

            }
        )
            .then(() => {
                console.log("Profile Updated")
                createProfile()
            })
            .catch((err) => {
                console.log("ERROR : ", err)
                setIsLoading(false)
            })
    }


    const uploadImage = () => {

        var storageRef = storage.ref().child(UserModel.name.replace(/\s/g, ""));
        var uploadTask = storageRef.child('profile.jpg').put(ImageFile);



        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                default:
                    console.log("Default case")
                    break;
            }
        }, (error) => {
            // Handle unsuccessful uploads
            console.log(error)
            setIsLoading(false)
        }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                UserModel.imageUri = downloadURL;
                updateProfile()
            });
        });


    }
    const createUser = (pass) => {
        auth.createUserWithEmailAndPassword(UserModel.email, pass)
            .then((user) => {
                uploadImage()
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error("Error creating user : ERROR_CODE -> ", errorCode)
                console.error("Error creating user : ERROR_MESSAGE -> ", errorMessage)
                setIsLoading(false)
                // ..
            });
    }
    const handleSelectImage = (e) => {
        let file = e.target.files[0]
        ImageFile = file;
        setSelectedImage(URL.createObjectURL(file))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)
        UserModel.name = e.target.name.value
        UserModel.email = e.target.email.value;
        UserModel.phoneNumber = e.target.phone.value;
        UserModel.cnic = e.target.cnic.value

        // createUser(e.target.password.value)


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
                    {isLoading ? <LinearProgress className={classes.linearProgress} /> : ""}
                    <Paper elevation={0} className={classes.myPaper}>


                        <div className={classes.phoneCnicDiv} >

                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.pairElement}
                                    id="totalAmount"
                                    label="Total Amount"
                                    variant="outlined"
                                    type="number"
                                    color="primary"
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
                                {/* <TextField
                                    className={classes.pairElement}
                                    id="procedure"
                                    label="Payment Procedure"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Name className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                /> */}
                                <FormControl variant="outlined" className={classes.pairElement}>
                                    <InputLabel htmlFor="outlined-age-native-simple">Procedure</InputLabel>
                                    <Select
                                        native
                                        value=""
                                        label="Procedure"
                                        inputProps={{
                                            name: 'procedure',
                                            id: 'outlined-age-native-simple',
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>Full Payment</option>
                                        <option value={20}>Half Payment</option>
                                        <option value={30}>Short Payment</option>
                                        <option value={30}>Installment</option>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                                    className={classes.pairElement}
                                    id="installment"
                                    label="Installment"
                                    variant="outlined"
                                    type="number"
                                    color="primary"
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
                                    id="duration"
                                    label="Installment Duration"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
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
                                    id="firstInstallment"
                                    label="First Installment"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
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
                                    id="balance"
                                    label="Balance"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
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
                                    id="Site Plan"
                                    label="Site Plan"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
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
                                    id="purpose"
                                    label="Purpose"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
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



                    </Paper>

                </Grid>
            </Grid>
        </div>
    )
}

export default PlotInformation;