import { Avatar, Button, Grid, makeStyles, Paper, TextField, Typography, InputAdornment } from '@material-ui/core'
import { Email, VpnKey as Password, PermIdentity as Name, CreditCard as CNIC, Phone } from "@material-ui/icons";
import React from 'react'
import { Link } from "react-router-dom";
import IMAGE from "../../RawData/default.jpg";
import BackgroundImage from "../../RawData/Group2.png";


const useStyle = makeStyles(
    (theme) => (
        {
            root: {
                backgroundImage : `url(${BackgroundImage})`,
                backgroundRepeat : 'no-repeat',
                backgroundSize : '100% 100%',
                backgroundPosition : '0% 0%',
            },
            myPaper: {
                padding: '0%',
                paddingTop : '2%',
                paddingLeft : '4%',
                paddingRight : '4%',
                paddingBottom : '2%',
                marginTop : '4%',
                marginBottom : '8.3%',
                width: '25%',
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
                    marginTop : '10%',
                    textAlign: 'center'

                },
                margin: '0 auto',
            },
            myText: {
                marginTop: '5%'
            },
            myButton : {
                marginTop: '10%',
                textAlign : 'center'
            },
            myElements : {
                 width : '100%',
            },
            phoneCnicDiv : {
                display : 'flex',
                width : '100%',
                marginTop : '5%',
            },
            cnicDiv : {
                width : '45%'
            },
            phoneDiv : {
                width : '45%',
                marginLeft : 'auto',
                marginRight : "0"
            },
            loginLink : {
                textDecoration : 'none',
                fontWeight : 'bold',
                color : theme.palette.primary.main
            },
            imageDiv : {
                width : '100%'
            },
            avatar : {
                margin : '0 auto',
                width : theme.spacing(13),
                height : theme.spacing(13)
            },
            iconColor : {
                color : theme.palette.primary.light
            }
        }
    )
)

export default function SignUp() {

    const classes = useStyle();

    return (
        <div className={classes.root}>  <Grid container>
            <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >

                <Paper elevation={3} className={classes.myPaper}>
                    <form noValidate>

                        <div className={classes.imageDiv}>
                            <Avatar alt="shakeel haider" src={IMAGE} variant="circle" className={classes.avatar} />
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
                            className={classes.myElements}
                            >
                                Sign Up
                            </Button>
                        </div>

                        <div style={{ marginTop : '2%'}} >
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