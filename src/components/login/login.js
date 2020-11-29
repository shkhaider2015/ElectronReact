import { Avatar, Button, Grid, makeStyles, Paper, TextField, Typography, InputAdornment, LinearProgress } from '@material-ui/core'
import { Email, VpnKey } from "@material-ui/icons";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import ICON from "../../RawData/mainassociates_icon.png"
import BackgroundImage from "../../RawData/Group2.png";
import { auth } from "../../config/firebase";
import { AuthContext } from "../../context/authContext";

const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                backgroundImage: `url(${BackgroundImage})`,
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100% 100%',
                backgroundPosition: '0% 0%',

            },
            linearProgress: {
                backgroundColor: "#ffffff",
            },
            myPaper: {
                paddingLeft: '4%',
                paddingRight: '4%',
                paddingTop: '2%',
                paddingBottom: '2%',
                width: '30%',
                marginBottom: '14%',
                [theme.breakpoints.down('md')]: {
                    width: '40%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('sm')]: {
                    width: '50%',
                    textAlign: 'center'

                },
                [theme.breakpoints.down('xs')]: {
                    width: '50%',
                    textAlign: 'center'

                },
                marginTop: '8%',
                margin: '0 auto',
            },
            myText: {
                marginTop: '5%'
            },
            myButton: {
                marginTop: '15%',
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
            }
        }
    )
)

export default function Login() {

    const [isLoading, setIsLoading] = React.useState(false)
    const currentUser = React.useContext(AuthContext)

    const classes = useStyle();
    const navigate = useNavigate()

    // const handleSubmit = React.useCallback(
    //     e => {
    //         e.preventDefault()
    //         console.log(e.target.elements)
    //         const { email, password } = e.target.elements
    //         console.log("Email : ", email.value)
    //         console.log("Password : ", password.value)

    //     },
    //     []
    // )
    React.useEffect(
        () => 
        {
            console.log("currentUser : ", currentUser)
            if(!currentUser.isAnonymous)
            {
                navigate("/")
            }
        },
        [currentUser]
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.elements)
        const { email, password } = e.target.elements
        setIsLoading(true)

        auth.signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
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
                    {isLoading ? <LinearProgress className={classes.linearProgress} /> : "" }
                    <Paper elevation={2} className={classes.myPaper}>
                        <form noValidate onSubmit={handleSubmit}>


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