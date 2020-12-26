import { Avatar, Button, Grid, makeStyles, Paper, TextField, Typography, InputAdornment, LinearProgress } from '@material-ui/core'
import { EmailOutlined as Email, VpnKeyOutlined as VpnKey } from "@material-ui/icons";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import ICON from "../../RawData/mainassociates_icon.png"
import BackgroundImage from "../../RawData/jj2.png";
import { auth, db } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";

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
                marginTop: '7%',
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
    const currentUser = React.useContext(AuthContext)

    const classes = useStyle();
    const navigate = useNavigate()

    React.useEffect(
        () => {
            if (currentUser.currentUser) {
                if (isAccepted) {
                    navigate("/")
                }
            }
        },
        [isAccepted, navigate]
    )

    React.useEffect(
        () =>
        {
            if(isDeleted)
            {
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
        }).catch(e => console.error(e))
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
                setIsLoading(false)
            })
            .catch((err) => {
                console.error("ERROR CODE : ", err.code)
                console.error("ERROR CODE : ", err.message)
                setIsLoading(false)
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
                    {console.log("isAcce[pted", isAccepted)}
                    {isLoading ? <LinearProgress className={classes.linearProgress} /> : ""}
                    <Paper elevation={2} className={classes.myPaper}>
                        
                        {
                            currentUser.currentUser
                                ? !isAccepted ? <span style={{ color: 'green' }} > Wait for admin approval </span>
                                    : isDeleted ? <span style={{ color: 'red' }} >Sorry this account has been deleted by admin </span>
                                        : null
                                : null
                        }
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

        </div>
    )
}