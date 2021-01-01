import { Avatar, Button, Grid, makeStyles, Paper, TextField,
     Typography, InputAdornment, Fab, LinearProgress } from '@material-ui/core'
import {
    EmailOutlined as Email, VpnKeyOutlined as Password, PermIdentityOutlined as Name,
    CreditCardOutlined as CNIC, PhoneOutlined as Phone, PhotoCameraOutlined
} from "@material-ui/icons";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../../RawData/jj2.png";
import { firebase, storage, auth, db } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";
import { Offline } from "react-detect-offline";
import { SpinnerLoading } from "../loading/loadingSpinner";


const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                backgroundImage: `url(${BackgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100% 100%',
                backgroundPosition: '0% 0%',
                height: '100vh',
                overflow: 'hidden'
            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                padding: '0%',
                paddingTop: '0%',
                paddingLeft: '4%',
                paddingRight: '4%',
                marginTop: '4%',
                marginBottom: '8.3%',
                width: '50%',
                background: 'rgba(255, 255, 255, 0.98)',
                [theme.breakpoints.down('md')]: {
                    width: '60%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('sm')]: {
                    width: '70%',
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
                marginTop: '3%'
            },
            myButton: {
                marginTop: '5%',
                textAlign: 'center'
            },
            myElements: {
                width: '100%',
            },
            phoneCnicDiv: {
                display: 'flex',
                width: '100%',
                marginTop: '3%',
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
            myImage: {
                width: theme.spacing(13),
                height: theme.spacing(13)
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


const SignUp = () => {

    const classes = useStyle();
    const navigate = useNavigate()

    const currentUser = React.useContext(AuthContext)
    const [selectedImage, setSelectedImage] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [imageFile, setImageFile] = React.useState(null)

    const [name, setName] = React.useState("")
    const [cnic, setCNIC] = React.useState("")
    const [cellPhone, setCellPhone] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [errorMsg, setErrorMsg] = React.useState('')




    React.useEffect(
        () => {
            if (currentUser.currentUser) {
                // navigate("/login")
            }
        },
        [currentUser, navigate]
    )

    const validateEmail = () => {
        let val = false;
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            console.log("Email Validation : Correct")
            val = true
        }
        else {
            console.log("Email Validation : Incorrect")
        }

        return val;
    }
    const handleCnic = (e) => {
        var a = e.target.value
        // a = a.replace(/(\d{5})(\d{7})(\d{1})/, "$1-$2-$3")
        if (a.length > 15) {
            a = a.slice(0, -1)
        }
        if (a.length === 6 && a.charAt(5) !== "-" || a.length === 14 && a.charAt(13) !== "-") {
            a = a.slice(0, -1) + "-" + a.slice(-1)
        }

        // e.target.value = a
        setCNIC(a)
    }

    const checkInfo = () => {
        let val = false;

        if (!imageFile || !name || !cnic || !cellPhone || !email || !password || password.length < 6 || !validateEmail()) {
            console.log("Not Correct")
            val = false;
            setIsLoading(false)
        }
        else {
            console.log("Correct")
            setIsLoading(true)
            val = true
        }

        return val;
    }

    const createProfile = (image) => {
        let dd = Date.now()
        const userModel = {
            personal: {
                id : auth.currentUser.uid,
                name,
                email,
                cnic,
                cellPhone,
                imageURI : image,
                adminRight: false,
                isAccepted: false,
                isDeleted: false,
                createdAt: dd,
                acceptedAt: null
            },


        }
        db
            .collection("users")
            .doc(auth.currentUser.uid)
            .set(userModel, { merge: true })
            .then((docRef) => {
                console.log("Docement written with ID : ", docRef)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error("erro adding document : ", error)
                setIsLoading(false)
            })


    }

    const updateProfile = (image) => {
       

            setTimeout(
                () => {
                    auth.currentUser.updateProfile(
                        {
                            displayName: name,
                            photoURL: image,
                            phoneNumber: cellPhone,
            
                        }
                    )
                        .then(() => {
                            console.log("Profile Updated")
                            createProfile(image)
                        })
                        .catch((err) => {
                            console.log("ERROR : ", err)
                            setIsLoading(false)
                        })
                },
                2000
            )
    }


    const uploadImage = () => {

        var storageRef = storage.ref().child(name.replace(/\s/g, ""));
        var uploadTask = storageRef.child('profile.jpg').put(imageFile);



        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
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
            console.log("Upload Failure :", error)
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    console.log("User doesn't have permission to access the object")
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    console.log("User canceled the upload")
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    console.log("Unknown error occurred, inspect error.serverResponse")
                    break;
                default:
                    console.log("Default Case at signup")
            }
            setIsLoading(false)
        }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                // setImageURI(downloadURL)
                updateProfile(downloadURL)
            });
        });


    }
    const createUser = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log("User created")
                
                    uploadImage()
            })
            .catch((error) => {
                var errorCode = error.code;
                setErrorMsg(error.message)
                console.error("Error creating user : ERROR_CODE -> ", errorCode)
                setIsLoading(false)
                // ..
            });
    }
    const handleSelectImage = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImageFile(file)
            setSelectedImage(reader.result)
        }

        reader.readAsDataURL(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        if (checkInfo()) {
            console.log("isCorrect : true")
            createUser()
        }
        else {
            console.log("isCorrect : false")
            setIsLoading(false)
        }





    }


    if (currentUser.currentUser && !isLoading) {
        console.log("jjkjjkjkk", auth.currentUser)
        return (
            <div className={classes.root} >
                

                <Paper className={classes.myPaper} >
                    <div style={{ display : 'flex', flexDirection : 'column' }} >
                    <span style={{ margin : 'auto', fontSize : 20, fontWeight : 'bold', color : 'green' }} >
                        Thanks for Registration <br /> Wait for admin approval</span>
                <Button color="primary" variant="contained" onClick={() => navigate('/login')} style={{ width : '90%', marginTop : '3%' }} >Go back </Button>
                <Button color="primary" variant="text" onClick={() => auth.signOut()} style={{ width : '90%', marginTop : '1%', marginBottom : '1%' }} >
                    Log out</Button>

                    </div>
                </Paper>
            </div>
        )
    } else {


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

                        {isLoading ? <div style={{ display : 'grid', placeItems : 'center' }} > <SpinnerLoading /> </div> : ""}
                        <Paper elevation={3} className={classes.myPaper}>
                            <span style={{ color: 'red' }} > {errorMsg} </span>
                            <form onSubmit={handleSubmit} noValidate style={{ paddingTop: '5%' }} >

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
                                            {!selectedImage ? <PhotoCameraOutlined style={{ width: '50%', height: '50%' }} color="primary" /> : <Avatar alt="shakeel haider" src={selectedImage} variant="circle" className={classes.myImage} />}


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
                                        value={name}
                                        className={classes.myElements}
                                        onChange={(e) => setName(e.target.value)}
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
                                            className={classes.myElements}
                                            id="cnic"
                                            label="CNIC"
                                            variant="outlined"
                                            type="text"
                                            color="primary"
                                            value={cnic}
                                            onChange={handleCnic}
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
                                            className={classes.myElements}
                                            id="phone"
                                            label="Phone No. "
                                            variant="outlined"
                                            type="text"
                                            color="primary"
                                            value={cellPhone}
                                            onChange={(e) => setCellPhone(e.target.value)}
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
                                        value={email}
                                        className={classes.myElements}
                                        onChange={(e) => setEmail(e.target.value)}
                                        helperText={validateEmail() ? "" : <span>Enter valid email</span>}
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
                                        value={password}
                                        className={classes.myElements}
                                        onChange={(e) => setPassword(e.target.value)}
                                        helperText={password === "" ? <span>Password required</span> : password.length < 6 ? <span style={{ color: 'red' }} >At least 6 charechters or numbers </span> : ""}
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
            
            
                <div style={{ 
        position : 'fixed',
        left : 0,
        bottom : 0,
        width : '100%',
        backgroundColor : 'red',
        textAlign : 'center',
        color : 'white'
       }} >
      <Offline >Check Your Internet Connection</Offline>
      </div>
                        
            </div>
        )

    }
}

export default SignUp;