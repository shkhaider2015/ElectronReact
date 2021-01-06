import { Avatar, Button, Grid, makeStyles, Paper, TextField, Typography, InputAdornment, LinearProgress } from '@material-ui/core'
import { EmailOutlined as Email, VpnKeyOutlined as VpnKey } from "@material-ui/icons";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import ICON from "../../RawData/mainassociates_icon.png"
import BackgroundImage from "../../RawData/jj2.png";
import { auth, db } from "../../config/firebase";
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
                height: '100vh'

            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                paddingLeft: '4%',
                paddingRight: '4%',
                paddingTop: '2%',
                paddingBottom: '2%',
                width: '50%',
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
                    textAlign: 'center'

                },
                marginTop: '8%',
                margin: '0 auto',
            },
            myText: {
                marginTop: '3%'
            },
            myButton: {
                marginTop: '4%',
                textAlign: 'center'
            },
            myElements: {
                width: '100%',
            },
            signupLink: {
                textDecoration: 'none',
                fontWeight: 'bold',
                color: theme.palette.primary.main
            },
            avatarDiv: {
                width: '100%'
            },
            avatar: {
                margin: '0 auto',
                width: theme.spacing(22),
                height: theme.spacing(10)
            },
            iconColor: {
                color: theme.palette.primary.light
            },
            footer: {
            }
        }
    )
)

export default function Login() {

    const [isLoading, setIsLoading] = React.useState(false)
    const [isAccepted, setIsAccepted] = React.useState(false)
    const [isDeleted, setIsDeleted] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState("")
    const currentUser = React.useContext(AuthContext)

    const classes = useStyle();
    const navigate = useNavigate()

    React.useEffect(
        () => {
            if (currentUser.currentUser) {
                if (isAccepted && !isDeleted) {
                    navigate("/")
                }
            }
        },
        [isAccepted, navigate]
    )

    React.useEffect(
        () => {
            if (isDeleted) {
                setTimeout(() => {
                    auth.signOut()
                }, 3000)
            }

        },
        [isDeleted]
    )

    const getUserdata = (user) => {
        db.collection("users").doc(auth.currentUser.uid).get().then((doc) => {
            if (doc.exists) {
                var tr = doc.data()['personal']['isAccepted']
                var trr = doc.data()['personal']['isDeleted']
                setIsAccepted(tr)
                setIsDeleted(trr)

            } else {
                console.log("doc not exists")
            }
            setIsLoading(false)
        }).catch(e => {
            console.error(e)
            setIsLoading(false)
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.elements)
        const { email, password } = e.target.elements
        setIsLoading(true)

        auth.signInWithEmailAndPassword(email.value, password.value)
            .then((user) => {
                console.log("Login Succesfully")
                getUserdata(user)
            })
            .catch((err) => {
                console.error("ERROR CODE : ", err.code)
                console.error("ERROR CODE : ", err.message)
                setIsLoading(false)
                setErrorMessage(err.message)
            })

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
                    {isLoading ? <div style={{ position : 'absolute', zIndex : 1, display: 'grid', placeItems: 'center', width : '100%', height : '100%' }} > <SpinnerLoading /> </div> : ""}
                    <Paper elevation={2} className={classes.myPaper}>


                        {/* {
                            currentUser.currentUser
                                ? !isAccepted ? <span style={{ color: 'green' }} > Wait for admin approval </span>
                                    : isDeleted ? <span style={{ color: 'red' }} >Sorry this account has been deleted by admin </span>
                                        : null
                                : null
                        } */}
                        <form noValidate onSubmit={e => handleSubmit(e)}>


                            <div className={classes.avatarDiv}>
                                <Avatar alt="icon" src={ICON} variant="square" className={classes.avatar} />
                            </div>

                            <div className={classes.myText}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    color="primary"
                                    name="email"
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
                                    name="password"
                                    className={classes.myElements}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <VpnKey className={classes.iconColor} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div style={{ height: '15px' }} >
                                {
                                    errorMessage
                                        ? <span style={{ color : 'red', fontSize : '12px' }} > {errorMessage} </span>
                                        : null
                                }

                                {
                                    currentUser.currentUser
                                        ? (isDeleted
                                            ? <span style={{ color: 'red', fontSize : '12px' }} >Sorry this account has been deleted by admin </span>
                                            : !isAccepted
                                                ? <span style={{ color: 'green', fontSize : '12px' }} > Wait for admin approval </span>
                                                : null)
                                        : null
                                }

                            </div>

                            <div className={classes.myButton}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.myElements}
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    Login
                            </Button>
                            </div>



                            <div style={{ marginTop: '2%' }} >
                                <Typography variant="caption" >
                                    Don't have an account ? <Link to="/signup" className={classes.signupLink} >Sign up</Link>  here
                            </Typography>
                            </div>

                        </form>
                    </Paper>

                </Grid>
            </Grid>

            <div style={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                backgroundColor: 'red',
                textAlign: 'center',
                color: 'white'
            }} >
                <Offline >Check Your Internet Connection</Offline>
            </div>

        </div>
    )
}