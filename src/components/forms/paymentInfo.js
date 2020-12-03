import { Avatar, Button, Grid, makeStyles, Paper, TextField, Typography, InputAdornment, Fab, LinearProgress } from '@material-ui/core'
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
                marginTop : '6.55%',
            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                padding: '0%',
                paddingTop: '2%',
                paddingLeft: '4%',
                paddingRight: '4%',
                paddingBottom : '3%',
                width: '50%',
                background: 'rgba(255, 255, 255, 0.98)',
                [theme.breakpoints.down('md')]: {
                    width: '40%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('sm')]: {
                    width: '50%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('xs')]: {
                    width: '80%',
                    marginTop: '10%',
                    textAlign: 'center'

                },
                margin: '0 auto',
            },
            myText: {
                marginTop: '5%'
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
                marginTop: '5%',
            },
            cnicDiv: {
                width: '38%',
                marginLeft : '0'
            },
            phoneDiv: {
                width: '38%',
                marginLeft: 'auto',
                marginRight: "0"
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
        uploadTask.on('state_changed',  (snapshot) => {
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
        },(error) => {
            // Handle unsuccessful uploads
            console.log(error)
            setIsLoading(false)
        },() => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) => {
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
                            <TextField
                                id="installment"
                                label="Total Installment"
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
                        </div>
                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                                    id="installmentDuration"
                                    label="Total Duration"
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
                                    id="category"
                                    label="Category"
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
                                    id="nature"
                                    label="Nature"
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
                                    id="type"
                                    label="Type"
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