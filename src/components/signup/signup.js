import { Avatar, Button, Grid, makeStyles, Paper, TextField, Typography, InputAdornment, Fab, LinearProgress } from '@material-ui/core'
import {
    Email, VpnKey as Password, PermIdentity as Name,
    CreditCard as CNIC, Phone, AddPhotoAlternate as AddPhotoAlternateIcon
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
                backgroundImage: `url(${BackgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100% 100%',
                backgroundPosition: '0% 0%',
                height : '100vh',
                overflow : 'hidden'
            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                padding: '0%',
                paddingTop: '2%',
                paddingLeft: '4%',
                paddingRight: '4%',
                marginTop: '4%',
                marginBottom: '8.3%',
                width: '30%',
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
                width: '45%'
            },
            phoneDiv: {
                width: '45%',
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
            avatar: {
                margin: '0 auto',
                width: theme.spacing(13),
                height: theme.spacing(13)
            },
            myImage : {
                width : theme.spacing(13),
                height : theme.spacing(13)
            },
            iconColor: {
                color: theme.palette.primary.light
            },
            input: {
                display: 'none',

            }
        }
    )
)
var ImageFile = null;

const SignUp = () => {

    const classes = useStyle();
    const navigate = useNavigate()

    const currentUser = React.useContext(AuthContext)
    const [selectedImage, setSelectedImage] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(
        () => {
            if(currentUser.currentUser)
            {
                navigate("/")
            }
        },
        [currentUser, navigate]
    )

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

        createUser(e.target.password.value)


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
                <Paper elevation={3} className={classes.myPaper}>

                    <form onSubmit={handleSubmit} noValidate>

                        <div className={classes.imageDiv}>
                            {/* <Avatar alt="shakeel haider" src={selectedImage} variant="circle" className={classes.avatar} > */}
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
                                        {!selectedImage ? <AddPhotoAlternateIcon style={{ width : '50%', height : '50%' }} color="primary" /> :  <Avatar alt="shakeel haider" src={selectedImage} variant="circle" className={classes.myImage}  /> }
                                        
                                        
                                    </Fab>
                                </label>
                            {/* </Avatar> */}


                            {/* <img src={selectedImage} alt="" /> */}
                        </div>

                        <div className={classes.myText} >
                            <TextField
                                id="name"
                                label="Full Name"
                                variant="outlined"
                                type="text"
                                color="primary"
                                className={classes.myElements}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Name className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className={classes.phoneCnicDiv} >
                            <div className={classes.cnicDiv} >
                                <TextField
                                    id="cnic"
                                    label="CNIC"
                                    variant="outlined"
                                    type="text"
                                    color="primary"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <CNIC className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </div>
                            <div className={classes.phoneDiv} >
                                <TextField
                                    id="phone"
                                    label="Phone No. "
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
                        <div className={classes.myText}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                type="email"
                                color="primary"
                                className={classes.myElements}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Email className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <div className={classes.myText}>
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                color="primary"
                                className={classes.myElements}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Password className={classes.iconColor} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <div className={classes.myButton}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={isLoading}
                                className={classes.myElements}
                            >
                                Sign Up
                            </Button>
                        </div>

                        <div style={{ marginTop: '2%' }} >
                            <Typography variant="caption" >
                                Already have an account ?  <Link to="/login" className={classes.loginLink} >Login</Link> here
                            </Typography>
                        </div>

                    </form>
                </Paper>

            </Grid>
        </Grid>
        </div>
    )
}

export default SignUp;